import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import theme from '../theme';
import Cookies from 'js-cookie'
import initStore from '../store';
import Layout from '../layouts/index';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {setServerToken, refresh, setUser} from "../actions/auth";

class MyApp extends App {
  static async getInitialProps({ Component, ctx, pathname, ...Context}) {
    const isServer = ctx.isServer;
    const dispatch = ctx.store.dispatch;
    let token = '';
    if (ctx.req) {
      if (ctx.req.headers.cookie) {
        const cookie = ctx.req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
        if (cookie) {
          token = cookie.split('=')[1]
          if (token) {
            await dispatch(refresh(token)).then(res=>{
              let pageProps = {};
              // if (Component.getInitialProps) {
              //   pageProps = Component.getInitialProps(ctx, pathname);
              // }
              dispatch(setUser(res.data.user))
              dispatch(setServerToken(res.data.token))
              dispatch(setServerToken(token))
              return { pageProps };
              }
            )
          }
        }
      }
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