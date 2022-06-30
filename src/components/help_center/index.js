import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
import { withTranslation } from 'react-i18next';
import {
    useGoogleReCaptcha,
    GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ApiService from '../../services/api_service';
import { notify, links } from '../application/config';

function HelpCenter(props) {
    const { t } = props
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [formEmail, setFormEmail] = useState('')
    const [formMessage, setFormMessage] = useState('')
    // const [messageSent, setMessageSent] = useState(false)
    const [sending, setSending] = useState(false)

    useEffect(() => {
        jQueryFunc()
        loadPage(window.location.pathname + window.location.search)
    }, [])

    /*
    const sendQuestion = async (el) => {
        const question = document.getElementById("question").value;
        const email = document.getElementById("email").value;
        window.open('mailto:info@hyperdex.finance?subject=Website question&body=' + question + '%0D%0APlease answer to: ' + email);
    }
    */

    const onChange = (value) => {
        // setCaptchaValue(value)
        // setIsSubscribed(false)
    }

    const sendMessage = (email, message, captchaValue) => {
        const url = 'https://admin.hyperdex.cloud/web/sendMessage/' + email + '/' + message + '/' + (captchaValue || 'null')
        const apiService = new ApiService();
        apiService.fetch(encodeURI(url), { method: 'GET' })
        .then(response => {
            // setMessageSent(response.result.messageSent === 'true')
            if (response.result.messageSent) {
                notify.success(response.result.message)
                setFormEmail('')
                setFormMessage('')
            } else {
                notify.warning(response.result.message)
            }
            setSending(false)
        })
        .catch(error => {
            // setMessageSent(false)
            notify.error('Error sending message')
            console.log(error);
            setSending(false)
        })
    }
    
    const handleEmailValue = (e) => {
        setFormEmail(e.target.value)
    }

    const handleMessageValue = (e) => {
        setFormMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        if (sending) {
            return
        }
        e.preventDefault()
        setSending(true)
        const newToken = await executeRecaptcha("sendMessage");
        // setCaptchaValue(newToken);
        sendMessage(formEmail, formMessage, newToken)
    }
    
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
                    <h2>{t("Help Center")} </h2>
                    <hr/>
                    <p>
                        {t("Need help? Check out our documentation or reach out directly via our Telegram, Twitter, or Email.")}
                    </p>
                
                </div>
                </div></div>
        
            
            </div>
            
        </section>
        <section>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="text-white"><a className="text-white" href="https://hyperdex.finance/docs/HyperDex_Whitepaper_v1.pdf" target="_blank" rel="noopener noreferrer"> <i className="far fa-file-pdf"></i> White Paper </a></h2>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white"><a className="text-white" href="https://hyperdex.finance/docs/HyperDex_Tokenomics.pdf" target="_blank" rel="noopener noreferrer"> <i className="far fa-file-pdf"></i> Tokenomics </a></h2>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white"> <a className="text-white" href="https://info-78.gitbook.io/hyperdex-wiki/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-wikipedia-w"></i> Hyperdex Wiki </a></h2>
                    </div>
                    <div className="col-md-3">
                        <h2 className="text-white"> <Link className="text-white" to={links.FAQ}> <i className="far fa-question-circle"></i> {t("FAQ's Page")} </Link> </h2>
                    </div>
                </div>
            </div>
            <div className="row m-t-20"  id="contact">
                <div className="col-xl-12 text-center">
                
                    <div className="contact-page__form col-md-6 col-xs-12 mx-auto">
                        <hr/>
                        <h3 className="text-white">{t("Any questions? Let us know!")} </h3>

                        <form  className="comment-one__form contact-form-validated m-t-20" noValidate="novalidate" onSubmit={handleSubmit}>
                            <GoogleReCaptcha onVerify={t => onChange(t)} />
                            <div className="row">
                        
                                <div className="col-xl-12">
                                    <div className="comment-form__input-box">
                                        <input type="email" placeholder={t("Email address")} name="email" required="required" autoComplete="off" value={formEmail} onChange={handleEmailValue} />
                                    </div>
                                </div>                        
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="comment-form__input-box">
                                        <textarea name="message" placeholder={t("Write a message")} required="required" autoComplete="off" value={formMessage} onChange={handleMessageValue}></textarea>
                                    </div>
                                    <button type="submit" className="thm-btn comment-form__btn" data-action="hyperdex-question" disabled={sending}>{sending ? t("Sending...") : t("send a message")}</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
        
        <section className="faq-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion " data-grp-name="faq-one-accrodion2">
                                <div className="accrodion active">
                                    <div className="accrodion-title no-bg">
                                        <h4>{t("First steps with HyperDex")}</h4>
                                    </div>
                                    <div className="accrodion-content no-bg">
                                        <div className="inner">
                                            <p>
                                                <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/yWfZnjkhhhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>{t("First steps with HyperDex")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/yWfZnjkhhhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single faq-page__single-last">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion1">
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>{t("We Help to Create Visual Strategies")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/yWfZnjkhhhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>{t("First steps with HyperDex")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                <iframe style={{ width: '100%' }} height="315" src="https://www.youtube.com/embed/yWfZnjkhhhg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="faq-page__bottom">
                            <h3 className=" text-white">{t("Find more at our")}  <Link style={{ color: '#5c0459', textDecoration: 'none' }} to={links.FAQ}>{t("FAQ page")}</Link>.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
    
}

export default withTranslation()(HelpCenter)