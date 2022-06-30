import React, { useEffect } from 'react';

import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
import { withTranslation } from 'react-i18next'

function TermsOfServices(props) {
    const { t } = props

    useEffect(() => {
        jQueryFunc()
        loadPage(this.location.pathname + this.location.search)
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <section className="page-header p-b-0">
			<div className="page-header-bg" >
			</div>
			

			<div className="page-header-shape-1"></div>
			<div className="page-header-shape-2"></div>
			<div className="page-header-shape-3"></div>

			<div className="container text-center">
				<div className="page-header__inner">
                    <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="abs-center containerCube"><div className="cubez cube1"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube2"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube3"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube4"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube5"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube6"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube7"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube8"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube9"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube10"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube11"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube12"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube13"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube14"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube15"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube16"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube17"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube18"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube19"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube20"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube21"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube22"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube23"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube24"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube25"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube26"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube27"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div></div>
                </div>
                <div className="col-xl-6 col-lg-6">
					<h2 style={{ textAlign: 'center', color: 'white' }}>t{("Terms")}</h2>
                    
                   
                </div>
				</div></div>
           
               
			</div>
            
		</section>
        
        <section>
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center text-white">
                        <h3 className="text-white">{t("TERMS OF SERVICE")}</h3>
                        <br/>
                        <h4 className="text-white">Cookies</h4>
                        <p>{t("This website uses only strictly necessary cookies. No user data is stored. " + 
                            "Strictly necessary cookies are classified as cookies that must be present for the website to provide the basic functions of the website. " + 
                            "They are essential to be able to access features of the website and could include signing in, adding items to a cart, or e-billing. They are typically essential first-party session cookies, but not all first-party cookies are strictly necessary cookies. " + 
                            "They allow for a user to navigate back and forth between pages without losing their previous actions from the same session.  Strictly necessary cookies are the only cookies that all cookie laws allow to be exempt from requiring user consent. " + 
                            "Since these cookies are necessary for the functionality of a website, website owners do not have to get consent from the user to place strictly necessary cookies on their devices. Most importantly, the use must be related to a service specifically requested by the user. " + 
                            "Examples of strictly necessary cookies include those which save your shopping cart when online shopping or cookies that allow you to access secure areas of a website through logging in.")}
                        </p>

                        <br/>
                        <h3 id="privacy" className="text-white">Privacy Policy</h3>
                        <p>
                            {t("We don't track you. We don't profile you. We don't store your data.")}
                        </p>
                  </div>
              </div>
            </div>
        </section>
      </>
    )
}
export default withTranslation()(TermsOfServices)