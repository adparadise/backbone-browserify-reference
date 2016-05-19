

var Backbone = require('backbone');
_ = require('underscore');
Backbone.$ = require('jquery');
Backbone.LocalStorage = require('backbone.localstorage');

AppView = require('./views/app-view');

function build () {
    appView = new AppView({
        el: '#todo-list'
    });
    appView.render();
};

module.exports = {
    build: build
};
