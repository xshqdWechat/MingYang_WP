(function (window) {
    "use strict";
    var mywp = {};
    mywp.setAdaption = setAdaption;

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

    if (typeof define === "function" && define.amd) {
        define("mywp", [], function () {
            return mywp;
        });
    } else {
        window.mywp = mywp;
    }
})(typeof window !== "undefined" ? window : this)
