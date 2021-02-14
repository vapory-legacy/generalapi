/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'generalapi',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            WebsiteName : 'pool.vapory.org',
            Currency : 'USD',

             EXP: {
                    // API host and port
                    ApiUrl: '//pool.vapory.org/',

                    // HTTP mining endpoint
                    HttpHost: 'http://mining.vapory.org',
                    HttpPort: 8888,

                    // Stratum mining endpoint
                    StratumHost: 'stratum.vapory.org',
                    StratumPort: 8008,

                    StratumHost1: 'exp-us02.daggerpool.com',
                    StratumPort1: 40014,

                    StratumHost2: 'exp-nh.daggerpool.com',
                    StratumPort2: 40024,

                    // Fee and payout details
                    PoolFee: '0.9%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Expanse',
                    CoinShortName: 'EXP',
                    PaymentText: 'every 2 hours',
                    SupportMail: 'helpdesk@daggerpool.com',
                    SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'exp.daggerpool.com',

                    //Coin Bases Settings
                    ChainAddress : 'http://www.gander.tech/address/',
                    TransactionAddress : 'http://www.gander.tech/tx/',
                    UncleAddress : 'http://www.gander.tech/uncle/',
                    BlockAddress : 'http://www.gander.tech/tx/',

                    //Twitter Parameter
                    TwitterURL: 'https://twitter.com/',
                    TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 30
             },
             UBIQ: {
                    // API host and port
                    ApiUrl: '//pool.vapory.org/',

                    // HTTP mining endpoint
                    HttpHost: 'http://mining.vapory.org',
                    HttpPort: 8888,

                    // Stratum mining endpoint
                    StratumHost: 'stratum.vapory.org',
                    StratumPort: 8008,

                    StratumHost1: 'ubiq-us02.daggerpool.com',
                    StratumPort1: 40015,

                    StratumHost2: 'ubiq-nh.daggerpool.com',
                    StratumPort2: 40025,

                    // Fee and payout details
                    PoolFee: '0.5%',
                    PayoutThreshold: '0.5',
                    ShareDifficulty: '4G',

                    //Current and Localization
                    Currency: 'USD',
                    CoinName: 'Ubiq',
                    CoinShortName: 'UBIQ',
                    PaymentText: 'every 2 hours',
                    SupportMail: 'helpdesk@daggerpool.com',
                    SupportHelpdesk: 'http://helpdesk.daggerpool.com',
                    WebsiteName: 'ubiq.daggerpool.com',

                    //Coin Bases Settings
                    ChainAddress : 'https://ubiqscan.io/en/address/',
                    TransactionAddress : 'https://ubiqscan.io/en/tx/',
                    UncleAddress : 'https://ubiqscan.io/en/uncle/',
                    BlockAddress : 'https://ubiqscan.io/en/block/',

                    //Twitter Parameter
                    TwitterURL: 'https://twitter.com/',
                    TwitterHash: 'daggerpool_com',


                    // For network hashrate (change for your favourite fork)
                    BlockTime: 14.4
             },
        DBIX: {
            // API host and port
            ApiUrl: '//pool.vapory.org/',

            // HTTP mining endpoint
            HttpHost: 'http://mining.vapory.org',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'stratum.vapory.org',
            StratumPort: 8008,

            StratumHost1: 'dbix-uk01.daggerpool.com',
            StratumPort1: 40017,

            NicehashHost: 'dbix-us01.daggerpool.com',
            NicehashPost: 40027,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Dubai Coin',
            CoinShortName: 'DBIX',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'dbix.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'http://dbixscan.io/addr/',
	    TransactionAddress : 'http://dbixscan.io/tx/',
            UncleAddress : 'http://dbixscan.io/uncle/',
            BlockAddress : 'http://dbixscan.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 90


        },
        MUSIC:  {
            // API host and port
            ApiUrl: '//pool.vapory.org/',

            // HTTP mining endpoint
            HttpHost: 'http://mining.vapory.org',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'stratum.vapory.org',
            StratumPort: 8008,

            StratumHost1: 'mc-uk01.daggerpool.com',
            StratumPort1: 40013,

            NicehashHost: 'dbix-nh.daggerpool.com',
            NicehashPost: 40023,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '10',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Music Coin',
            CoinShortName: 'MUSIC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'music.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://orbiter.musicoin.org/addr/',
	    TransactionAddress : 'https://orbiter.musicoin.org/tx/',
            UncleAddress : 'https://orbiter.musicoin.org/uncle/',
            BlockAddress : 'https://orbiter.musicoin.org/block/',


            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 14.4


        },
        VAP: {
            // API host and port
            ApiUrl: '//pool.vapory.org/',

            // HTTP mining endpoint
            HttpHost: 'http://mining.vapory.org',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'stratum.vapory.org',
            StratumPort: 8008,

            // StratumHost1: 'eth-uk01.daggerpool.com',
            //  StratumPort1: 40011,

            //NicehashHost: 'eth-nh.daggerpool.com',
            //NicehashPost: 40021,

            // Fee and payout details
            PoolFee: '0.99%',
            PayoutThreshold: '0.1',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Vapory',
            CoinShortName: 'VAP',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'pool.vapory.org',

            //Coin Bases Settings
            ChainAddress : 'https://etherscan.io/address/',
	    TransactionAddress : 'https://etherscan.io/tx/',
            UncleAddress : 'https://etherscan.io/uncle/',
            BlockAddress : 'https://etherscan.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },
        ETC: {
            // API host and port
            ApiUrl: '//pool.vapory.org/',

            // HTTP mining endpoint
            HttpHost: 'http://mining.vapory.org',
            HttpPort: 8888,

            // Stratum mining endpoint
            StratumHost: 'stratum.vapory.org',
            StratumPort: 8008,

            StratumHost1: 'etc-uk01.daggerpool.com',
            StratumPort1: 9009,

            NicehashHost: 'etc-nh.daggerpool.com',
            NicehashPost: 40022,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum Classic',
            CoinShortName: 'ETC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'etc.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://gastracker.io/addr/',
	    TransactionAddress : 'https://gastracker.io/tx/',
            UncleAddress : 'https://gastracker.io/uncle/',
            BlockAddress : 'https://gastracker.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },
        SOIL: {
            // API host and port
            ApiUrl: '//soil.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://soil-us01.daggerpool.com',
            HttpPort: 40008,

            // Stratum mining endpoint
            StratumHost: 'soil-us01.daggerpool.com',
            StratumPort: 40018,

            StratumHost1: 'soil-uk01.daggerpool.com',
            StratumPort1: 40018,

            NicehashHost: 'soil-nh.daggerpool.com',
            NicehashPost: 40028,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'SOILcoin',
            CoinShortName: 'SOIL',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'soil.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'http://178.62.133.174:9001/#/address/',
	    TransactionAddress : 'http://178.62.133.174:9001/#/tx/',
            UncleAddress : 'http://178.62.133.174:9001/#/uncle/',
            BlockAddress : 'http://178.62.133.174:9001/#/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },
        ELE: {
            // API host and port
            ApiUrl: '//ele.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://ele-us01.daggerpool.com',
            HttpPort: 40009,

            // Stratum mining endpoint
            StratumHost: 'ele-us01.daggerpool.com',
            StratumPort: 40019,

            StratumHost1: 'ele-uk01.daggerpool.com',
            StratumPort1: 40019,

            NicehashHost: 'ele-nh.daggerpool.com',
            NicehashPost: 40029,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Elementrem',
            CoinShortName: 'ELE',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'ele.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'http://www.elementrem.net/address/',
	    TransactionAddress : 'http://www.elementrem.net/tx/',
            UncleAddress : 'http://www.elementrem.net/uncle/',
            BlockAddress : 'http://www.elementrem.net/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },

        PIRL: {
              // API host and port
            ApiUrl: '//pirl.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://pirl-us01.daggerpool.com',
            HttpPort: 40006,

            // Stratum mining endpoint
            StratumHost: 'pirl-us01.daggerpool.com',
            StratumPort: 40016,

            StratumHost1: 'pirl-uk01.daggerpool.com',
            StratumPort1: 40016,

            NicehashHost: 'pirl-nh.daggerpool.com',
            NicehashPost: 40026,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '2',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'PIRL',
            CoinShortName: 'PIRL',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'pirl.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://explorer.pirl.io/#/address/',
	    TransactionAddress : 'https://explorer.pirl.io/#/tx/',
            UncleAddress : 'https://explorer.pirl.io/#/uncle/',
            BlockAddress : 'https://explorer.pirl.io/#/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 13

        }



        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.EXP.ApiUrl = 'https://exp.daggerpool.com/'
        ENV.APP.UBIQ.ApiUrl = 'https://ubiq.daggerpool.com/'
        ENV.APP.DBIX.ApiUrl = 'https://dbix.daggerpool.com/'
        ENV.APP.MUSIC.ApiUrl = 'https://music.daggerpool.com/'
        ENV.APP.VAP.ApiUrl = 'https://pool.vapory.org/'
        ENV.APP.ETC.ApiUrl = 'https://etc.daggerpool.com/'
        ENV.APP.SOIL.ApiUrl = 'https://soil.daggerpool.com/'
        ENV.APP.ELE.ApiUrl = 'https://ele.daggerpool.com/'
        ENV.APP.PIRL.ApiUrl = 'https://pirl.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};
