/**
 * Created by cosysoft on 21.05.15.
 */
var Post = Backbone.view.extend({
    model: null,
    id: null,
    initialize: function(model) {
        this.model = model;
        this.id = model.id;
    },
    getModel: function() {
        return this.model;
    },
    updateModel: function() {

    },
    deleteModel: function() {

    }
});