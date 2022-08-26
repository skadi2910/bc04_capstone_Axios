import {
  renderProductsList,
  getQuantityFromInput,
} from "../js/components/products/productList.js";
import {
  getTotalCartValue,
  renderCartList,
  updateCartIndicator,
  updateCartValue,
} from "./components/cart/cartList.js";
import { updateCartItem } from "./components/cart/cartItem.js";
import {
  BASE_URL,
  CLEAR_BTN,
  SEARCH_BTN,
  HOME_BTN,
  PRODUCT_BTN,
  PRODUCT_MODAL,
  CHECKOUT_BTN,
  PAYMENT_BTN,
  PHONES_CART_LOCALSTORAGE,
  CANCEL_BTN,
  BRANDS_BTN,
  SAMSUNG_BTN,
  IPHONE_BTN,
} from "./constants/constant.js";
import { renderProductDetail } from "./components/products/productDetail.js";
import {
  removePaymentModal,
  renderPaymentModal,
} from "./components/payment.controller.js";
import { generateRandomNumber } from "./utils.js";

//GLOBAL VARIABLES
const getProductsList = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
let cartList = [];
export const productList = await getProductsList();

// LOCAL STORAGE
const setLocalStorage = (data) => {
  const phoneCartJSON = JSON.stringify(data);
  localStorage.setItem(PHONES_CART_LOCALSTORAGE, phoneCartJSON);
};
const getLocalStorage = () => {
  const phoneCartJSON = localStorage.getItem(PHONES_CART_LOCALSTORAGE);
  if (phoneCartJSON != null) {
    cartList = JSON.parse(phoneCartJSON);
    renderCartList(cartList);
  }
};
// HANDLE PRODUCT ITEMS
const addItem = (item_id) => {
  const productIndex = productList.findIndex((product) => {
    return product.id === item_id;
  });
  const input_quantity = getQuantityFromInput(item_id);
  if (input_quantity > 0) {
    const cartItem = {
      ...productList[productIndex],
      quantity: input_quantity,
      totalPrice: input_quantity * productList[productIndex].price,
    };
    const cartItemIndex = cartList.findIndex((item) => {
      return item.id === cartItem.id;
    });
    if (cartItemIndex === -1) {
      cartList.push(cartItem);
    } else {
      cartList[cartItemIndex].quantity += input_quantity;
      cartList[cartItemIndex].totalPrice =
        cartList[cartItemIndex].quantity * cartList[cartItemIndex].price;
    }
  }
  document.getElementById(`item-quantity-${item_id}`).value = 0;
  setLocalStorage(cartList);
  renderCartList(cartList);
};
const buyItem = (item_id) => {
  addItem(item_id);
  PRODUCT_MODAL.style.display = "none";
};
// HANDLE SHOPPING CART
const deleteItem = (item_id) => {
  const cartItemIndex = cartList.findIndex(({ id }) => {
    return id === item_id;
  });
  cartList.splice(cartItemIndex, 1);
  document.getElementById(`cart-item-${item_id}`).style.display = "none";
  updateCartValue(cartList);
  updateCartIndicator(cartList);
  getTotalCartValue(cartList) == 0 && renderCartList(cartList);
  setLocalStorage(cartList);
};
const clearCart = () => {
  cartList.splice(0, cartList.length);
  renderCartList(cartList);
  setLocalStorage(cartList);
};
const addQuantity = (item_id) => {
  let input_quantity = getQuantityFromInput(item_id);
  input_quantity++;
  document.getElementById(`item-quantity-${item_id}`).value = input_quantity;
};
const subtractQuantity = (item_id) => {
  let input_quantity = getQuantityFromInput(item_id);
  input_quantity--;
  if (input_quantity >= 0)
    document.getElementById(`item-quantity-${item_id}`).value = input_quantity;
};
const addCartItemQuantity = (item_id) => {
  let cartItemIndex = cartList.findIndex(({ id }) => {
    return id === item_id;
  });
  const _quantity = cartList[cartItemIndex].quantity + 1,
    _price = cartList[cartItemIndex].price;
  cartList[cartItemIndex].quantity = _quantity;
  cartList[cartItemIndex].totalPrice = _quantity * _price;
  updateCartItem(cartList, cartItemIndex, item_id);
  updateCartValue(cartList);
  updateCartIndicator(cartList);
  setLocalStorage(cartList);
};
const subtractCartItemQuantity = (item_id) => {
  let cartItemIndex = cartList.findIndex(({ id }) => {
    return id === item_id;
  });
  const _quantity = cartList[cartItemIndex].quantity - 1,
    _price = cartList[cartItemIndex].price;
  cartList[cartItemIndex].quantity = _quantity;
  cartList[cartItemIndex].totalPrice = _quantity * _price;
  if (_quantity < 1) {
    deleteItem(item_id);
  } else {
    updateCartItem(cartList, cartItemIndex, item_id);
    updateCartValue(cartList);
  }
  updateCartIndicator(cartList);
  setLocalStorage(cartList);
};
// HANDLE SEARCH
const renderSearchList = () => {
  let searchInput = document.getElementById("search-brands-input").value;
  let searchList = [];
  if (searchInput !== "") {
    searchList = productList.filter(({ type }) => {
      return type.toLowerCase() === searchInput.toLowerCase();
    });
  }
  if (searchList.length != 0) {
    renderProductsList(searchList);
  } else {
    document.getElementById(
      "product-list"
    ).innerHTML = `<p>Không tìm thấy sản phẩm</p>`;
  }
};
// RESET PAGES
const resetPage = () => {
  renderProductsList(productList);
  IPHONE_BTN.checked = false;
  SAMSUNG_BTN.checked = false;
};

