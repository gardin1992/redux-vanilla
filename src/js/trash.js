// define([], function () {
//
//     const ActionTypes_Blog = {
//         flags: {
//             BLOG_FLAG: 'BLOG_FLAG',
//             BLOG_FLAG_INSERT: 'BLOG_FLAG_INSERT',
//             BLOG_FLAG_UPDATE: 'BLOG_FLAG_UPDATE',
//             BLOG_FLAG_DELETE: 'BLOG_FLAG_DELETE',
//             BLOG_FLAG_ALL: 'BLOG_FLAG_ALL'
//         },
//         posts: {
//             BLOG_POST: 'BLOG_POST',
//             BLOG_POST_INSERT: 'BLOG_POST_INSERT',
//             BLOG_POST_UPDATE: 'BLOG_POST_UPDATE',
//             BLOG_POST_DELETE: 'BLOG_POST_DELETE',
//             BLOG_POST_ALL: 'BLOG_POST_ALL'
//         },
//         comments: {
//             BLOG_COMMENT: 'BLOG_COMMENT',
//             BLOG_COMMENT_INSERT: 'BLOG_COMMENT_INSERT',
//             BLOG_COMMENT_UPDATE: 'BLOG_COMMENT_UPDATE',
//             BLOG_COMMENT_DELETE: 'BLOG_COMMENT_DELETE',
//             BLOG_COMMENT_ALL: 'BLOG_COMMENT_ALL'
//         },
//         authos: {
//             BLOG_AUTHOR: 'BLOG_AUTHOR',
//             BLOG_AUTHOR_INSERT: 'BLOG_AUTHOR_INSERT',
//             BLOG_AUTHOR_UPDATE: 'BLOG_AUTHOR_UPDATE',
//             BLOG_AUTHOR_DELETE: 'BLOG_AUTHOR_DELETE',
//             BLOG_AUTHOR_ALL: 'BLOG_AUTHOR_ALL'
//         },
//         blog: {
//             BLOG: 'BLOG'
//         }
//     };
//
//     const Action_Blog = {
//         blog: {
//             getBlog: blog => {
//                 return {
//                     type: typesBlog.blog.BLOG,
//                     blog: blog
//                 }
//             }
//         }
//
//     };
//
//     const Fetch = new function () {
//
//
//         var myHeaders = new Headers();
//
//         var myInit = { method: 'GET',
//             headers: myHeaders,
//             mode: 'cors',
//             cache: 'default' };
//
//         fetch('flowers.jpg',myInit)
//             .then(function(response) {
//                 return response.blob();
//             })
//             .then(function(myBlob) {
//                 var objectURL = URL.createObjectURL(myBlob);
//                 myImage.src = objectURL;
//             });
//
//
//     }();
// //
// // import fetch from 'cross-fetch'
// //
// // export const REQUEST_POSTS = 'REQUEST_POSTS'
// // export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// // export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
// // export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// //
// // export function selectSubreddit(subreddit) {
// //     return {
// //         type: SELECT_SUBREDDIT,
// //         subreddit
// //     }
// // }
// //
// // export function invalidateSubreddit(subreddit) {
// //     return {
// //         type: INVALIDATE_SUBREDDIT,
// //         subreddit
// //     }
// // }
// //
// // function requestPosts(subreddit) {
// //     return {
// //         type: REQUEST_POSTS,
// //         subreddit
// //     }
// // }
// //
// // function receivePosts(subreddit, json) {
// //     return {
// //         type: RECEIVE_POSTS,
// //         subreddit,
// //         posts: json.data.children.map(child => child.data),
// //         receivedAt: Date.now()
// //     }
// // }
// //
// // function fetchPosts(subreddit) {
// //     return dispatch => {
// //         dispatch(requestPosts(subreddit))
// //         return fetch(`https://www.reddit.com/r/${subreddit}.json`)
// //             .then(response => response.json())
// //             .then(json => dispatch(receivePosts(subreddit, json)))
// //     }
// // }
// //
// // function shouldFetchPosts(state, subreddit) {
// //     const posts = state.postsBySubreddit[subreddit]
// //     if (!posts) {
// //         return true
// //     } else if (posts.isFetching) {
// //         return false
// //     } else {
// //         return posts.didInvalidate
// //     }
// // }
// //
// // export function fetchPostsIfNeeded(subreddit) {
// //     return (dispatch, getState) => {
// //         if (shouldFetchPosts(getState(), subreddit)) {
// //             return dispatch(fetchPosts(subreddit))
// //         }
// //     }
// // }
//
//     const ActionTypes_Load = {
//         LOADED_DATA: 'LOADED_DATA',
//         LOAD_DATA: 'LOAD_DATA',
//     };
//
//     const Action_Load = {
//         loadData: data => {
//             return {
//                 type: ActionTypes_Load.LOAD_DATA,
//                 data: data
//             }
//         },
//         loadedData: () => {
//             return {
//                 type: ActionTypes_Load.LOADED_DATA
//             }
//         }
//     };
//
//
//
//     // https://jsonplaceholder.typicode.com/posts/1
//
//     const _types = {
//         comments: {
//             REQUEST_COMMENTS: 'REQUEST_COMMENTS',
//             RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
//             SELECT_COMMENTS: 'SELECT_COMMENTS',
//             INVALIDATE_COMMENTS: 'INVALIDATE_COMMENTS'
//         },
//         albums: {
//             REQUEST_ALBUMS: 'REQUEST_ALBUMS',
//             RECEIVE_ALBUMS: 'RECEIVE_ALBUMS',
//             SELECT_ALBUMS: 'SELECT_ALBUMS',
//             INVALIDATE_ALBUMS: 'INVALIDATE_ALBUMS'
//         },
//         photos: {
//             REQUEST_PHOTOS: 'REQUEST_PHOTOS',
//             RECEIVE_PHOTOS: 'RECEIVE_PHOTOS',
//             SELECT_PHOTOS: 'SELECT_PHOTOS',
//             INVALIDATE_PHOTOS: 'INVALIDATE_PHOTOS'
//         },
//         users: {
//             REQUEST_USERS: 'REQUEST_USERS',
//             RECEIVE_USERS: 'RECEIVE_USERS',
//             SELECT_USERS: 'SELECT_USERS',
//             INVALIDATE_USERS: 'INVALIDATE_USERS'
//         },
//         todos: {
//             REQUEST_TODOS: 'REQUEST_TODOS',
//             RECEIVE_TODOS: 'RECEIVE_TODOS',
//             SELECT_TODOS: 'SELECT_TODOS',
//             INVALIDATE_TODOS: 'INVALIDATE_TODOS'
//         }
//
//     };
//
//     const _actions = {
//         posts: {
//
//         }
//     };
//
//     const Placeholder = {
//         url: 'https://jsonplaceholder.typicode.com/',
//         posts: {
//             uri: 'posts/'
//         },
//         comments: {
//             uri: 'comments/'
//         },
//         albums: {
//             uri: 'albums'
//         },
//         photos: {
//             uri: 'photos'
//         },
//         users: {
//             uri: 'users'
//         },
//         todos: {
//             uri: 'todos'
//         }
//     };
//
//     define(function () {
//
//         const {createStore, combineReducers} = Redux;
//
//         const rootReducer = combineReducers({
//             load: Reducer_Load,
//             blog: Reducer_Load
//
//         });
//
//         const store = createStore(rootReducer);
//
//         new function App(store) {
//
//             function _onloadend() {
//
//                 store.dispatch(Action_Load.loadedData());
//
//             }
//
//             function _onload() {
//
//                 store.dispatch(Action_Load.loadData(this.responseText));
//
//             }
//
//             const _onloadstart = function () {
//
//                 console.log('_onloadstart');
//
//             };
//
//             const _loadData = () => {
//
//                 const response = new XMLHttpRequest();
//
//                 response.onloadstart = _onloadstart;
//                 response.onload = _onload;
//                 response.onloadend = _onloadend;
//
//                 response.open("GET", "/api/v1/data");
//                 response.send();
//
//             };
//
//             let handlerLoadData = () => {
//
//                 const {load} = store.getState();
//
//                 if (load.data && typeof load.data !== 'undefined' && load.loadedData) {
//
//                     console.log('Loaded', load);
//                     handlerLoadData();
//
//                 }
//
//             };
//
//             handlerLoadData = store.subscribe(handlerLoadData);
//
//             _loadData();
//
//         }(store);
//
//
//     });
//
// });