import Ember from 'ember';
import config from '../config/environment';
export default Ember.Route.extend({
    intl: Ember.inject.service(),
    beforeModel() {
        this.get('intl').setLocale('en-in');
    },   
    model: function () {
        var url_exp = config.APP.EXP.ApiUrl + 'api/stats'; 
        var url_ubiq = config.APP.UBIQ.ApiUrl + 'api/stats'; 
        
       return {
           model_exp : Ember.$.getJSON(url_exp).then(function (data) {
            return Ember.Object.create(data);
        }),
        
        model_ubiq  : Ember.$.getJSON(url_ubiq).then(function (data) {
            return Ember.Object.create(data);
        })
        
        };
        
      
        
    },
  
    setupController: function (controller, model) {
        this._super(controller, model);
        Ember.run.later(this, this.refresh, 5000);
    }
});
