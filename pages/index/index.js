//index.js
//获取应用实例
const app = getApp()

Page({
  handlejump (e) {
    // console.log(e)
    var id = e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/poet/poet?id='+id,
    })
  },
  inputVal (e) {
    this.setData({
      inputVal:e.detail.value
    })
  },
  getDate (e) {
    // console.log(e)
    this.setData({
      id:e.detail.id
    })
  },
  seek () {
    // console.log(this.data.inputVal)
    var words = this.data.inputVal
    var id = this.data.id
    if(words){
      wx.navigateTo({
        url: '/pages/search/search?words=' + words + '&id=' + id,
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    myList:{},
    inputVal: "",
    id: "",
    selectArray: [{
      "id": "1",
      "text": "诗人"
    }, {
      "id": "2",
      "text": "诗名"
    }]
  },
  loadMore () {
    //发送Ajax请求
    wx.request({
      url: app.globalData.url + '/index',
      success:(result)=>{
        // console.log(result)
        this.setData({
          myList:result.data
        })
        app.myLoading("正在加载数据...!")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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