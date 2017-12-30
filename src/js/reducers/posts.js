// define(['redux', 'actionsTypes/posts'], ({combineReducers}, types) => {
//
//     const {
//         SELECT_POSTS,
//         INVALIDATE_POSTS,
//         REQUEST_POSTS,
//         RECEIVE_POSTS
//     } = types;
//
//     const selectedPosts = (state = 'reactjs', action) => {
//
//         switch (action.type) {
//
//             case SELECT_POSTS:
//                 return action.posts;
//             default:
//                 return state
//
//         }
//
//     };
//
//     const posts = (state = {
//         isFetching: false,
//         didInvalidate: false,
//         items: []
//     }, action) => {
//
//         switch (action.type) {
//
//             case INVALIDATE_POSTS:
//                 return Object.assign({}, state, {
//                     didInvalidate: true
//                 });
//
//             case REQUEST_POSTS:
//                 return Object.assign({}, state, {
//                     isFetching: true,
//                     didInvalidate: false
//                 });
//
//             case RECEIVE_POSTS:
//                 return Object.assign({}, state, {
//                     isFetching: false,
//                     didInvalidate: false,
//                     items: action.posts,
//                     lastUpdated: action.receivedAt
//                 });
//
//             default:
//                 return state
//
//         }
//
//     };
//
//     const postsBySubreddit = (state = {}, action) => {
//         switch (action.type) {
//             case INVALIDATE_POSTS:
//             case RECEIVE_POSTS:
//             case REQUEST_POSTS:
//                 return Object.assign({}, state, {
//                     [action.subreddit]: posts(state[action.subreddit], action)
//                 });
//
//             default:
//                 return state
//         }
//     };
//
//     return combineReducers({
//         postsBySubreddit,
//         selectedPosts
//     });
//
// });