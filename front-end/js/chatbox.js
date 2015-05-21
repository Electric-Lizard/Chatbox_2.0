var Router = Backbone.Router.extend({
    document: new Document(),
    chatPage: new Chat(),
    routes: {
        "*default": "default"
    },
    default: function() {
        this.navigate("");
        this.document.selectPage(this.chatPage);
    }
});
$(function() {
    var app = new Router();
    Backbone.history.start({pushState: true});
});
