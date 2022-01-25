import Head from 'next/head'
import { useState } from 'react';
import contract_abi from '../abi';
import Web3 from 'web3';


export default function Home() {
  const [loginState, setLoginState] = useState();
  // const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState();
  const [contract, setContract] = useState();
  const [numberOfNFT, setNumberOfNFT] = useState(1);

  let contractAddress = "0xFf3D292a36E7285557F8cF8f344152f99DF14471";
  let abi = contract_abi;

  const login = async () => {
    window.ethereum ?
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        let wallet_address = accounts[0];
        setAddress(wallet_address)
        
    //     let w3 = new Web3(ethereum)
    //     setWeb3(w3)

    //     let c = new w3.eth.Contract(abi, contractAddress)
    //     setContract(c)

    //     console.log(contract)
      const web3 = new Web3(window.ethereum);
      let c = new web3.eth.Contract(abi, contractAddress);  
      setContract(c);
    
      }).catch((err) => console.log(err))
    : setLoginState("No metamask wallet... Please install it.");
  }
  
  const mintNFT = async () => {
    console.log("numberOfNFT", numberOfNFT);
    return contract.methods.mint(numberOfNFT).send({ from: address });
  }

  const increaseNumber = () => {
    setNumberOfNFT(++numberOfNFT);
  }

  const decreaseNumber = () => {
    setNumberOfNFT(--numberOfNFT);
  }
  
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
      <h1 className="content-header__title text-center my-0"><span>Mint Your Adventurer</span></h1>
    </div>
  </div>
  <div className="section section--bg-curves">
    <div className="container container--medium pt-0">
      
      <div className="mint relative zindex-1 mw-600px m:mw-100 mx-auto l:mt-n5">
        <div className="mint__header mb-6 m:mb-5 p-4 s:px-5 bg-white rounded-l box-shadow-l">
          <p className="mint__balance my-0 fw-bold">50.23 Left</p>
          <div className="w-100 s:w-auto s:ml-auto s:pl-4">
            <p className='text-center'>{loginState}</p>
            <a href="#" className="mint__connect-wallet btn btn--primary w-100" onClick={login}>Connect Wallet</a>
          </div>
        </div>
        <div className="mint__body mb-5 rounded-l box-shadow-l">
          <div className="mint__image text-center px-4 m:px-0">
            <picture>
              <source type="image/webp" srcSet={require('../img/avatar-3.webp')} />
              <img src={require("../img/avatar-3.png")} width="320" height="340" alt="Tough Girl" className="d-block mx-auto mt-n5 m:mt-6 shadow-l" />
            </picture>
          </div>
          <div className="mint__main relative px-4 py-5 s:px-5 m:py-6">
            <div className="d-flex flex-column m:flex-row justify-content-between text-center m:text-left">
              <h1 className="display-2 mt-0 mb-4 m:mb-2">Tough Girl with Giraffe Neck</h1>
              <p className="my-0 m:pl-5 flex-shrink-0">
                <button className="no-btn d-inline-flex link-inverted m:fs-xl" data-micromodal-trigger="modal-1">
                  Third Party Wallets
                  <svg className="icon icon--right" width="16" height="16" aria-hidden="true"><use xlinkHref="/img/icons.svg#help"></use></svg>
                </button>
              </p>
            </div>
            <p>Phasellus blandit tincidunt ornare. <strong>Fusce eu tristique eros.</strong> Nulla aliquam lacinia auctor. Donec euismod libero rhoncus molestie blandit. Etiam ultricies quam est, non fermentum eros tincidunt sit amet. Nam vitae ultrices odio, <a href="#">ac porta dui</a>. Sed tincidunt viverra libero. Aliquam in nisi non tortor tincidunt ultricies. Nullam consectetur porttitor semper. Nam nisi sem, maximus porta nisi ac, vestibulum interdum ex. Vestibulum ac nulla non justo varius commodo in et felis.</p>
            
            <div className="mint__buy d-flex justify-content-center m:justify-content-start mt-6 mb-4">
              <p className="mint__price display-3 my-0">
                <strong>20 Eth</strong>
              </p>
              <div className="quantity-control d-flex flex-column">
                <label for="qty" className="quantity-control__label fs-m m:fs-l fw-bold">Quantity</label>
                <span className="quantity-control__input-container">
                  <input type="text" value={numberOfNFT} min="1" id="qty" inputmode="numeric" className="quantity-control__input display-3" />
                  <span className="quantity-control__actions">
                    <button type="button" className="no-btn" onClick={increaseNumber} data-action="add"><svg className="icon fs-xs m:fs-s" width="16" height="16" role="img" aria-label="+1"><use xlinkHref="/img/icons.svg#caret-up"></use></svg></button>
                    <button type="button" className="no-btn" onClick={decreaseNumber} data-action="remove"><svg className="icon fs-xs m:fs-s" width="16" height="16" role="img" aria-label="-1"><use xlinkHref="/img/icons.svg#caret-down"></use></svg></button>
                  </span>
                </span>
              </div>
            </div>
            
            <div className="text-center m:text-left">
              <button className="btn btn--m">
                <svg className="icon icon--left" width="16" height="16" aria-hidden="true"><use xlinkHref="/img/icons.svg#eye-off"></use></svg>
                Whitelist Token
              </button>
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="btn btn--primary w-100" onClick={mintNFT}>Mint Now</a>
        </div>
      </div>
      
    </div>
  </div>
