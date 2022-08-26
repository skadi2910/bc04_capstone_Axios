import { renderProductItem } from "./productItem.js";

export const renderProductsList = (dataList) => {
  let contentHtml = "";
  dataList.forEach((item) => {
    let itemContent = renderProductItem(item);
    contentHtml += itemContent;
  });
  document.getElementById("product-list").innerHTML = contentHtml;
};

export const getQuantityFromInput = (id) => {
  const quantity = document.getElementById(`item-quantity-${id}`).value * 1;
  return quantity;
};
