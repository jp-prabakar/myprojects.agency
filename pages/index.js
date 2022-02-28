import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Agency</title>
        <meta name="description" content="Welcome to our Agency" />
      </Head>
        <Intro/>
        <Services services={services} />
        <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  };
};