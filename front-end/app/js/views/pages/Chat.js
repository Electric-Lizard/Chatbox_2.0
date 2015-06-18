/**
 * Chat page class
 * Created by User on 5/19/2015.
 */
var Chat = AbstractPage.extend({
    events: {
        'sync': 'clearInfo',
        'render': 'getPosts'
    },
    $postsContainer: null,
    pageLocation: 'app/templates/pages/chat.html',
    model: new PostModel(),
    collection: new Posts(this.model),
    posts: new Array(),
    initialize: function() {
        this.commonInitialize();
        _.bindAll(this, 'getPosts', 'renderInfo', 'clearInfo');
        //this.on('render', this.getPosts());
    },
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
//@ sourceURL=/app/js/views/pages/Chat.js