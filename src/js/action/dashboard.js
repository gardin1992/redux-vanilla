define(function (require, exports, module) {

    module.exports = {
        types: {
            view: 'DASHBOARD_VIEW',
            content: 'DASHBOARD_CONTENT'
        },
        view: function (html) {

            return {
                type: 'DASHBOARD_VIEW',
                payload: html
            };

        },
        content: function (html) {

            return {
                type: 'DASHBOARD_CONTENT',
                payload: html
            };

        }
    };

});