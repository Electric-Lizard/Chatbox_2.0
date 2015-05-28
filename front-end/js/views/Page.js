/**
 * Abstract page class
 * Created by User on 5/19/2015.
 */
var Page = Backbone.view.extend({
    templateLocation: '',
    render: function($pageContainer) {
        var data = this.collection ? this.collection.models : null;
        this.setElement(this.template(data));
        $pageContainer.html(this.$el);
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
        _.template(this.templateText, data)
    }
});