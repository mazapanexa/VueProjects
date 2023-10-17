<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Agua de Jamaica",
          price: 2.5,
        },
        {
          id: 2,
          name: "Agua de Melón",
          price: 2.0,
        },
        // Agrega más productos aquí
      ],
    };
  },
};
</script>
