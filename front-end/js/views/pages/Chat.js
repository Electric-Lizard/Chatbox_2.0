/**
 * Created by User on 5/19/2015.
 */
var Chat = Page.extend({
    events: {
        'sync': 'clearInfo'
    },
    $postContainer: null,
    pageLocation: 'templates/pages/chat.html',
    model: new PostModel(),
    collection: new Posts(this.model),
    posts: new Array(),
    getPosts: function() {
        this.renderInfo("Loading posts");
        this.collection.fetch();
        this.$postContainer = this.$el.find('#post-container');
        for(var modelKey in this.collection.models) {
            var post = new Post(this.collection.models[modelKey]);
            this.posts.push(post);
            post.append(this.$postContainer);
        }
    },
    renderInfo: function(message) {

    },
    clearInfo: function() {

    }
});