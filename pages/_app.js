import '../styles/main.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useWallet, UseWalletProvider } from 'use-wallet'
import config from '../chain-config'

function MyApp({ Component, pageProps }) {
  return <UseWalletProvider
    chainId={config.chainId}
    connectors={{
    }}
  >
  <Header />
  <Component {...pageProps} />
  <Footer /> 
  </UseWalletProvider>
}

export default MyApp
