import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function TablePaginationComponent(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(props.size);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        props.updatePage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        props.updateRowsPerPage(event.target.value);
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={props.count}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
}
