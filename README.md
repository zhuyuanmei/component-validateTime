# component-validateTime
组件名称：有效期区间组件<br>
组件功能：获取 年数/月数(季度或单月)/天数(周数或单天)/时/分/秒 区间<br>
组件使用示例：          
            
            var validateTime = require('validateTime');
            var validateTimeInstance = $.validateTime();

            var todayMS = $('#J_CurrentDateMS').val() ? parseInt($('#J_CurrentDateMS').val()) : new Date().getTime();

            //maxDays是30天，还包括今天
            var maxTime = new Date(validateTimeInstance.getTimeRange('day',new Date(todayMS), 29).getTime());



            //具体方法解析
           /**
             * 获取有效期区间,关于【 年数/月数(季度或单月)/天数(周数或单天)/时/分/秒 】区间; 默认为单天
             * return:Date类型
             * timeFlag:String类型 - 'year' or 'quarter' or 'month' or 'week' or 'day' 
                                 or 'hours' or 'minutes' or 'seconds'
             * baseDate:Date类型
             * number:Int类型 - 具体单位数
             */
            getTimeRange : function(timeFlag, baseDate, number){***}


