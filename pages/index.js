import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Chris Holliday's AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

      <main>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}
