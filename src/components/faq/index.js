import React, { useEffect } from 'react';

import '../../assets/css/hypdex.css'
import '../../assets/css/hypdex-responsive.css'
import { jQueryFunc, loadPage } from '../../assets/js/hypdex.js'
import { withTranslation } from 'react-i18next'

function FAQ(props) {
    const { t } = props

    useEffect(() => {
        jQueryFunc()
        window.scrollTo(0, 0)
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
                    <div className="abs-center containerCube"><div className="cubez cube1"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube2"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube3"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube4"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube5"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube6"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube7"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube8"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube9"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube10"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube11"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube12"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube13"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube14"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube15"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube16"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube17"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube18"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube19"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube20"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube21"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube22"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube23"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube24"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube25"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube26"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div><div className="cubez cube27"><div className="front"></div><div className="left" ></div><div className="top"  ></div></div></div>
                </div>
                <div className="col-xl-6 col-lg-6">
					<h2>FAQ'S  </h2>
                    <hr/>
                    <p>
                        {t("Below are a list of frequently asked questions from our community. For any additional questions or help, please refer to the help section.")}
                    </p>
                   
                </div>
				</div></div>
           
               
			</div>
            
		</section>
        
        <section className="faq-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion2">
                                <div className="accrodion">
                                    <div className="accrodion-title">
                                        <h4>{t("What's the use case of HyperDex?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                {t("HyperDex DeFi envisions the creation of the first decentralized finance investment platform for digital assets mirroring the standard financial products, but with a major difference that everything is decentralized and automated.")}
                                            </p>
                                            <p>
                                                {t("Over the past few years, the digital assets industry has developed constantly to find bridge solutions from the current obsolete financial system into the current fast and relentless digital one. For the first time, HyperDex allows standard financial products to be available in a DeFi platform. In fact, HyperDex as a successful DeFi investment platform fulfills the crypto market need by routing the crypto assets of the users into different HyperDex products. It accomplishes this by using algorithms and staking with the ultimate aim of offering the best returns. With their funds put in HyperDex, asset holders are stress-free. HyperDex mitigates the risks inherent to DeFi that cannot be managed by a single passive investor especially when they begin their journey as an investor. HyperDex DeFi mainly focuses on investors who don’t have time and energy to make the most out of DeFi opportunities. Investors are lured by the potential of the DeFI industry but lost by the inherent challenges of accessing reliable products. Investment in DeFi has become an optimistic and genuine factor for financial independence but is unachievable without proper tools and strategies. This is where HyperDex comes into the picture, allowing anyone owning crypto assets to invest in its platforms through the integration of crypto wallets such as MetaMask and Exodus. Even without any prior DeFi knowledge, the users will be able to connect to HyperDex’s platform and invest in its products.")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>{t("What are the investment cubes?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>{t("We created new containers with functions very similarly to the liquidity pools on decentralized exchanges. These containers are called “cubes.” The user can opt for a cube of their choice to select a particular investment strategy and generate the expected income which will always be known without any hidden fees or market mechanics.")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("What are the main functions of HyperDex?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text expanded">
                                                    <div>{t("HyperDex DeFi investment platform offers three different types of investment strategies each with varied returns and risks. The following is the list of investments:")}</div>
                                                    <div>{t("1. Fix Income</div><div>Fixed income cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets.")}</div>
                                                    <div>{t("2. Algorithm Trading")}</div>
                                                    <div>{t("Algo-trading cubes are automated trading protocols, based on a pure statistical arbitrage algorithm. Algo-trading cubes aim at bringing higher returns by identifying the market discrepancies among the leading crypto assets.")}</div>
                                                    <div>{t("3. Race Trading")}</div>
                                                    <div>{t("Race trading cubes are very similar to that of cryptocurrency prediction markets. HyperDex’s race-trading cube is based on a decentralized, trustless prediction-market platform, where the users can speculate the outcomes of future prices of the chosen crypto assets. In short, HyperDex will not make predictions, it just indicates what is being traded heavily at the moment in terms of shorts and longs. The user then makes a prediction on the future price, and then, the HyperDex Race cube automatically calculates the necessary information for the user. Stops, as well the position in the market (long or short), with the proper leverage (risk chosen by the user). Each of the above strategies is collectively put in containers to differentiate the strategy chosen and expiration time. These containers are called “cubes.” Cubes function very similarly to the liquidity pools on decentralized exchanges. The user can opt for a cube of their choice to select a particular investment strategy and generate the expected income which will always be known without any hidden fees or market mechanics.")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("How to transform a cube into a HyperCube?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("The user will be able to select, from several cube choices, a fixed income investment offering returns on either stable coins or cryptocurrency. Every cube has its own expiration date and details about the final return on investment as well as its pay-back rules.")}</div>
                                                    <div>{t("An early redemption is possible with a flat 20% fee of the initial investment.")}</div>
                                                    <div>{t("The funds will be managed partly across fixed income generating staking programs, and partly traded with proprietary arbitrage algorithms.")}</div>
                                                    <div>{t("The user's investments will be initially collected into our smart contract, visible on the BSC blockchain for further distribution into our staking and trading accounts. At expiration, our smart contract will call back the funds necessary to fulfill the payment obligation.")}</div>
                                                    <div>{t("To transform a cube into a HyperCube, the following steps are necessary:")}</div>
                                                    <div>{t("1. The user must obtain Hyper Tokens from swaps, the pre-sale, or other HyperCubes profits.")}</div>
                                                    <div>{t("2. The user must invest into the cube an equivalent value of Hyper Tokens in a range that varies from 10 to 100% of the main stable coin or crypto cube’s investment.")}</div>
                                                    <div>{t("3. Once obtained, the HyperCube status of the fixed income return of the previous basic cube will increase. The HyperCube fixed income return also adds a bonus percentage onto the main investment and gives a Hyper Tokens return on the secondary investment. See examples below. 4. A Hyper Token cube with a 20% per annum fixed income return will be created as well. The users can simply deposit in the cube any Hyper Token purchased through swaps in our liquidity pool or through the platform’s rewards.")}</div>
                                                    <div>For example:</div><div><b>Cube 1 (6% return)</b></div><div>Asset: USDT</div><div>Expiration: December 2021 (3 months)</div><div>Entry fee: 0.3%</div><div>Fixed return (annualized): 6%</div><div>Lock up Period: until 22 December.</div>
                                                    <div>If transformed into HyperCube: 7% + 30% double return</div><div>Asset: USDT + Hyper Token (10–100% of the USDT amount)</div><div>Fix return (annualized): 7% USDT + 30% of the USDT value in Hyper Tokens</div>
                                                    <div><b>Cube 2 (4% return)</b></div>
                                                    <div>Asset: ETH</div>
                                                    <div>Expiration: December 2021 Entry fee: 0.3%</div>
                                                    <div>Fix return (annualized): 4%</div>
                                                    <div>Lock up Period: 22 December.</div><div>If transformed in HyperCube: 5% + 30% double return</div><div>Asset: ETH + Hyper Token (10–100% of the ETH amount)</div><div>Fix return (annualized): 5% ETH + 30% of the ETH value in Hyper Tokens</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("Commission Plan")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text ">
                                                    <div>{t("Each cube will have its own commission parameters as listed below.")}</div>
                                                    <div>{t("Fix income cube: deposit fee 0.3% (deducted immediately from the deposited coin).")}</div>
                                                    <div>{t("Algo Trading: deposit/management fee 2% (deducted immediately from the deposited coin) & net profit performance fee of 20% (deducted at cube’s expiration).")}</div>
                                                    <div>{t("Race cube: deposit fee 0.5% (deducted immediately from the deposited coin).")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("Farms")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <><div className="faq-text "><div>{t("Once a liquidity pool investment has been made, the peer receives an LP-Token. Our system has planned to create yielding farms to take advantage of the LP-Tokens. However our farms are based on a fix income return in order to maintain under control even with this feature the minting production. The planned annualized return of our farming is set at 20%.")}</div></div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single faq-page__single-last">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion1">
                                <div className="accrodion">
                                    <div className="accrodion-title">
                                        <h4>{t("What are HyperDex fourth dimensional returns?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                            <div className="faq-text">
                                                <div>{t("The user, by investing in any of the cubes, has the choice to simultaneously earn “parallel” profits by transforming the cube into HyperCube. In fact, on the expiration date the cube will only be paying a basic percentage reward on the underlying asset; however, the HyperCube will be paying a double reward and increasing the basic percentage reward. Therefore, the HyperCube profits will be generating a reward in the invested currencies (for ex. USDT or BNB) and in Hyper Token with its own percentage value indicated at the time of investment. As such, if the cube’s reward was 100 USDT, the HyperCube will add an additional profit in Hyper Token.")}</div>
                                            </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>{t("What is Hyper Token?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                            <div className="faq-text">
                                                <div>{t("HYP (Hyper Token) is the platform native token, and can only be obtained through swapping or minting. After the pre-sale phase, the token’s minting will occur every time a user’s profit is due (see CUBE section). In order to mint tokens and prevent inflation or deflation issues, any of HyperCube’s profits will be minting only the Hyper Tokens expected from the percentage reward. For example, at expiration the fixed-income basic cube generates a profit of 100 USDT for the user. The HyperCube generates a higher return on the 100 USDT plus 100 USDT in Hyper Tokens. If the Hyper Token at that moment is worth 1 USDT, an additional profit of 100 Hyper Tokens will be minted for the user. In the example above, if at expiration the Hyper Token was worth 2 USDT, the total minting amount would have been 50 tokens, and so on.")}</div>
                                                <div>{t("Tokens minted = profit in USDT / Hyper Token USDT value.")}</div>
                                                <div>{t("The HyperDex platform’s commissions for any new USDT or other coin investments will not mint new tokens, but will deduct tokens directly from the investment.")}</div>
                                                <div>See examples below:</div>
                                                <div>The user invests into a fixed income USDT HyperCube 1000 USDT plus 100 Hyper Tokens. The commission will be 3 USDT (1000 USDT * 0.3%) and 0.3 Hyper Tokens (100 Hyper Tokens x 0.3%).</div>
                                                <div>The user invests 1 ETH plus 1000 Hyper Tokens into a fixed income HyperCube. The commission will be 0.003 ETH (1 ETH * 0.3%) and 3 Hyper Tokens (1000 Hyper Tokens x 0.3%).</div>
                                            </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("What’s Hyper Token advantage?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("Our system is based on the Binance Smart Chain, similar to a standard DeFi project with profound added layers; we are calculating with vast simulations, based on the price formula variation, the optimal minting and liquidity supply correlation. In order to obtain predictable control over the circulating supply, we have developed a system that mints tokens on demand when someone generates profit using one of our platform’s features. Only during the pre-sale phase we are minting a determined amount of tokens, capped to a maximum of 200% of the total initial liquidity invested by the users. Therefore, even in the long term, the ratio between circulating supply and liquidity pools will always be under control and never exceed the extreme numbers. In fact, with our on-demand minting system, we always mint new tokens as a reward for a previous user’s injection of liquidity into the pools. The main advantage of HyperDex is that we don’t need an exponential production of tokens to obtain the user’s interest, usually based on high-yielding returns. However, we are attracting them by creating a stable ecosystem where the price value rises as more liquidity flows into the system with a controlled minting structure. The goal is to obtain a token-scarcity production, as the more the price increases, the less the system mints new tokens.This is because minting occurs with a formula directly proportional to the platform’s stable coin or main crypto rewards.")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("What are your incentives?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("The following steps are used to incentivize the user’s investments, with extra bonuses on the profit given in form of tokens:")}</div>
                                                    <div>{t("0 – 100 (USDT value) no additional Hyper Token")}</div>
                                                    <div>{t("101 – 500 (USDT value) 2.5 % extra Hyper Token on top of the profit")}</div>
                                                    <div>{t("500 – 1000 (USDT value) 5 % extra Hyper Token on top of the profit 1001 – 10000 (USDT value) 7.5 % extra Hyper Token on top of the profit & > 10001 (USDT value) 10 % extra Hyper Token on top of the profit")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("Can I trust HyperDex?")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("YES, the HyperDex Team has gained great knowledge in the Decentralized Finance sector: you can take advantage of our experience to receive maximum profit. HyperDex's smart contract has been tested countless times to offer investors the best investment experience.")}</div>
                                                    <div>{t("The smart contract is certified by Certik.")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("Wallet Metamask:")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("Metamask is a digital wallet that supports various chains. At first it only supported the Ethereum network, now it interacts with many Blockchains: remember that HyperDex is on the Binance Smart Chain network. With Metamask selecting the BSC network you can interact with HyperDex and manage your funds.")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion last-chiled">
                                    <div className="accrodion-title">
                                        <h4>{t("Here below some common solutions:")}</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <>
                                                <div className="faq-text">
                                                    <div>{t("I can't connect to Metamask:")}</div>
                                                    <div>- {t("check the wifi connection,")}</div>
                                                    <div>- {t("update your browser to the latest version,")}</div>
                                                    <div>- {t("install metamask from your browser,")}</div>
                                                    <div>- {t("write the passphrases and do not share them with anyone,")}</div>
                                                    <div>- {t("keep your passphrases in a safe place,")}</div>
                                                    <div>- {t("make sure you are on the BSC Mainnet network, at the top right open the menu > add token > , - check the contract code on BSC scan (BEFORE MAKING OPERATIONS),")}</div>
                                                    <div>- {t("copy the contract on BSC scan and paste on Metamask,")}</div>
                                                    <div>- {t("add token and confirm,")}</div>
                                                    <div>- {t("you are ready to interact with the platform.")}</div>
                                                    <div>- {t("Remember that you must have BNB in your wallet to carry out transactions.")}</div>
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default withTranslation()(FAQ)