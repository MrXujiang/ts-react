import moment from 'moment';

export default {
    onDateSelect (date) {
        console.log(moment(date._d).format('YYYY-MM-DD'))
    },

    onPanelChange (value) {
        console.log(value)
    }
}