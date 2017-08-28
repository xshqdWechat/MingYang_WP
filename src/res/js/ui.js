/**
 * Created by Administrator on 2017/8/28.
 */
$(function () {
    //单选
    $('label').click(function () {
        var radioId = $(this).attr('name');
        $('label[name='+radioId+']').removeClass('radioChecked');
        $(this).addClass('radioChecked');

    })
    //下拉
    $('.selectUi').children('span').click(function () {
        var self = this;
        $(this).siblings('ul').toggle();
        $(this).siblings('ul').children('li').click(function () {
            $(self).siblings('em').text($(this).text());
        })
    })
})