(function () {
    'use strict';
    angular.module('MenuApp')
      .controller('MenuItemsController', MenuItemsController);

    // Version with resolving to 1 item based on $stateParams in route config
    MenuItemsController.$inject = ['menuItems'];
    function MenuItemsController(menuItems) {
      var menuItemsCtrl = this;
      menuItemsCtrl.category = menuItems.category;
      menuItemsCtrl.items = menuItems.menu_items;
      
    }
})();
