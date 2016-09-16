(function() {
  angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.buyItems;
  toBuy.bought = ShoppingListCheckOffService.bought;
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.boughtItems;
}
function ShoppingListCheckOffService(){
  var shoppingService = this;
  var tobuy = [
    { name: "cookies", quantity: 10},
    { name: "bagels", quantity: 3},
    { name: "cheese cake", quantity: 2},
    { name: "ice cream", quantity: 2},
    { name: "coffee", quantity: 10},
  ],
      bought = [];
  shoppingService.buyItems = tobuy;
  shoppingService.boughtItems = bought;

  shoppingService.bought = function (itemIdx) {
    bought.push(tobuy[itemIdx]);
    tobuy.splice(itemIdx, 1);
  }
}
})()
