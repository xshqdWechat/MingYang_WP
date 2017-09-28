;(function ($,mywp) {
    mywp.setAdaption(19.2);

    $(function () {
        /*高度*/
        mywp.fullScreen();

        /*子菜单收缩呈现*/
        function subToggleShow() {
            var show = true;
            return function () {
                if (show) {
                    $('.sub-nav').animate({left: '-2.74rem'}, 1000);
                    $('.container').animate({left: '0.8rem'}, 1000);
                } else {
                    $('.sub-nav').animate({left: 0}, 1000);
                    $('.container').animate({left: '3.5rem'}, 1000);
                }
                show = !show;
            }
        }
        $('#subToggle').on('click', subToggleShow());

        //饼图
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            title : {
                text: '电量峰平谷分析',
                subtext: '',
                x:'center',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['谷','峰','平'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name: '电量峰平谷分析',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:33, name:'谷'},
                        {value:33, name:'峰'},
                        {value:34, name:'平'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ],
            color:['#e69d87','#dd6b66','#759aa0']
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

    })
})(jQuery,mywp)
