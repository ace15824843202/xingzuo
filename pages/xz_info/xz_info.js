// pages/xz_info/xz_info.js

const tool = require('../../utils/util.js');

function getXzInfo(_this){
  tool.getResult(_this, (result) => {//箭头函数，为了不改变this指向
    let data = result.data.showapi_res_body;
    //console.log(data)
    //let result = '';
    let res = {};
    let starTypeInfo = '';
    switch( _this.data.type ){
      case '0':
        res = data.day;
        starTypeInfo = '今日运势';
        _this.setData({
          scoreYearImageIndex:{}
        })
        break;
      case '1':
        res = data.tomorrow;
        starTypeInfo = '明日运势';
        _this.setData({
          scoreYearImageIndex:{}
        })
        break;
      case '2':
        res = data.week;
        starTypeInfo = '本周运势';
        _this.setData({
          scoreYearImageIndex:{}
        })
        break;
      case '3':
        res = data.month;
        starTypeInfo = '本月运势';
        _this.setData({
          scoreYearImageIndex:{}
        })
        break;
      case '4':
        res = data.year;
        starTypeInfo = '本年运势';
        var yearScore = {
          general_index: res.general_index,
          love_index: res.love_index,
          money_index: res.money_index,
          work_index: res.work_index
        }

        var scoreYearImageIndex = getYearTypeIndex( yearScore )//根据年的指数转换成1，2，3，4，5
        _this.setData({
          scoreYearImageIndex
        })
        console.log(scoreYearImageIndex)
        break;
      default :
        res = data.day;
        starTypeInfo = '今日运势';
    }
    _this.setData({
      result:res,
      starTypeInfo
    })
    tool.hideLoading()
    //console.log(res)
  })
}

//let xzArr = ["白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"]

