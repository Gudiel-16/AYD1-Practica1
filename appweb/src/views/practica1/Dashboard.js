///////////////  practica 1 -> Dashboard.js

import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/tables.js";

const useStyles = makeStyles(componentStyles);

const Dashboard = () => {
    const classes = useStyles();
    const theme = useTheme();
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
                <Box
                    component={Card}
                    marginTop="3rem"
                    classes={{ root: classes.cardRoot + " " + classes.cardRootDark }}
                >
                    <CardHeader
                        className={classes.cardHeader}
                        title="BIENVENIDO, SOMOS EL GRUPO: All for one"
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                            textAlign: "center",
                        }}
                    ></CardHeader>
                    <TableContainer>
                        <Box
                            component={Table}
                            alignItems="center"
                            marginBottom="0!important"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Nombre Completo
                        </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Carnet
                        </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Universidad
                        </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Carrera
                        </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Telefono
                                        
                        </TableCell>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                    >
                                        Dirección
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {/*Inicio estudiante No. 1*/}
                                <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot +
                                                " " +
                                                classes.tableCellRootBodyHead,
                                        }}
                                        component="th"
                                        variant="head"
                                        scope="row"
                                    >
                                        <Box alignItems="center" display="flex">
                                            <Box
                                                component={Avatar}
                                                marginRight="1rem"
                                                alt="..."
                                                src={require("assets/img/theme/erick-image.jpg").default}
                                            />
                                            <Box display="flex" alignItems="flex-start">
                                                <Box fontSize=".875rem" component="span">
                                                    Erick Fernando Sánchez Mejía
                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        201503878
                        </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgWarning
                                                }
                                            ></Box>
                            USAC
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgSuccess
                                                }
                                            ></Box>
                            Ingenieria en ciencias y sistemas
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box display="flex" alignItems="center">
                                            <Box component="span" marginRight=".5rem">
                                                5986-5781
                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        Antigua Guatemala
                        </TableCell>
                                </TableRow>

                        {/*FIn estudiante No. 1*/}

                        {/*Inicio estudiante No. 2*/}

                        <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot +
                                                " " +
                                                classes.tableCellRootBodyHead,
                                        }}
                                        component="th"
                                        variant="head"
                                        scope="row"
                                    >
                                        <Box alignItems="center" display="flex">
                                            <Box
                                                component={Avatar}
                                                marginRight="1rem"
                                                alt="..."
                                                src={require("assets/img/theme/erick-image.jpg").default}
                                            />
                                            <Box display="flex" alignItems="flex-start">
                                                <Box fontSize=".875rem" component="span">
                                                    Christopher Alexander Acajabon Gudiel
                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        201404278
                        </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgWarning
                                                }
                                            ></Box>
                            USAC
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgSuccess
                                                }
                                            ></Box>
                            Ingenieria en ciencias y sistemas
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box display="flex" alignItems="center">
                                            <Box component="span" marginRight=".5rem">
                                                4127-1361
                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        Guatemama, Guatemala
                        </TableCell>
                                </TableRow>


                        {/*Fin estudiante No. 2*/}                
                        {/*Inicio estudiante No. 3*/}
                        <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot +
                                                " " +
                                                classes.tableCellRootBodyHead,
                                        }}
                                        component="th"
                                        variant="head"
                                        scope="row"
                                    >
                                        <Box alignItems="center" display="flex">
                                            <Box
                                                component={Avatar}
                                                marginRight="1rem"
                                                alt="..."
                                                src={require("assets/img/theme/erick-image.jpg").default}
                                            />
                                            <Box display="flex" alignItems="flex-start">
                                                <Box fontSize=".875rem" component="span">
                                                    Melyza Alejandra Rodriguez Contreras
                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        201314821
                        </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgWarning
                                                }
                                            ></Box>
                            USAC
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgSuccess
                                                }
                                            ></Box>
                            Ingenieria en ciencias y sistemas
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box display="flex" alignItems="center">
                                            <Box component="span" marginRight=".5rem">
                                                40078522
                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        Guatemala
                        </TableCell>
                                </TableRow>
                        {/*FIn estudiante No. 3*/}
                                                
                        {/*Inicio estudiante No. 4*/}
                        <TableRow>
                                    <TableCell
                                        classes={{
                                            root:
                                                classes.tableCellRoot +
                                                " " +
                                                classes.tableCellRootBodyHead,
                                        }}
                                        component="th"
                                        variant="head"
                                        scope="row"
                                    >
                                        <Box alignItems="center" display="flex">
                                            <Box
                                                component={Avatar}
                                                marginRight="1rem"
                                                alt="..."
                                                src={require("assets/img/theme/erick-image.jpg").default}
                                            />
                                            <Box display="flex" alignItems="flex-start">
                                                <Box fontSize=".875rem" component="span">
                                                    Helmut Efrain Najarro Alvarez
                                </Box>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        201712350
                        </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgWarning
                                                }
                                            ></Box>
                            USAC
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box paddingTop=".35rem" paddingBottom=".35rem">
                                            <Box
                                                marginRight="10px"
                                                component="i"
                                                width=".375rem"
                                                height=".375rem"
                                                borderRadius="50%"
                                                display="inline-block"
                                                className={
                                                    classes.verticalAlignMiddle + " " + classes.bgSuccess
                                                }
                                            ></Box>
                            Ingenieria en ciencias y sistemas
                            </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        <Box display="flex" alignItems="center">
                                            <Box component="span" marginRight=".5rem">
                                            54851797
                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell classes={{ root: classes.tableCellRoot }}>
                                        Guatemala
                        </TableCell>
                                </TableRow>
                        {/*FIn estudiante No. 4*/}
                                
                            </TableBody>
                        </Box>
                    </TableContainer>
                </Box>

            </Container>
        </>
    );
};

export default Dashboard;
