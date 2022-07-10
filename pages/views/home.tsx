import React from 'react';
import { Button } from '@material-ui/core';
import { NextPageContext } from 'next';
import Head from 'next/head';
type IndexProps = {
  query: {
    title: string;
  };
};

export default function Index(props: IndexProps) {
  const { title } = props.query;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>타이틀은 {title} 입니다.</h1>
      <Button variant="contained" color="primary">
        hi
      </Button>
    </>
  );
}

Index.getInitialProps = async function (context: NextPageContext) {
  const { query } = context;
  return { query };
};
