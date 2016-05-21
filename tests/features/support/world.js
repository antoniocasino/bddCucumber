var application = require(process.cwd() + '/tests/client/app');

var World = function () {
  return{
    openGroceryList: function() {
      return  application.newSession();
    },
    createGroceryItem: function() {
      return 'apple';
    }
  }
};

module.exports.World = World;
