(function ($, mywp) {
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

    })

})(jQuery, mywp)