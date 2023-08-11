/* eslint-disable */

import * as apiProduct from "@/services/ProductsService";
export default {
  state: {
    products: [],
    inactiveProducts: [],
  },
  getters: {
    productsList(state) {
      return state.products;
    },
    inactiveProductsList(state){
      return state.inactiveProducts;
    }
  },
  actions: {
    async getAllProducts({ commit }, isActive=true) {
      try {
        console.log(isActive)
        const response = await apiProduct.getAllProducts(isActive);
        if (response.data) {
          if (isActive == true) {
            commit("setProducts", response.data.data);
          } else {
            commit("setInactiveProducts", response.data.data)
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getProductById({ commit }, id) {
      try {
        const response = await apiProduct.getProductByID(id);
        if (response.data) {
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async saveProduct({ commit }, product) {
      try {
        const response = await apiProduct.saveProduct(product);
        if (response.data) {
          alert("Produto adicionado com sucesso!");
          commit("addProduct", response.data.data);
        }
      } catch (error) {
        alert('Erro ao adicionar produto!')
        console.log(error);
      }
    },
    async updateProductByID({ commit }, id) {
      try {
        const response = await apiProduct.updateProductByID(id);
        if (response.data) {
          console.log(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProductByID({ commit }, id) {
      try {
        const response = await apiProduct.deleteProductByID(id);
        if (response.data) {
          alert('Produto deletado com sucesso!')
          console.log(response.data.data);
        }
      } catch (error) {
        alert('Erro ao deletar produto!')
        console.log(error);
      }
    },
    async activeProductByID({ dispatch }, id) {
      try {
        const response = await apiProduct.activeProductByID(id);
        if (response.status >= 200 && response.status < 300) {
          alert('Produto ativado com Sucesso!');
          dispatch("getAllProducts", false)
        }
      } catch (error) {
        alert('Erro ao ativar o produto!')
        console.log(error);
      }
    },
    async inactiveProductByID({ dispatch }, id) {
      try {
        const response = await apiProduct.inactiveProductByID(id);
        if (response.status >= 200 && response.status < 300) {
          alert('Produto desativado com Sucesso!');
          dispatch("getAllProducts", true)
        }
      } catch (error) {
        alert('Erro ao desativar o produto!')
        console.log(error);
      }
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setInactiveProducts(state, payload){
      state.inactiveProducts = payload;
    },
    addProduct(state, payload) {
      state.products.push(payload);
    },
  },
};
