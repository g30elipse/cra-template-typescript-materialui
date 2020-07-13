import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
    const classes = useStyles();

    return (
        <Box>
            Welcome to React-material UI
        </Box>
    )
}

const useStyles = makeStyles<Theme, any>((theme) => ({

}));

export default LandingScreen;