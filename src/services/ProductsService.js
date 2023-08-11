import api from "./ApiService";

const baseURL = "/products";

export async function getAllProducts(isActive) {
  return api.get(baseURL, {
    params: {
      isActive: isActive,
    },
  });
}

export async function saveProduct(product) {
  return api.post(baseURL, product);
}

export async function getProductByID(id) {
  return api.get(baseURL + `/${id}`);
}

export async function updateProductByID(id, product) {
  return api.put(baseURL + `/${id}`, product);
}

export async function deleteProductByID(id) {
  return api.delete(baseURL + `/${id}`);
}

export async function activeProductByID(id) {
  return api.patch(baseURL + `/${id}/active`);
}

export async function inactiveProductByID(id) {
  return api.patch(baseURL + `/${id}/inactive`);
}
