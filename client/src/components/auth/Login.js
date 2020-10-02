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

let LoginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("This field is required."),
    password: yup
        .string()
        .min(8, "Password is too short.")
        .max(30, "Password is too long.")
        .required("This field is required."),
});

// Login Page Style
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



function Login() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Login
          </Typography>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        password2: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                        const user = {
                            email: values.email,
                            password: values.password,
                        }
                        axios.post('/api/users/login', user)
                            .then(res => console.log(res.data))
                            .catch(err => console.log(err.response.data))
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
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
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
}

export default Login
