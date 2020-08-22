import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
    nav: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
    },
});

export default function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.nav}
        >
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
        </BottomNavigation>
    );
}
