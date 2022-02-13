//phoneprice
const iphone11PriceText = document.getElementById("11-price");
const iphone11Price = parseFloat(iphone11PriceText.innerText);

const phoneQuantityText = document.getElementById("phone-quantity");
let phoneQuantity = parseInt(phoneQuantityText.value);

function updatePhonePrice() {
  if (increase == true) {
    iphone11PriceText.innerText = iphone11Price * ++phoneQuantity;
    phoneQuantityText.value = phoneQuantity;
  } else {
    iphone11PriceText.innerText = iphone11Price * --phoneQuantity;
    phoneQuantityText.value = phoneQuantity;
  }
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updatePhonePrice(true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updatePhonePrice(false);
});

//caseprice

const casePriceText = document.getElementById("case-price");
const casePrice = parseFloat(casePriceText.innerText);

const caseQuantityText = document.getElementById("case-quantity");
let caseQuantity = parseInt(caseQuantityText.value);

function updateCaseNumber(increase) {
  if (increase == true) {
    casePriceText.innerText = casePrice * ++caseQuantity;
    caseQuantityText.value = caseQuantity;
  } else {
    casePriceText.innerText = casePrice * --caseQuantity;
    caseQuantityText.value = caseQuantity;
  }
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber(false);
});
