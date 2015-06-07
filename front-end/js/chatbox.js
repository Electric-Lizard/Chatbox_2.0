$(function() {
    $.getJSON('dependencies.json', function(dependencies) {
        $.each(dependencies, function() {
            $.getScript(this);
        });
        $(document).ajaxStop(function() {
            var app = new Router();
            Backbone.history.start({pushState: true});
        })
    });
});
