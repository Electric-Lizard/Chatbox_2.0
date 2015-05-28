/**
 * Router
 * Created by username on 5/28/15.
 */
var Router = Backbone.Router.extend({
    document: new Document(),
    pages: {
        chat: new Chat()
    },
    routes: {
        "*default": "defaultRoute"
    },
    initialize: function() {
        this.document.render();
    },
    defaultRoute: function() {
        this.navigate("");
        this.document.selectPage(this.pages.chat);
    }
});