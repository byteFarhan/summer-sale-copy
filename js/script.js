// elements id's
const btnApply = getElement("btn-apply");
const discountAmount = getElement("discount");
const userInput = getElement("input-fild");
const btnPurchase = getElement("btn-purchase");
const Total = getElement("total");

// utilitis functions
function getElement(elementId) {
  return document.getElementById(elementId);
}
function addCardPrice(cardId, itemPrice, itemName) {
  getElement(cardId).addEventListener(`click`, function () {
    const count = getElement("add-item").childElementCount;
    const p = document.createElement("p");
    p.innerText = `${count + 1}. ${itemName}`;
    getElement("add-item").appendChild(p);
    let totalPrice = parseFloat(getElement("total-price").innerText);
    const cardItemPrice = getElement(itemPrice).innerText;
    const itemPriceNum = parseFloat(cardItemPrice);
    totalPrice += itemPriceNum;
    const totalPriceFixed = totalPrice.toFixed(2);
    Total.innerText = totalPriceFixed;

    if (totalPriceFixed >= 200) {
      btnApply.removeAttribute("disabled");
    }

    getElement("total-price").innerText = totalPriceFixed;
    if (totalPriceFixed >= 1) {
      btnPurchase.removeAttribute("disabled");
    }

    btnApply.addEventListener(`click`, function () {
      const inputValue = userInput.value;
      const discountTotal = (totalPriceFixed / 100) * 20;
      if (inputValue == "SELL200") {
        discountAmount.innerText = discountTotal.toFixed(2);
        const totalPrice = totalPriceFixed - discountTotal;
        Total.innerText = totalPrice.toFixed(2);
      }
    });
  });
}

getElement("btn-modal");
getElement("btn-modal").addEventListener(`click`, function () {
  window.location.reload();
});

addCardPrice("card1", "item1Price", "K. Accessories");
addCardPrice("card2", "item2Price", "K. Accessories");
addCardPrice("card3", "item3Price", "Home Cooker");
addCardPrice("card4", "item4Price", "Sports Back Cap");
addCardPrice("card5", "item5Price", "Full Jersey Set");
addCardPrice("card6", "item6Price", "Sports cates");
addCardPrice("card7", "item7Price", "Single Relax Chair");
addCardPrice("card8", "item8Price", "Children play");
addCardPrice("card9", "item9Price", "Flexible Sofa");
