(function ($, mywp, d3) {
    mywp.setAdaption(19.2);

    $(function () {

        /*高度*/
        function getScale() {
            var fontSize = $('html').css('fontSize');
            var scale = 1;
            fontSize = ~fontSize.indexOf('px') ? fontSize.slice(0, -2) : fontSize;
            if (fontSize !== undefined) {
                var realHeight = $('body').height();
                scale = realHeight / (10.8 * fontSize);
            }
            return scale;
        };
        $(window).on('resize', function () {
            $('.mywp-wrap').css({transform: 'scaleY(' + getScale() + ')'});
        });
        $('.mywp-wrap').css({transform: 'scaleY(' + getScale() + ')'});

        /*子菜单收缩呈现*/
        function subToggleShow() {
            var show = true;
            return function () {
                if (show) {
                    $('.sub-nav').animate({marginLeft: '-2.74rem'}, 1000);
                } else {
                    $('.sub-nav').animate({marginLeft: 0}, 1000);
                }
                show = !show;
            }
        }

        $('#subToggle').on('click', subToggleShow());

        /*信息点生成*/
        var dots = [
            {
                x: '3.25',
                y: '0.13',
                inf: '10*10'
            },
            {
                x: '0.50',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '0.77',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '1.1',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '4.94',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '5.22',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '10.67',
                y: '1.88',
                inf: '20*20'
            },
            {
                x: '.62',
                y: '2.37',
                inf: '20*20'
            },
            {
                x: '5.06',
                y: '2.27',
                inf: '20*20'
            },
            {
                x: '10.86',
                y: '2.05',
                inf: '20*20'
            },
            {
                x: '10.86',
                y: '1.88',
                inf: '20*20'
            }
        ];

        Dot(dots);

        function Dot(list) {
            creatInfDot(list)
        }

        function creatInfDot(list) {
            for (var i = 0, ii = list.length; i < ii; i++) {
                $('.cfxtImg').append(createDot(list[i]));
            }
        }

        // 创建信息点
        function createDot(dot) {
            if (dot && dot.x && dot.y) {
                var cssObj = {
                    position: 'absolute',
                    left: dot.x + 'rem',
                    top: dot.y * .89 + 'rem'
                };
                var handleDot = $('<span class="dot"></span>').css(cssObj);
                //绑定提示框
                handleDot.click(function () {
                    infToast(dot);
                });
                return handleDot;
            } else {
                console.log('x,y是必要参数');
            }
        }

        // 提示框
        function infToast(dot) {
            // 清除已存在的提示
            var toast = $('.toast');
            toast && toast.remove();

            var cssObj = {
                position: 'absolute',
                left: dot.x + 'rem',
                top: dot.y * .89 + 'rem',
                width: '100px',
                height: '100px',
                backgroundColor: '#fff'
            };
            var inftoast = $('<div class="toast">123123</div>').html(dot.inf).css(cssObj);
            $('.cfxtImg').append(inftoast);
        }

        // 边界监测
        function borderCheck() {
        };


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
        ];

        var buildInf = {
            1: {data: 1},
            2: {data: 2},
            3: {data: 3},
            4: {data: 4},
            5: {data: 5},
            6: {data: 6}
        };
        var callback ={
            'mouseOver':function (d) {
                console.log(d);
                $('.build'+d.id).show();
                console.log(buildInf[d.id]);
            },
            'mouseOut':function (d) {
                $('.build'+d.id).hide();
            }
        }
        mywp.drawSvg("#build-inf", paths,callback);


    })

})(jQuery, mywp, d3)