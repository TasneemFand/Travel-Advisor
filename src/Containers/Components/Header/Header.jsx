import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import useStyles from './Style';

// typography is an every single text element.

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.AppBar}>
            <Toolbar className={classes.Toolbar}>
                <Typography variant='h5' className={classes.Basetitle, classes.title}>
                    Travel Advisor
                </Typography>
                <Box display='flex' alignItems='center' position='absolute' right='80px'>
                    <Typography variant='h6' className={classes.Secondtitle}>
                        Explore New Places
                    </Typography>
                    
                    {/*<Autocomplete>*/}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/*</Autocomplete>*/}


                    <div className={classes.RightIcons}>
                        <div className={classes.IconBar} >
                            <IconButton classes={{ root: classes.ButtonRoot }} tabIndex="0" type="button" aria-haspopup="true" aria-describedby="mui-38744" aria-label="Open Search" data-ga-event-category="AppBar" data-ga-event-action="openSearch" title="Open search" >
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <div className={classes.IconBar}>
                            <IconButton classes={{ root: classes.ButtonRoot }} tabIndex="0" type="button" aria-haspopup="true" aria-label="help" data-ga-event-category="AppBar" data-ga-event-action="help" title="help" >
                                <ContactSupportIcon />
                            </IconButton>
                        </div>
                        <div className={classes.IconBar}>
                            <IconButton classes={{ root: classes.ButtonRoot }} tabIndex="0" type="button" aria-haspopup="true" aria-label="Toggle notifications panel" data-ga-event-category="AppBar" data-ga-event-action="toggleNotifications" title="Toggle notifications panel" >
                                <Badge>
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
                                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z">
                                        </path>
                                    </svg>
                                    <span className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangular MuiBadge-colorSecondary">1</span>
                                </Badge>
                            </IconButton>

                        </div>
                    </div>
                    {/* settings icon*/}
                    {/* account image*/}
                </Box>
            </Toolbar>

        </AppBar >
    );
}

export default Header;
