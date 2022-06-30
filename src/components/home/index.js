import React from 'react';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom'
import ApiService from '../../services/api_service';
import helper from '../../services/helper'
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { UScurrencyFormatter, links } from '../application/config'
import { withTranslation } from 'react-i18next';
import hyp_minting from "../../assets/images/HYPtoken_minting.svg"
import ApexCharts from 'apexcharts'
// import cubogrande from '../../assets/images/cubogrande.7e2a2ccc.png'
// import returnImg from '../../assets/images/return.svg'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
// import Odometer from 'react-odometerjs';
import Stats from '../stats/index'

import member1 from '../../assets/images/member1.png'
import member2 from '../../assets/images/member2.png'
import member3 from '../../assets/images/member3.png'
import member4 from '../../assets/images/member4.png'
import member5 from '../../assets/images/member5.png'
import member6 from '../../assets/images/member6.png'
// import member7 from '../../assets/images/member7.png'
import member8 from '../../assets/images/member8.png'
import member9 from '../../assets/images/member9.png'

import partner01 from '../../assets/images/partners/defied_bank.svg'
import partner02 from '../../assets/images/partners/empire_global.svg'
import partner03 from '../../assets/images/partners/starter_xyz.svg'
import partner04 from '../../assets/images/partners/mc_defi.svg'
import partner05 from '../../assets/images/partners/market_across.svg'
import partner06 from '../../assets/images/partners/amber.svg'
import partner07 from '../../assets/images/partners/abalone.svg'
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

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areaChartDuration: 'm',
            areaChart: [],
            areaChartSelected: true,

            areaChartTpvDuration: 'm',
            areaChartTpv: [],
            areaChartTpvSelected: true,

            totalAccount: 0,
            totalProfit: 0,
            performancePlatform: 0,
            AUM: 0,
            TVL: 0,
            TPV: 0,

            columnChartDuration: 'm',
            columnChart: {
                categories: [],
                values: []
            },
            isColumnChartDataLoaded: false,

            columnChartTpvDuration: 'm',
            columnChartTpv: {
                categories: [],
                values: []
            },
            isColumnChartTpvDataLoaded: false,

            /*
            return1M: 0,
            return3M: 0,
            return6M: 0,
            return1Y: 0,
            activeCubes: 0,
            alltimeCubes: 0,
            avgManagFee: 0,
            avgPerfFee: 0,
            */
            loadingAUM: true,
            algoAUM: 0,
            fixedAUM: 0,
            raceAUM: 0
        };
    }

    componentDidMount() {
        loadPage(this.props.location.pathname + this.props.location.search)
        // this.fetchAreaChartData();
        this.fetchInfo();
        // this.fetchColumnChartData();
        // this.fetchCubes();
        // this.fetchAreaChartTpvData()
        // this.fetchColumnChartTpvData()
        // window.scrollTo(0, 0)
        /*
        const scrollElements = document.querySelectorAll(".js-scroll");
        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <=
                (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };
        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };
        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };
        */
        /*
        const hideScrollElement = (element) => {
            element.classList.remove("scrolled");
        };
        */
       /*
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.4)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    // hideScrollElement(el)
                }
            })
        }
        window.addEventListener("scroll", () => { 
            handleScrollAnimation();
        });
        */
        jQueryFunc()
    }

    componentDidUpdate(prevProps, prevState) {
        /*
        if (this.state.areaChartDuration !== prevState.areaChartDuration) {
            this.fetchAreaChartData();
            this.fetchInfo();
        }
        if (this.state.columnChartDuration !== prevState.columnChartDuration) {
            this.fetchColumnChartData();
        }
        if (this.state.areaChartTpvDuration !== prevState.areaChartTpvDuration) {
            this.fetchAreaChartTpvData();
        }
        if (this.state.columnChartTpvDuration !== prevState.columnChartTpvDuration) {
            this.fetchColumnChartTpvData();
        }
        */
    }

    selectAreaDuration = event => {
        if (event && event.target && event.target.id) {
            this.setState({ areaChartDuration: event.target.id });
        }
    }

    selectColumnDuration = event => {
        if (event && event.target && event.target.id) {
            this.setState({ columnChartDuration: event.target.id });
        }
    }

    selectAreaDurationTpv = event => {
        if (event && event.target && event.target.id) {
            this.setState({ areaChartTpvDuration: event.target.id });
        }
    }

    selectColumnDurationTpv = event => {
        if (event && event.target && event.target.id) {
            this.setState({ columnChartTpvDuration: event.target.id });
        }
    }

    /*
    fetchAreaChartData = () => {
        const url = 'https://admin.hyperdex.clous/graphql' // `https://test.hyperdex.cloud/web/fund/aumchart/${this.state.areaChartDuration || ''}`;
        const query = '{ PlatformChartDay {timestamp,aum} }'
        const apiService = new ApiService();
        // apiService.fetch(url, { method: 'GET' })
        apiService.fetchGraphQL(url, { method: 'POST', body: JSON.stringify({query: query}) })
            .then(response => {
                let data = [];
                if (response && response.result && response.result.aumchart && helper.isArray(response.result.aumchart)) {
                    data = response.result.aumchart.map(object => {
                        let temp = object;

                        if (temp && temp.x) {
                            temp.x = moment(temp.x, "DD-MM-YYYY").format('YYYY-MM-DD');
                        }

                        return temp;
                    });
                    this.setState({ areaChart: data });
                    this.refreshChart("#chart2", this.state.areaChart)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    fetchAreaChartTpvData = () => {
        const url = `https://test.hyperdex.cloud/web/fund/aumchart/${this.state.areaChartTpvDuration || ''}`;
        const apiService = new ApiService();
        apiService.fetch(url, { method: 'GET' })
            .then(response => {
                let data = [];

                if (response && response.result && response.result.aumchart && helper.isArray(response.result.aumchart)) {
                    data = response.result.aumchart.map(object => {
                        let temp = object;

                        if (temp && temp.x) {
                            temp.x = moment(temp.x, "DD-MM-YYYY").format('YYYY-MM-DD');
                        }

                        return temp;
                    });
                    this.setState({ areaChartTpv: data });
                    this.refreshChart("#chart", this.state.areaChartTpv)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    */

    fetchInfo = () => {
        // this.setState({ loadingAUM: true })
        const url = 'https://admin.hyperdex.cloud/graphql' // 'https://test.hyperdex.cloud/web/fund/info'
        const query = '{ PlatformInfo {timestamp,aum,tvl,totalCubes,activeCubes,accounts,algoAUM,fixedAUM,raceAUM} }'
        const apiService = new ApiService();
        // apiService.fetch(url, { method: 'GET' })
        apiService.fetchGraphQL(url, { method: 'POST', body: JSON.stringify({query: query}) })
        .then(response => {
            // if (response && response.result) {
            if (response && response.data && response.data.PlatformInfo) {
                const platformInfo = response.data.PlatformInfo
                this.setState({
                    totalAccount: platformInfo.accounts || 0,
                    totalPayouts: platformInfo.payouts || 0,
                    performancePlatform: platformInfo.avg1mreturn || 0,
                    AUM: UScurrencyFormatter((platformInfo.aum - platformInfo.tvl) || 0),
                    TVL: UScurrencyFormatter(platformInfo.tvl || 0),
                    TPV: UScurrencyFormatter(platformInfo.tvl || 0),
                    algoAUM: UScurrencyFormatter(platformInfo.algoAUM || 0),
                    fixedAUM: UScurrencyFormatter(platformInfo.fixedAUM || 0),
                    raceAUM: UScurrencyFormatter(platformInfo.raceAUM || 0),
                });
                this.setState({ loadingAUM: false })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    /*
    fetchColumnChartData = () => {
        const url = `https://test.hyperdex.cloud/web/fund/varchart/${this.state.columnChartDuration || ''}`;
        const apiService = new ApiService();
        apiService.fetch(url, { method: 'GET' })
            .then(response => {
                let categories = [], values = [];

                if (response && response.result && response.result.varchart && helper.isArray(response.result.varchart)) {
                    response.result.varchart.forEach(object => {
                        if (object && object.x) {
                            categories.push(moment(object.x, "DD-MM-YYYY").format('YYYY-MM-DD'));
                            values.push(object.y || 0);
                        }
                    });
                    this.setState({ columnChart: { categories, values } });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    */

    /*
    fetchColumnChartTpvData = () => {
        const url = `https://test.hyperdex.cloud/web/fund/varchart/${this.state.columnChartTpvDuration || ''}`;
        const apiService = new ApiService();
        apiService.fetch(url, { method: 'GET' })
            .then(response => {
                let categories = [], values = [];

                if (response && response.result && response.result.varchart && helper.isArray(response.result.varchart)) {
                    response.result.varchart.forEach(object => {
                        if (object && object.x) {
                            categories.push(moment(object.x, "DD-MM-YYYY").format('YYYY-MM-DD'));
                            values.push(object.y || 0);
                        }
                    });
                    this.setState({ columnChartTpv: { categories, values } });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    */

    /*
    fetchCubes = () => {
        const url = ' https://test.hyperdex.cloud/web/fund/cubes'
        const apiService = new ApiService();
        apiService.fetch(url, { method: 'GET' })
            .then(response => {
                if (response && response.result) {
                    this.setState({
                        return1M: response.result.avgreturn1m || 0,
                        return3M: response.result.avgreturn3m || 0,
                        return6M: response.result.avgreturn6m || 0,
                        return1Y: response.result.avgreturn1y || 0,
                        activeCubes: response.result.active || '',
                        alltimeCubes: response.result.alltime || 0,
                        avgManagFee: (response.result.avgmanagfee || 0) * 100,
                        avgPerfFee: (response.result.avgperffee || 0) * 100
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    */

    switchChart = () => {
        this.setState({ areaChartSelected: !this.state.areaChartSelected })    
    }

    switchChartTpv = () => {
        this.setState({ areaChartTpvSelected: !this.state.areaChartTpvSelected })    
    }

    refreshChart = (id, data) => {
        var options = {
            xaxis: {
              type: 'category'
            },
            chart: {
              height: 380,
              width: "100%",
              type: "line"
            },
            tooltip: {
              shared: false,
              intersect: true
            },
            markers: {
              size: 5
            },
            series: [
              {
                name: 'Series 1',
                data: data
              }
            ]
        };
        var chart = new ApexCharts(document.querySelector(id), options);
        chart.render();
    }

    render() {
        const { t } = this.props;
        const { loadingAUM, AUM, algoAUM, fixedAUM, raceAUM } = this.state
        return (
            <>    
            <section className="page-header">
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
                                <h2>4th Dimension Profits</h2>
                                <hr/>
                                <h2 className="top" style={{ textAlign: 'center', color: 'white' }}>
                                    { loadingAUM ?
                                        <b style={{ color: '#ffa0f8', fontSize: '0.8em' }}>{t("loading data...")}</b>
                                    :
                                        <>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <span style={{ fontSize: '0.7em', lineHeight: '1em', float: 'right' }}>ALGO AUM</span>
                                            </div>
                                            <div className="col-xl-4" style={{ fontSize: '0.7em', lineHeight: '1em' }}>
                                                <b style={{ color: '#ffa0f8', float: 'right' }}>{ algoAUM } $</b>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <span style={{ fontSize: '0.7em', lineHeight: '1em', float: 'right' }}>FIXED AUM</span>
                                            </div>
                                            <div className="col-xl-4" style={{ fontSize: '0.7em', lineHeight: '1em'}}>
                                                <b style={{ color: '#ffa0f8', float: 'right' }}>{ fixedAUM } $</b>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <span style={{ fontSize: '0.7em', lineHeight: '1em', float: 'right' }}>RACE AUM</span>
                                            </div>
                                            <div className="col-xl-4" style={{ fontSize: '0.7em', lineHeight: '1em'}}>
                                                <b style={{ color: '#ffa0f8', float: 'right' }}>{ raceAUM } $</b>
                                            </div>
                                        </div>
                                        <hr/>
                                        TOTAL AUM : <b style={{ color: '#ffa0f8' }}>{ AUM } $</b>
                                        </>
                                    }
                                </h2>
                                {/*<h2 className="top" style={{ textAlign: 'center', color: 'white' }}>TVL : <b style={{ color: '#ffa0f8' }}>{ currencyFormatter(this.state.TVL, 2) } $</b>  </h2>
                                <h2 className="top" style={{ textAlign: 'center', color: 'white' }}>TPV : <b style={{ color: '#ffa0f8' }}>{ currencyFormatter(this.state.TPV, 2) } $</b>  </h2>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
                
            {/*Main Slider Start*/}
            {/*
            <div className="container text-center">
                <ul className="thm-breadcrumb list-unstyled">
                    <li className="active"> Investment <br/> 0.00 USD </li>
                    <li className="active"> Investment <br/> 0.00 USD </li>
                    <li className="active"> HYPERTOKEN PROFIT <br/> 0.0000 HYP </li>
                    <li className="active"> HYPERTOKEN BALANCE <br/> 0.0000 HYP</li>
                </ul>
            </div>
            */}
            {/*Main Slider End*/}
            
            {/*Services One Start*/}
            <section className="services-two">
                
                <div className="container" id="about">
                    <div className="services-one__top">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="services-one__top-left">
                                    <div className="section-title text-left">
                                        <h2 className="section-title__title">{t('What is HYPERDEX')}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="services-one__top-text-box">
                                    <p className="services-one__top-text">
                                        {/*t("HyperDex is a DeFi investment platform offering three different types of strategies, each with varied returns and risks: Fixed Income, Algo Trading and Race. Additionally, the platform offers its native token HYP (Hyper Token) which can only be obtained through swapping or minting.")*/}
                                        {t("HyperDex is an all-in-one investment platform built for everybody. Easily invest in DeFi with the click of a button, or create and deploy your own automatic trading strategy for other to invest in - all without prior coding experience! Further amplify your rewards and your HyperDex experience through the use of the native token, HYP")}
                                    </p>
                                </div>
                            </div>
                            <br/>
                            
                            <hr className="m-t-20" />
                            {/*
                            <div className="col-md-12">
                                <img className="mintingSchema" src={hyp_minting} alt="" />
                            </div>
                            */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            {/*Services Two Single*/}
                            <a href={links.FIXED_INCOME}>
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">FIXED  <br/> INCOME
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Earn a fixed return on stablecoin and crypto assets through a variety of Fixed Income Cubes.")}
                                            <br/>
                                            {t("Upgrade to a HyperCube to increase overall returns!")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            {/*Services Two Single*/}
                            <a href={links.ALGO_TRADING}>
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white" >
                                        <h3 className="services-one__title text-white">ALGO <br/> TRADING
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Earn a variable return on select crypto assets through Algo Trading Cubes.")}
                                            <br/>
                                            {t("Upgrade to a HyperCube to increase overall returns!")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            {/*Services Two Single*/}
                            <a href={links.RACE_TRADING}>
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">RACE <br/> TRADING
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Earn a variable return by speculating on the price of select crypto assets.")}
                                            <br/>
                                            {t("Upgrade to a HyperCube to increase overall returns!")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            {/*Services Two Single*/}
                            {/*<Link to="">*/}
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>  
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">MODULAR <br/> CUBE
                                        &nbsp;<span style={{ color: '#891b87' }}>(coming soon)</span>
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Create your own trading algo for others to invest in all without any prior coding experience!")}
                                            <br/>
                                            {t("Also invest in the best performing algos created by other users.")}
                                        </p>
                                    </div>
                                </div>
                            {/*</Link>*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            {/*Services Two Single*/}
                            {/*<a href={links.SWAP}>*/}
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">SWAP <br/>
                                            &nbsp;<span style={{ color: '#891b87' }}>(coming soon)</span>
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Directly swap your tokens via the HyperDex token swap. HYP tokens may only be acquired via swapping or through HYP reward payouts.")}
                                        </p>
                                    </div>
                                </div>
                            {/*</a>*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            {/*Services Two Single*/}
                            {/*<a href={links.LIQUIDITY}>*/}
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">LIQUIDITY <br/>
                                            &nbsp;<span style={{ color: '#891b87' }}>(coming soon)</span>
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Deposit both sides of a liquidity pair and earn a proportional share of swap fees over time.")}
                                        </p>
                                    </div>
                                </div>
                            {/*</a>*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            {/*Services Two Single*/}
                            {/*<Link to="">*/}
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">LENDING <br/> P2P
                                        &nbsp;<span style={{ color: '#891b87' }}>(coming soon)</span>
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Earn by lending your crypto assets out to other users or get a loan yourself using the HyperDex P2P loan service!")}
                                        </p>
                                    </div>
                                </div>
                            {/*</Link>*/}
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            {/*Services Two Single*/}
                            {/*<Link to="">*/}
                                <div className="services-two__single">
                                    <div className="services-two__icon">
                                        <div className="logohyp">
                                            <div className="square hidden s-top"></div>
                                            <div className="square hidden s-bottom"></div>
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h3 className="services-one__title text-white">GOVERNANCE and <br/> NFTs
                                        &nbsp;<span style={{ color: '#891b87' }}>(coming soon)</span>
                                        </h3>
                                        <p className="services-two__text">
                                            {t("Earn a return by holding HyperDex NFTs and get more involved through the use of our governance token, Tesseract!")}
                                        </p>
                                    </div>
                                </div>
                            {/*</Link>*/}
                        </div>
                    </div>

                    <hr className="m-t-20" />
                    <div className="col-md-12">
                        <img className="mintingSchema" src={hyp_minting} alt="" />
                    </div>
                </div>
            </section>
            {/*Services One End*/}

            <Stats {...this.props} noHead={true} />

            {/*Get To Know Start
            <section className="get-to-know" style={{ marginBottom: '9em' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="hex-row">

                                <div className="" style={{ backgroundImage: `url(${cubogrande})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '9rem 0 8em 0', backgroundPosition: 'center' }}>
                                        <div className="top" style={{ textAlign: 'center', color: 'white', fontWeight: '800' }}>{t("TOTAL PLATFORM VALUE")} (TPV)</div>
                                    
                                        <div className="middle">  
                                            <div id="chart" />
                                        </div>
                                        <div className="top"  style={{ textAlign: 'center', color: 'white', fontWeight: '800' }}>{t("Performance")} : <b style={{ color: '#ffa0f8' }}>0 %</b>  </div>
                                    <div className="top"  style={{ textAlign: 'center', color: 'white', fontWeight: '800' }}>{t("Total Users")} : <b style={{ color: '#ffa0f8' }}>0</b>  </div>
                                        
                                    </div>
                            
                            </div>
                        
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12"></div>
                        <div className="col-lg-4 col-md-12 col-xs-12"></div>
                        <div className="col-lg-8 col-md-12 col-xs-12" style={{ margin: '-10em 0' }}>
                            <div className="hex-row">
                                <div className="" style={{ backgroundImage: `url(${cubogrande})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    padding: '9rem 0 8em 0', backgroundPosition: 'center' }}>
                                        <div className="top" style={{ textAlign: 'center', color: 'white', fontWeight: '800' }}>{t("HYPERDEX FUND")}</div>
                                        <div className="top" style={{ textAlign: 'center', color: 'white' }}>AUM($) : <b style={{ color: '#ffa0f8' }}>0.00</b>  </div>
                                        <div className="top" style={{ textAlign: 'center', color: 'white' }}>{t("Peers Profit")}($) : <b style={{ color: '#ffa0f8' }}>0.00</b>  </div>
                                        
                                        <div className="middle">  <div id="chart2">
                                        </div>
                                    </div>
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            Get To Know End*/}

            {/*
            <section className="" style={{ marginBottom: '0', paddingBottom: '0' }}>
                <div className="counter-one-shape-1"></div>
                <div className="counter-one-shape-2"></div>
                <div className="counter-one-shape-3"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h3 className="section-title__title" style={{ color: 'white' }}> {t("HYPERDEX FUND PROFIT SINCE")}</h3>
                        </div>
                        <div className="col-xl-8">
                        
                            <ul className="list-unstyled counter-one__list">
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100" src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.return1M} duration={2000} format="(d,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("1month Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.return3M} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("3months Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.return6M} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("6months Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.return1Y} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("1year Return")}</p>
                                </li>
                            </ul>
                            
                        </div>
                        <hr/>
                        <div className="col-xl-4">
                            <h3 className="section-title__title" style={{ color: 'white' }}> {t("HYPERDEX FUND DETAILS")}</h3>
                        </div>
                        <div className="col-xl-8">
                            <ul className="list-unstyled counter-one__list">
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.activeCubes} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("Active cubes count")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={this.state.alltimeCubes} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("All time cubes count")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3>
                                        <Odometer value={this.state.avgManagFee} duration={2000} format="(d,ddd).dd" />
                                        <span className="odometer odometer-auto-theme">%</span>
                                    </h3>
                                    <p className="counter-one__text">{t("Avg management fee")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img   className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3>
                                        <Odometer value={this.state.avgPerfFee} duration={2000} format="(d,ddd).dd" />
                                        <span className="odometer odometer-auto-theme">%</span>
                                    </h3>
                                    <p className="counter-one__text">{t("Avg performance fee")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            */}

            {/*Project One Start*/}
            <section className="project-one" id="team">
                <div className="container">
                    <h3 className="section-title__title text-center" style={{ color: 'white' }}> {t("MEET HYPERDEX TEAM")}</h3>
                    <br/>
                    <div className="grid">
                        <ul className="list-unstyled counter-one__list">
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member1} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>MANFRED</h4>
                                <p className="counter-one__text">{t("Developer")}</p>
                            </li>
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member2} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>MARK</h4>
                                <p className="counter-one__text">{t("Developer")}</p>
                            </li>
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member3} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>FOCUS YAM</h4>
                                <p className="counter-one__text">{t("Management")}</p>
                            </li>
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member4} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>ANTON</h4>
                                <p className="counter-one__text">{t("Management")}</p>
                            </li>
                        </ul>
                        <ul className="list-unstyled counter-one__list">
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member5} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>ANDREW</h4>
                                <p className="counter-one__text">{t("Marketing")}</p>
                            </li>
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member6} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>STEFAN</h4>
                                <p className="counter-one__text">{t("Advisor")}</p>
                            </li>
                            {/*
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member7} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>HERMES</h4>
                                <p className="counter-one__text">Advisor</p>
                            </li>
                            */}
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member9} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>ALF</h4>
                                <p className="counter-one__text">{t("Tech Advisor")}</p>
                            </li>
                            <li className="counter-one__single wow fadeInUp animated" data-wow-delay="100ms" style={{ visibility: 'visible', animationDelay: '100ms', animationName: 'fadeInUp' }}>
                                <div className="counter-one__icon">
                                    <img style={{ filter: 'grayscale(1)' }} src={member8} alt="" />
                                </div>
                                <br/>
                                <h4 style={{ color: 'white' }}>ENGEL</h4>
                                <p className="counter-one__text">{t("Design")}</p>
                            </li>
                        </ul>
                        </div>
                
                    
                </div>
            </section>
            {/*Project One End*/}

            <section>
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
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                            <a href="https://abalonegroup.com" target="_blank" rel="noopener noreferrer">
                                <img src={partner07} style={{ width: "100%" }} alt="Abalone Group" />
                                <div className="text-center" style={{ color: 'grey' }}>Abalone Group</div>
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
            </section>

            <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
            </>
        )
    }
}

export default withTranslation()(withRouter(Home))