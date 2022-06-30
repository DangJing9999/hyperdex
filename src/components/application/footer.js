import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
/*
import partner01 from '../../assets/images/partners/defied_bank.svg'
import partner02 from '../../assets/images/partners/empire_global.svg'
import partner03 from '../../assets/images/partners/starter_xyz.svg'
import partner04 from '../../assets/images/partners/mc_defi.svg'
import partner05 from '../../assets/images/partners/market_across.svg'
import partner06 from '../../assets/images/partners/amber.svg'
import featured01 from '../../assets/images/featured/featured01.svg'
import featured02 from '../../assets/images/featured/featured02.svg'
import featured03 from '../../assets/images/featured/featured03.svg'
import featured04 from '../../assets/images/featured/featured04.svg'
import featured05 from '../../assets/images/featured/featured05.svg'
import featured06 from '../../assets/images/featured/featured06.svg'
import featured07 from '../../assets/images/featured/featured07.svg'
import featured08 from '../../assets/images/featured/featured08.svg'
import featured09 from '../../assets/images/featured/featured09.svg'
import featured10 from '../../assets/images/featured/featured10.svg'
import featured11 from '../../assets/images/featured/featured11.svg'
*/

// import SwiperCore, { Autoplay } from 'swiper'
import { withTranslation } from 'react-i18next';
import {
    useGoogleReCaptcha,
    GoogleReCaptcha
} from "react-google-recaptcha-v3";
import ApiService from '../../services/api_service';
import { notify, links } from '../application/config';

