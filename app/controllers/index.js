import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

    get config_ubiq() {
        return config.APP.UBIQ  ;
    },

    height_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = this.get('bestNode_ubiq');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_ubiq: Ember.computed('model.model_ubiq.stats', {
        get() {
            return parseInt(this.get('model.model_ubiq.stats.roundShares'));
        }
    }),

    vapinr_ubiq: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_ubiq.exchangedata.price_inr'));
        }
    }),

     vapusd_ubiq: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_ubiq.exchangedata.price_usd'));
        }
    }),

    difficulty_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = this.get('bestNode_ubiq');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_ubiq: Ember.computed('difficulty_ubiq', {
        get() {
            return this.getWithDefault('difficulty_ubiq', 0) / config.APP.UBIQ.BlockTime;
        }
    }),

    immatureTotal_ubiq: Ember.computed('model.model_ubiq', {
        get() {
            return this.getWithDefault('model.model_ubiq.immatureTotal', 0) + this.getWithDefault('model.model_ubiq.candidatesTotal', 0);
        }
    }),

    bestNode_ubiq: Ember.computed('model.model_ubiq.nodes', {
        get() {
            var node = null;
            this.get('model.model_ubiq.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_ubiq: Ember.computed('model.model_ubiq.', {
        get() {
            return parseInt(this.get('model.model_ubiq.lastBlockFound')) || 0;
        }
    }),

    roundVariance_ubiq: Ember.computed('model.model_ubiq.', {
        get() {
            var percent = (this.get('model.model_ubiq.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_ubiq: Ember.computed('height_ubiq', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_ubiq', 1) % 30000)) * 1000 * this.get('config_exp').BlockTime;
            return Date.now() + epochOffset;
        }
    }),

     get config_exp() {
        return config.APP.EXP  ;
    },

    height_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = this.get('bestNode_exp');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_exp: Ember.computed('model.model_exp.stats', {
        get() {
            return parseInt(this.get('model.model_exp.stats.roundShares'));
        }
    }),

    vapinr_exp: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_exp.exchangedata.price_inr'));
        }
    }),

     vapusd_exp: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_exp.exchangedata.price_usd'));
        }
    }),

    difficulty_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = this.get('bestNode_exp');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_exp: Ember.computed('difficulty_exp', {
        get() {
            return this.getWithDefault('difficulty_exp', 0) / config.APP.UBIQ.BlockTime;
        }
    }),

    immatureTotal_exp: Ember.computed('model.model_exp', {
        get() {
            return this.getWithDefault('model.model_exp.immatureTotal', 0) + this.getWithDefault('model.model_exp.candidatesTotal', 0);
        }
    }),

    bestNode_exp: Ember.computed('model.model_exp.nodes', {
        get() {
            var node = null;
            this.get('model.model_exp.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_exp: Ember.computed('model.model_exp.', {
        get() {
            return parseInt(this.get('model.model_exp.lastBlockFound')) || 0;
        }
    }),

    roundVariance_exp: Ember.computed('model.model_exp.', {
        get() {
            var percent = (this.get('model.model_exp.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_exp: Ember.computed('height_exp', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_exp', 1) % 30000)) * 1000 * this.get('config_exp').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
     get config_dbix() {
        return config.APP.DBIX  ;
    },

    height_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = this.get('bestNode_dbix');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_dbix: Ember.computed('model.model_dbix.stats', {
        get() {
            return parseInt(this.get('model.model_dbix.stats.roundShares'));
        }
    }),

    vapinr_dbix: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_dbix.exchangedata.price_inr'));
        }
    }),

     vapusd_dbix: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_dbix.exchangedata.price_usd'));
        }
    }),

    difficulty_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = this.get('bestNode_dbix');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_dbix: Ember.computed('difficulty_dbix', {
        get() {
            return this.getWithDefault('difficulty_dbix', 0) / config.APP.DBIX.BlockTime;
        }
    }),

    immatureTotal_dbix: Ember.computed('model.model_dbix', {
        get() {
            return this.getWithDefault('model.model_dbix.immatureTotal', 0) + this.getWithDefault('model.model_dbix.candidatesTotal', 0);
        }
    }),

    bestNode_dbix: Ember.computed('model.model_dbix.nodes', {
        get() {
            var node = null;
            this.get('model.model_dbix.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_dbix: Ember.computed('model.model_dbix.', {
        get() {
            return parseInt(this.get('model.model_dbix.lastBlockFound')) || 0;
        }
    }),

    roundVariance_dbix: Ember.computed('model.model_dbix.', {
        get() {
            var percent = (this.get('model.model_dbix.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_dbix: Ember.computed('height_dbix', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_dbix', 1) % 30000)) * 1000 * this.get('config_dbix').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
    get config_music() {
        return config.APP.MUSIC  ;
    },

    height_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = this.get('bestNode_music');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_music: Ember.computed('model.model_music.stats', {
        get() {
            return parseInt(this.get('model.model_music.stats.roundShares'));
        }
    }),

    vapinr_music: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_music.exchangedata.price_inr'));
        }
    }),

     vapusd_music: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_music.exchangedata.price_usd'));
        }
    }),

    difficulty_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = this.get('bestNode_music');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_music: Ember.computed('difficulty_music', {
        get() {
            return this.getWithDefault('difficulty_music', 0) / config.APP.MUSIC.BlockTime;
        }
    }),

    immatureTotal_music: Ember.computed('model.model_music', {
        get() {
            return this.getWithDefault('model.model_music.immatureTotal', 0) + this.getWithDefault('model.model_music.candidatesTotal', 0);
        }
    }),

    bestNode_music: Ember.computed('model.model_music.nodes', {
        get() {
            var node = null;
            this.get('model.model_music.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_music: Ember.computed('model.model_music.', {
        get() {
            return parseInt(this.get('model.model_music.lastBlockFound')) || 0;
        }
    }),

    roundVariance_music: Ember.computed('model.model_music.', {
        get() {
            var percent = (this.get('model.model_music.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_music: Ember.computed('height_music', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_music', 1) % 30000)) * 1000 * this.get('config_music').BlockTime;
            return Date.now() + epochOffset;
        }
    }),

    get config_vap() {
        return config.APP.VAP  ;
    },

    height_vap: Ember.computed('model.model_vap.nodes', {
        get() {
            var node = this.get('bestNode_vap');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_vap: Ember.computed('model.model_vap.stats', {
        get() {
            return parseInt(this.get('model.model_vap.stats.roundShares'));
        }
    }),

    vapinr_vap: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_vap.exchangedata.price_inr'));
        }
    }),

     vapusd_vap: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_vap.exchangedata.price_usd'));
        }
    }),

    difficulty_vap: Ember.computed('model.model_vap.nodes', {
        get() {
            var node = this.get('bestNode_vap');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_vap: Ember.computed('difficulty_vap', {
        get() {
            return this.getWithDefault('difficulty_vap', 0) / config.APP.MUSIC.BlockTime;
        }
    }),

    immatureTotal_vap: Ember.computed('model.model_vap', {
        get() {
            return this.getWithDefault('model.model_vap.immatureTotal', 0) + this.getWithDefault('model.model_vap.candidatesTotal', 0);
        }
    }),

    bestNode_vap: Ember.computed('model.model_vap.nodes', {
        get() {
            var node = null;
            this.get('model.model_vap.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_vap: Ember.computed('model.model_vap.', {
        get() {
            return parseInt(this.get('model.model_vap.lastBlockFound')) || 0;
        }
    }),

    roundVariance_vap: Ember.computed('model.model_vap.', {
        get() {
            var percent = (this.get('model.model_vap.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_vap: Ember.computed('height_vap', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_vap', 1) % 30000)) * 1000 * this.get('config_vap').BlockTime;
            return Date.now() + epochOffset;
        }
    }),

    get config_etc() {
        return config.APP.ETC  ;
    },

    height_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = this.get('bestNode_etc');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_etc: Ember.computed('model.model_etc.stats', {
        get() {
            return parseInt(this.get('model.model_etc.stats.roundShares'));
        }
    }),

    vapinr_etc: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_etc.exchangedata.price_inr'));
        }
    }),

     vapusd_etc: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_etc.exchangedata.price_usd'));
        }
    }),

    difficulty_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = this.get('bestNode_etc');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_etc: Ember.computed('difficulty_etc', {
        get() {
            return this.getWithDefault('difficulty_etc', 0) / config.APP.ETC.BlockTime;
        }
    }),

    immatureTotal_etc: Ember.computed('model.model_etc', {
        get() {
            return this.getWithDefault('model.model_etc.immatureTotal', 0) + this.getWithDefault('model.model_etc.candidatesTotal', 0);
        }
    }),

    bestNode_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = null;
            this.get('model.model_etc.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_etc: Ember.computed('model.model_etc.', {
        get() {
            return parseInt(this.get('model.model_etc.lastBlockFound')) || 0;
        }
    }),

    roundVariance_etc: Ember.computed('model.model_etc.', {
        get() {
            var percent = (this.get('model.model_etc.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_etc: Ember.computed('height_etc', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_etc', 1) % 30000)) * 1000 * this.get('config_etc').BlockTime;
            return Date.now() + epochOffset;
        }
    }),


    get config_soil() {
        return config.APP.SOIL  ;
    },

    height_soil: Ember.computed('model.model_soil.nodes', {
        get() {
            var node = this.get('bestNode_soil');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_soil: Ember.computed('model.model_soil.stats', {
        get() {
            return parseInt(this.get('model.model_soil.stats.roundShares'));
        }
    }),

    vapinr_soil: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_soil.exchangedata.price_inr'));
        }
    }),

     vapusd_soil: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_soil.exchangedata.price_usd'));
        }
    }),

    difficulty_soil: Ember.computed('model.model_soil.nodes', {
        get() {
            var node = this.get('bestNode_soil');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_soil: Ember.computed('difficulty_soil', {
        get() {
            return this.getWithDefault('difficulty_soil', 0) / config.APP.SOIL.BlockTime;
        }
    }),

    immatureTotal_soil: Ember.computed('model.model_soil', {
        get() {
            return this.getWithDefault('model.model_soil.immatureTotal', 0) + this.getWithDefault('model.model_soil.candidatesTotal', 0);
        }
    }),

    bestNode_soil: Ember.computed('model.model_soil.nodes', {
        get() {
            var node = null;
            this.get('model.model_soil.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_soil: Ember.computed('model.model_soil.', {
        get() {
            return parseInt(this.get('model.model_soil.lastBlockFound')) || 0;
        }
    }),

    roundVariance_soil: Ember.computed('model.model_soil.', {
        get() {
            var percent = (this.get('model.model_soil.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_soil: Ember.computed('height_soil', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_soil', 1) % 30000)) * 1000 * this.get('config_soil').BlockTime;
            return Date.now() + epochOffset;
        }
    }),

    get config_ele() {
        return config.APP.ELE  ;
    },

    height_ele: Ember.computed('model.model_ele.nodes', {
        get() {
            var node = this.get('bestNode_ele');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_ele: Ember.computed('model.model_ele.stats', {
        get() {
            return parseInt(this.get('model.model_ele.stats.roundShares'));
        }
    }),

    vapinr_ele: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_ele.exchangedata.price_inr'));
        }
    }),

     vapusd_ele: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_ele.exchangedata.price_usd'));
        }
    }),

    difficulty_ele: Ember.computed('model.model_ele.nodes', {
        get() {
            var node = this.get('bestNode_ele');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_ele: Ember.computed('difficulty_ele', {
        get() {
            return this.getWithDefault('difficulty_ele', 0) / config.APP.ELE.BlockTime;
        }
    }),

    immatureTotal_ele: Ember.computed('model.model_ele', {
        get() {
            return this.getWithDefault('model.model_ele.immatureTotal', 0) + this.getWithDefault('model.model_ele.candidatesTotal', 0);
        }
    }),

    bestNode_ele: Ember.computed('model.model_ele.nodes', {
        get() {
            var node = null;
            this.get('model.model_ele.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_ele: Ember.computed('model.model_ele.', {
        get() {
            return parseInt(this.get('model.model_ele.lastBlockFound')) || 0;
        }
    }),

    roundVariance_ele: Ember.computed('model.model_ele.', {
        get() {
            var percent = (this.get('model.model_ele.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_ele: Ember.computed('height_ele', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_ele', 1) % 30000)) * 1000 * this.get('config_ele').BlockTime;
            return Date.now() + epochOffset;
        }
    }),



   get config_pirl() {
        return config.APP.PIRL  ;
    },

    height_pirl: Ember.computed('model.model_pirl.nodes', {
        get() {
            var node = this.get('bestNode_pirl');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_pirl: Ember.computed('model.model_pirl.stats', {
        get() {
            return parseInt(this.get('model.model_pirl.stats.roundShares'));
        }
    }),

    vapinr_pirl: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_pirl.exchangedata.price_inr'));
        }
    }),

     vapusd_pirl: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_pirl.exchangedata.price_usd'));
        }
    }),

    difficulty_pirl: Ember.computed('model.model_pirl.nodes', {
        get() {
            var node = this.get('bestNode_pirl');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_pirl: Ember.computed('difficulty_pirl', {
        get() {
            return this.getWithDefault('difficulty_pirl', 0) / config.APP.PIRL.BlockTime;
        }
    }),

    immatureTotal_pirl: Ember.computed('model.model_pirl', {
        get() {
            return this.getWithDefault('model.model_pirl.immatureTotal', 0) + this.getWithDefault('model.model_pirl.candidatesTotal', 0);
        }
    }),

    bestNode_pirl: Ember.computed('model.model_pirl.nodes', {
        get() {
            var node = null;
            this.get('model.model_pirl.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
});
            return node;
        }
    }),

    lastBlockFound_pirl: Ember.computed('model.model_pirl.', {
        get() {
            return parseInt(this.get('model.model_pirl.lastBlockFound')) || 0;
        }
    }),

    roundVariance_pirl: Ember.computed('model.model_pirl.', {
        get() {
            var percent = (this.get('model.model_pirl.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),

    nextEpoch_pirl: Ember.computed('height_pirl', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_pirl', 1) % 30000)) * 1000 * this.get('config_pirl').BlockTime;
            return Date.now() + epochOffset;
        }
    })





});
