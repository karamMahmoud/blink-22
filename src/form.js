import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const validationSchema = yup.object({
    vehicle: yup
        .string('Select vehicle')
        .ensure()
        .required('Select is required'),
    fuel: yup
        .string('Select fuel'),
    volume: yup
        .number('Select volume')
        .required('volume is required')
        .test(
            'Is positive?',
            'he number must be greater than 0! and be Integer',
            (value) => value > 0 && (value % 1 === 0)
        ),
    date: yup
        .string('select date')
        .required('date is required'),
    odometer: yup
        .number('Select odometer')
        .required('odometer is required')
        .test(
            'Is positive?',
            'The number must be greater than 0!',
            (value) => value > 0
        ),
});

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

const useStyles = makeStyles((theme) =>
    createStyles({
        w100: {
            width: '100%'
        },
        label: {
            marginBottom: -20
        },
        mb80: {
            marginBottom: 80
        },
        mt15: {
            marginTop: 15
        },
        fieldDanger: {
            color: 'red',
            borderColor: 'red'
        }
    }),
);

export default function Form(props) {
    const classes = useStyles();
    const handleClose = () => {
        props.closeDialog();
    }
    const formik = useFormik({
        initialValues: {
            vehicle: props.row.vehicle,
            date: props.row.date,
            odometer: props.row.odometer,
            volume: props.row.volume,
            fuel: props.row.fuel,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.updateRecord({...values, id: props.row.id, status: props.row.status})
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} className={classes.mb80 + ' ' + classes.mt15}>
                    <Grid item xs={12}>
                        <FormControl className={classes.w100}>
                            <label className={classes.label}>Vehicle</label>
                            <Select
                                labelId="demo-customized-select-label1"
                                id="demo-customized-select1"
                                name="vehicle"
                                value={formik.values.vehicle}
                                onChange={formik.handleChange}
                                error={formik.touched.vehicle && Boolean(formik.errors.vehicle)}
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled={true}>
                                    Select vehicle
                                </MenuItem>
                                <MenuItem value={'toyota'}>Toyota</MenuItem>
                                <MenuItem value={'kia'}>KIA</MenuItem>
                                <MenuItem value={'bmw'}>BMW</MenuItem>
                                <MenuItem value={'audi'}>Audi</MenuItem>
                                <MenuItem value={'chevrolet'}>Chevrolet</MenuItem>
                                <MenuItem value={'mercedes'}>Mercedes</MenuItem>
                                <MenuItem value={'skoda'}>Skoda</MenuItem>
                                <MenuItem value={'honda'}>Honda</MenuItem>
                                <MenuItem value={'mitsubishi'}>Mitsubishi</MenuItem>
                                <MenuItem value={'bosch'}>Bosch</MenuItem>
                                <MenuItem value={'bentley'}>Bentley</MenuItem>
                                <MenuItem value={'mazda'}>Mazda</MenuItem>
                            </Select>
                            <div style={{
                                color: "red",
                            }}>{formik.touched.vehicle && formik.errors.vehicle}</div>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl className={classes.w100}>
                            <label className={classes.label}>Fuel <small>(optional)</small></label>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                name="fuel"
                                value={formik.values.fuel}
                                onChange={formik.handleChange}
                                error={formik.touched.fuel && Boolean(formik.errors.fuel)}
                                input={<BootstrapInput/>}
                            >
                                <MenuItem value="" disabled>
                                    Select Fuel
                                </MenuItem>
                                <MenuItem value={'liquid'}>Liquid fuels</MenuItem>
                                <MenuItem value={'gaseous'}>Gaseous fuels</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" height={'100%'} alignItems='center'>
                            <TextField
                                id="date"
                                fullWidth
                                type="date"
                                name="date"
                                label="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={formik.touched.date && Boolean(formik.errors.date)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <div style={{
                            color: "red",
                        }}>{formik.touched.date && formik.errors.date}</div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="volume"
                            name="volume"
                            label="volume"
                            type="number"
                            value={formik.values.volume}
                            onChange={formik.handleChange}
                            error={formik.touched.volume && Boolean(formik.errors.volume)}
                        />
                        <div style={{
                            color: "red",
                        }}>{formik.touched.volume && formik.errors.volume}</div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="odometer"
                            name="odometer"
                            label="odometer"
                            type="number"
                            value={formik.values.odometer}
                            onChange={formik.handleChange}
                            error={formik.touched.odometer && Boolean(formik.errors.odometer)}
                        />
                        <div style={{
                            color: "red",
                        }}>{formik.touched.odometer && formik.errors.odometer}</div>
                    </Grid>
                </Grid>
                <Divider mt={2}/>
                <Box display="flex" mt={2} justifyContent="flex-end">
                    <Box mr={2}>
                        <Button color="default" variant="contained" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Box>
                    <Button color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    );
};

