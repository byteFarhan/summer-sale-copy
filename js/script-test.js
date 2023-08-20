// utilitis functions
function getElement(elementId) {
  return document.getElementById(elementId);
}
function addCardPrice(cardId, itemPrice) {
  // const totalPrice = getElement("total-price").innerText;
  getElement(cardId).addEventListener(`click`, function () {
    // document.getElementById(cardId).addEventListener(`click`, function () {
    // const totalPrice = getElement("total-price").innerText;
    let totalPrice = parseFloat(getElement("total-price").innerText);
    // console.log(totalPrice);
    const cardItemPrice = parseFloat(itemPrice.innerText);
    totalPrice += cardItemPrice.toFixed(2);
    // return totalPrice;
    getElement("total-price").innerText = totalPrice;
  });
}
// console.log();
getElement("btn-modal");
// document.getElementById("btn-modal").addEventListener(`click`, function () {
getElement("btn-modal").addEventListener(`click`, function () {
  // window.location.href = "index.html";
  window.location.reload();
});
const bot = addCardPrice("card1");
console.log(bot);

const abul = parseFloat(document.getElementById("total-price").innerText);
console.log(abul);

addCardPrice("card1", "item1Price");

const botla = getElement("item1Price").innerText;
console.log(botla);
