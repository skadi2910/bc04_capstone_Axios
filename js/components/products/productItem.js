export const renderProductItem = (item) => {
  return `
          <label 
            for="product-details-modal-toggle" 
            onclick="renderProductDetail(${item.id})" 
            class="card card-compact bg-base-100 shadow-xl drop-shadow-xl shadow-slate-300 rounded-lg cursor-pointer ">
              <figure>
                <img class="w-40 py-10" src="${item.img}" alt="${item.name}"  />
              </figure>
              <div class="card-body bg-slate-100 hover:bg-slate-200">
                <h2 class="card-title align-baseline">
                  <span class="font-bold text-2xl">
                    ${item.name}
                  </span>
                </h2>
                <h3 class="font-bold text-xl">
                    $${item.price}
                  <span class="text-lg font-semibold text-gray-600 text-opacity-80 line-through decoration-double mr-3">
                    $${item.price * 1.5}
                  </span>
                  <span class="text-sm text-red-500 border-2 border-red-400 bg-transparent">
                    ${getDiscount(item)}%
                  </span>
                </h3> 
                <p class="text-lg">${item.desc}</p>
              </div>
          </label>`;
};

const getDiscount = (item) => {
  let discount = Math.floor(
    Math.abs(((item.price - item.price * 1.5) * 100) / (item.price * 1.5))
  );
  return discount;
};
