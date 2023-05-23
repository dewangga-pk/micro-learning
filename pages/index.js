import Head from 'next/head';

export default function Home() {
  return (
    <div className='container mx-auto mt-4'>
      <Head>
        <title>Micro Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Saya Halaman Utama</h1>
      </main>
    </div>
  )
}
