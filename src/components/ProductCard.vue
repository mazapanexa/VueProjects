<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>Precio: ${{ product.price }}</p>
    <button @click="addToCart">Agregar al carrito</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      // Agregar lógica para agregar al carrito aquí
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
}
</style>

