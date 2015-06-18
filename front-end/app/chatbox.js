var chatbox = Object();//namespace
$(function() {
    $.getJSON('app/config/dependencies.json', function(config) {
        chatbox.config = config;
        $.getJSON('app/config/dependencies.json', function(dependencies) {
            $.each(dependencies, function() {
                $.ajax({
                    url: this,
                    dataType: 'script',
                    async: false
                })
            });
            var app = new Router();
            Backbone.history.start({pushState: true});
        });
    });
});
