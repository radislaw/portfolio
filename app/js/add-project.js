var addProject = (function () {

    var init = function () {
            _setUpListeners();

        },
        _setUpListeners = function () {
            $('#add-new-project').on('submit', _submitForm);
        };

    var _submitForm = function (e) {
        e.preventDefault();

        var form = $(this),
            url = 'contact-me.php',
            defObj = _ajaxForm(form, url);
    };

    var _ajaxForm = function (form, url) {
        if (!validation.validateForm(form)) return false;
    };
    return {
        init: init
    };

})();

addProject.init();
