define(function (require, exports, module) {

    const {combineReducers} = require('redux');

    const blog = require('./blog');

    const dashboard = (state = {view: ``}, action) => {

        if (state.view === action.payload)
            return state;

        switch (action.type) {

            case 'DASHBOARD_VIEW':
                return Object.assign({}, state, {view: action.payload});

            case 'DASHBOARD_CONTENT':
                return Object.assign({}, state, {view: action.payload});

            default:
                return state;
        }

    };

    const lastAction = (state = '', action) => action;

    module.exports = combineReducers({
        blog,
        dashboard,
        lastAction
    })

});