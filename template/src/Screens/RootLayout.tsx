import React, { FC, useState, useContext } from 'react';
import AppNavigation from '../Routes/AppNavigation';


const Layout: FC = () => {

    return (
        <div>
            <AppNavigation />

        </div>
    )
}


const RootLayout: FC = () => {
    return (
        <>

            <Layout />

        </>
    )
}

export default RootLayout;

