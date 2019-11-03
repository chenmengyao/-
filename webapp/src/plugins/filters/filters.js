import moment from 'moment'
const vfilter = {
  formatName:(name)=>{
    let newStr;
    if (name.length === 2) {
    newStr = name.substr(0, 1) + '****';
    } else if (name.length > 2) {
      let char = '****';
      // for (let i = 0, len = name.length - 2; i < len; i++) {
      //   char += '*';
      // }
      newStr = name.substr(0, 1) + char + name.substr(-1, 1);
    } else {
      newStr = name+'****';
    }

    return newStr;
 },
  dateFmt: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('YYYY-MM-DD HH:mm')
    }
  },
  dateFmt1: (time) => {
    if (time == '' || time == null) {
      return ''
    } else {
      return moment(time*1000).format('YYYY-MM-DD HH:mm:ss')
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
    },
    //米转换成千米
    meters(val){
      let meter
      if(val>999){
        meter=val/1000+'km'
        return meter
      }else{
        meter = val+'m'
        return menubar
      }
    }
}
export default vfilter;
