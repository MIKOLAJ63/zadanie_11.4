//scripts.js
$function(){
	console.log('DOM loaded - you can have fun');
});
function Phone(brand, price, color, OS) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.OS = OS;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand +  ", the price is " + this.price + ", color is " + this.color + 
		", and it's OS is " + this.OS + "." );
};

var SamsungGalaxyS6 = new Phone("Samsung", 1850, "white", "Android 5.0 Lollipop");
var iPhone6S = new Phone("Apple", 2400, "gold", "iOS 10" );
var OnePlusOne = new Phone("One Plus", 1250, "black", "Oxygen");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
  