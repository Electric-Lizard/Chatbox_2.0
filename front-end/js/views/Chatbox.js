/**
 * Created by User on 5/17/2015.
 */
var Chatbox = Backbone.view.extend({
    $targetPage: null,
    templateText: null,
    initialize: function() {
        this.render();
    },
    render: function() {
        this.setElement(this.template());
        this.$targetPage = this.$el.find('target-page');
        var $body = $('body');
        $body.html(this.$el);
    },
    selectPage: function(page) {
        page.render(this.$targetPage);
    },
    clearPage: function() {
        this.$targetPage.html('');
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
        _.template(this.templateText, data)
    }
});