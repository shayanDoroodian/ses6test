import React from 'react';
import axios from 'axios';

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name is too short.")
        .max(30, "Name is too long.")
        .required("This field is required."),
    email: yup
        .string()
        .email()
        .required("This field is required."),
    password: yup
        .string()
        .min(8, "Password is too short.")
        .max(30, "Password is too long.")
        .required("This field is required."),
    password2: yup
        .string()
        .min(8, "Password is too short.")
        .max(30, "Password is too long.")
        .required("This field is required.")
});

// Register Page Style
const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));



function Register() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
          </Typography>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        password2: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        const newUser = {
                            name: values.name,
                            email: values.email,
                            password: values.password,
                            password2: values.password2
                        }
                        axios.post('/api/users/register', newUser)
                            .then(res => console.log(res.data))
                            .catch(err => console.log(err.response.data))
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.name && touched.name}
                                        autoComplete="name"
                                        name="name"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        helperText={
                                            errors.name && touched.name
                                                ? errors.name
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.email && touched.email}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        helperText={
                                            errors.email && touched.email ? errors.email : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.password && touched.password}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText={
                                            errors.password && touched.password
                                                ? errors.password
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        error={errors.password2 && touched.password2}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="password2"
                                        label="Confirm Password"
                                        type="password"
                                        id="password2"
                                        autoComplete="current-password"
                                        helperText={
                                            errors.password2 && touched.password2
                                                ? errors.password2
                                                : null
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

export default Register
