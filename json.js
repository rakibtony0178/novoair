var firstClass, economyClass, subtotal, vattotal, grandtotal;

firstClass = 150;
economyClass = 100;
subtotal = 0;
vattotal = 0;
grandtotal = 0;


var subtotalElement, vatElement, totalElement;
subtotalElement = document.getElementById("subtotal_element");
vatElement = document.getElementById("vat_element");
totalElement = document.getElementById("total_element");



var firstClassInput = document.getElementById("firstClassInput");
var economyClassInput = document.getElementById("economyClassInput");



document.getElementById("addFirstClassId").addEventListener("click", function(){
    firstClassInput.value = parseInt(firstClassInput.value) + 1;

    calculateTotalPrice();
});

document.getElementById("removeFirstClassId").addEventListener("click", function(){
    firstClassInput.value = parseInt(firstClassInput.value) - 1;

    
    if(firstClassInput.value < 0){
        firstClassInput.value = 0;
    }

    calculateTotalPrice();
});



document.getElementById("addEconomyClassId").addEventListener("click", function(){
    economyClassInput.value = parseInt(economyClassInput.value) + 1;

    calculateTotalPrice();
});

document.getElementById("removeEconomyClassId").addEventListener("click", function(){
    economyClassInput.value = parseInt(economyClassInput.value) - 1;

    if(economyClassInput.value < 0){
        economyClassInput.value = 0;
    }

    calculateTotalPrice();
});





firstClassInput.addEventListener("change", function(){
    if(firstClassInput.value < 0){
        firstClassInput.value = 0;
    }

    calculateTotalPrice();
});

economyClassInput.addEventListener("change", function(){
    if(economyClassInput.value < 0){
        economyClassInput.value = 0;
    }

    calculateTotalPrice();
});













function calculateTotalPrice(){
    var firstClassTotal, economyClassTotal;
    firstClassTotal =  parseInt(firstClassInput.value) * 150;
    economyClassTotal =  parseInt(economyClassInput.value) * 100;

    subtotal = firstClassTotal + economyClassTotal;
    vattotal = subtotal * 0.10;
    grandtotal = subtotal + vattotal;

    updateValue();
}





function updateValue(){
    subtotalElement.innerHTML = subtotal;
    vatElement.innerHTML = vattotal;
    totalElement.innerHTML = grandtotal;
}