function getYearTypeIndex( score ){
  //var score = parserInt( score );

  let {general_index,love_index,money_index,work_index} = score;
  let general_i,love_i,money_i,work_i;
  general_index = parseInt( general_index );
  love_index = parseInt( love_index );
  money_index = parseInt( money_index );
  work_index = parseInt( work_index );

  if( general_index == 0){
    general_i = '0'
  }else if(general_index > 0 && general_index < 20){
    general_i = '1'
  }else if(general_index >= 20 && general_index <= 40){
    general_i = '2'
  }else if(general_index >= 40 && general_index <= 60){
    general_i = '3'
  }else if(general_index >= 60 && general_index <= 80){
    general_i = '4'
  }else if(general_index >= 80 && general_index <= 100){
    general_i = '5'
  }

  if( love_index == 0){
    love_i = '0'
  }else if(love_index > 0 && love_index < 20){
    love_i = '1'
  }else if(love_index >= 20 && love_index <= 40){
    love_i = '2'
  }else if(love_index >= 40 && love_index <= 60){
    love_i = '3'
  }else if(love_index >= 60 && love_index <= 80){
    love_i = '4'
  }else if(love_index >= 80 && love_index <= 100){
    love_i = '5'
  }

  if( money_index == 0){
    money_i = '0'
  }else if(money_index > 0 && money_index < 20){
    money_i = '1'
  }else if(money_index >= 20 && money_index <= 40){
    money_i = '2'
  }else if(money_index >= 40 && money_index <= 60){
    money_i = '3'
  }else if(money_index >= 60 && money_index <= 80){
    money_i = '4'
  }else if(money_index >= 80 && money_index <= 100){
    money_i = '5'
  }

  if( work_index == 0){
    work_i = '0'
  }else if(work_index > 0 && work_index < 20){
    work_i = '1'
  }else if(work_index >= 20 && work_index <= 40){
    work_i = '2'
  }else if(work_index >= 40 && work_index <= 60){
    work_i = '3'
  }else if(work_index >= 60 && work_index <= 80){
    work_i = '4'
  }else if(work_index >= 80 && work_index <= 100){
    work_i = '5'
  }


  return {general_i,love_i,money_i,work_i};
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
   url:'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=baiyang',
    star :'jinniu',//为api提供的星座名称
    starname:'白羊',//在视图上显示的星座名称
    index:1,//星座图片索引
    type:'0',//判断今日|明日|周|月|年
    starTypeInfo:'今日运势',
    result:{
      "love_txt": "爱情加温日，花点心思送份小礼给或是下储准备爱心晚餐给心上人吧。", "work_txt": "若能在人际关系上加大力度，事业发展将更为顺利。", "work_star": 4, "money_star": 3, "lucky_color": "橄榄绿", "lucky_time": "20:00-22:00", "love_star": 3, "lucky_direction": "东北方", "summary_star": 4, "time": "20190108", "money_txt": "财运好坏参半，有进有出，宜平稳运作，不利过度投机。", "general_txt": "心情开朗，精神保持在最佳状态，工作的效率提高不少，并且面对事情的信心很足，一天下来感觉过得很充实；你的好心情也影响到伴侣，在通话中听到你轻快的语气，他的情绪也随之放松；在投资中做好风险分散工作，即使证券市场发生异动也能保存资本。", "grxz": "双子座", "lucky_num": "3", "day_notice": "乐观的面对生活和工作，每一天都可以很精彩。"
    
      // "health_txt": "应尽量减少出差、旅游等外出行程，白羊座小孩要慎防水险及火险，家长要留意孩子的去向，以免发生不测。",
      // "love_txt": "白羊座今年爱情运势集中在上半年，特别进入四月之后，火星回到你的交际宫，促进白羊座的人缘，对你有好感、献殷勤的人明显增多。但认真考察下来，发现志趣相投、适合自己的寥寥无几，如果是年纪较大的单身者，遇到这种情况的时候，切勿急躁，不要受年纪、家庭的影响而勉强凑合，否则今后的生活也不会快乐，应慎重抉择才是。",
      // "time": "2019",
      // "work_txt": "进入2019年，白羊终于摆脱了水逆的影响，运势渐入佳境。事业方面主要得到守护星火星良好相位的正面作用，发展机会很多，工作上经常得到贵人相助，打工一族容易被上司看好，有发挥的舞台。",
      // "money_txt": "白羊座今年有很多生财的小门路，但需要承担的风险较大，如果与朋友合资创业，需要考虑其计划的可行性，并评估风险，预测任何可能发生的意外，才能有更好的发展。若是与不熟的人合伙，一定要考察其信誉和人品，以免受骗。",
      // "work_index": "100分",
      // "money_index": "60分",
      // "general_txt": "进入2019年，白羊座整体运势较好，人缘不错，除了带来良好的桃花运势之外，还有不错的贵人运，当你跌落谷底的时候，有贵人为你指引方向，不至于迷失。上半年受守护星火星的影响，你喜欢结识良师益友，会一会各路英雄好汉，通过人脉网络的拓展，你有机会更好的发展自己，前途光明，并因此带动财运，增加收入。",
      // "oneword": "贵人指引，前途光明",
      // "general_index": "80分",
      // "love_index": "60分"

    },//api的返回结果
    scoreYearImageIndex: {
      // general_index: '1',
      // love_index: '1',
      // money_index: '1',
      // work_index: '1'
    },//年份的4项指数 值
    isShowStar:false,//切换下方星座选择
    isShowMenu:false,//切换右下角日历选择菜单
  },
  showStar(){
    this.setData({
      isShowStar: true
    })
  },
  hideStar(){
    this.setData({
      isShowStar: false
    })
  },
  showMenu(){
    this.setData({
      isShowMenu: true
    })
  },
  hideMenu(){
    this.setData({
      isShowMenu: false
    })
  },

  hide(){
    this.hideMenu();
    this.hideStar();
  },
  chooseStar( e ){
    //console.log(e)
    tool.showLoading();
    let { star, starname} = e.currentTarget.dataset;
    this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + star;
    this.setData({
      scoreYearImageIndex:{},
      url:this.data.url,
      type:'0',
      star,
      starname
    })
    getXzInfo(this)
  },

  chooseDateStar(e){
    console.log(e);
    let {type} = e.target.dataset

    tool.showLoading();
    switch(type){
      case "0":
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star;
        break;
      case "1":
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star+'&needTomorrow=1';
        break;
      case "2":
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star+'&needWeek=1';
        break;
      case "3":
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star+'&needMonth=1';
        break;
      case "4":
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star+'&needYear=1';

       break;

      default:
        this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + this.data.star;

    }

    
    this.setData({
      url:this.data.url,
      type,
    })
    getXzInfo(this);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // return;
    tool.showLoading();
    console.log(options)
    // return;
    //let { star, starname } = options || {star:'jinniu',starname:'金牛座'}
    let { star, starname } = JSON.stringify(options) == "{}" ? { star: 'jinniu', starname: '金牛座' } : options
    this.data.url = 'https://route.showapi.com/872-1?showapi_appid=85174&showapi_sign=b4c02a86b3ed4e1db88ba9eb2d0aae68&star=' + star;
    this.setData({
      url:this.data.url,
      star,
      starname
    })
    getXzInfo(this)
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