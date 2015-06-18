/**
 * Created by User on 5/19/2015.
 */
var Posts = Backbone.Collection.extend({
    model: null,
    initialize: function(model) {
        this.model = model;
    }
});
//@ sourceURL=/app/js/collections/Posts.js