</main>

<div className="modal micromodal-slide" id="modal-1" aria-hidden="true">
  <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
    <div className="modal__container rounded-l shadow-l" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header className="modal__header">
        <h2 className="modal__title h1 my-0" id="modal-1-title">Third Party Wallets</h2>
        <button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main className="modal__content fs-l" id="modal-1-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut enim sit amet dolor tempor suscipit. Sed a risus tincidunt ligula convallis suscipit. Suspendisse euismod lacinia pretium. Nam nec nisi tempus, molestie libero vel, tincidunt augue. Curabitur vel lectus pulvinar, volutpat elit sit amet, aliquam sem. In non malesuada tortor, ac accumsan risus. Nullam risus nulla, laoreet sed nunc vel, efficitur varius lectus. Proin ac vestibulum quam. Morbi iaculis feugiat tortor eu porttitor.</p>
        <p>Nullam quis elementum quam. Pellentesque pellentesque sagittis suscipit. Quisque accumsan lorem quis tempor sodales. Nunc scelerisque lobortis sem, quis iaculis nisi dignissim sit amet. Donec libero ipsum, luctus sit amet tempor quis, suscipit at leo. Maecenas porta consectetur neque, a tristique felis luctus varius. Nam est magna, rutrum id congue at, viverra ut urna. Nullam convallis massa eu tellus eleifend sodales. Duis at blandit augue, ac accumsan mi. In id eros ac nibh porta molestie et id ante. Proin eget egestas metus.</p>
        <p>Sed semper tortor quis dui interdum ornare. Pellentesque euismod id libero sed egestas. Quisque quis lorem euismod enim hendrerit lobortis. Aliquam sit amet scelerisque sapien. Maecenas venenatis sodales ex a porta. Cras posuere quam et massa tempor, vel tincidunt nibh interdum. Pellentesque ultrices urna at massa consectetur accumsan. Aliquam porttitor sed lorem et luctus. Vestibulum felis metus, tincidunt sed tellus sed, tristique rutrum erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sed aliquet mi, ac sodales augue.</p>
        <p>Sed rutrum non velit ut elementum. Aliquam in tempus ante, vel pretium nibh. Sed orci erat, commodo sed lacus non, vestibulum rhoncus elit. Aenean nec lectus lacus. Curabitur sit amet metus facilisis, porttitor massa vel, faucibus leo. Quisque faucibus eros non maximus feugiat. Integer scelerisque fermentum libero, eget vestibulum leo fermentum eu. Fusce tellus nisl, semper et porta eget, vestibulum eu ligula. Mauris risus ligula, tincidunt ac nunc eleifend, cursus tempor ipsum. Maecenas quis eleifend ex. Nullam non consequat ante. Praesent fermentum velit mollis lacus egestas bibendum. Sed rutrum cursus leo, ut hendrerit turpis eleifend a.</p>
        <p>Vivamus elit augue, tristique in varius in, placerat vel nunc. Quisque purus est, tristique at lectus sed, accumsan tincidunt ex. Praesent placerat tincidunt sem vitae dignissim. Morbi non elit iaculis, porttitor magna a, pharetra turpis. Morbi congue tincidunt pellentesque. Suspendisse non elit in ligula efficitur ultrices vitae ut ipsum. Cras at ante eget urna cursus elementum. Mauris tristique dolor non purus sodales sagittis. Suspendisse consequat enim in fringilla tincidunt. Quisque pulvinar efficitur lacus in vestibulum.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a elit sit amet tortor sagittis volutpat. Nunc varius sem nibh, sed pulvinar quam commodo ac. Proin lorem mauris, ullamcorper sed consectetur in, feugiat et tortor. Aliquam malesuada congue libero, sed viverra lorem tempus nec. Cras consequat tellus vitae eros laoreet condimentum. Suspendisse potenti. Phasellus convallis velit eget purus interdum rhoncus. In at volutpat elit. In porttitor eu tellus a ornare. Quisque pellentesque sed dolor at interdum. Phasellus consectetur dui ac mauris mattis hendrerit. Suspendisse eu velit in risus aliquet sagittis. Fusce sapien dui, faucibus nec dictum vitae, fermentum ac lacus. Cras dignissim ex sed dignissim volutpat. Maecenas malesuada dignissim sapien at pretium.</p>
        <p>Fusce sit amet molestie augue, nec posuere dolor. Suspendisse vitae sapien ut dolor accumsan laoreet eget non enim. Donec a pellentesque velit. Phasellus quis magna fringilla, pulvinar leo eu, tincidunt augue. Suspendisse condimentum metus lacus, at aliquet justo vulputate quis. Nulla ac pharetra erat. Suspendisse risus elit, rhoncus quis massa sed, sollicitudin vehicula elit. Suspendisse potenti. Morbi fringilla velit in tellus congue, sed sagittis nibh placerat. Curabitur diam nisi, vestibulum eget porttitor et, blandit at ipsum. Proin rutrum, lectus quis imperdiet luctus, tellus dolor porta turpis, vitae ultricies felis mauris sit amet nisi. Vestibulum scelerisque leo nec velit tincidunt, nec auctor tellus faucibus. Aenean sit amet mauris neque. Mauris egestas, metus sed fermentum posuere, nisl justo ultrices mi, id aliquet neque tortor at turpis. Suspendisse lacinia nisi purus, eget efficitur enim convallis ut. Nullam velit urna, sodales vitae nibh sit amet, semper imperdiet quam.</p>
        <p>Donec molestie diam et ligula gravida feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur in quam ut erat pellentesque vestibulum. Suspendisse quam enim, vestibulum non nisi at, tempus imperdiet augue. Donec euismod nulla in eleifend ullamcorper. Sed sit amet malesuada ex. Suspendisse porta rutrum lectus sed vehicula. In a nunc vitae leo dictum placerat. Donec erat magna, iaculis a libero ac, euismod dignissim metus. Duis ornare nibh eget nibh fringilla bibendum. Donec pellentesque feugiat placerat. Praesent efficitur urna magna, at fermentum purus pellentesque aliquet. Sed venenatis faucibus nunc, at sodales enim volutpat vel. Nam cursus odio ac leo dignissim posuere. Ut vulputate velit ut purus aliquet, sed rhoncus lorem ullamcorper.</p>
        <p>Nam nulla nisi, hendrerit vitae pretium a, vehicula nec nisi. Aliquam nec feugiat ipsum. Nunc porttitor mauris velit, sed lobortis nisi cursus eu. Suspendisse vel dignissim velit. In faucibus enim in ultricies blandit. Mauris placerat vel odio fermentum tincidunt. Suspendisse sodales nulla accumsan enim viverra consectetur. Curabitur ac pulvinar eros. In at nulla mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu nulla vel nisl dictum blandit vel eu magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi scelerisque dui ac commodo tempor. Cras lacus nibh, viverra ac nulla in, vehicula tincidunt risus. Nulla tincidunt ullamcorper odio, lacinia ultricies augue lacinia in.</p>
        <p>Morbi malesuada sapien sed iaculis faucibus. Donec arcu nisl, vehicula id consequat nec, elementum sed arcu. Donec nec purus quam. Vivamus vel elit diam. Etiam massa mi, luctus sed placerat at, dapibus in purus. Nulla finibus vitae ante at rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel ipsum ante. Nulla bibendum sodales iaculis. Morbi venenatis non dolor sit amet mattis. Aenean aliquam ac erat auctor finibus.</p>
      </main>
      <footer className="modal__footer">
        <button className="btn btn--primary btn--m" data-micromodal-close aria-label="Close this dialog window">Close</button>
      </footer>
    </div>
  </div>
</div>

      {/* <Footer /> */}
    </div>
  )
}
