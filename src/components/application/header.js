import React, { useEffect, useState } from 'react';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// import Web3 from 'web3';
import { languages, links } from './config';
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import logo from "../../assets/images/logo.png"
import certikLogo from '../../assets/images/certik.svg'
import $ from 'jquery'

function Header(props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState('en')
  // const [netOK, setNetOK] = useState(false)

  // const { walletAddress, setWalletAddress } = props

  const { t } = useTranslation();

  /*
  const switchNetwork = async () => {
    props.setBSCnetwork(false)
    notify.warning("Please select bsc testnet network!");
    props.handleAddNetwork()
  }
  */

  /*
  const connectWallet = async (e) => {
    var account = ''
    if(window.ethereum && netOK){
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      account = accounts[0];
      let web3 = new Web3(window.ethereum);
      if (web3.currentProvider.chainId === config.chainID) {
        props.setBSCnetwork(true)
        if (account) {
          localStorage.setItem('walletAddress', account);
          setWalletAddress(account);
        }
      } else {
        props.setBSCnetwork(false)
        notify.warning("Please select bsc testnet network!");
        props.handleAddNetwork()
      }
    } else {
      localStorage.setItem('walletAddress', '');
      setWalletAddress('');
    }
    // window.location.reload(false);
    if (account) {
      console.log(account)
      window.location.href = '#/account'
    }
  }
  */

  /*
  const disconnectWallet = async (e)=>{    
    if(window.ethereum && walletAddress) {
      localStorage.setItem('walletAddress', '');
      setWalletAddress('');
    }
  }
  */

  /*
  const getContractDetail = async () =>{
    if(window.ethereum){
      let web3 = await new Web3(window.ethereum);
      var account = await web3.currentProvider.selectedAddress;
      var HyperTokenContract = await new web3.eth.Contract(config.HyperTokenABI, config.HyperTokenContract);
      var BalanceToken = await HyperTokenContract.methods.balanceOf(account).call();
      var hyperTokenDecimals = await HyperTokenContract.methods.decimals().call()
      setbalanceOf(BalanceToken/10**hyperTokenDecimals);
      var totalUsdInvestment = 0
      var totalUsdProfit = 0
      var totalHyperTokenProfit = 0
      for (var fc = 0; fc < config.FundManagerContracts.length; fc++) {
        var fmc = config.FundManagerContracts[fc]
        if (fmc !== '') {
          var FundManagerContract = await new web3.eth.Contract(config.FundManagerABIs[fc], fmc);
          var getTotalUserActualProfit = await FundManagerContract.methods.getTotalUserActualProfit(account).call();
          totalUsdInvestment += parseInt(getTotalUserActualProfit.usdInvestment || getTotalUserActualProfit.localUsdInvestment) / 1e18
          totalUsdProfit += parseInt(getTotalUserActualProfit.usdProfit || getTotalUserActualProfit.localUsdProfit) / 1e18
          totalHyperTokenProfit += (parseInt(getTotalUserActualProfit.hyperTokenProfitBase || getTotalUserActualProfit.localHyperTokenProfitBase) 
            + parseInt(getTotalUserActualProfit.hyperTokenProfitBonus || getTotalUserActualProfit.localHyperTokenProfitBonus)) / 10**hyperTokenDecimals
        }
      }
      sethyperTokenProfit(totalHyperTokenProfit);
      setusdProfit(totalUsdProfit.toFixed(12));
      setusdInvestment(totalUsdInvestment.toFixed(12));
    }
  }
  */

  const toggleMobileMenu = (el) => {
    setMobileMenu(!mobileMenu)
    el.stopPropagation()
  }

  const handleChangeLanguage = (item) => {
    i18next.changeLanguage(item);
    setLanguage(item)
    // setLangSelection(false)
  }

  const langChecked = (l) => {
    return ( language === l ? <i className="fas fa-check" style={{ alignItems: "center", float: "right" }}></i> : '' )
  }

  document.addEventListener("click", (e) => {
    // if (e.target.className.slice(0, 2) !== 'fa') {
      setMobileMenu(false)
    // }
    e.stopPropagation()
  }, false);

  useEffect(() => {
    /*
    var defaultLanguage = i18next.language.split('-')[0]
    if (!languages[defaultLanguage]) {
      defaultLanguage = 'en'
    }
    i18next.changeLanguage(defaultLanguage)
    setLanguage(defaultLanguage)
    */
    /*
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum)
      setNetOK(web3.currentProvider.chainId === config.chainID)
    }
    */
  }, [])

  useEffect(() => {
    if (mobileMenu) {
      $(".mobile-nav__wrapper").addClass("expanded");
      $("body").addClass("locked");
    } else {
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").removeClass("locked");
    }
  }, [mobileMenu])

  const menuContainer = () => {
    return (
      <>
        <div className="main-menu-wrapper__left">
          <div className="main-menu-wrapper__logo">
            <Link to={links.HOME}><img className="logo" src={logo} alt="" /></Link>
          </div>
          <div className="main-menu-wrapper__main-menu">
            <div className="mobile-nav__toggler" onClick={ (e) => toggleMobileMenu(e) }><i className="fa fa-bars"></i></div>
            <ul className="main-menu__list">
              <li><Link to={links.HELP}>Docs &amp; Help</Link></li>
              <li><a href="https://bit.ly/HyperdexPrivateSale" target="_blank" rel="noopener noreferrer">Private Sale</a></li>
              <li><Link to={links.TEAM}>Team </Link></li>
              <li className="dropdown">
                <Link to="#">Cubes{/* &amp; Swap*/}</Link>
                <ul>
                    <li><a href={links.FIXED_INCOME}>Fixed Income</a></li>
                    <li><a href={links.ALGO_TRADING}>Algo Trading</a></li>
                    <li><a href={links.RACE_TRADING}>Race Trading</a></li>
                    {/*<li><a href={links.SWAP}>Swap</a></li>
                    <li><a href={links.LIQUIDITY}>Liquidity</a></li>*/}
                </ul>
              </li>              
              <li className="dropdown">
                <Link to="#">Links</Link>
                <ul>                                       
                  <li><a href={links.ACCOUNT}>Account</a></li>
                  <li><Link to={links.STATS}>Stats</Link></li>
                  {/*<li><Link to={HELP}>Help</Link></li>*/}
                  <li><Link to={links.CONTACT}>Contact </Link></li>
                  <li><Link to={links.HOW}>How it works </Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#"><i className="fas fa-2x fa-language"></i></Link>
                <ul>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('en') }>EN { langChecked('en') }</Link></li>
                  {/*<li><Link to="#" onClick={ () => handleChangeLanguage('de') }>DE { langChecked('de') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('es') }>ES { langChecked('es') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('it') }>IT { langChecked('it') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('ja') }>JA { langChecked('ja') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('br') }>BR { langChecked('br') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('fr') }>FR { langChecked('fr') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('ko') }>KO { langChecked('ko') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('ru') }>RU { langChecked('ru') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('tr') }>TR { langChecked('tr') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('zh') }>ZH { langChecked('zh') }</Link></li>
                  <li><Link to="#" onClick={ () => handleChangeLanguage('zh-yue') }>ZH-YUE { langChecked('zh-yue') }</Link></li>*/}
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-menu-wrapper__logo" style={{ paddingLeft: '4em', width: '10em' }}>
            <a href={links.CERTIK_AUDIT} target="_blank" rel="noopener noreferrer">
              <h5 className="text-center" style={{ color: 'white', lineHeight: '.8em' }}>AUDIT BY</h5>
              <img className="logo" src={certikLogo} alt="" style={{ width: '100%' }} />
            </a>
          </div>
        </div>
        <div className="main-menu-wrapper__right">                     
          <div className="main-menu-wrapper__call">
            <div className="main-menu-wrapper__call-number">
              {/* walletAddress && netOK ?
                <Link className="thm-btn" to={links.ACCOUNT}>{t('Account')}</Link>
                :
                ( netOK ?
                  <div className="thm-btn" style={{ cursor: 'pointer' }} onClick={ () => connectWallet() }>{t('Connect Wallet')}</div>
                  :
                  <div className="thm-btn" style={{ cursor: 'pointer' }} onClick={ () => switchNetwork() }>{t('Switch Network')}</div>
                )
              */}
              <a className="thm-btn" href={links.APP}>{t('Go to the APP')}</a>
            </div>
          </div>
      </div>
    </>
    )
  }

  return (
    <>
      <header className="main-header clearfix">
        <nav className="main-menu clearfix">
            <div className="main-menu-wrapper clearfix">
                { menuContainer() }
            </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content">{ menuContainer() }</div>
      </div>{/* /.stricky-header */}
    </>
  )
}

export default withRouter(Header);
