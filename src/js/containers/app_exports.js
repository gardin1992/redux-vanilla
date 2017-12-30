define(function (require) {

    const $ = require('utils/dd');
    const actions = require('action/index');
    const components = require('components/index');

    const response = $.q('#response');

    const addEvt = (node, type, evt) => {

        node.addEventListener(type, evt);

    };

    return (store, elements) => {

        const {dispatch, subscribe, getState} = store;

        const render = prop => () => {

            let state = getState();
            state = state[prop];

            if (state && state.view)
                response.innerHTML = state.view;

        };

        const onClick = ({state, action, payload}) => {

            return function (evt) {

                evt.preventDefault();

                const unsubscribe = subscribe(render(state));

                dispatch(actions[state][action](payload[action]));

                unsubscribe();

            }

        };

        Object.keys(elements).forEach(key => {

            const {node, state, action, event} = elements[key];

            const params = {
                state: state,
                action: action,
                payload: components[state]
            };

            addEvt(node, event, onClick(params));

        });

    }

});