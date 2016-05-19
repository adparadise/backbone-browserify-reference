

var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = require('jquery');
Backbone.LocalStorage = require('backbone.localstorage');

var AppView = require('./views/app-view');

function build () {
    var appView = new AppView({
        el: '#todo-list'
    });
    appView.render();
};

module.exports = {
    build: build
};
