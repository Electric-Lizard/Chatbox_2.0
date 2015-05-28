/**
 * Main document renderer
 * Created by User on 5/17/2015.
 */
var Document = Backbone.view.extend({
    $pageContainer: null,
    templateText: null,
    initialize: function() {
        //this.render();
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
        if (!this.templateText) {
            var chatboxObj = this;
            $.ajax({
                url: 'templates/main.html',
                async: false,
                type: 'get',
                success: function (html) {
                    chatboxObj.templateText = html;
                }
            });
        }
        return _.template(this.templateText, data);
    }
});