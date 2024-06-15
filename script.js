
function changePrice(){
    const price1 = document.getElementById("price1");
    const price2 = document.getElementById("price2");
    const price3 = document.getElementById("price3");
    const toggleButton = document.getElementById("toggle");

    if(toggleButton.checked){

    price1.textContent = "$19.99";
    price2.textContent = "$24.99";
    price3.textContent = "$39.99";
}
    else if (!toggleButton.checked){
        price1.textContent = "$199.99";
        price2.textContent = "$249.99";
        price3.textContent = "$399.99";
    }
}