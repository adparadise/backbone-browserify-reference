
var Backbone = require('backbone');

var AppView = Backbone.View.extend({
    initialize: function() {},

    render: function() {
        this.el.innerHTML = "HERE";
        return this;
    },
});

module.exports = AppView;
