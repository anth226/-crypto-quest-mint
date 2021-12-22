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
        <div className="section section-hero" id="welcome">
          <div className="container l:d-flex align-items-center justify-content-center">
            
            <div className="flex-grow-1">
              <div className="grid gy-6 align-items-center">
                <div className="col m:col-6 text-center">
                  <div className="mw-500px mx-auto">
                    <h1 className="h1 my-0">
                      <img src={require("../img/ww-logo-vertical-light-gradient.svg")} width="350" height="365" alt="Wizards & Wagons"
                          className="section-hero__logo shadow-m" />
                    </h1>
                    <p className="mt-4 mb-5 fs-xl text-shadow-s">Wizards and Wagons is a proud NFT collection of randomized 3D RPG
                      Avatars, to be utilized for your enjoyment amongst your favorite Fantasy Tabletop RPG’s.</p>
                    <div className="mt-5">
                      <a href="#avatars" className="btn btn--primary shadow-m">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col m:col-6">
                  <div className="mw-500px m:mw-800px mx-auto">
                    <div className="player embed" id="video-trailer" data-video-id="rubX1xJgMcw">
                      <div className="player__video shadow-m" id="yt-player"></div>
                      <div className="player__overlay d-flex align-items-center justify-content-center">
                        <button className="player__play no-btn section-hero__play text-gray-100 fs-l">
                          <svg className="icon mb-3 shadow-m" width="16" height="16" role="img" aria-label="Play"><use xlinkHref="/img/icons.svg#play"></use></svg>
                          <br />
                          <span className="m:fs-xl text-shadow-l">Play Trailer</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 l:mt-7 l:mb-n7 text-center d-none l:d-block">
                <a href="#avatars" className="section__scroll-hint">
                  <svg className="icon shadow-m text-white" width="16" height="16" role="img" aria-label="Scroll down">
                    <use xlinkHref="/img/icons.svg#scroll-down"></use>
                  </svg>
                </a>
              </div>
            </div>
          
          </div>
        </div>
        
        <hr />
        
        <div className="section section-avatars ripped-top" id="avatars">
          <div className="container">
            <h2 className="section__title section__title--gradient"><span>Give Rise to Adventure</span></h2>
            
            <div className="mt-7">
              <div className="grid gy-7 mw-1200px mx-auto text-center">
                <div className="col m:col-4">
                  <div className="card card--decoration-knife h-100 mw-400px mx-auto">
                    <div className="card__container">
                      <div className="card__header">
                        <picture>
                          <source type="image/webp" srcSet={require("/img/avatar-1.webp")} />
                          <img src={require("../img/avatar-1.png")} width="320" height="340" alt="Avatar" className="card__image" />
                        </picture>
                      </div>
                      <div className="card__body">
                        <p>Wizards and Wagons is a collection of unique and randomly generated RPG Avatars roaming the vast world of ethereum blockchain in the land of ERC-721</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m:col-4">
                  <div className="card card--flip-bg h-100 mw-400px mx-auto">
                    <div className="card__container">
                      <div className="card__header">
                        <picture>
                          <source type="image/webp" srcSet={require("../img/avatar-2.webp")} />
                          <img src={require("../img/avatar-2.png")} width="320" height="340" alt="Avatar" className="card__image" />
                        </picture>
                      </div>
                      <div className="card__body">
                        <p>Every Adventurer is randomly and programmatically generated from a set of unique traits to create several million sets of possible combinations. Traits include Race(Human, Elf, etc.), Sex, Stats(Strength, Wisdom, etc.), and Cosmetic Features(Jewelry, Hair Style, Skin Color, etc.).”</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m:col-4">
                  <div className="card card--flip-bg card--decoration-book h-100 mw-400px mx-auto">
                    <div className="card__container">
                      <div className="card__header">
                        <picture>
                          <source type="image/webp" srcSet="/img/avatar-3.webp" />
                          <img src={require("../img/avatar-3.png")} width="320" height="340" alt="Avatar" className="card__image" />
                        </picture>
                      </div>
                      <div className="card__body">
                        <p>Owning your own adventurer gives you access to Member-Only exclusive digital and real world content. See our roadmap on our Whitepaper for more details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-7 text-center">
              <a href="04-mint.html" className="btn btn--primary w-75 m:w-50">Mint Now</a>
            </div> */}
          </div>
        </div>
        
        <hr />
        
        <div className="section section-about ripped-top" id="about-us">
          <div className="container">
            <h2 className="section__title"><span>About Us</span></h2>
            <p className="mw-800px mx-auto text-center fs-l m:fs-xl">Wizards & Wagons was founded by Zach Hopkins & Theodore
              Thomas, two long-time friends, entrepreneurs, and avid fantasy enthusiasts. Beyond just fantasy, we were
              fascinated by blockchain technology and the potential it had in elevating the gaming industry. We had a desire
              to bring art, real pragmatic utility, and genuine economies of value into one whole through our creations. Out
              of frustration with lack of quality-control over both art-production and management of NFT ecosystems, Wizards &
              Wagons was born. Our goal is to bring the world of high fantasy to the metaverse, guided by a ‘quality-first’
              framework, professional artistry, strong economic principles, and varied functionality.</p>
            <div className="mt-6 text-center">
              <img src={require("../img/ww-logo-vertical-light.svg")} width="100" height="104" alt="" />
            </div>
          </div>
        </div>
        
        <hr />
        
        <div className="section section-team ripped-top" id="team">
          <div className="container">
            <h2 className="section__title text-black"><span>Meet the Team</span></h2>
            
            <ul className="team m:pt-6 mw-1200px xl:mw-100 mx-auto">
              <li className="team__member team__member--bg-knife-1">
                <h3 className="team__member-name">Zach Hopkins</h3>
                <p className="team__member-position">President</p>
              </li>
              <li className="team__member team__member--bg-axe-1">
                <h3 className="team__member-name">Theo Thomas</h3>
                <p className="team__member-position">Vice President</p>
              </li>
              <li className="team__member team__member--reverse team__member--bg-axe-2">
                <h3 className="team__member-name">Andrei Valeanu</h3>
                <p className="team__member-position">Artist</p>
              </li>
              <li className="team__member team__member--bg-axe-3">
                <h3 className="team__member-name">D'Artagnan Whitney</h3>
                <p className="team__member-position">Lore Author</p>
              </li>
              <li className="team__member team__member--reverse team__member--bg-knife-2">
                <h3 className="team__member-name">Tifa C. Moles</h3>
                <p className="team__member-position">Artist</p>
              </li>
              <li className="team__member team__member--bg-axe-4">
                <h3 className="team__member-name">Spencer Weston</h3>
                <p className="team__member-position">Public Relations Director</p>
              </li>
              <li className="team__member team__member--bg-knife-3">
                <h3 className="team__member-name">Jonathan Mills</h3>
                <p className="team__member-position">Marketing Director</p>
              </li>
            </ul>
            
            <div className="mt-6 m:mb-n6 text-center d-none m:d-block">
              <img src={require("../img/ww-logo-vertical-dark.svg")} width="100" height="104" alt="" />
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
