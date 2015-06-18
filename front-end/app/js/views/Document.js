/**
 * Main document renderer
 * Created by User on 5/17/2015.
 */
var Document = Backbone.View.extend({
    $pageContainer: null,
    compiledTemplate: null,
    initialize: function() {
        _.bindAll(this, 'render', 'selectPage', 'clearPage', 'template');
    },
    render: function() {
        var pageContainerSelector = '#page-container';

        this.setElement(this.template());
        this.$pageContainer = this.$el.find(pageContainerSelector);
        var $body = $('body');
        $body.html(this.$el);
    },
    selectPage: function(page) {
        page.render(this.$pageContainer);
    },
    clearPage: function() {
        this.$pageContainer.html('');
    },
    template: function(data) {
        if (!this.compiledTemplate) {
            var chatboxObj = this;
            $.ajax({
                url: 'app/templates/main.html',
                async: false,
                type: 'get',
                success: function (html) {
                    chatboxObj.compiledTemplate = Handlebars.compile(html);
                }
            });
        }
        return chatboxObj.compiledTemplate(data);
    }
});
//@ sourceURL=/app/js/views/Document.js