import logo from "../static/Casperl.png";
import React from "react";
import { Container, MenuItem, Toolbar } from "@mui/material";
import { AppBar } from "@material-ui/core";



export const Navigation = () => {
    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="lg">
                <Toolbar>
                    <img src={logo} alt="" width={160} />
                    <div className="right">
                    <MenuItem>Products</MenuItem>
                    <MenuItem>Add Projects</MenuItem>
                    <MenuItem>Check Tests</MenuItem>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>

    );
}