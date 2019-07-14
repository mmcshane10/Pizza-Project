// BIZ LOGIC
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings
};

var price = 0

// UI LOGIC
$(document).ready(function() {
  $("form#pizza_builder").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("input:radio[name=pizza-size]:checked").val();

    var meatInput = [];
    $("input:checkbox[name=toppings-meat]:checked").each(function(){
      var userMeatInput = $(this).val();
      meatInput.push(userMeatInput);
    });

    var toppingsInput = [];
    $("input:checkbox[name=toppings-additional]:checked").each(function(){
      var userToppingsInput = $(this).val();
      toppingsInput.push(userToppingsInput);
    });

    var newPizza = new Pizza(sizeInput, meatInput, toppingsInput);
    console.log(newPizza);

    if (newPizza.size === "Small"){
      price += 12;
    } else if (newPizza.size === "Medium"){
      price += 15;
    } else if (newPizza.size === "Large"){
      price += 18;
    } else {
      price += 20;
    }
    console.log(price);

    if (newPizza.meat === "Bacon"){
      price += 3;
    } else {
      price += 2;
    }
    console.log(price);

    if (newPizza.toppings === "Extra Cheese"){
      price += 1;
    } else {
      price += 0.5;
    }
    console.log(price);

  $("#results").text("The price for your pizza is: $" + price);

  });
});
