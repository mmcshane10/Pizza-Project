// BIZ LOGIC
function Pizza(size, meat, toppings) {
  this.size = size,
  this.meat = meat,
  this.toppings = toppings
};

// UI LOGIC
$(document).ready(function() {
  $("form#pizza_builder").submit(function(event) {
    event.preventDefault();
    console.log("form submitted");

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

  });
});
