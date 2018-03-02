$(function(){
    'use strict';
    $('#info').click(function(){
        $('#info-box').toggleClass('open');
    });

    $('.pr_bar').each(function() {
        let width = $(this).data('skill');
        $(this).css('width', width + '%');
    });
});