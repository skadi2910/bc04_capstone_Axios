import { PAYMENT_MODAL } from "../constants/constant.js";
import { getTotalCartValue } from "./cart/cartList.js";

export const renderPaymentModal = (cartList) => {
  let contentHtml = "";
  cartList.forEach((item) => {
    let modalContent = `
        <div class="flex justify-between align-center border-b-2 py-4">
          <p class="text-xl">${item.quantity} x ${item.name}</p>
          <span class="text-lg">$${item.totalPrice}</span>
        </div>`;
    contentHtml += modalContent;
  });
  document.getElementById("payment-modal-content").innerHTML = contentHtml;
  document.getElementById(
    "total-payment-value"
  ).innerHTML = `$${getTotalCartValue(cartList)}`;

  if (cartList.length <= 1) {
    PAYMENT_MODAL.style.transform = "translate(0,225%)";
  } else if (cartList.length <= 3) {
    PAYMENT_MODAL.style.transform = "translate(0,140%)";
  } else {
    PAYMENT_MODAL.style.transform = "translate(0,120%)";
  }
};

export const removePaymentModal = (cartList) => {
  if (cartList.length <= 1) {
    PAYMENT_MODAL.style.transform = "translate(0,-225%)";
  } else if (cartList.length <= 3) {
    PAYMENT_MODAL.style.transform = "translate(0,-140%)";
  } else {
    PAYMENT_MODAL.style.transform = "translate(0,-120%)";
  }
};
