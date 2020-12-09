import Head from 'next/head'

import Header from '../components/UI/Header/';
import HomePage from '../components/HomePage/';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Friend</title>
      </Head>
    
      <Header />
      <HomePage />
    </div>
  );
}
