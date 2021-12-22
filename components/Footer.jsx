import React from 'react'
import Link from 'next/link'
import { useWallet } from 'use-wallet'

export default function Footer() {
    const wallet = useWallet()
    const blockNumber = wallet.getBlockNumber()

    return (
        <React.Fragment>
        <hr />
        <footer className="footer ripped-top">
        <div className="container">
            <div className="grid gy-5 footer-links links-inverted">
            <div className="col m:col-3 footer-links__header">
                <div>
                <img src={require("../img/ww-logo-vertical-light.svg")} width="80" height="83" alt="" />
                </div>
                <p className="mw-200px mt-2 mx-auto m:mx-0">Wizards and Wagons is a proud NFT collection of randomized 3D RPG Avatars</p>
            </div>
            <div className="col s:col-4 m:col-3 footer-links__group">
                <h3 className="footer-links__title">Links</h3>
                <ul className="footer-links__list">
                    <li>
                        <Link href="/#welcome">
                            <a>Welcome</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#avatars">
                            <a>Give Rise to Adventure</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#about-us">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#team">
                            <a>Wizards & Wagons Team</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col s:col-4 m:col-3 footer-links__group">
                <h3 className="footer-links__title">Legal</h3>
                <ul className="footer-links__list">
                <li>
                    <Link href="/terms">
                        <a>Terms and Conditions</a>
                    </Link>
                </li>
                <li>
                    <Link href="/mint">
                        <a>Mint Now</a>
                    </Link>
                </li>
                <li><a href="https://wnwnft.notion.site/wnwnft/Wizards-Wagons-Whitepaper-997f6a94c66b4f959044a6d496612c79" target="_blank">Roadmap</a></li>
                <li><a href="#">White Paper</a></li>
                </ul>
            </div>
            <div className="col s:col-4 m:col-3 footer-links__group d-flex flex-column">
                <h3 className="footer-links__title">HQ</h3>
                <p className="mt-0">Made with fantasy in the US.</p>
                
                <ul className="icon-group mt-3 m:mt-auto mb-1em justify-content-center m:justify-content-start">
                <li>
                    <a href="https://discord.gg/WizardsnWagons" target="_blank"><svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Discord"><use xlinkHref="/img/icons.svg#discord"></use></svg></a>
                </li>
                <li>
                    <a href="https://twitter.com/WizardsNWagons" target="_blank"><svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Twitter"><use xlinkHref="/img/icons.svg#twitter"></use></svg></a>
                </li>
                {
                    wallet.status=='connected' ? (

                        <li>
                            <a href="#" className="btn btn--xs btn--inverse link-no-decoration" style={{"--text-offset": "0px"}} onClick={() => wallet.reset()}>
                            <svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                            <span className="header__action-text d-none s:d-block">Disconnect</span>
                            </a>
                        </li> 
                    ) : (

                        <li>
                            <a href="#" className="btn btn--xs btn--inverse link-no-decoration" style={{"--text-offset": "0px"}} onClick={() => wallet.connect()}>
                            <svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                            <span className="header__action-text d-none s:d-block">Connect</span>
                            </a>
                        </li> 
                    )
                }
                </ul>
            </div>
            </div>
        </div>
        </footer>
        </React.Fragment>
    )
}