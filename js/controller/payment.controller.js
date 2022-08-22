import { getTotalCartValue } from "./cart.controller.js";

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
};
