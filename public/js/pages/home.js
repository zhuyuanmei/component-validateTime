/**
 * 移动官网
 * @since 2018.01.11
 */
define(function (require, exports, module) {
    //'有效期'模块
    if($('#J_ValidateTime').length){
        var validateTime = require('validateTime');
        var validateTimeInstance = $.validateTime();

        var todayMS = $('#J_CurrentDateMS').val() ? parseInt($('#J_CurrentDateMS').val()) : new Date().getTime();
        //minDays包括今天的2天后开始
        var minTime = new Date(todayMS + 2 * 24 * 60 * 60 * 1000);
        //maxDays是30天，还包括今天，纳尼
        var maxTime = new Date(validateTimeInstance.getTimeRange('day',new Date(todayMS), 29).getTime());

        var $orderTime = $('#J_OrderTime');

        $orderTime.mobiscroll().date({
            display: 'bottom',
            theme: 'android-holo',
            mode: 'scroller',
            lang: 'zh',
            dateOrder: 'yyMMdd',
            setText: '确定',
            cancelText: '取消',
            dateFormat: 'yy-mm-dd',
            monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            minDate: minTime,
            maxDate: maxTime,
            headerText: function(str) {
                return str;
            },
            onSelect:function(e){}
        });
    }
});