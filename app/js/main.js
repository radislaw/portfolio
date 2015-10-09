// BPOPUP
// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;
(function ($) {

    // DOM Ready
    $(function () {

        // Binding a click event
        // From jQuery v.1.7.0 use .on() instead of .bind()
        $('#pop-up').bind('click', function (e) {

            // Prevents the default action to be triggered.
            e.preventDefault();

            // Triggering bPopup when click event is fired
            $('#element_to_pop_up').bPopup();

        });

    });

})(jQuery);

$('.add-file').on('change', function () {

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
