(function (window,$,d3) {
    "use strict";
    var mywp = {
        setAdaption:setAdaption,
        drawSvg:drawSvg,
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

    function drawSvg(id,pathData,callback) {
        d3.select(id).selectAll(".build").data(pathData).enter().append("path").attr("class","build").attr("d",function (data) {
            return data.d;
        }).style({"fill":"transparent","cursor":"pointer"}).on("mouseover",callback.mouseOver).on("mouseout",callback.mouseOut);
    }

    //屏幕高


    if (typeof define === "function" && define.amd) {
        define("mywp", [], function () {
            return mywp;
        });
    } else {
        window.mywp = mywp;
    }
})(typeof window !== "undefined" ? window : this,jQuery,d3)
