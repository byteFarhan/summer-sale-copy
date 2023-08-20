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
    // getElement("add-item").appendChild(itemName);
    let totalPrice = parseFloat(getElement("total-price").innerText);
    // console.log(totalPrice);
    // const cardItemPrice = parseFloat(getElement(itemPrice).innerText);
    const cardItemPrice = getElement(itemPrice).innerText;
    const itemPriceNum = parseFloat(cardItemPrice);
    // console.log(cardItemPrice);
    // console.log(parseFloat(cardItemPrice));
    totalPrice += itemPriceNum;
    const totalPriceFixed = totalPrice.toFixed(2);
    // return totalPrice;

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
        // userInput.value = "";
        const totalPrice = totalPriceFixed - discountTotal;
        Total.innerText = totalPrice;
      }
      //    else {
      //     alert("Invalid coupon!");
      //   }
    });

    // return totalPriceFixed;
  });
  //   return totalPriceFixed;
}
getElement("btn-modal");
getElement("btn-modal").addEventListener(`click`, function () {
  window.location.reload();
});
// const bot = addCardPrice("card1");
// console.log(bot);

// const abul = parseFloat(document.getElementById("total-price").innerText);
// console.log(abul);

//  const totalPrice = addCardPrice("card1", "item1Price");
addCardPrice("card1", "item1Price", "K. Accessories");
addCardPrice("card2", "item2Price", "K. Accessories");
addCardPrice("card3", "item3Price", "Home Cooker");
addCardPrice("card4", "item4Price", "Sports Back Cap");
addCardPrice("card5", "item5Price", "Full Jersey Set");
addCardPrice("card6", "item6Price", "Sports cates");
addCardPrice("card7", "item7Price", "Single Relax Chair");
addCardPrice("card8", "item8Price", "Children play");
addCardPrice("card9", "item9Price", "Children play");
// addCardPrice("card2", "item2Price");
// addCardPrice("card3", "item3Price");

// const botla = getElement("item1Price").innerText;
// console.log(botla);

// addCardPrice()
// const totalPrice = getElement("total-price").innerText;
// const totalPrice = getElement("total-price").firstChild.nodeValue;
// console.log(totalPrice);
// const btnApply = getElement("btn-apply");
// if (totalPrice >= 200) {
//   btnApply.removeAttribute("disabled");
// }
