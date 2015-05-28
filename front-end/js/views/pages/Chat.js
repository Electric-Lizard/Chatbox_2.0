/**
 * Chat page class
 * Created by User on 5/19/2015.
 */
var Chat = Page.extend({
    events: {
        'sync': 'clearInfo'
    },
    $postsContainer: null,
    pageLocation: 'templates/pages/chat.html',
    model: new PostModel(),
    collection: new Posts(this.model),
    posts: new Array(),
    getPosts: function() {
        this.renderInfo("Loading posts");
        this.collection.fetch();
        this.$postsContainer = this.$el.find('#post-container');
        for(var modelKey in this.collection.models) {
            var post = new Post(this.collection.models[modelKey]);
            this.posts.push(post);
            post.render(this.$postsContainer);
        }
    },
    renderInfo: function(message) {

    },
    clearInfo: function() {

    }
});