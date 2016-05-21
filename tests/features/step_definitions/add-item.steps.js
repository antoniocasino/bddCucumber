'use strict';


var assert = require('assert');

module.exports = function() {

  var listItem;
  var World = require(process.cwd() + '/tests/features/support/world').World();
  var groceryListApplication = World.openGroceryList();

  this.Given(/^I have an empty grocery list$/, function(callback) {
    groceryListApplication.list.empty();
    callback();
  });

  this.When(/^I add an item to the list$/, function(callback) {
    listItem = World.createGroceryItem();
    groceryListApplication.list.add(listItem);
    callback();
  });

  this.Then(/^The grocery list contains a single item$/, function(callback) {
    assert.equal(groceryListApplication.list.getAll().length, 1, 'Grocery List should grow by one item.');
    callback();
  });

  this.Then(/^I can access that item from the grocery list$/, function(callback) {
    assert.notEqual(groceryListApplication.list.getItemIndex(listItem), -1, 'Added item should be found at non-negative index.');
    callback();
  });

};
