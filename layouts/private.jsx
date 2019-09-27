
import PrimaryAppBar from '../components/Menu/index'
import React, { useState, useEffect } from 'react';
import {useStyles} from './privateStyles';
import { connect } from 'react-redux'
import {Router} from '../routes'
import {compose} from 'redux'
import Head from 'next/head'
import clsx from 'clsx';

function Private(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    useEffect(() => {
           !props.user.token && Router.pushRoute('/login')
        },
        [props.user.token]);

   function handleDrawerOpen() {
        setOpen(true);
      }
    
   function handleDrawerClose() {
        setOpen(false);
      }
    
    const { children } = props
    return (
        <div className="position-relative">
            <Head>
                <link rel="stylesheet" href=""/>
            </Head>
                <PrimaryAppBar 
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    open={open}
                    isLoaded={props.isLoad}
                />
                <div
                className={clsx(classes.content, {
                [classes.contentShift]: open,
                })}>
                    <div className={classes.toolbar} />
                    { children }
                </div>
            <style jsx>{`
                .position-relative {
                    display: flex;
                    height: 100%
                }
            `}</style>
        </div>
    );
}

export default compose(
    connect(
        ({user, tools:{isLoad}}) => 
        ({
            user,
            isLoad,
        })
    )
  )(Private)
