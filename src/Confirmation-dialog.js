import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Box from "@material-ui/core/Box";

export default function ConfirmationDialogComponent(props) {
    const handleClose = () => {
        props.closeConfirmationDialog();
    }
    const deleteRecord = (row) => {
        props.deleteRecord(row);
    }
    return (
        <Dialog
            open={props.confirmationOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
            <Divider />
            <Box my={2}>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure, You want to delete this record?
                </DialogContentText>
            </DialogContent>
            </Box>
            <Divider />
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => deleteRecord(props.row)} color="secondary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}
