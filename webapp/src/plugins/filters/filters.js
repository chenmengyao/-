import moment from 'moment'
const vfilter = {
  dateFmt: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('YYYY-MM-DD hh:mm')
    }
  },
  dateFmt1: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  dateFmt2: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('MM-DD')
    }
  },
  dateFmt3: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('YYYY-MM-DD')
    }
  },
  // 标准计数法
  localString(val) {
    if (!val) return 0
    let rs = Number(val).toLocaleString()
    return rs
  },
  // 性别
    sex(val) {
      const sexList = ['未知', '男', '女']
      return sexList[val]
    }
}
export default vfilter;
