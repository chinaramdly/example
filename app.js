"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) { 
        e.preventDefault();
        if(!$.trim($('input').val())==" "){
            let a = c => {
                for(let i = 0 ; i<c; i++){$('.minibox').append(`<h2>${c}</h2>`)}
            }
            let v = f =>Number(f)? a(f): $('.minibox').append(`<h2>${f}</h2>`);
            a($('input').val())
        }
        $('input').val(' ')
    });














});