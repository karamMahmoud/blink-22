import React, {Component} from 'react';
import axios from 'axios'
import DialogComponent from './Dialog';
import ConfirmationDialogComponent from './Confirmation-dialog';
import TableComponent from './Table';
import SelectComponent from './Select-component';
import TablePaginationComponent from './Pagination';
import Box from "@material-ui/core/Box";

const api = axios.create({
    baseURL: `https://my-json-server.typicode.com/karamMahmoud/karamMahmoud-blink-data/results`
})


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            size: 10,
            page: 0,
            open: false,
            confirmationOpen: false
        }
    }

    componentDidMount() {
        this.getDate();
    }

    openDialog(rowData) {
        this.setState({open: true, row: rowData});
    }

    openConfirmationDialog(rowData) {
        this.setState({confirmationOpen: true, row: rowData});
    }

    updateRecord = row => {
        this.setState({
                data:
                    this.state.data.map(record =>
                        record.id !== row.id ? record : row
                    )
            }
        )
        this.handleClose();
    }

    deleteRecord = row => {
        this.setState({
                data:
                    this.state.data.filter(record =>
                        record.id !== row.id
                    )
            }
        )
        this.handleConfirmationClose();
    }

    handleSort = sortType => {
        let sortedDate = [];
        if (sortType === 'none') {
            sortedDate = this.state.data.sort((a, b) => a.id - b.id);
        } else if (sortType === 'date') {
            sortedDate = this.state.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortType === 'status') {
            sortedDate = this.state.data.sort((a, b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0)
            );
        }
        this.setState({date: sortedDate})
    }

    getDate = () => {
        api.get('/').then(res => {
            this.setState({data: res.data});
        })
    }

    handleClose = () => {
        this.setState({open: false})
    };

    handleConfirmationClose = () => {
        this.setState({confirmationOpen: false})
    };

    updatePage(page) {
        this.setState({page: page})
    }

    updateRowsPerPage(size) {
        this.setState({size: size});
    }

    render() {
        return (
            <Box width={'80%'} m={'auto'} mb={2}>
                <SelectComponent handleSort={this.handleSort}/>
                <DialogComponent closeDialog={this.handleClose} updateRecord={this.updateRecord.bind(this)}
                                 row={this.state.row} open={this.state.open}/>
                <ConfirmationDialogComponent closeConfirmationDialog={this.handleConfirmationClose}
                                             deleteRecord={this.deleteRecord.bind(this)}
                                             row={this.state.row} confirmationOpen={this.state.confirmationOpen}/>
                <TableComponent page={this.state.page} size={this.state.size} openDialog={this.openDialog.bind(this)}
                                openConfirmationDialog={this.openConfirmationDialog.bind(this)}
                                records={this.state.data}/>
                <TablePaginationComponent updateRowsPerPage={this.updateRowsPerPage.bind(this)}
                                          updatePage={this.updatePage.bind(this)} size={this.state.size}
                                          count={this.state.data.length}/>
            </Box>
        )
    }
}

export default App