// INITIALIZE
inititialize();
function inititialize() {
  // GET LOCAL STORAGE
  getLocalStorage();

  // RENDER
  renderProductsList(productList);

  window.addItem = addItem;
  window.buyItem = buyItem;
  window.deleteItem = deleteItem;
  window.clearCart = clearCart;
  window.addQuantity = addQuantity;
  window.subtractQuantity = subtractQuantity;
  window.addCartItemQuantity = addCartItemQuantity;
  window.subtractCartItemQuantity = subtractCartItemQuantity;
  window.renderProductDetail = renderProductDetail;

  // HANDLE BUTTONS //
  SEARCH_BTN.addEventListener("click", () => {
    renderSearchList();
  });
  SAMSUNG_BTN.addEventListener("click", () => {
    if (SAMSUNG_BTN.checked) {
      const samsungList = productList.filter(({ type }) => {
        return type.toLowerCase() === "samsung";
      });
      renderProductsList(samsungList);
      IPHONE_BTN.checked = false;
    } else {
      renderProductsList(productList);
    }
  });
  IPHONE_BTN.addEventListener("click", () => {
    if (IPHONE_BTN.checked) {
      const iphoneList = productList.filter(({ type }) => {
        return type.toLowerCase() === "iphone";
      });
      renderProductsList(iphoneList);
      SAMSUNG_BTN.checked = false;
    } else {
      renderProductsList(productList);
    }
  });
  HOME_BTN.addEventListener("click", () => {
    resetPage();
  });
  PRODUCT_BTN.addEventListener("click", () => {
    resetPage();
  });
  BRANDS_BTN.addEventListener("click", () => {
    resetPage();
  });
  CLEAR_BTN.addEventListener("click", () => {
    clearCart();
  });
  CHECKOUT_BTN.addEventListener("click", () => {
    renderPaymentModal(cartList);
  });
  PAYMENT_BTN.addEventListener("click", () => {
    removePaymentModal(cartList);
    document.getElementById("order-id").innerHTML = generateRandomNumber();
    document.getElementById("receipt-value").innerHTML = `$${getTotalCartValue(
      cartList
    )}`;
    clearCart();
  });
  CANCEL_BTN.addEventListener("click", () => {
    removePaymentModal(cartList);
  });
}
