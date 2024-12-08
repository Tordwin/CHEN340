// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    //for the accordion on people
    $("#accTest").accordion({ collapsible: true, active: false, heightStyle: "content" });
    $("#tabTest").tabs();
    $("#pepEverything").fadeIn(1000);
})