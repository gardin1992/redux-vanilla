define(function (require, exports, module) {

    module.exports = {
        types: {
            view: 'BLOG_VIEW',
            content: 'BLOG_CONTENT'
        },
        view: function (html) {

            return {
                type: 'BLOG_VIEW',
                payload: html
            }

        },
        content: function (html) {

            return {
                type: 'BLOG_CONTENT',
                payload: html
            };

        }
    };

});