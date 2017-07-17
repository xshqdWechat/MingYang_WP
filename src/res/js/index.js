(function ($, mywp) {
    mywp.setAdaption(19.2);

    $(function () {

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
                x: '3.25rem',
                y: '0.13rem',
                inf: '10*10'
            },
            {
                x: '0.50rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '0.77rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '1.1rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '4.94rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '5.22rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '10.67rem',
                y: '1.88rem',
                inf: '20*20'
            },
            {
                x: '.62rem',
                y: '2.37rem',
                inf: '20*20'
            },
            {
                x: '5.06rem',
                y: '2.27rem',
                inf: '20*20'
            },
            {
                x: '10.86rem',
                y: '2.05rem',
                inf: '20*20'
            },
            {
                x: '10.86rem',
                y: '1.88rem',
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
                    left:dot.x,
                    top:dot.y
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
                left:dot.x,
                top:dot.y,
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