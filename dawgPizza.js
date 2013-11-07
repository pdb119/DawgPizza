window.onload = function() {
	if(menuPage) {
		loadMenuPage();
	}
	checkFooter();
};

window.onresize = function() {checkFooter();};
function loadMenuPage() {
	populatePizzaMenu();
	populateList(com.dawgpizza.menu.drinks,document.getElementById("drinksList"));
	populateList(com.dawgpizza.menu.desserts,document.getElementById("dessertList"));
}
function checkFooter(){
	//alert(document.getElementById("measure").offsetTop);
	if(window.innerHeight < document.getElementById("measure").offsetTop){
		document.getElementById("footerBar").className = "scrolledFooter";
		document.getElementById("contentPane").className = "footerSpace";
	} else {
		document.getElementById("footerBar").className = "";
		document.getElementById("contentPane").className = "";
	}
}

function populatePizzaMenu(){
	var pizzaMenu = com.dawgpizza.menu.pizzas;
	var i;
	var pizzaCol1 = document.querySelector("#pizzaCol dl");
	var pizzaCol2 = document.querySelector("#pizzaCol2 dl");
	var newDt;
	var newDd;
	var col;
	for(i=0; i<pizzaMenu.length;i++){
		newDt = document.createElement("dt");
		newDt.innerHTML = pizzaMenu[i].name + " ($" + pizzaMenu[i].prices[0] + ", $" + pizzaMenu[i].prices[1] + ", $" + pizzaMenu[i].prices[2] +")";
		newDd = document.createElement("dl");
		newDd.innerHTML = pizzaMenu[i].description;
		if(!pizzaMenu[i].vegetarian){
			col = pizzaCol1;
		} else {
			col = pizzaCol2;
		}
		col.appendChild(newDt);
		col.appendChild(newDd);
		
	}
}

function populateList(data, ul){
	var newLi;
	for(i=0;i<data.length;i++){
		newLi = document.createElement("li");
		newLi.innerHTML = data[i].name + " ($" + data[i].price + ")";
		ul.appendChild(newLi);
		
	}
}