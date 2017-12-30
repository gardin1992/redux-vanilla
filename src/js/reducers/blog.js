define(function (require, exports, module) {

    module.exports = (state = {view: ``}, action) => {

        switch (action.type) {

            case 'BLOG_VIEW':
                return Object.assign({}, state, {view: action.payload});

            default:
                return state;
        }

    }

});