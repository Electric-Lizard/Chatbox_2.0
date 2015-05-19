var Router = Backbone.Router.extend({
    chatbox: new Chatbox(),
    chatPage: new Chat(),
    routes: {
        "*default": "default"
    },
    default: function() {
        this.navigate("");
        this.chatbox.selectPage(this.chatPage);
    }
});
$(function() {
    var app = new Router();
    Backbone.history.start({pushState: true});
});
