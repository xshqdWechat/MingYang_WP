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
                },
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


        var myChart2 = echarts.init(document.getElementById('main2'));
        console.log(myChart2);
        console.log(myChart);
        var option = {
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最高气温','最低气温'],
                textStyle:{
                    color:'#fff'
                },
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日'],
                nameTextStyle:{
                    color:'#fff',
                    fontSize:'24'
                },
                lineStyle:{
                    color:'#fff'
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                },
                nameTextStyle:{
                    color:'#fff'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option);

    })
})(jQuery,mywp)
