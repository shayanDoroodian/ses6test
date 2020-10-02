import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import logo from '../../img/LogoTransparent.png';
import irFlag from '../../img/ir.png';
import enFlag from '../../img/en.png';



// Style Navbar
const useStyles = makeStyles(() => ({
    containerLogin: {
        position: "static",
        margin: "5px 10px 5px 10px",
        flexGrow: 1
    },
    logoStyles: {
        height: "50px",
        width: "auto"
    },
    divStyle: {
        height: "40px",
        width: "2px",
        borderLeft: "2px solid gray",
        
    },
    languageFlags: {
        height: "20px",
        width: "auto",
        margin: "0 auto",
    },
    languageLink: {
        textAlign: "center",
    },
    registerButtonStyle: {
        marginLeft: "15px"
    },
    containerMenue: {
        position: "static",
        margin: 0,
        flexGrow: 1,
        backgroundColor: "#a12375",
        height: "40px"
    },
    icon: {
        color: "#ffffff",
        fontSize: "24px",
        margin: "8px"
    },
    buttonMenue: {
        color: "#ffffff",
        height: "30px",
        width: "auto",
        margin: "5px"
    },
    logandreg : {
        margin : "0 15px",
    },
}));

// Implement navbar
const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <div className={classes.containerLogin} >
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Link to="/"><img src={logo} className={classes.logoStyles} /></Link>
                    </Grid>
                    <Grid item>
                        <Button className={classes.languageLink}><img src={irFlag} className={classes.languageFlags} /></Button>
                        <Button color="inherit"><img src={enFlag} className={classes.languageFlags} /></Button>
                        <Link to="/login" className={classes.logandreg}>ورود</Link>   
                        <span className={classes.divStyle} />
                        <Link to="/register" className={classes.logandreg}>ثبت نام</Link>

                    </Grid>
                </Grid>
            </div>
            <div className={classes.containerMenue}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <ShoppingCartIcon className={classes.icon} />
                        <SearchIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.buttonMenue}>
                            Products and Services
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.buttonMenue}>
                            About Us
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <Button variant="text" className={classes.buttonMenue}>
                            Home
                        </Button>
                    </Grid>

                </Grid>

            </div>
        </div>

    )
};
export default Navbar;
