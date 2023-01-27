import React from 'react';
// material-ui
import {
    Modal,
    Button,
    Grid,
    Fade,
    Box,
    Backdrop,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Select,
    InputLabel
} from '@mui/material';

// project import
import OrdersTable from '../dashboard/OrdersTable';
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const LocationDefault = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#FFFFFF',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const modalStyles = {
        inputFields: {
            margin: 5,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item />
                    <Button onClick={handleOpen}>Tambah +</Button>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrdersTable fromLocation />
                </MainCard>
            </Grid>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"

                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box style={style} >
                        <Typography mt={2} ml={2} variant="h4" component="h4">
                            Tambah Lokasi
                        </Typography>;

                        <Box sx={modalStyles.inputFields}>
                            <TextField
                                placeholder="Nama Lokasi"
                                name="Lokasi"
                                label="Nama Lokasi"
                                required
                            />
                         <TextField
                                placeholder="Nama Werehouse"
                                name="Gudamg"
                                label="Nama Gudang"
                                required
                            />
                            <Box mt={2} />
                            <Button variant="contained" color="success">
                                Simpan
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Grid>
    );
};

export default LocationDefault;
