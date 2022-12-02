import Vue from 'vue';
import moment from 'moment';

Vue.mixin({
  methods: {

    /**
     * Add hidden class on body
     */
    setHiddenOnBody(){
      document.querySelector('body').classList.add('--hidden');
    },

    /**
     * Remove hidden class on body
     */
    removeHiddenOnBody(){
      document.querySelector('body').classList.remove('--hidden');
    },

    /**
     * Toggle hidden class on body
     */
     toggleHiddenOnBody(){
      document.querySelector('body').classList.toggle('--hidden');
    },
    
    /**
     * convertDate
     * @param {string} date value
     * @param {string} format value
     * @returns converted date
     */
    convertDate(date, format) {
      moment.locale('fr');
      return moment(String(date)).format(format)
    },

    /**
     * isBefore
     * @param {string} date value
     * @returns true if date in paramas is before today date
     */
    isBefore(date){
      moment.locale('fr');
      return moment(String(date)).isBefore();
    },

    /**
     * isAfter
     * @param {string} date value
     * @returns true if date in paramas is after today date
     */
    isAfter(date){
      moment.locale('fr');
      return moment(String(date)).isAfter();
    }

  }
});