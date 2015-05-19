/**
 * Created by User on 5/19/2015.
 */
var Posts = new Backbone.collection.extend({
    model: null,
    initialize: function(model) {
        this.model = model;
    }
});