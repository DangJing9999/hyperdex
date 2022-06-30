// import { CHeaderNav } from '@coreui/react'
import React, { useEffect, useState } from 'react'
// import CookieBar from './cookie_bar'
// import footer from './footer'
import {
  MainContent,
  /*Sidebar,*/
  Header,
  Footer,
} from './index'
// import ScrollToTop from './top_scroll'
import Web3 from 'web3';
import config, { notify, links } from './config';
import { Link } from 'react-router-dom'
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import logo from "../../assets/images/logo.png"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Layout = () => {
  const [darkMode, setDarkMode] = useState((localStorage.getItem("darkMode") === null) ? false : localStorage.getItem('darkMode'))
  const [BSCnetwork, setBSCnetwork] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [capcthaKey, setCaptchaKey] = useState('6LcFsXgfAAAAADOidInzgBVyP1zj8yOlVPtxuYcL')

  useEffect(() => {
    let localWalletAddress = localStorage.getItem('walletAddress')
    if (window.ethereum && localWalletAddress) {
      let web3 = new Web3(window.ethereum);
      var account = web3.currentProvider.selectedAddress;
      if (account) {
        localStorage.setItem('walletAddress', account);
        setWalletAddress(account)
        /*
        getContractDetail();
        const interval = setInterval(() => {
          getContractDetail();
        }, 60000);
        return () => clearInterval(interval);
        */
      } else {
        localStorage.setItem('walletAddress','');
        setWalletAddress('');
      }
    }
    /*
    if (process.env.NODE_ENV === 'production') {
      setCaptchaKey('6LdHr3gfAAAAAJKVLeLuJ4IPFhKzBBoMDjbnffeh')
    } else {
      setCaptchaKey('6LcFsXgfAAAAADOidInzgBVyP1zj8yOlVPtxuYcL')
    }
    */
  }, []);

  const switchDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', darkMode)
  }

  const addNetwork = async () => {
    let web3 = new Web3(window.ethereum);
    setBSCnetwork(web3.currentProvider.chainId === "0x61") 
    var network = 0;
    network = await web3.eth.net.getId();
    let netID = '0x' + network.toString(16);
    var params;      
    if (netID === config.chainID) {
        notify.warning("BSC " + config.chainName + "Network has already been added to Metamask.");
        return
    } else {
        params = [{
            chainId: config.chainID,
            chainName: 'Binance Smart Chain ' + config.chainName,
            nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18
            },
            rpcUrls: config.rpcUrls, // ['https://bsc-dataseed1.binance.org/'],
            blockExplorerUrls: config.blockExplorerUrls, // ['https://bscscan.com/']
        }]
    }
    window.ethereum.request({ method: 'wallet_addEthereumChain', params })
      .then(() => console.log('Success'))
      .catch((error) => console.log("Error", error.message));
  }

  const registerToken = async (tokenAddress, tokenSymbol, tokenDecimals, tokenImage) => {
    if (!window.ethereum) return false
    const tokenAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    })
    return tokenAdded
  }

  return (
    <>
    {/*<div className={'c-app c-default-layout' + (darkMode ? ' dark-mode' : ' light-mode')}>*/}
      {/*<Sidebar />*/}
      {/*<div className={'c-wrapper' + (darkMode ? ' dark-mode' : '')}>*/}
      <div className="page-wrapper">
        <Header 
          walletAddress={walletAddress} 
          setWalletAddress={setWalletAddress} 
          darkMode={darkMode} 
          handleChangeMode={switchDarkMode} 
          handleAddNetwork={addNetwork} 
          setBSCnetwork={setBSCnetwork}
          registerToken={registerToken}
        />
        {/*<div className={'c-body' + (darkMode ? ' dark-mode' : '')}>*/}
        <GoogleReCaptchaProvider
          reCaptchaKey={capcthaKey}
        >
          <MainContent 
            walletAddress={walletAddress} 
            setWalletAddress={setWalletAddress} 
          />
        {/*</div>*/}
          <Footer 
            darkMode={darkMode} 
            handleChangeMode={switchDarkMode} 
            BSCnetwork={BSCnetwork} 
            handleAddNetwork={addNetwork} 
            registerToken={registerToken}
          />
        </GoogleReCaptchaProvider>
        {/*<ScrollToTop />
        <CookieBar />*/}
      </div>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <Link to={links.HOME} aria-label="logo image"><img src={logo} width="155"
                        alt="" /></Link>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container"></div>
            {/* /.mobile-nav__container */}

            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@hyperdex.finance" target="_blank" rel="noopener noreferrer">info@hyperdex.finance</a>
                </li>
            </ul>{/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="https://twitter.com/HyperdexFinance" className="fab fa-twitter"> </a>                    
                    <a href="https://t.me/HyperDexFinance" className="fab fa-telegram"> </a>
                    <a href="https://hyperdex.medium.com" className="fab fa-medium"> </a>
                </div>{/* /.mobile-nav__social */}
            </div>{/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/*</div>*/}
    {/*</div>*/}
    </>
  )
}

export default Layout
