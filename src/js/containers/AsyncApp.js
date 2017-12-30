define(['reactRedux'], ({connect}) => {

    const _this = this;

    const mapStateToProps = state => {
        const {selectedSubreddit, postsBySubreddit} = state;
        const {
            isFetching,
            lastUpdated,
            items: posts
        } = postsBySubreddit[selectedSubreddit] || {
            isFetching: true,
            items: []
        };

        return {
            selectedSubreddit,
            posts,
            isFetching,
            lastUpdated
        }

    };

    return connect(mapStateToProps)(_this);

});