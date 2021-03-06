(function ($, mywp, d3) {
    mywp.setAdaption(19.2);


    $(function () {


        /*高度*/
        mywp.fullScreen();

        /*子菜单收缩呈现*/
        function subToggleShow() {
            var show = true;
            return function () {
                if (show) {
                    $('.sub-nav').animate({marginLeft: '-2.74rem'}, 1000);
                    $('.container').animate({marginLeft: '0.8rem'}, 1000);
                } else {
                    $('.sub-nav').animate({marginLeft: 0}, 1000);
                    $('.container').animate({marginLeft: '3.5rem'}, 1000);
                }
                show = !show;
            }
        }
        $('#subToggle').on('click', subToggleShow());



        /*厂房信息*/
        // 路径
        var paths = [
            {id: '1', name: '1', d: "M639,310l112,65l233-131v-56l6-5l-56-46l-63-22L633,252v2l6,1V310z"},
            {
                id: '2',
                name: '2',
                d: "M577,95l72,42v6l56,32c0,0,14,6.8,22,6l4-2c0,0,17.8,0.8,34-8c16.2-8.8,43-25,43-25V92L648,1l-27,15v10l-44,25V95z"
            },
            {
                id: '3',
                name: '3',
                d: "M330,495V393l44-27l43,26v9l16,10l10-6l31,19l18-10v-8l8-4l6,4l26-14l27,16v84l-116,67l-44-25l-1-25l-3-2l-21,11L330,495z"
            },
            {id: '4', name: '4', d: "M548,457l32,20l96-55v-64l-8-4v-4l-11-7l-3,2l-10-5l-96,55V457z"},
            {id: '5', name: '5', d: "M207,249v-15l93-50l1-11l29-17l184,106v41l5,5l-97,58l-67-40l-6,5L207,249z"},
            {
                id: '6',
                name: '6',
                d: "M0,402l99,56c0,0,45.5,20.5,73,7l181-103l-4-4l-2-46l5-3l-145-74l-47,15l-41,35l-50,18l-44,33L0,349l4,2v46L0,402z"
            },
            {
                id:'7',
                name:'7',
                d:"M165.4,294.1c4.9-0.4,16.4-9.8,19-13c-8-4-16-8-24-12c-5.3,4.3-10.7,8.7-16,13C148.6,288.4,160.1,288.6,165.4,294.1z M213.4,298.1c0.3,0,0.7,0,1,0c-4.9-5.5-16.8-6.6-22-12c-4.6,0.6-16.9,10.1-18,14c4.8,1.2,8.2,4,12,6c2,0.7,4,1.3,6,2c0.2,0.1,4,3,4,3C197.9,311.3,212.3,299.7,213.4,298.1z M244.4,312.1c-4.1-1-19.6-8.5-22-11c-3.7,1-13.2,8.9-15,12c-0.7,0-1.3,0-2,0c1.5,4.8,6.9,4.8,11,7c3.2,1.7,6.1,3.5,10,5c0,0.3,0,0.7,0,1C230,327.1,243.6,314.9,244.4,312.1z M254.4,317.1c-3.9,0.5-14.3,9.1-16,12c-0.7,0-1.3,0-2,0c0,0.7,0,1.3,0,2c3.6,1,6.1,3.4,9,5c2.8,1.5,5.2,1.5,8,3c1.7,0.9,3.8,3.9,7,3c2.2-0.6,7.1-6.3,9-8c2.7-2.4,4.9-1.8,6-6C270.3,326.9,257.4,320.4,254.4,317.1zM94.4,332.1c0.7,0,1.3,0,2,0c0-0.7,0-1.3,0-2c-3.6-1-6.1-3.4-9-5c-2.8-1.5-5.2-1.5-8-3c-1.7-0.9-3.8-3.9-7-3c-2.2,0.6-7.1,6.3-9,8c-2.7,2.4-4.9,1.8-6,6c5.1,1.2,17.9,7.7,21,11C82.3,343.5,92.7,335,94.4,332.1z M112.4,339.1c-0.7,0-1.3,0-2,0c-2.6-1.4-4.5-3.3-8-4c-1.9,3.1-12.5,11.1-16,13c2.1,3.1,19.5,11.1,24,13c5.7-4.7,11.3-9.3,17-14C122.3,344.7,117.1,341.6,112.4,339.1z M157.4,364.1c0.3-0.2,1.8,0.2,1-1c-0.3,0-0.7,0-1,0c-1.7-2.5-19.7-11.6-24-12c-1.8,2.9-11.7,10.5-15,12c1.9,6.2,16.5,8.3,21,13C144,375.7,154.9,367,157.4,364.1z M148.4,379.1c1.4,2.1,20.8,12.2,24,13c4.2-4.9,11.5-7.4,15-13c1.1-0.9,0.1,0.1,1-1c-6.4-3-17.4-10.7-25-11C161.6,370.1,151.9,378.1,148.4,379.1z"
            }
        ];


        //建筑信息
        var buildInf = {
            1: {
                title:'SCD车间',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            2: {
                title:'SCD车间2',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            3: {
                title:'SCD车间3',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            4: {
                title:'SCD车间4',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            5: {
                title:'SCD车间5',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            6: {
                title:'SCD车间6',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            },
            7:{
                title:'SCD车间7',
                data:{
                    '实时功率':100+'kw',
                    '累计电量':100+'kw/h',
                    '频   率':100+'kw/h',
                    '电   压':100+'V',
                    '功率因数':100+'kw/h',
                }
            }
        };
        //回调
        var callback ={
            'mouseOver':function (d) {
                var cfTips = $('#cftips');
                cfTips.show();
                $('.build'+d.id).show();
                var title = $('<h6></h6>').text(buildInf[d.id].title);
                var dataBox = $('<div></div>');
                for(var key in buildInf[d.id].data){
                    var data = $('<div></div>');
                    var name = $('<span></span>').html(key);
                    var value = $('<span></span>').html(buildInf[d.id].data[key]);
                    data.append(name).append(value);
                    dataBox.append(data)
                }
                dataBox = dataBox.html();
                cfTips.find('.mbgwg').empty().append(title).append(dataBox);

            },
            'mouseOut':function (d) {
                $('.build'+d.id).hide();
                var cfTips = $('#cftips');
                // cfTips.hide();
            },
            'click':function (d) {
                if(d.id==1){
                   location.href = './realTimeMonitoring.html';
                }
            }
        };

        // 点击去掉弹框
        $(document).on('click',function () {
            var cfTips = $('#cftips');
            cfTips.hide();
        })

        // 绘制
        mywp.drawSvg("#build-inf", paths,callback);

    })

})(jQuery, mywp, d3)