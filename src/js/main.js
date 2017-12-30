requirejs.config({
    baseUrl: '/public/js',
    paths: {
        node_modules: '/node_modules',
        redux: [
            '/node_modules/redux/dist/redux',
            '/node_modules/redux/dist/redux.min'
        ],
        reactRedux: [
            '/node_modules/react-redux/dist/react-redux',
            '/node_modules/react-redux/dist/react-redux.min',
        ],
        mdc: [
            '/node_modules/material-components-web/dist/material-components-web',
            '/node_modules/material-components-web/dist/material-components-web.min',
        ]
    }
    // shim: {
    //     'root': {
    //         //These script dependencies should be loaded before loading
    //         //backbone.js
    //         deps: ['underscore', 'jquery'],
    //         //Once loaded, use the global 'Backbone' as the
    //         //module value.
    //         exports: 'Backbone'
    //     },
    // }
});
requirejs(['root']);
