var gallons = parseInt(prompt("Enter number gallons"));

var liters = gallons * 3.78541
var result = function (gallons, liters) {
  return gallons + " equals" + liters + " liters";
};

alert(result(gallons, liters));
