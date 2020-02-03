import React from 'react';
import Head from 'next/head';

export type OrganizationLdProps = {
  url?: string;
  logo?: string;
};

export const OrganizationLd = ({
  url = 'https://gld-funding.herokuapp.com/',
  logo = 'https://gld-funding.herokuapp.com/static/images/favicon.png',
}: OrganizationLdProps) => {
  const jsonld = `{
    "@context": "http://schema.org/",
    "@type": "Organization",
    "url": "${url}",
    "logo":"${logo}"
  }`;
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{ __html: jsonld }}
        key="jsonld-organization"
        type="application/ld+json"
      />
    </Head>
  );
};
