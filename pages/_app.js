import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import theme from '../theme';
import initStore from '../store';
import Layout from '../layouts/index';
import instance from '../api/axios'
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {refresh} from "../actions/auth";
import { getRooms } from "../actions/messages";
import { getUsers } from "../actions/profiles";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, pathname, ...Context}) {
    const isServer = ctx.isServer;
    const dispatch = ctx.store.dispatch;
    const store = ctx.store.getState();
    let pageProps = {};

    let token = '';
    console.log(ctx.pathname);
    if (ctx.req) {
      if (ctx.req.headers.cookie) {
        const cookie = ctx.req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
        if (cookie) {
          token = cookie.split('=')[1]
          if (isServer) {
            // intercept requests and add authorization token
            instance.interceptors.request.use((config) => {
              config.headers.authorization = `Bearer = ${token}`;
              return config;
            });
          }
          console.log(!!token, ctx.pathname)
          if (token) {
              // server side page logic
              switch (ctx.pathname) {
                case '/':
                  await dispatch(getUsers())
                  break
                case '/rooms':
                  await dispatch(getRooms())
                  break
                default:
                  break;
              }
              await dispatch(refresh(token))
              return { pageProps };
          }
        }
      }
    }else {
      return { pageProps };
    }
  }

  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <>
        <Head>
          <title>My Node, Next, Material, project</title>
        </Head>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Layout>
                  <CssBaseline />
                  <Component {...pageProps} />
                </Layout>
            </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(initStore)(MyApp)