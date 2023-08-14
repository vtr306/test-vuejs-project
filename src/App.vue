<template>
  <div id="app">
    <b-navbar type="is-dark">
      <template #end>
        <b-navbar-item tag="router-link" to="/">Produtos</b-navbar-item>
        <b-navbar-item tag="router-link" to="/inactive"
          >Produtos Inativos</b-navbar-item
        >
        <b-navbar-item tag="router-link" to="/create"
          >Adicionar Produto</b-navbar-item
        >
      </template>
    </b-navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/App.scss";
</style>
