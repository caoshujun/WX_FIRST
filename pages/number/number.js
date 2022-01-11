// pages/number/number.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count: '',
        winningNumber: "",
        dataInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },
    numberInput: function (e) {
        this.setData({
            count: e.detail.value
        });
    },

    getLuckyNumber: function () {
        var n = parseInt(this.data.count);
        var target = [];
        for (var i = 0; i < n; i++) {
            var source = [];
            for (var k = 1; k < 81; k++) {
                source.push(k);
            }

            var number = [];
            for (var j = 0; j < 20; j++) {
                var index = Math.floor(Math.random() * source.length);
                number.push(source[index]);
                source.splice(index, 1);
            }
            target = target.concat(number);
        }
        var infoList = [];
        var numberList = [];
        for (var i = 0; i < target.length; i++) {
            var time = 1;
            if (numberList.indexOf(target[i]) > -1) {
                continue;
            }
            numberList.push(target[i]);
            for (var j = 0; j < target.length; j++) {
                if (target[i] == target[j]) {
                    time++;
                }
            }
            var info = {};
            info.time = time;
            info.value = target[i];
            infoList.push(info);
        }
        infoList.sort(this.compare("time"))
        console.log(infoList);
        var end = [];
        for (var i = 0; i < 10; i++) {
            end.push(infoList[i].value);
        }

        this.setData({
            winningNumber: end
        })

    },

    /**
     * 通过比较排序
     * @param {比较的对象} p 
     */
    compare(p) {
        return (m, n) => {
            var a = m[p];
            var b = n[p];
            return b - a;
        }
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