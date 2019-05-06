import moment from 'moment'
const vfilter = {
  dateFmt: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  dateFmt1: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time).format('YYYY-MM-DD')
    }
  },
  // 标准计数法
  localString(val) {
    if (!val) return 0
    let rs = Number(val).toLocaleString()
    return rs
  }
}
export default vfilter;
