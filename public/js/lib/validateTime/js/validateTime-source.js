/**
 * 有效期模块
 * @author zym
 * @version 1.0
 * @since 2018-01-11
*/

define(function(require, exports, module) {
    var ValidateTime = function(options) {
        this.settings = $.extend({}, ValidateTime.defaults, options);
    };

    ValidateTime.prototype = {
            /**
             * 获取有效期区间,关于【 年数/月数(季度或单月)/天数(周数或单天)/时/分/秒 】区间; 默认为单天
             * return:Date类型
             * timeFlag:String类型 - 'year' or 'quarter' or 'month' or 'week' or 'day' or 'hours' or 'minutes' or 'seconds'
             * baseDate:Date类型
             * number:Int类型 - 具体单位数
             */
            getTimeRange : function(timeFlag, baseDate, number){
                switch (timeFlag) {
                    case 'year': {
                        baseDate.setFullYear(baseDate.getFullYear() + number);
                        return baseDate;
                        break;
                    }
                    case 'quarter': {
                        baseDate.setMonth(baseDate.getMonth() + number * 3);
                        return baseDate;
                        break;
                    }
                    case 'month': {
                        baseDate.setMonth(baseDate.getMonth() + number);
                        return baseDate;
                        break;
                    }
                    case 'week': {
                        baseDate.setDate(baseDate.getDate() + number * 7);
                        return baseDate;
                        break;
                    }
                    case 'day': {
                        baseDate.setDate(baseDate.getDate() + number);
                        return baseDate;
                        break;
                    }
                    case 'hours': {
                        baseDate.setHours(baseDate.getHours() + number);
                        return baseDate;
                        break;
                    }
                    case 'minutes': {
                        baseDate.setMinutes(baseDate.getMinutes() + number);
                        return baseDate;
                        break;
                    }
                    case 'seconds': {
                        baseDate.setSeconds(baseDate.getSeconds() + number);
                        return baseDate;
                        break;
                    }
                    default: {
                        baseDate.setDate(baseDate.getDate() + number);
                        return baseDate;
                        break;
                    }
                }
            }
    };

    /**
     * 默认配置
     */
    ValidateTime.defaults = {};

    var rValidateTime = function(options) {
        var ValidateTimeInstance = new ValidateTime(options);

        return ValidateTimeInstance;
    };

    window.rValidateTime = $.rValidateTime = $.validateTime = rValidateTime;
});