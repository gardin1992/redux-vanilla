define(function (require, exports, module) {

    const {createStore} = require('redux');
    const rootReducer = require('reducers/index');

    module.exports = preloadedState => createStore(
        rootReducer,
        preloadedState
    );
    
});


/*

 ['exports', 'redux', 'reducers/index'], (exports, {createStore}, rootReducer) => {

 return

 }
 */