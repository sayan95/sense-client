import React, { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
      <Component {...pageProps}/>
  </Fragment>
}


//server side rendering
Sense.getInitialProps = async ({Component, ctx}) => {
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
