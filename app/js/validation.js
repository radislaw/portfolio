var validation = (function () {

    var init = function () {
            _setUpListeners();

        },
        _setUpListeners = function () {
            $('form').on('keydown', '.has-error', _removeError);
            $('form').on('reset', _clearForm);
        };

    var _removeError = function () {
        $(this).removeClass('has-error');
    };
    var _clearForm = function (form) {
        var form = $(this);
        form.find('input, textarea').trigger('hideTooltip');
        form.find('.has-error').removeClass('has-error');
    };
    // create tooltips
    var _createQtip = function (element, position) {
        // tooltip position
        if (position === 'right') {
            position = {
                my: 'left center',
                at: 'right center'
            }
        } else {
            position = {
                my: 'right center',
                at: 'left center',
                adjust: {
                    method: 'shift none'
                }
            }
        }

        // tooltip initialization
        element.qtip({
            content: {
                text: function () {
                    return $(this).attr('qtip-content');
                }
            },
            show: {
                event: 'show'
            },
            hide: {
                event: 'keydown hideTooltip'
            },
            position: position,
            style: {
                classes: 'qtip-mystyle',
                tip: {
                    height: 7,
                    width: 7
                }
            }
        }).trigger('show');
    };

    // Universal function
    var validateForm = function (form) {

        var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
            valid = true;
        $.each(elements, function (index, val) {

            var element = $(val),
                val = element.val(),
                pos = element.attr('qtip-position');

            if (val.length === 0) {
                element.addClass('has-error');
                _createQtip(element, pos);
                valid = false;
            }

        });

        return valid;
    };

    return {
        init: init,
        validateForm: validateForm
    };

})();

validation.init();
/**
 * Created by radislav on 13.10.15.
 */
