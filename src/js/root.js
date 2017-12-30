define(function (require) {

    const settings = {};
    const configureStore = require('stores/index');
    const App = require('containers/App');

     const store = configureStore(settings);

     App(store);

});

