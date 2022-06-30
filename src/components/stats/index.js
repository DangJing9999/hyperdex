import React from 'react';
// import { Link } from 'react-router-dom';
import moment from 'moment';
// import AreaChart from './area_graph';
// import ColumnChart from './column_chart';
import ApiService from '../../services/api_service';
import helper from '../../services/helper';
import { currencyFormatter } from '../application/config'

import ApexCharts from 'apexcharts'
import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
import Odometer from 'react-odometerjs'

import cubogrande from '../../assets/images/cubogrande.7e2a2ccc.png'
import returnImg from '../../assets/images/return.svg'
import { withTranslation } from 'react-i18next';

class Stats extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            areaChartDuration: 'd',
            areaChart: [],
            areaChartSelected: true,

            areaChartTpvDuration: 'd',
            areaChartTpv: [],
            areaChartTpvSelected: true,

            totalAccounts: 0,
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

            return1M: 0,
            return3M: 0,
            return6M: 0,
            return1Y: 0,
            activeCubes: 0,
            alltimeCubes: 0,
            avgManagFee: 0,
            avgPerfFee: 0,
        };
    } 

    componentDidMount() {
        jQueryFunc()
        loadPage(this.props.location.pathname + this.props.location.search)
        this.fetchAreaChartData();
        this.fetchInfo();
        // this.fetchColumnChartData();
        // this.fetchCubes();
        this.fetchAreaChartTpvData()
        // this.fetchColumnChartTpvData()
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.areaChartDuration !== prevState.areaChartDuration) {
            this.fetchAreaChartData();
            this.fetchInfo();
        }
        /*
        if (this.state.columnChartDuration !== prevState.columnChartDuration) {
            this.fetchColumnChartData();
        }
        */
        if (this.state.areaChartTpvDuration !== prevState.areaChartTpvDuration) {
            this.fetchAreaChartTpvData();
        }
        /*
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

    fetchAreaChartData = () => {
        const url = 'https://admin.hyperdex.cloud/graphql' // `https://test.hyperdex.cloud/web/fund/aumchart/${this.state.areaChartDuration || ''}`;
        const apiService = new ApiService();
        // apiService.fetch(url, { method: 'GET' })
        const query = '{ PlatformChartDay {timestamp,aum,tvl} }'
        apiService.fetchGraphQL(url, { method: 'POST', body: JSON.stringify({query: query}) })
        .then(response => {
            if (response && response.data && response.data.PlatformChartDay && helper.isArray(response.data.PlatformChartDay)) {
                let data = response.data.PlatformChartDay.map(element => {
                    var dt = new Date(element.timestamp * 1000)
                    return { x: dt.toISOString().split('T')[0], y: (element.aum + element.tvl).toFixed(2) }
                });
                this.setState({ areaChart: data });
                this.refreshChart("#chart2", data, false)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    fetchAreaChartTpvData = () => {
        const url = 'https://admin.hyperdex.cloud/graphql' // `https://test.hyperdex.cloud/web/fund/aumchart/${this.state.areaChartDuration || ''}`;
        const apiService = new ApiService();
        // apiService.fetch(url, { method: 'GET' })
        const query = '{ PlatformChartDay {timestamp,aum} }'
        apiService.fetchGraphQL(url, { method: 'POST', body: JSON.stringify({query: query}) })
        .then(response => {
            if (response && response.data && response.data.PlatformChartDay && helper.isArray(response.data.PlatformChartDay)) {
                let data = response.data.PlatformChartDay.map(element => {
                    var dt = new Date(element.timestamp * 1000)
                    return { x: dt.toISOString().split('T')[0], y: element.aum.toFixed(2) }
                });
                this.setState({ areaChartTpv: data });
                this.refreshChart("#chart", data, false)
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    fetchInfo = () => {
        const url = 'https://admin.hyperdex.cloud/graphql' // 'https://test.hyperdex.cloud/web/fund/info'
        const apiService = new ApiService();
        // apiService.fetch(url, { method: 'GET' })
        const query = '{ PlatformInfo {accounts,aum,tvl,activeCubes,totalCubes,avgManagFee,avgPerfFee} }'
        apiService.fetchGraphQL(url, { method: 'POST', body: JSON.stringify({query: query}) })
        .then(response => {
            if (response && response.data && response.data.PlatformInfo) {
                const platformInfo = response.data.PlatformInfo
                let AUM = (platformInfo.aum - platformInfo.tvl) || 0
                this.setState({
                    totalAccounts: (+platformInfo.accounts || 0).toFixed(0),
                    totalPayouts: 0, // platformInfo.payouts || 0,
                    performancePlatform: 0, // platformInfo.avgmonreturn || 0,
                    AUM: AUM,
                    TVL: platformInfo.tvl || 0,
                    TPV: platformInfo.aum || 0,
                    return1M: 0, // platformInfo.avg1mreturn || 0,
                    return3M: 0, // platformInfo.avg3mreturn || 0,
                    return6M: 0, // platformInfo.avg6mreturn || 0,
                    return1Y: 0, // platformInfo.avg1yreturn || 0,
                    activeCubes: platformInfo.activeCubes || '',
                    alltimeCubes: platformInfo.totalCubes || 0,
                    avgManagFee: (platformInfo.avgManagFee || 0) * 100,
                    avgPerfFee: (platformInfo.avgPerfFee || 0) * 100,
                });
                /*
                if (this.state.areaChartTpv.length !== 0) {
                    var newData = this.state.areaChartTpv
                    newData[newData.length - 1].y = AUM
                    this.setState({ areaChartTpv: newData })
                    this.refreshChart("#chart", this.state.areaChartTpv, true)
                }
                */
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
                        return1M: response.result.avg1mreturn || 0,
                        return3M: response.result.avg3mreturn || 0,
                        return6M: response.result.avg6mreturn || 0,
                        return1Y: response.result.avg1yreturn || 0,
                        activeCubes: response.result.activeCubes || '',
                        alltimeCubes: response.result.totalCubes || 0,
                        avgManagFee: (response.result.avgManagFee || 0) * 100,
                        avgPerfFee: (response.result.avgPerfFee || 0) * 100,
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

    refreshChart = (id, data, refresh) => {
        var options = {
            xaxis: {
                type: 'datetime',
                tooltip: {
                    enabled: false
                }
            },
            chart: {
                height: 380,
                width: "100%",
                type: "area",
                zoom: {
                    enabled: false
                }
            },
            series: [
                {
                    name: 'TPV',
                    data: data
                }
            ],
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },
            dataLabels: {
                enabled: false
            },
            yaxis: {
                opposite: true,
            },
            tooltip: {
                enabled: false
            }
        };
        if (refresh) {
            document.querySelector(id).options = options
        } else {
            var chart = new ApexCharts(document.querySelector(id), options);
            chart.render();
        }   
    }

    render() {
        const { t, noHead } = this.props
        const { totalAccounts } = this.state
        return (
            <>
            {!noHead && <section className="page-header">
                <div className="page-header-bg" >
                </div>
            

                <div className="page-header-shape-1"></div>
                <div className="page-header-shape-2"></div>
                <div className="page-header-shape-3"></div>

                <div className="container text-center">
                    <div className="page-header__inner">
                        <div className="row">
                        <div className="col-xl-6 col-lg-6 col-xs-12">
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
                        <h2>{t("Platform Stats")}</h2>
                        <hr/>
                        <h2 className="top" style={{ textAlign: 'center', color: 'white' }}>AUM : <b style={{ color: '#ffa0f8' }}>{ currencyFormatter(this.state.AUM, 2) }</b>  </h2>
                        <h2 className="top" style={{ textAlign: 'center', color: 'white' }}>TVL : <b style={{ color: '#ffa0f8' }}>{ currencyFormatter(this.state.TVL, 2) }</b>  </h2>
                        <h2 className="top" style={{ textAlign: 'center', color: 'white' }}>TPV : <b style={{ color: '#ffa0f8' }}>{ currencyFormatter(this.state.TPV, 2) }</b>  </h2>
                    </div>
                    </div></div>
            
                
                </div>
                
            </section>
            }
            {/*
            <div className="container text-center">
                <ul className="thm-breadcrumb list-unstyled">
                    <li className="active">Investment <br/> 0.00 USD</li>
                    <li className="active">Investment <br/> 0.00 USD</li>
                    <li className="active"> HYPERTOKEN PROFIT <br/> 0.0000 HYP</li>
                    <li className="active"> HYPERTOKEN BALANCE <br/> 0.0000 HYP</li>
                </ul>
            </div>
            */}
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
                                    <div className="top"  style={{ textAlign: 'center', color: 'white', fontWeight: '800' }}>{t("Total Users")} : <b style={{ color: '#ffa0f8' }}>{totalAccounts}</b>  </div>
                                        
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
                                        <div className="top" style={{ textAlign: 'center', color: 'white' }}>AUM($) : <b style={{ color: '#ffa0f8' }}>{this.state.AUM.toFixed(2)}</b>  </div>
                                        {/*<div className="top" style={{ textAlign: 'center', color: 'white' }}>{t("Peers Profit")}($) : <b style={{ color: '#ffa0f8' }}>0.00</b>  </div>*/}
                                        
                                        <div className="middle">  
                                            <div id="chart2" />
                                        </div>

                                    </div>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/*Get To Know End*/}


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
                                    <h3><Odometer value={0/*this.state.return1M*/} duration={2000} format="(d,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("1month Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={0/*this.state.return3M*/} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("3months Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={0/*this.state.return6M*/} duration={2000} format="(,ddd).dd" /></h3>
                                    <p className="counter-one__text">{t("6months Return")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3><Odometer value={0/*this.state.return1Y*/} duration={2000} format="(,ddd).dd" /></h3>
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
                                        <Odometer value={this.state.avgManagFee.toFixed(2)} duration={2000} format="(d,ddd).dd" />
                                        <span className="odometer odometer-auto-theme">%</span>
                                    </h3>
                                    <p className="counter-one__text">{t("Avg deposit fee")}</p>
                                </li>
                                <li className="counter-one__single wow fadeInUp animated" data-wow-delay="400ms" style={{ visibility: 'visible', animationDelay: '400ms', animationName: 'fadeInUp' }}>
                                    <div className="counter-one__icon">
                                        <img   className="w-100"  src={returnImg} alt="" />
                                    </div>
                                    <h3>
                                        <Odometer value={this.state.avgPerfFee.toFixed(2)} duration={2000} format="(d,ddd).dd" />
                                        <span className="odometer odometer-auto-theme">%</span>
                                    </h3>
                                    <p className="counter-one__text">{t("Algo perf fee")}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}

export default withTranslation()(Stats)