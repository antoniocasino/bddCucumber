'use strict';

var GroceryList = require(process.cwd()+'/tests/client/grocery-list');

var application = {
  init: function(list) {
    this.list = list;
    return this;
  }
};

module.exports = {
  newSession: function() {
    var newList = GroceryList.create();
    return Object.create(application).init(newList);
  }
};
