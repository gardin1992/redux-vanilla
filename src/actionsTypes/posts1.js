define(['actionsTypes/posts'], (types) => {

    const selectPosts = selected => {
        return {
            type: types.SELECT_POSTS,
            selected
        }
    };

    const invalidatePosts = invalid => {
        return {
            type: types.INVALIDATE_POSTS,
            invalid
        }
    };

    const requestPosts = posts => {
        return {
            type: types.REQUEST_POSTS,
            posts
        }
    };

    const receivePosts = (posts, json) => {
        return {
            type: types.RECEIVE_POSTS,
            posts,
            // posts: json
            receivedAt: Date.now()
        }
    };

    const fetchPosts = posts => {
        return dispatch => {
            dispatch(_actions.posts.requestPosts(posts));

            return fetch('flowers.jpg')
                .then(response => response.json)
                .then(json => dispatch(_actions.posts.receivePosts(posts, json)));
        }
    };

    const shouldFetchPosts = (state, posts) => {

        return true

    };

    return {
        selectPosts,
        invalidatePosts,
        requestPosts,
        receivePosts,
        fetchPosts,
        shouldFetchPosts
    };

});