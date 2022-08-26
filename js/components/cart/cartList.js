import { renderCartItem } from "./cartItem.js";

export const renderCartList = (data) => {
  let contentHtml = "";
  if (data.length == 0) {
    document.getElementById("cartTable").innerHTML = `
    <tr>
      <td></td>
      <td></td>
      <th class=" text-2xl text-gray-400">Giỏ Hàng Rỗng</th>
    </tr>`;
  } else {
    data.forEach((item) => {
      contentHtml += renderCartItem(item);
    });
    contentHtml += `
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <th class="text-xl">Tổng giá trị đơn hàng:</th>
      <td class="text-2xl font-bold" id="total-cart-value">$${getTotalCartValue(
        data
      )}</td>
    </tr>`;
    document.getElementById("cartTable").innerHTML = contentHtml;
  }
  updateCartIndicator(data);
};
export const getTotalCartValue = (data) => {
  let totalPrice = 0;
  data.forEach((item) => {
    totalPrice += item.totalPrice;
  });
  return totalPrice;
};

export const updateCartIndicator = (data) => {
  document.getElementById(
    "cart-quantity"
  ).innerHTML = ` ${data.length} Sản Phẩm`;
  document.getElementById("item-added").innerHTML = `${data.length}`;
  document.getElementById(
    "cart-total-value"
  ).innerHTML = `Tổng Số Tiền: $${getTotalCartValue(data)}`;
};

export const updateCartValue = (cartList) => {
  document.getElementById(`total-cart-value`).innerHTML = `$${getTotalCartValue(
    cartList
  )}`;
};
