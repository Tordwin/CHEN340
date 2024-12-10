// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    $("#peopleTab").tabs();
    $("[id=collapseDescription]").accordion({ collapsible: true, active: false, heightStyle: "content"})
    new DataTable('table.display');
    $("[id=newsAccordion]").accordion({ collapsible: true, active: false, heightStyle: "content" })
    $("#pickDate").datepicker()
})

jQuery(function () {
    jQuery(".player").YTPlayer();
});