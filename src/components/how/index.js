import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
import { withTranslation } from 'react-i18next'
import { links } from '../application/config'

function How(props) {
    const { t } = props

    useEffect(() => {
        jQueryFunc()
        loadPage(window.location.pathname + window.location.search)
    }, [])

    return (
        <>
        <section className="page-header">
			<div className="page-header-bg" >
			</div>
			{/* <div className="page-header-border"></div>
			<div className="page-header-border page-header-border-two"></div>
			<div className="page-header-border page-header-border-three"></div>
			<div className="page-header-border page-header-border-four"></div>
			<div className="page-header-border page-header-border-five"></div>
            <div className="page-header-border page-header-border-six"></div> */}

			<div className="page-header-shape-1"></div>
			<div className="page-header-shape-2"></div>
			<div className="page-header-shape-3"></div>

			<div className="container text-center">
				<div className="page-header__inner">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="wrapper">
                            <div className="wrapper__content">
                                   <div className="cube_dot">
                                        <div className="cube__side cube__side--front"></div>
                                        <div className="cube__side cube__side--back"></div>
                                        <div className="cube__side cube__side--left"></div>
                                        <div className="cube__side cube__side--right"></div>
                                        <div className="cube__side cube__side--top"></div>
                                        <div className="cube__side cube__side--bottom"></div>
                                   </div>
                       
                                   <div className="shadowbox">
                                        <div className="cube_dot">
                                               <div className="cube__side cube__side--front"></div>
                                               <div className="cube__side cube__side--back"></div>
                                               <div className="cube__side cube__side--left"></div>
                                               <div className="cube__side cube__side--right"></div>
                                               <div className="cube__side cube__side--top"></div>
                                               <div className="cube__side cube__side--bottom"></div>
                                        </div>
                                   </div>
                            </div>
                       </div>
                </div>
                <div className="col-xl-6 col-lg-6">
					<h2>{t("How it works")}  </h2>
                    <hr/>
                    <p>
                      {t("HyperDex allows investors of all backgrounds to capture the newly generated value within DeFi. This is accomplished by simplifying the process for multiple investment strategies, with a Fixed Income, Algorithmic, and Race Trading strategy available for investors. All that is required by users is to select an investment cube and simply deposit the chosen asset.")}
                    </p>
                   
                </div>
				</div></div>
           
               
			</div>
            
		</section>
        
        

        <section className="cta-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-4 col-xs-12">
                        <figure className="hypdex-logo">
                            <div className="cubeHyp">
                                <div className="face face-front"></div>
                                <div className="face face-front-in"></div>
                                <div className="face face-back"></div>
                                <div className="face face-back-in"></div>
                                <div className="face face-left"></div>
                                <div className="face face-left-in"></div>
                                <div className="face face-right"></div>
                                <div className="face face-right-in"></div>
                                <div className="face face-top"></div>
                                <div className="face face-top-in"></div>
                            </div>
                        </figure>
                        <p className=" text-white text-center">
                          {t("HyperDex allows anyone owning crypto assets to invest in the platform through the integration of crypto wallets such as MetaMask and Exodus")}
                        </p>
                    </div>
                    <div className="col-xl-4 col-md-4 col-xs-12">
                        <figure className="hypdex-logo">
                            <div className="cubeHyp">
                                <div className="face face-front"></div>
                                <div className="face face-front-in"></div>
                                <div className="face face-back"></div>
                                <div className="face face-back-in"></div>
                                <div className="face face-left"></div>
                                <div className="face face-left-in"></div>
                                <div className="face face-right"></div>
                                <div className="face face-right-in"></div>
                                <div className="face face-top"></div>
                                <div className="face face-top-in"></div>
                            </div>
                        </figure>
                        <p className=" text-white text-center">
                          {t("HyperDex is a DeFi investment platform that fulfills the crypto market needs by routing the crypto assets of the users into different products. It accomplishes this by using proprietary algorithms and staking protocols with the ultimate aim of offering the best returns.")}
                        </p>
                    </div>
                    <div className="col-xl-4 col-md-4 col-xs-12">
                        <figure className="hypdex-logo">
                            <div className="cubeHyp">
                                <div className="face face-front"></div>
                                <div className="face face-front-in"></div>
                                <div className="face face-back"></div>
                                <div className="face face-back-in"></div>
                                <div className="face face-left"></div>
                                <div className="face face-left-in"></div>
                                <div className="face face-right"></div>
                                <div className="face face-right-in"></div>
                                <div className="face face-top"></div>
                                <div className="face face-top-in"></div>
                            </div>
                        </figure>
                        <p className=" text-white text-center">
                          {t("HyperDex offers three strategies of investment, called Cubes, each with varied returns and risks: Fixed Income Cube, Algo Cube and Race Cube. Additionally, HyperDex offers its native token HYP (Hyper Token) which can only be obtained through swapping or minting.")}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section >
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="timeline">
                        <li className="timeline-event">
                          <label className="timeline-event-icon"></label>
                          <div className="timeline-event-copy">
                            <h4 className="timeline-event-thumbnail">{t("Download and install Metamask")} ( <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">https://metamask.io/</a>)</h4>
                            
                          </div>
                        </li>
                        <li className="timeline-event">
                          <label className="timeline-event-icon"></label>
                          <div className="timeline-event-copy">
                            <h4 className="timeline-event-thumbnail">{t("Create a new wallet in Metamask")}</h4>
                          
                          </div>
                        </li>
                        <li className="timeline-event">
                          <label className="timeline-event-icon"></label>
                          <div className="timeline-event-copy">
                            <h4 className="timeline-event-thumbnail">{t("Add Binance Smart Chain to your networks")}</h4>                           
                          </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                              <h4 className="timeline-event-thumbnail">{t("Fill your wallet with the currencies you're going to invest.")}</h4>                           
                            </div>
                          </li>
                          <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                              <h4 className="timeline-event-thumbnail text-white">{t("Connect your wallet to Hyperdex platform.")}</h4>                           
                            </div>
                          </li>
                          <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                              <h4 className="timeline-event-thumbnail ">{t("Ready to go! Try HyperDex's Investment Cubes, swaps and LP.")}</h4>                           
                            </div>
                          </li>
                      </ul>  
                     
                  </div>
                  <div className="text-center">
                   <h2 className="text-white">{t("Visit our")} <Link className="customHover" to={links.HELP}>help center</Link>. {t("For any questions or if you need support")} </h2> 
                  </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default withTranslation()(How)