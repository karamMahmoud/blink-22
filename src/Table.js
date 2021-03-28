import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) =>
    createStyles({
        tableWrapper: {
            margin: 'auto',
            border: '1px solid #ededed'
        },
    }),
);
export default function TableComponent(props) {
    const classes = useStyles();
    const openDialog = (row) => {
        props.openDialog(row);
    }
    const openConfirmationDialog = (row) => {
        props.openConfirmationDialog(row);
    }
    return (
        <TableContainer component={Paper} className={classes.tableWrapper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">vehicle</TableCell>
                        <TableCell align="left">fuel</TableCell>
                        <TableCell align="left">date</TableCell>
                        <TableCell align="left">volume</TableCell>
                        <TableCell align="left">odometer</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {props.records.slice(props.page * props.size, props.page * props.size + props.size).map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell align="left" component="th" scope="row">
                                        {row.vehicle}
                                        <Box
                                            color={row.status === 'Active' ? 'success.main' : row.status === 'In shop' ? 'warning.main' : 'error.main'}>
                                            <small>{row.status}</small>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">{row.fuel}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.volume}</TableCell>
                                    <TableCell align="left">{row.odometer}</TableCell>
                                    <TableCell align="center">
                                        <Button aria-label="edit" onClick={() => openDialog(row)}>
                                            <EditIcon color="primary"/>
                                        </Button>
                                        <Button aria-label="delete" onClick={() => openConfirmationDialog(row)}>
                                            <DeleteIcon color="secondary"/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
