(function (window, $, d3) {
    "use strict";
    var mywp = {
        setAdaption: setAdaption,
        drawSvg: drawSvg,
        fullScreen: fullScreen,
        dot: dot
    };


    // 自适应
    function setAdaption(baseFontSize) {
        baseFontSize = baseFontSize || 7.5;
        var docEl = document.documentElement;
        var refresh = function () {
            var dpr = window.devicePixelRatio,
                deviceWidth = docEl.getBoundingClientRect().width,
                deviceFontSize = deviceWidth / baseFontSize + "px";
            docEl.setAttribute('data-dpr', dpr);
            docEl.style.fontSize = deviceFontSize;
        };
        if (performance && performance.navigation.type === 2) {
            refresh();
            return;
        }
        window.addEventListener('resize', function () {
            refresh();
            return;
        }, false);
        refresh();
    }

    //屏幕高
    function fullScreen() {
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
    }

    // 绘制SVG
    function drawSvg(id, pathData, callback) {
        d3.select(id).selectAll(".build").data(pathData).enter().append("path").attr("class", "build").attr("d", function (data) {
            return data.d;
        }).style({
            "fill": "transparent",
            "cursor": "pointer"
        }).on("mouseover", callback.mouseOver).on("mouseout", callback.mouseOut).on('click', callback.click ? callback.click : $.noop);
        d3.select(".mywp-cf").style("overflow", "hidden");
    }

    // 信息点
    function dot(list) {
        // 边界判断
        var Width = $('body').width()/100,
            Height = $('body').height()/100,
            subWidth = $('.cfxtImg')[0].getBoundingClientRect().left/100,
            subHeight = $('.cfxtImg')[0].getBoundingClientRect().top/100;

        creatInfDot(list);
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
                handleDot.mouseenter(function (e) {
                    e.stopPropagation();
                    console.log(this)
                    console.log("----------------")
                    infToast(dot);
                });
                handleDot.mouseleave(function (e) {
                    e.stopPropagation();
                    console.log(this)
                    /*  var toast = $('.mywp-modal2');
                     toast && toast.remove();
                     e.stopPropagation();*/
                });
                return handleDot;
            } else {
                console.log('x,y是必要参数');
            }
        }

        // 提示框
        function infToast(dot) {
            // 清除已存在的提示
            var toast = $('.mywp-modal2');
            toast && toast.remove();

            var inftoast = $('<div class="mywp-modal2"><div class="mbgT"></div><div class="mbgB"></div><div class="mbgL"></div><div class="mbgR"></div><div class="mbgwg"></div></div>');
            inftoast.find('.mbgwg').html(getInf(dot));

            $('.cfxtImg').append(inftoast);

            //边界判断
            borderCheck(dot,inftoast);

        }

        //根信息点返回HTML
        function getInf(dot) {
            var html = '';
            if (dot.inf instanceof Array) {
                dot.inf.forEach(function (value) {
                    html += '<div><span>' + value[0] + '</span>' + '<span>' + value[1] + '</span></div>';
                })
            } else {
                console.log('dot.inf必须为数组类型')
            }
            return html;
        }

        // 边界监测
        function borderCheck(dot,objDiv) {
            var infDiv = {
                width: $('.mywp-modal2').width()/100,
                height: $('.mywp-modal2').height()/100
            };

            if (+dot.x + infDiv.width >= Width - subWidth) {
                dot.x -= infDiv.width;
            }
            if (+dot.y + infDiv.height >= Height - subHeight) {
                dot.y -= infDiv.height;
            }

            var cssObj = {
                left: dot.x + 'rem',
                top: dot.y * .89 + 'rem',
                display: 'block'
            };

            objDiv.css(cssObj);
        };
    }


    if (typeof define === "function" && define.amd) {
        define("mywp", [], function () {
            return mywp;
        });
    } else {
        window.mywp = mywp;
    }
})(typeof window !== "undefined" ? window : this, jQuery, d3)
