export const renderCartItem = (item) => {
  return `
        <tr id="cart-item-${item.id}">
            <th></th>
            <td>
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
                    <i class="fa-solid fa-minus cursor-pointer" onclick="subtractCartItemQuantity(${item.id})"></i>
                    <span id="cart-item-quantity-${item.id}" class="mx-5 text-lg">${item.quantity}</span>
                    <i class="fa-solid fa-plus cursor-pointer" onclick="addCartItemQuantity(${item.id})"></i>
                </div>
            </td>
            <td class="text-lg">$${item.price}</td>
            <td class="text-lg"><div id="cart-item-value-${item.id}">$${item.totalPrice}</div></td>
            <td>
                <button onClick='deleteItem(${item.id})' id="delete-btn" class="btn bg-red-500 hover:bg-red-700 text-white rounded-md"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>`;
};
export const updateCartItem = (cartList, cartItemIndex, item_id) => {
  document.getElementById(`cart-item-quantity-${item_id}`).innerHTML =
    cartList[cartItemIndex].quantity;
  document.getElementById(
    `cart-item-value-${item_id}`
  ).innerHTML = `$${cartList[cartItemIndex].totalPrice}`;
};
