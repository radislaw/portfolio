// BPOPUP
// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery

var popup = (function () {

    var init = function () {
        _setUpListners();
    };

    var _setUpListners = function () {

        $('#pop-up').on('click', _popup);
        $('.b-close').on('click', _clearForm);
    };

    var _popup = function (e) {
        e.preventDefault();
        $('#element_to_pop_up').bPopup({
            modalClose: false,
            speed: 450,
            transition: 'slideDown',
            transitionClose: 'fadeIn',
            modalColor: '#1C667A'
        });

    };

    var _clearForm = function () {
        $('input, textarea').removeClass('has-error').trigger('hideTooltip');
    };

    return {
        init: init
    };

})(jQuery);

popup.init();

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
