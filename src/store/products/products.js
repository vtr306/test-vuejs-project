/* eslint-disable */

import * as apiProduct from "@/services/ProductsService";
import router from '@/router/index';

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
    async getProductByID({ commit }, id) {
      try {
        const response = await apiProduct.getProductByID(id);
        if (response.data) {
          return response.data.data;
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
      }
    },
    async updateProductByID({ commit }, data) {
      try {
        const response = await apiProduct.updateProductByID(data.id, data.product);
        if (response.data) {
          alert("Produto editado com sucesso!")
          router.push("/");
        }
      } catch (error) {
        alert("Erro ao editar produto!");
      }
    },
    async deleteProductByID({ dispatch }, id) {
      try {
        const response = await apiProduct.deleteProductByID(id);
        if (response.status >= 200 && response.status < 300) {
          alert('Produto deletado com sucesso!')
          dispatch("getAllProducts", false)
        }
      } catch (error) {
        alert('Erro ao deletar produto!')
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
