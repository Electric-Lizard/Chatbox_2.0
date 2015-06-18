/**
 * Abstract page class
 * Created by User on 5/19/2015.
 */
var AbstractPage = Backbone.View.extend({
    compiledTemplate: '',
    templateLocation: '',
    commonInitialize: function() {
        _.bindAll(this, 'render', 'template');
        _.extend(this, Backbone.Events);
    },
    render: function($pageContainer) {
        var data = this.collection ? this.collection.models : null;
        this.setElement(this.template(data));
        $pageContainer.html(this.$el);
        this.trigger('render');
    },
    template: function(data) {
        if (!this.compiledTemplate) {
            var pageObj = this;
            $.ajax({
                url: this.templateLocation,
                async: false,
                type: 'GET',
                success: function (html) {
                    pageObj.compiledTemplate = Handlebars.compile(html);
                }
            });
        }
        this.compiledTemplate(data)
    }
});
//@ sourceURL=/app/js/views/AbstractPage.js