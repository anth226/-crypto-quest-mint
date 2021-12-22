import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wizards & Wagons</title>
        <meta name="description" content="Wizards & Wagons homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className="main">
        <div className="content-header ripped-bottom">
            <div className="container">
            <h1 className="content-header__title text-center my-0"><span>Page Not Found</span></h1>
            </div>
        </div>
        <div className="section section--bg-curves">
            <div className="container container--medium">
        
            <p className="display-1 my-0 text-center">Now run!</p>

            </div>
        </div>
        </main>
      {/* <Footer /> */}
    </div>
  )
}
