(function ($, mywp) {
    mywp.setAdaption(19.2);

    $(function () {

        /*高度*/
 /*       var realHeight  = $('body').height();
        var scale = realHeight/1080;
        console.log(scale);

        $('body').css({transform:'scaleY('+scale+')'})
        $(window).on('resize',function () {
            var realHeight  = $('body').height();
            var scale = realHeight/1080;
            $('body').css({transform:'scaleY('+scale+')'})
        })*/
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
            for(var i =0,ii=list.length;i<ii;i++){
                $('.cfxtImg').append(createDot(list[i]));
            }
        }
        // 创建信息点
        function createDot(dot) {
            if(dot&&dot.x&&dot.y){
                var cssObj = {
                    position:'absolute',
                    left:dot.x+'rem',
                    top:dot.y*.89+'rem'
                };
                var handleDot =  $('<span class="dot"></span>').css(cssObj);
                //绑定提示框
                handleDot.click(function () {
                    infToast(dot);
                });
                return handleDot;
            }else{
                console.log('x,y是必要参数');
            }
        }
        // 提示框
        function infToast(dot) {
            // 清除已存在的提示
            var toast = $('.toast');
            toast&&toast.remove();

            var cssObj = {
                position:'absolute',
                left:dot.x+'rem',
                top:dot.y*.89+'rem',
                width:'100px',
                height:'100px',
                backgroundColor:'#fff'

            };
            var inftoast = $('<div class="toast">123123</div>').html(dot.inf).css(cssObj);
            $('.cfxtImg').append(inftoast);
        }

        // 边界监测
        function borderCheck() {
            
        }

    })

})(jQuery, mywp)