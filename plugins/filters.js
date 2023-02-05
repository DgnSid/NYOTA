import Vue from 'vue';
import moment from 'moment';

/**
 * Convert date to value in params
 * 
 * Use it : {{ date_field|date('DD/MM/YYYY') }}
 */
Vue.filter('date', (val, dateValue) => {
    moment.locale('fr');
    return moment(String(val)).format(dateValue);
})

/**
 * Truncate strings
 * 
 * Use it : {{ text_field|truncate(0, 120, "...") }}
 */
Vue.filter('truncate', (val, from, length, suffix) => {
    return val.length < length ? val : `${val.slice(from, length)}${suffix}`;
})

/**
 * Slugify strings
 * 
 * Use it : {{ text_field|slugify }}
 */
Vue.filter('slugify', (val) => {
if (typeof val !== 'undefined') {
    return val.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  return val;
})