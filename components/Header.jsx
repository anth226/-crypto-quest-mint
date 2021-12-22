import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWallet } from 'use-wallet'

const classNames = require("classNames")

export default function Header() {

    const router = useRouter()

    router.pathname

    const wallet = useWallet()
    const blockNumber = wallet.getBlockNumber()
  

    return (
        <React.Fragment>
        <header className="header ripped-bottom">
            <div className="container">
                <Link href="/">
                    <a title="Wizards & Wagons – Home Page" className="brand">
                <div className="brand__logo">
                    <img src={require('../img/ww-logo-horizontal-light-gradient.svg')} width="160" height="63" alt="Wizards & Wagons" />
                </div>
                </a>
                </Link>
                
                <button type="button" className="nav-toggle no-btn">
                <span className="nav-toggle__icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span className="nav-toggle__text visually-hidden">Menu</span>
                </button>
                
                <nav className="nav ripped-right">
                <div className="nav__container">
                    <ul className="nav__menu">
                        {/**add active */}
                    <li className="hidden-desktop">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={classNames({ active: router.pathname === "/mint" })}>
                        <Link href="/mint">
                            <a>Mint Now</a>
                        </Link>
                    </li>
                    <li className={classNames({ active: router.pathname === "/inventory" })}>
                        {/**make when connected */}
                        <Link href="/inventory">
                            <a>Inventory</a>
                        </Link>
                    </li>
                    <li><a href="https://wnwnft.notion.site/Wizards-Wagons-Roadmap-eab56f2684de4d91bd005ff2d3f48968" target="_blank">Roadmap</a></li>
                    <li><a href="https://wnwnft.notion.site/wnwnft/Wizards-Wagons-Whitepaper-997f6a94c66b4f959044a6d496612c79" target="_blank">Whitepaper</a></li>
                    
                    <li className={classNames({ active: router.pathname === "/terms" })}>
                        {/**make when connected */}
                        <Link href="/terms">
                            <a>Terms</a>
                        </Link>
                    </li>
                    
                    </ul>

                    <ul className="header__icons header__icons--mobile justify-content-center icon-group mt-6 hidden-desktop">
                    <li>
                        <a href="https://discord.gg/WizardsnWagons" target="_blank" rel="noreferrer"><svg className="icon" width="16" height="16" role="img" aria-label="Discord"><use xlinkHref="/img/icons.svg#discord"></use></svg></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/WizardsNWagons" target="_blank" rel="noreferrer"><svg className="icon" width="16" height="16" role="img" aria-label="Twitter"><use xlinkHref="/img/icons.svg#twitter"></use></svg></a>
                    </li>
                    <li className="w-100 text-center">
                        <a href="#connect-wallet" className="btn btn--xs btn--inverse header__action">
                        <svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                        <span className="header__action-text">Connect</span>
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
                
                <ul className="header__icons icon-group">
                    <li>
                        <a href="https://discord.gg/WizardsnWagons" target="_blank" rel="noreferrer"><svg className="icon" width="16" height="16" role="img" aria-label="Discord"><use xlinkHref="/img/icons.svg#discord"></use></svg></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/WizardsNWagons" target="_blank" rel="noreferrer"><svg className="icon" width="16" height="16" role="img" aria-label="Twitter"><use xlinkHref="/img/icons.svg#twitter"></use></svg></a>
                    </li>
                    <li>
                        {
                        wallet.status === 'connected' ? (
                            <details className="dropdown dropdown--right">
                                <summary className="btn btn--xs btn--inverse header__action dropdown__toggle">
                                    <svg className="icon icon--size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                                    <span className="header__action-text d-none s:d-block">My Account</span>
                                </summary>
                                <div className="dropdown__body">
                                    <h3 className="h2 mt-0">My Account</h3>
                        
                                    <h4 className="mb-1 opacity-50 fw-normal">Phone Number:</h4>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                                    <p className="d-flex align-items-center gap-2">
                                        <svg className="icon icon--size-s text-danger" width="16" height="16" role="img" aria-label="Not Verified"><use xlinkHref="/img/icons.svg#danger-circle"></use></svg>
                                        <span className="mw-200px text-nowrap">+1 532 987-2212</span>
                                    </p>
                                    <p>
                                        <a href="#" className="btn btn--xs fs-s">Verify</a>
                                        <a href="#" className="btn btn--xs fs-s">Edit</a>
                                    </p>
                                    </div>
                        
                                    <h4 className="mb-1 opacity-50 fw-normal">Wallet Address:</h4>
                                    <p className="d-flex align-items-center gap-2">
                                    <svg className="icon icon--size-s text-success" width="16" height="16" role="img" aria-label="Verified"><use xlinkHref="/img/icons.svg#check-circle"></use></svg>
                                    <span className="mw-200px text-ellipsis">{wallet.account}</span>
                                    </p>
                        
                                    <h4 className="mb-1 opacity-50 fw-normal">Balance:</h4>
                                    <p className="d-flex align-items-center gap-2">
                                    <svg className="icon icon--size-s opacity-50" width="16" height="16" aria-hidden="true"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                                    <strong>{wallet.balance} Eth</strong>
                                    </p>
                        
                                    <div className="mt-5">
                                    <a href="#" className="btn btn--primary btn--s" onClick={() => wallet.reset()}>Disconnect</a>
                                    </div>
                                </div>
                            </details>
                        ) : (
                            <a href="#wallet" className="btn btn&#45;&#45;xs btn&#45;&#45;inverse header__connect" onClick={(e) => {
                                e.preventDefault()
                                wallet.connect()
                            }}>
                                <svg className="icon icon&#45;&#45;size-m" width="16" height="16" role="img" aria-label="Wallet"><use xlinkHref="/img/icons.svg#wallet"></use></svg>
                                <span className="header__connect-text d-none s:d-block">Connect</span>
                            </a>
                        )
                        }
                    </li>
                </ul>
            </div>
        </header>
        </React.Fragment>
    )
}

