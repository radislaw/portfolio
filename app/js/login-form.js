var loginForm = (function () {

    var init = function () {
            _setUpListeners();

        },
        _setUpListeners = function () {
            $('.autorization-form').on('submit', _submitForm);
        };

    var _submitForm = function (e) {
        e.preventDefault();

        var form = $(this),
            url = 'login.php',
            defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function (form, url) {
        if (!validation.validateForm(form)) return false;
    };
    return {
        init: init
    };

})();

loginForm.init();
