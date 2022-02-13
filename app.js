//phone
const phonePriceText = document.getElementById("11-price");
const phonePrice = parseFloat(phonePriceText.innerText);

const phoneQuantityText = document.getElementById("phone-quantity");
let phoneQuantity = parseInt(phoneQuantityText.value);

document.getElementById("phone-plus").addEventListener("click", function () {
  updatePhonePrice(true, phonePriceText, phonePrice, phoneQuantityText, phoneQuantity++);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updatePhonePrice(false, phonePriceText, phonePrice, phoneQuantityText, phoneQuantity--);
});

//case
const casePriceText = document.getElementById("case-price");
const casePrice = parseFloat(casePriceText.innerText);

const caseQuantityText = document.getElementById("case-quantity");
let caseQuantity = parseInt(caseQuantityText.value);

document.getElementById("case-plus").addEventListener("click", function () {
  updatePhonePrice(true, casePriceText, casePrice, caseQuantityText, caseQuantity++);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updatePhonePrice(false, casePriceText, casePrice, caseQuantityText, caseQuantity--);
});

//phone and case function
function updatePhonePrice(increase, priceText, price, quantityText, quantity) {
  if (quantity < 0) {
    return;
  } else {
    if (increase == true) {
      priceText.innerText = price * ++quantity;
      quantityText.value = quantity;
    } else if (quantity > 0) {
      priceText.innerText = price * --quantity;
      quantityText.value = quantity;
    }
  }
  totalPricePhone();
}

//Updating total Price
//total price
const totalPriceText = document.getElementById("total");
const totalPrice = parseFloat(totalPriceText.innerText);

//tax
const totalTaxText = document.getElementById("tax");

//subtotal
const subTotalPriceText = document.getElementById("subtotal");

function totalPricePhone() {
  const phonePriceTotal = phonePrice * phoneQuantity;
  const casePriceTotal = casePrice * caseQuantity;
  const result = phonePriceTotal + casePriceTotal;
  if (result >= 0) {
    totalPriceText.innerText = result;

    //taxtotal
    const totalTax = (result * 10) / 100;
    totalTaxText.innerText = totalTax.toFixed(2);

    //subtotal

    const subTotal = result + totalTax;
    subTotalPriceText.innerText = subTotal.toFixed(2);
  }
}
