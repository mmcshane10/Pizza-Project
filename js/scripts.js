// BIZ LOGIC
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings
};

var meatInput = [];
var toppingsInput = [];
var price = 0

Pizza.prototype.price = function() {
  if (this.size === "Small"){
    price += 12;
  } else if (this.size === "Medium"){
    price += 15;
  } else if (this.size === "Large"){
    price += 18;
  } else {
    price += 20;
  }

  for (var i=0; i< this.meat.length; i++) {
    if (this.meat[i] === "Bacon"){
      price += 3;
    } else {
      price += 2;
    }
  };

  for (var i=0; i< this.toppings.length; i++) {
    if (this.toppings[i] === "Extra Cheese"){
    price += 1;
    } else {
    price += 0.5;
    }
  };

  return price;
};

// UI LOGIC
$(document).ready(function() {
  $("form#pizza_builder").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("input:radio[name=pizza-size]:checked").val();

    $("input:checkbox[name=toppings-meat]:checked").each(function(){
      var userMeatInput = $(this).val();
      meatInput.push(userMeatInput);
    });

    $("input:checkbox[name=toppings-additional]:checked").each(function(){
      var userToppingsInput = $(this).val();
      toppingsInput.push(userToppingsInput);
    });

    var newPizza = new Pizza(sizeInput, meatInput, toppingsInput);
    console.log(newPizza);

    $("#results").text("The price for your pizza is: $" + newPizza.price().toFixed(2));
  });
});
