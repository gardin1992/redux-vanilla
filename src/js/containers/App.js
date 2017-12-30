define(function (require, exports, module) {

    // requires
    const $ = require('utils/dd');
    const ex = require('./app_exports');

    // elements
    const btnBlog = $.q('#btnBlog');
    const btnDashboard = $.q('#btnDashboard');

    const elements = {
        btnBlog: {
            node: btnBlog,
            state: 'blog',
            action: 'view',
            event: 'click'
        },
        btnDashboard: {
            node: btnDashboard,
            state: 'dashboard',
            action: 'view',
            event: 'click'
        }
    };

    module.exports = store => {

        ex(store, elements);

    }

});

//
// var drawerEl = $.q('.mdc-persistent-drawer');
//
// var MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
// var drawer = new MDCPersistentDrawer(drawerEl);
//
// console.log('drawer', drawer);
//
// document.querySelector('.demo-menu').addEventListener('click', function () {
//     drawer.open = !drawer.open;
// });
//
// drawerEl.addEventListener('MDCPersistentDrawer:open', function () {
//     console.log('Received MDCPersistentDrawer:open');
// });
// drawerEl.addEventListener('MDCPersistentDrawer:close', function () {
//     console.log('Received MDCPersistentDrawer:close');
// });
//


/*

 //




 ({dispatch, subscribe, getState}) => {

 const render = prop => () => {

 let state = getState();
 state = state[prop];

 if (state && state.view)
 response.innerHTML = state.view;

 };

 const onClick  = view => {

 return function (evt) {

 const unsubscribe  = subscribe(render(view));
 evt.preventDefault();
 dispatch(action[view].view(component[view]));
 unsubscribe();

 }
 };

 addEvt(btnBlog, onClick('blog'));
 addEvt(btnDashboard, onClick('dashboard'));

 };


 addEvt(btnBlog, evt('blog'));
 addEvt(btnDashboard, evt('dashboard'));



 }
 */