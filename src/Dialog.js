import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Form from "./form";
import React from "react";
import Divider from '@material-ui/core/Divider';


export default function DialogComponent(props) {
    const handleClose = () => {
        props.closeDialog();
    }
    const updateRecord = (row) => {
        props.updateRecord(row);
    }
    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Fuel Entry</DialogTitle>
            <Divider/>
            <DialogContent>
                <Form closeDialog={handleClose} updateRecord={updateRecord} row={props.row}/>
            </DialogContent>
        </Dialog>)
}
