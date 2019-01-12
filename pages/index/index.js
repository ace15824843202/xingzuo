

const tool = require('../../utils/util.js');
// console.log(tool.getNow());

//万年历接口的月份和天数没有前导0 , 处理月份和年份
 let currentDate = tool.getNow().join('');
 console.log(currentDate)
// currentDate[1] = Number(currentDate[1])
// currentDate[2] = Number(currentDate[2])

function getWnlInfo(_this){
  tool.getResult(_this, (result) => {//箭头函数，为了不改变this指向
    console.log(result)
    let data = result.data.showapi_res_body;
    
    _this.setData({
      result: data
    })
    tool.hideLoading()
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowNow: false,
    //url: 'http://v.juhe.cn/calendar/day?date=' + currentDate+'&key=7caa2cb06cb458d3dc955c10eebe4a49',//万年历接口地址,
    url:'https://route.showapi.com/856-1?showapi_appid=85221&showapi_sign=b29aecff02134a77861c669fb5f2d303&date='+currentDate,
    result:{}
  },
  chooseDate(e){
    tool.showLoading();
    let currentDate = e.detail.value;
   
   //万年历接口的月份和天数没有前导0 , 处理月份和年份
    currentDate = currentDate.split('-')
    // currentDate[1] = Number(currentDate[1])
    // currentDate[2] = Number(currentDate[2])
    currentDate = currentDate.join('')

    let isShowNow = currentDate != this.data.currentDate ? true : false;
    let url = 'https://route.showapi.com/856-1?showapi_appid=85221&showapi_sign=b29aecff02134a77861c669fb5f2d303&date=' + currentDate
    this.setData({
      url,
      currentDate ,
      isShowNow
    })
    getWnlInfo(this)
  },

  getNow(){
    let url = 'https://route.showapi.com/856-1?showapi_appid=85221&showapi_sign=b29aecff02134a77861c669fb5f2d303&date=' + currentDate
    this.setData({
      url,
      isShowNow:false
    })
    getWnlInfo(this)
  },
  nextDay(){
    
  },
  prevDay(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getWnlInfo( this )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})