const Footer = (props) => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    // SwiperCore.use([Autoplay])

    const { t } = props;

    const [isAgree, setIsAgree] = useState(false);
    const [formEmail, setFormEmail] = useState('')
    // const [captchaValue, setCaptchaValue] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const clickAgree =()=>{
        setIsAgree(!isAgree)
    }

    function onChange(value) {
        // setCaptchaValue(value)
        // setIsSubscribed(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newToken = await executeRecaptcha('subscribe');
        // setCaptchaValue(newToken);
        subscribe(formEmail, /*captchaValue*/ newToken)
    }
    

    const subscribe = (email, captchaValue) => {
        const url = 'https://test.hyperdex.cloud/web/subscribe/' + email + '/' + (captchaValue || 'null')
        const apiService = new ApiService();
        apiService.fetch(encodeURI(url), { method: 'GET' })
        .then(response => {
            setIsSubscribed(response.result.subscribed === 'true')
            if (response.result.subscribed) {
                notify.success(response.result.message)
            } else {
                notify.warning(response.result.message)
            }
            
        })
        .catch(error => {
            setIsSubscribed(false)
            notify.error('Error subscribing')
            console.log(error);
        })
    }

    const handleEmailValue = (e) => {
        setFormEmail(e.target.value)
    }

    return (
        <footer className="site-footer">
            <div className="site-footer__top">
                {/*
                <div className="container">
                    <h3 className="section-title__title text-center" style={{ color: 'white' }}> PARTNERS</h3>
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://defiedbank.com" target="_blank" rel="noopener noreferrer">
                                <img src={partner01} style={{ width: "100%" }} alt="Defied Bank" />
                                <div className="text-center" style={{ color: 'grey' }}>Defied Bank</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://empireglobal.partners" target="_blank" rel="noopener noreferrer">
                                <img src={partner02} style={{ width: "100%" }} alt="Empire Global" />
                                <div className="text-center" style={{ color: 'grey' }}>Empire Global</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://starter.xyz" target="_blank" rel="noopener noreferrer">
                                <img src={partner03} style={{ width: "100%" }} alt="Starter XYZ" />
                                <div className="text-center" style={{ color: 'grey' }}>Starter XYZ</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            
                                <img src={partner04} style={{ width: "100%" }} alt="Montecarlo Defi Group" />
                                <div className="text-center" style={{ color: 'grey' }}>Montecarlo Defi Group</div>
                            
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://marketacross.com" target="_blank" rel="noopener noreferrer">
                                <img src={partner05} style={{ width: "100%" }} alt="Market Across" />
                                <div className="text-center" style={{ color: 'grey' }}>Market Across</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://ambergroup.io" target="_blank" rel="noopener noreferrer">
                                <img src={partner06} style={{ width: "100%" }} alt="Amber Group" />
                                <div className="text-center" style={{ color: 'grey' }}>Amber Group</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="section-title__title text-center" style={{ color: 'white' }}> FEATURED IN</h3>
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://www.forbes.com/sites/lawrencewintermeyer/2022/02/17/defi-is-on-the-move-to-the-institutional-market-more-a-marathon-than-a-sprint/?sh=7080280522c3" target="_blank" rel="noopener noreferrer">
                                <img src={featured07} style={{ width: "100%" }} alt="Forbes" />
                                <div className="text-center" style={{ color: 'grey' }}>Forbes</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://www.investingcube.com/hyperdex-review-a-tool-transforming-defi-investments/" target="_blank" rel="noopener noreferrer">
                                <img src={featured08} style={{ width: "100%" }} alt="InvestingCube" />
                                <div className="text-center" style={{ color: 'grey' }}>InvestingCube</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://www.the-blockchain.com/2022/01/20/top-3-platforms-that-offer-prepackaged-investment-strategies/" target="_blank" rel="noopener noreferrer">
                                <img src={featured09} style={{ width: "100%" }} alt="BlockchainNews" />
                                <div className="text-center" style={{ color: 'grey' }}>BlockchainNews</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://cryptobullsclub.com/making-sense-of-defis-complexity/" target="_blank" rel="noopener noreferrer">
                                <img src={featured10} style={{ width: "100%" }} alt="Crypto Bulls Club" />
                                <div className="text-center" style={{ color: 'grey' }}>Crypto Bulls Club</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://coingape.com/top-ways-people-lost-money-with-crypto-in-2021-and-what-we-can-learn-from-them/" target="_blank" rel="noopener noreferrer">
                                <img src={featured11} style={{ width: "100%" }} alt="CoinGape" />
                                <div className="text-center" style={{ color: 'grey' }}>CoinGape</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://coinquora.com/hyperdex-defi-review/" target="_blank" rel="noopener noreferrer">
                                <img src={featured04} style={{ width: "100%" }} alt="CoinQuora" />
                                <div className="text-center" style={{ color: 'grey' }}>CoinQuora #2</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://ihodl.com/analytics/2022-01-11/scam-wicks-got-you-down-here-are-some-ways-protect-yourself/" target="_blank" rel="noopener noreferrer">
                                <img src={featured01} style={{ width: "100%" }} alt="iHodl" />
                                <div className="text-center" style={{ color: 'grey' }}>iHodl</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://coincodex.com/article/13391/how-blockchain-is-disrupting-the-future-of-professional-investment/" target="_blank" rel="noopener noreferrer">
                                <img src={featured02} style={{ width: "100%" }} alt="CoinCodex" />
                                <div className="text-center" style={{ color: 'grey' }}>CoinCodex</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://coinpedia.org/news/wolverinu-updates-for-2022-nft-game-marketplace-a/" target="_blank" rel="noopener noreferrer">
                                <img src={featured03} style={{ width: "100%" }} alt="CoinPedia" />
                                <div className="text-center" style={{ color: 'grey' }}>CoinPedia</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://coinquora.com/will-defi-investment-ever-become-simple-enough-for-the-rest-of-us/" target="_blank" rel="noopener noreferrer">
                                <img src={featured04} style={{ width: "100%" }} alt="CoinQuora" />
                                <div className="text-center" style={{ color: 'grey' }}>CoinQuora #1</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://www.investing.com/news/cryptocurrency-news/will-defi-investment-ever-become-simple-enough-for-the-rest-of-us-2740288" target="_blank" rel="noopener noreferrer">
                                <img src={featured05} style={{ width: "100%" }} alt="Investing.com" />
                                <div className="text-center" style={{ color: 'grey' }}>Investing.com</div>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://zycrypto.com/the-four-algorithmic-trading-tools-worth-watching-in-2022-beyond/" target="_blank" rel="noopener noreferrer">
                                <img src={featured06} style={{ width: "100%" }} alt="ZyCrypto" />
                                <div className="text-center" style={{ color: 'grey' }}>ZyCrypto</div>
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </div>
            <div className="site-footer__middle">
                <div className="site-footer-shape"></div>
                <div className="container">
                    <div className="site-footer__middle-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <h3 className="footer-widget__title">{t('Say Hi')}</h3>
                                    <div className="footer-widget__about-text-box">
                                    
                                    </div>
                                    <ul className="footer-widget__about-contact list-unstyled">
                                    
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="text">
                                                <a href="mailto:info@hyperdex.finance" target="_blank" rel="noopener noreferrer">info@hyperdex.finance</a>
                                            </div>
                                        </li>
                                
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__links clearfix">
                                    <h3 className="footer-widget__title">Links</h3>
                                    <ul className="footer-widget__links-list list-unstyled clearfix">
                                        <li><Link to={links.FAQ}>FAQ</Link></li>
                                        <li><a href="https://t.me/HyperDexFinance" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                                        <li><a href="https://twitter.com/HyperdexFinance" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                        <li><a href="https://hyperdex.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__explore clearfix">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="footer-widget__explore-list list-unstyled clearfix">
                                        <li><a href="http://hyperdex.finance/docs/HyperDex_Whitepaper_v1.pdf" target="_new">White Paper</a></li>
                                        <li><a href="https://bit.ly/HyperdexPrivateSale" target="_blank" rel="noopener noreferrer">Private Sale</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <h3 className="footer-widget__title">{t('Subscribe')}</h3>
                                    
                                        { isSubscribed ?
                                        <h5>{t("Thank you for subscribing!")}</h5>
                                        :
                                        <form className="footer-widget__newsletter-form" onSubmit={handleSubmit}>
                                            <div className="footer-widget__newsletter-input-box">
                                                <GoogleReCaptcha onVerify={t => onChange(t)} />
                                                <input type="email" placeholder={t("Email address")} name="email" required="required" autoComplete="off" onChange={handleEmailValue}/>
                                                <button type="submit" className="footer-widget__newsletter-btn" disabled={!isAgree}><i
                                                    className="far fa-paper-plane"></i></button>
                                            </div>
                                        </form>
                                        }
                                    
                                    <div className="footer-widget__newsletter-bottom">
                                        {/*<div className="footer-widget__newsletter-bottom-icon">*/}
                                            <i className={'fa' + (isAgree ? ' fa-check' : ' fa-circle')} 
                                                style={isAgree ? {color: 'white', border: '1px solid white', borderRadius: '50%'} : {color: 'rgba(var(--hypdex-white-rgb), 0.2)', border: '1px solid rgba(var(--hypdex-white-rgb), 0.2)', borderRadius: '50%'}}
                                                onClick={e => clickAgree(e)}></i>
                                        {/*</div>*/}
                                        <div className="footer-widget__newsletter-bottom-text">
                                            <p>{t('I agree to all your terms and policies')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-inner">
                                    <div className="site-footer__bottom-left">
                                        <p className="site-footer__bottom-text">© HYPERDEX 2021 - all rights reserved</p>
                                    </div>
                                    <div className="site-footer__bottom-right">
                                        <ul className="list-unstyled site-footer__bottom-menu">
                                            <li><Link to={links.TERMS}>Terms &amp; Conditions</Link></li>
                                            <li><Link to={links.PRIVACY}>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withTranslation()(React.memo(Footer))
