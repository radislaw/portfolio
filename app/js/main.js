// BPOPUP
// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery

var myModule = (function () {

    var init = function () {
        _setUpListners();
    };
    var _setUpListners = function () {

        $('#pop-up').on('click', function (e) {

            e.preventDefault();

            $('#element_to_pop_up').bPopup({
                modalClose: false,
                speed: 450,
                transition: 'slideDown',
                modalColor: '#1C667A'
            });

        });
    };

    return {
        init: init
    };


})(jQuery);

myModule.init();

// FAKE FOR UPLOAD FILE FIELD

$(document).on('change', '.add-file', function () {

    // $('.add-file').on('change', function () {

    var
        $this = $(this),
        value = $this.val(),
        pureVal = value.replace(/c:\\fakepath\\/gmi, "");

    $('.upload-text').text(pureVal);

});

// PLACEHOLDER

$(document).ready(function () {

    if (!Modernizr.input.placeholder) {

        $('input, textarea').placeholder();

    }

});
