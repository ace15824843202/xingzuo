const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// ///////////////////////////////////////

function showLoading() {
  wx.showLoading({
    title: '正在加载',
  })
}

function hideLoading() {
  wx.hideLoading()
}


function getNow() {
  let d = new Date()
  let year = formatNumber(d.getFullYear())
  let month = formatNumber(d.getMonth() + 1)
  let day = formatNumber(d.getDate())

  return [year,month,day]
}

function getResult(_this, success) {
  //console.log(_this)
  wx.request({
    url: _this.data.url,
    success
  })
}

module.exports = {
  formatTime: formatTime,
  getNow,
  getResult,
  showLoading,
  hideLoading
}
