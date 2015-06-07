/**
 * Post View
 * Created by cosysoft on 21.05.15.
 */
var Post = Backbone.view.extend({
    model: null,
    id: null,
    templateLocation: 'templates/model-wrappers/post.html',
    initialize: function(model) {
        this.model = model;
        this.id = model.id;
    },
    render: function($postContainer) {
        this.setElement(this.template({model: this.model}));
        $postContainer.append(this.$el);
    },
    getModel: function() {
        return this.model;
    },
    updateModel: function() {

    },
    deleteModel: function() {

    },
    template: function(data) {
        if (!this.templateText) {
            var pageObj = this;
            $.ajax({
                url: this.templateLocation,
                async: false,
                type: 'get',
                success: function (html) {
                    pageObj.templateText = html;
                }
            });
        }
        _.template(this.templateText, data);
    }
});