import React from 'react';
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { MenuBook } from "@material-ui/icons";
import useStyles from "./styles";

function Header() {
    const classes = useStyles();

    return (
        <div>

      <AppBar>
        <Toolbar>
          <MenuBook className={classes.icon} />
          <Typography variant="h6">Course Finder</Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
