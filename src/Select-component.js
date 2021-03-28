import React from 'react';
import {createStyles, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";

const BootstrapInput = withStyles((theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

export default function SelectComponent(props) {
    const [sort, setSort] = React.useState('none');
    const handleChange = (e) => {
        setSort(e.target.value);
        props.handleSort(e.target.value);
    }

    return (
        <Box display="flex" justifyContent="flex-end" my={2}>
            <FormControl>
                <Select
                    labelId="demo-customized-select-label1"
                    id="demo-customized-select1"
                    name="sort"
                    value={sort}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                >
                    <MenuItem value="" disabled={true}>
                        sort
                    </MenuItem>
                    <MenuItem value={'none'}>Sort</MenuItem>
                    <MenuItem value={'date'}>Date</MenuItem>
                    <MenuItem value={'status'}>Status</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

