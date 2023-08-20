// utilitis functions
function getElement(elementId) {
  return document.getElementById(elementId);
}

function addCardPrice(cardId, itemPrice) {
  getElement(cardId).addEventListener(`click`, function () {
    let totalPrice = parseFloat(getElement("total-price").innerText);
    console.log(totalPrice);
    // const cardItemPrice = parseFloat(getElement(itemPrice).innerText);
    const cardItemPrice = getElement(itemPrice).innerText;
    const itemPriceNum = parseFloat(cardItemPrice);
    // console.log(cardItemPrice);
    // console.log(parseFloat(cardItemPrice));
    totalPrice += itemPriceNum;
    const totalPriceFixed = totalPrice.toFixed(2);
    // return totalPrice;
    getElement("total-price").innerText = totalPriceFixed;
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
addCardPrice("card1", "item1Price");
addCardPrice("card2", "item2Price");
addCardPrice("card3", "item3Price");

// const botla = getElement("item1Price").innerText;
// console.log(botla);

// addCardPrice()
// const totalPrice = getElement("total-price").innerText;
const totalPrice = getElement("total-price").firstChild.nodeValue;
console.log(totalPrice);
const btnApply = getElement("btn-apply");
if (totalPrice >= 200) {
  btnApply.removeAttribute("disabled");
}
