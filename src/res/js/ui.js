/**
 * Created by Administrator on 2017/8/28.
 */
$(function () {
    //单选
    $('label').click(function () {
        var radioId = $(this).attr('name');
        $('label[name=' + radioId + ']').removeClass('radioChecked');
        $(this).addClass('radioChecked');

    })
    //下拉
    $('.selectUi').children('span').click(function () {

        var self = this;
        $(this).siblings('ul').toggle();
        $(this).siblings('ul').children('li').click(function () {
            $(self).siblings('em').text($(this).text()).siblings('ul').hide();
        })
    })
    //日期时间
    $('#myId').flatpickr({
        enableTime: true,
        dateFormat: "H:i",
        locale:'zh'
        // defaultDate: "3:30"
    })
})