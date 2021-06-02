import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { ToastProvider } from "react-toast-notifications";
import Head from 'next/head';
import {wrapper} from '../redux/store';

import * as appRedux from '../redux/application/index';

import '../styles/main.scss';

// _app component
const Sense = ({ Component, pageProps, settings }) => {
  const dispatch = useDispatch();

  // server and client sync
  useEffect(() => {
    dispatch(appRedux.actions.setSettingsInfo(settings));     // loads store with app settings data at client  
  }, []);

  return <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ToastProvider>
        <Component {...pageProps}/>
      </ToastProvider>
  </Fragment>
}


//server side rendering
Sense.getInitialProps = async ({Component, ctx}) => {

  // test connection to the server


  // test connection for the database
  

  // load app settings data 
  let settings = await ctx.store.getState().app.settings;
  if(!settings){
    await ctx.store.dispatch(appRedux.dispatchers.loadAppSettings());
    settings = await ctx.store.getState().app.settings;
  }

  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
    settings : settings.appSettingsInfo
  };
}


export default wrapper.withRedux(Sense);
