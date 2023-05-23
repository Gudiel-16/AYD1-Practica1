import React, { useState, useEffect } from "react";
 
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
 
// core components
import Header from "components/Headers/Header.js";
 
import componentStyles from "assets/theme/views/admin/tables.js";
 
// imports generales
import axios from "axios";
import { Apiurl } from './../../services/apirest';
import "./style.css";
 
// imports para hacer el añadir un libro
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Button } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import componentStyles_ from "assets/theme/components/dialog.js";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FilledInput from "@material-ui/core/FilledInput";
import Swal from 'sweetalert2'
 
// imports para mostrar el listado de los libros
import MaterialTable from "material-table";
 
// imports para hacer el editar un libro
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
 
// imports para hacer el eliminar un libro
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Modal} from '@material-ui/core';
 
 
const useStyles = makeStyles(componentStyles);
const useStyles_ = makeStyles(componentStyles_);
 
const columns = [
    { title: 'Título', field: 'titulo' },
    { title: 'Fecha de publicación', field: 'anio_publicacion' },
    { title: 'Edición', field: 'edicion' },
    { title: 'Número de páginas', field: 'numero_paginas' },
    { title: 'Autor', field: 'autor' },
    { title: 'Editorial', field: 'editorial' },
    { title: 'Genero literario', field: 'generoLiterario' },
    { title: 'ISBN', field: 'isbn' }
];
 
const useMoreStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    }
}));
 
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
 
 
const Libros = () => {
    const styles = useMoreStyles();
    const [data, setData] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [libroSeleccionado, setLibroSeleccionado] = useState({
        anio_publicacion: "",
        autor: "",
        edicion: "",
        editorial: "",
        generoLiterario: "",
        isbn: "",
        numero_paginas: "",
        titulo: ""
    })
 
    const handleChange = e => {
        const { name, value } = e.target;
        setLibroSeleccionado(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
 
    const classes = useStyles();
    const classes_ = useStyles_();
    const theme = useTheme();
 
    let baseUrl = Apiurl + "/items";
    const peticionGet = async () => {
        await axios.get(baseUrl)
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
 
    useEffect(() => {
        peticionGet();
    }, [])
 
    let baseUrl_ = Apiurl + "/";
    const peticionPost = async () => {
        await axios.post(baseUrl_, libroSeleccionado)
            .then(response => {
                if (response.data == "Ya existe") {
                    alertSession_("Ya existe el libro con isbn: " + libroSeleccionado.isbn);
                } else {
                    handleClose();
                    setData(data.concat(response.data));
                    alertSession("Libro insertado con exito!");
                }
            }).catch(error => {
                console.log(error);
            })
    }
 
    let baseUrlEdit_ = Apiurl + "/edit";
    const peticionPut = async () => {
        await axios.post(baseUrlEdit_ + "/" + libroSeleccionado.isbn, libroSeleccionado)
            .then(response => {
                var dataNueva = data;
                dataNueva.map(libro => {
                    if (libro.isbn === libroSeleccionado.isbn) {
                        libro.anio_publicacion = libroSeleccionado.anio_publicacion;
                        libro.autor = libroSeleccionado.autor;
                        libro.edicion = libroSeleccionado.edicion;
                        libro.editorial = libroSeleccionado.editorial;
                        libro.generoLiterario = libroSeleccionado.generoLiterario;
                        libro.numero_paginas = libroSeleccionado.numero_paginas;
                        libro.titulo = libroSeleccionado.titulo;
                    }
                });
                setData(dataNueva);
                alertSession("Libro editado correctamente!");
                handleClose_();
            }).catch(error => {
                console.log(error);
            })
    }
 
    let baseUrlDelete_ = Apiurl + "/delete";
    const peticionDelete = async () => {
        await axios.post(baseUrlDelete_ + "/" + libroSeleccionado.isbn)
            .then(response => {
                setData(data.filter(libro=>libro.isbn!==libroSeleccionado.isbn));
                alertSession("Libro eliminado con exito!");
                abrirCerrarModalEliminar();
            }).catch(error => {
                console.log(error);
            })
    }
 
    const alertSession_ = (str) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
 
        Toast.fire({
            icon: 'error',
            title: str
        })
    }
 
    const alertSession = (str) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
 
        Toast.fire({
            icon: 'success',
            title: str
        })
    }
 
    const abrirCerrarModalInsertar = () => {
        setModalInsertar(!modalInsertar);
    }
 
    const seleccionarLibro = (libro, caso) => {
        setLibroSeleccionado(libro);
        //(caso === "Editar") && handleClickOpen_()
 
        (caso === "Editar") ? handleClickOpen_()
            :
            abrirCerrarModalEliminar()
    }
 
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
 
    const handleClickOpen = () => {
        setOpen(true);
    };
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleClickOpen_ = () => {
        setOpenEdit(true);
    };
 
    const handleClose_ = () => {
        setOpenEdit(false);
    };
 
    const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar);
    }
 
    const bodyInsertar = (
        <div>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Titulo *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Titulo"
                                    name="titulo"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Fecha de publicación *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="date"
                                    name="anio_publicacion"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Edición *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Edición"
                                    name="edicion"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Número de páginas</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="number"
                                    name="numero_paginas"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Autor *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Autor"
                                    name="autor"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Editorial</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Editorial"
                                    name="editorial"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Género literario *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Género literario"
                                    name="generoLiterario"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>ISBN *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="number"
                                    name="isbn"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary" variant="contained">
                    Cancelar
            </Button>
                <Button onClick={() => peticionPost()} color="primary" variant="contained">
                    Insertar
            </Button>
            </DialogActions>
        </div>
    )
 
    const bodyEditar = (
        <div>
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Titulo *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Titulo"
                                    name="titulo"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.titulo}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Fecha de publicación *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="date"
                                    name="anio_publicacion"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.anio_publicacion}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Edición *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Edición"
                                    name="edicion"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.edicion}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Número de páginas</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="number"
                                    name="numero_paginas"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.numero_paginas}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Autor *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Autor"
                                    name="autor"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.autor}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Editorial</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Editorial"
                                    name="editorial"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.editorial}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>Género literario *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="text"
                                    placeholder="Género literario"
                                    name="generoLiterario"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.generoLiterario}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormGroup>
                            <FormLabel>ISBN *</FormLabel>
                            <FormControl
                                variant="filled"
                                component={Box}
                                width="100%"
                                marginBottom="1rem!important"
                            >
                                <Box
                                    paddingLeft="0.75rem"
                                    paddingRight="0.75rem"
                                    component={FilledInput}
                                    autoComplete="off"
                                    type="number"
                                    name="isbn"
                                    onChange={handleChange}
                                    value={libroSeleccionado && libroSeleccionado.isbn}
                                />
                            </FormControl>
                        </FormGroup>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose_} color="secondary" variant="contained">
                    Cancelar
            </Button>
                <Button onClick={() => peticionPut()} color="primary" variant="contained">
                    Editar
            </Button>
            </DialogActions>
        </div>
    )
 
    const bodyEliminar = (
        <div className={styles.modal}>
            <p>Estás seguro que deseas eliminar este libro <b>{libroSeleccionado && libroSeleccionado.titulo}</b>? </p>
            <div align="right">
                <Button color="primary" onClick={() => peticionDelete()}>Sí</Button>
                <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
            </div>
        </div>
    )
 
    return (
        <>
            <Header />
            {/* Page content */}
            <Container
                maxWidth={false}
                component={Box}
                marginTop="-11.5rem"
                classes={{ root: classes.containerRoot }}
            >
 
                <Button color="Secondary" variant="contained" className="botonAdd" onClick={() => handleClickOpen()}>
                    <Box
                        component={PostAddIcon}
                        marginRight=".75em"
                        top="2px"
                        position="relative"
                    />
                    Añadir Libro
                </Button>
                <br />
                <br />
                <br />
                <MaterialTable
                    columns={columns}
                    data={data}
                    title="Libros agregados"
                    actions={[
                        {
                            icon: EditAttributesIcon,
                            tooltip: 'Editar Libro',
                            onClick: (event, rowData) => seleccionarLibro(rowData, "Editar")
                        },
                        {
                            icon: DeleteForeverIcon,
                            tooltip: 'Eliminar Libro',
                            onClick: (event, rowData) => seleccionarLibro(rowData, "Eliminar")
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        sorting: false,
                        search: false,
                        paging: false,
                        draggable: false
                    }}
                    localization={{
                        header: {
                            actions: "Acciones"
                        }
                    }}
                />
 
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div className={classes_.dialogHeader}>
                        <Typography
                            variant="h5"
                            component="h5"
                            className={classes_.dialogTitle}
                        >
                            Agregar nuevo libro
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <Clear />
                        </IconButton>
                    </div>
                    {bodyInsertar}
                </Dialog>
 
                <Dialog
                    open={openEdit}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose_}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div className={classes_.dialogHeader}>
                        <Typography
                            variant="h5"
                            component="h5"
                            className={classes_.dialogTitle}
                        >
                            Editar libro
                        </Typography>
                        <IconButton onClick={handleClose_}>
                            <Clear />
                        </IconButton>
                    </div>
                    {bodyEditar}
                </Dialog>
 
                <Modal
                    open={modalEliminar}
                    onClose={abrirCerrarModalEliminar}>
                    {bodyEliminar}
                </Modal>
 
            </Container>
        </>
    );
};
 
export default Libros;
