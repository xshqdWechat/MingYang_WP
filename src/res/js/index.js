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


    })

})(jQuery, mywp)