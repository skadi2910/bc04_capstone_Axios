import { PRODUCT_MODAL } from "../../constants/constant.js";
import { productList } from "../../main.js";
export const renderProductDetail = (productId) => {
  let product = productList.find(({ id }) => {
    return id === productId;
  });
  let productDetail = ` <div id="product-detail" class="w-11/12 max-w-5xl py-5 relative">
        <label for="product-details-modal-toggle" class="btn btn-sm btn-circle absolute -right-6 top-0">✕</label>
        <div
          class="card card-side bg-base-100 drop-shadow-xl shadow-slate-300 rounded-md">
          <figure>
            <img
              src="${product.img}"
              alt="${product.name}"
              class="w-60 py-2"
            />
        </figure>
        <div
          class="card-body bg-slate-100 hover:bg-slate-200 flex flex-row border-2 ">
          <div class="border-r-2 border-slate-400 flex-auto w-3/4">
            <h2 class="card-title">
              <span class="text-4xl font-bold">${product.name}</span>
            </h2>
            <p class="text-2xl text-orange-600 italic mt-3">${product.desc}</p>
            <div id="rating-stars" class="pb-5 pt-3">
              <div class="flex items-center mb-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
                </svg>
                <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
                </svg>
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
                </svg>
                <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
                </svg>
                <p
                class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                4.95 out of 5
                </p>
              </div>
            <p>
              <span class="text-xl font-semibold">Màn Hình: </span>
              ${product.screen}
            </p>
            <p>
              <span class="text-xl font-semibold">Camera Sau: </span>
              ${product.backCamera}
            </p>
            <p>
              <span class="text-xl font-semibold">Camera Trước: </span>
              ${product.frontCamera}
            </p>
            </div>
            <div class="card-actions justify-start text-gray-600">
              <div class="badge badge-outline text-base">Fashion</div>
              <div class="badge badge-outline text-base">Products</div>
            </div>
          </div>
          <div class="text-left flex-auto w-1/3 ml-3">
          <h2 class="font-bold text-3xl">
            $${product.price}
            <span
              class="text-xl font-semibold text-gray-600 text-opacity-80 line-through decoration-double"
            >$${product.price * 1.5}</span
            >
          </h2>
          <p class="text-green-500 mr-5 mt-3">Available</p>
          <form class="my-3">
            <span class="text-lg mr-2">Số lượng:</span>
            <i class="fa-solid fa-minus cursor-pointer" onclick="subtractQuantity(${
              product.id
            })"></i>
            <input
              type="number"
              id="item-quantity-${product.id}"
              value="0"
              min="0"
              class="border-2 text-center w-10"
            />
            <i class="fa-solid fa-plus cursor-pointer" onclick="addQuantity(${
              product.id
            })"></i>
          </form>
          <div class="card-actions">
            <button>
              <label
                for="product-details-modal-toggle"
                class="btn items-center py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                onClick="addItem(${product.id})">
                <i class="fa-solid fa-cart-shopping mr-1"></i>
                <span class="uppercase">add to cart</span>
              <label/>
            </button>
            <button>
              <label
                id="buy-now-btn"
                for="cart-modal-toggle"
                class="btn items-center py-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300"
                onClick="buyItem(${product.id})">
                <i class="fa-solid fa-cart-shopping mr-1"></i>
                <span class="uppercase">buy now</span>
              </label>
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>`;
  PRODUCT_MODAL.style.display = "flex";
  PRODUCT_MODAL.innerHTML = productDetail;
};
