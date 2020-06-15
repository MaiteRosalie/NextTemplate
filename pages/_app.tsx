import React from 'react';
import App from 'next/app';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'emotion-theming';

import theme from '../theme';
import { GlobalStyles } from '../theme/globalStyles';
import { OrganizationLd, SEO } from '../seo';

class AppComponent extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextSeo {...SEO} />
        <OrganizationLd />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default AppComponent;
