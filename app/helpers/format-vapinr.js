import Ember from 'ember';

export function formatVapInr(params) {
	let value = params[0];
        let vapinr = params[1];
        let valuevap = value * 0.000000001;
        let inr = valuevap * vapinr;

        if (isNaN(inr)) {
            return '';
        }

	return "₹" + inr.toFixed(2);
}

export default Ember.Helper.helper(formatVapInr);

