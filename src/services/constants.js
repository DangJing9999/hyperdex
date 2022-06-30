const tokens = {
    hyp: {
        symbol: 'HYP',
        name: 'Hyper Token',
        address: '0x5CAeCD1e44b354568557BeE3d1DC4b7c57fB11A6',
        decimals: 18,
    },
    usdt: {
        symbol: 'USDT',
        name: 'Tether Usd',
        address: '0x234...',
        decimals: 18,
    },
    busd: {
        symbol: 'BUSD',
        name: 'Binance Usd',
        address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        decimals: 18,
    },
    eth: {
        symbol: 'ETH',
        name: 'Wrapped Ethereum',
        address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        decimals: 18,
    },
    xrp: {
        symbol: 'XRP',
        name: 'Wrapped Ripple',
        address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
        decimals: 18,
    },
    wbnb: {
        symbol: 'WBNB',
        name: 'Wrapped BNB',
        address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        decimals: 18,
    }
}

const defaultDisclaimer = 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.'

const defaultInfo = [
    '',
    'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
    ''
]

const cubes = [
    {
        index: 0,
        id: 0,
        description: 'BUSD ALGO 3months',
        token: tokens.busd,
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 2500,
        duration: 90, // in days
        expiration: 1655424000, // timestamp
        entryFee: 200,
        performanceFee: 2000,
        cubeType: 0,
        hyperBonus: 0,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 4,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        enabled: false,
    },
    {
        index: 1,
        id: 0,
        description: 'BUSD 3months',
        token: tokens.busd,
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 500,
        duration: 90, // in days
        expiration: 1655942400, // timestamp
        entryFee: 30,
        performanceFee: 2000,
        cubeType: 1,
        hyperBonus: 100,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 2,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        enabled: true,
    },
    {
        index: 2,
        id: 1,
        description: 'BUSD 6months',
        token: tokens.busd,
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 800,
        duration: 180, // in days
        expiration: 1655942400, // timestamp
        entryFee: 50,
        performanceFee: 2000,
        cubeType: 1,
        hyperBonus: 100,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 2,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        enabled: false,
    },
    {
        index: 3,
        id: 2,
        description: 'BUSD 12months',
        token: tokens.busd,
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 900,
        duration: 365, // in days
        expiration: 1671753600, // timestamp
        entryFee: 50,
        performanceFee: 2000,
        cubeType: 1,
        hyperBonus: 100,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 2,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        enabled: false,
    },
    {
        index: 4,
        id: 1,
        description: 'BUSD ALGO 12months',
        token: tokens.busd,
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 2500,
        duration: 365, // in days
        expiration: 1671753600, // timestamp
        entryFee: 200,
        performanceFee: 2000,
        cubeType: 0,
        hyperBonus: 0,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 2,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        enabled: false,
    },
    {
        index: 5,
        id: 0,
        description: 'ETH RACE test LONG',
        token: tokens.eth,
        binanceSymbol: 'ethusd_220624',
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 3000,
        duration: 180, // in days
        expiration: 1655942400, // timestamp
        entryFee: 20,
        performanceFee: 2000,
        cubeType: 2,
        hyperBonus: 500,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 4,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        stopPrice: 2000,
        targetPrice: 4000,
        borderPrice: 2500,
        enabled: true,
    },
    {
        index: 6,
        id: 1,
        description: 'ETH RACE test SHORT',
        token: tokens.eth,
        binanceSymbol: 'ethusd_220624',
        info: 'Fixed Income Cubes are investment strategies that offer a fixed income to the users on either stable coins or other crypto assets. Make it a HyperCube by adding HYP in order to gain higher rewards.',
        disclaimer: 'Past results are not a guarantee for future outcomes. The platform doesn\'t store any user\'s data or wallet information, which are held directly on the blockchain. The platform is designed for users having already a basic knowledge of crypto and blockchain operations, on wallets as Metamask, Exodus, etc. The platform is never responsible for the loss of the user\'s sensible datas that prevents them to acces their wallets funds.',
        yearlyReturn: 3000,
        duration: 180, // in days
        expiration: 1655942400, // timestamp
        entryFee: 20,
        performanceFee: 2000,
        cubeType: 2,
        hyperBonus: 500,
        hyperTokenYearlyReturn: 2000,
        minHyperTokenRatioBP: 1000,
        maxHyperTokenRatioBP: 10000,
        assetDecimalsToShow: 4,
        guaranteedBP: 8000,
        referralBonusBP: 300,
        stopPrice: 4000,
        targetPrice: 2000,
        borderPrice: 3500,
        enabled: false,
    },
];

export { tokens, cubes, defaultDisclaimer, defaultInfo };
export const tokensArray = [tokens.hyp, tokens.usdt, tokens.busd, tokens.eth, tokens.xrp];