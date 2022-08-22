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
    data.forEach((item, index) => {
      let contentTr = `
      <tr id="cart-item-${item.id}">
      <th>${index + 1}</th>
      <td >
        <div class="flex items-center space-x-3 ">
          <div class="avatar ">
            <div class="mask w-24 h-24">
              <img src="${item.img}" alt="${item.name}" />
            </div>
          </div>
          <p class="font-bold text-lg">${item.name}</p>
        </div>
      </td>
      <td>
        <div>
          <i class="fa-solid fa-minus cursor-pointer" onclick="subtractCartQuantity(${
            item.id
          })"></i>
          <span id="cart-item-quantity-${item.id}" class="mx-5 text-lg">${
        item.quantity
      }</span>
          <i class="fa-solid fa-plus cursor-pointer" onclick="addCartQuantity(${
            item.id
          })"></i>
        </div>
      </td>
      <td class="text-lg">$${item.price}</td>
      <td class="text-lg"><div id="cart-item-value-${item.id}">$${
        item.totalPrice
      }</div></td>
      <td>
          <button onClick='deleteItem(${
            item.id
          })' id="delete-btn" class="btn bg-red-500 hover:bg-red-700 text-white rounded-md"><i class="fa-solid fa-trash-can"></i></button></td>
     </tr>
      `;
      contentHtml += contentTr;
    });
    contentHtml += `
    <tr>
      <th></th>
      <td></td>
      <td></td>
      <th class="text-xl">Tổng giá trị đơn hàng:</th>
      <td class="text-2xl font-bold" id="total-cart-price">$${getTotalCartValue(
        data
      )}</td>
    </tr>`;
    document.getElementById("cartTable").innerHTML = contentHtml;
  }
  renderCartIndicator(data);
};
export const getTotalCartValue = (data) => {
  let totalPrice = 0;
  data.forEach((item) => {
    totalPrice += item.totalPrice;
  });
  return totalPrice;
};

export const renderCartIndicator = (data) => {
  document.getElementById(
    "cart-quantity"
  ).innerHTML = ` ${data.length} Sản Phẩm`;
  document.getElementById("item-added").innerHTML = `${data.length}`;
  document.getElementById(
    "cart-total-value"
  ).innerHTML = `Tổng Số Tiền: $${getTotalCartValue(data)}`;
};

export const renderItemQuantityAndValue = (
  cartList,
  cartItemIndex,
  item_id
) => {
  document.getElementById(`cart-item-quantity-${item_id}`).innerHTML =
    cartList[cartItemIndex].quantity;
  document.getElementById(
    `cart-item-value-${item_id}`
  ).innerHTML = `$${cartList[cartItemIndex].totalPrice}`;
};
