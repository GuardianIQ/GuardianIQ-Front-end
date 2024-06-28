<template>
  <navbar-component></navbar-component>
  <div class="container">
    <h1 class="title">Carrito de Compras</h1>
    <div class="cart-container">
      <div class="cart-items">
        <div v-for="item in shoppingCart" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="getProduct(item.productid).imagen" alt="Foto del producto">
          </div>
          <h2 class="item-title">
            {{ getProduct(item.productid).marca }}
            {{ getProduct(item.productid).modelo }}
          </h2>
          <p class="item-price">Precio: {{ getProduct(item.productid).precio }}</p>
          <button @click="deleteFromCart(item.id)" class="delete-button">
            Eliminar del carrito
          </button>
        </div>
      </div>
      <div class="cart-summary">
        <h2>Total: {{ totalPrice }}</h2>
        <button @click="checkout" class="checkout-button">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbarComponent from "../../../public/components/navbar/navbar.component.vue";

export default {
  data() {
    return {
      shoppingCart: [],
      products: []
    }
  },
  components: {
    navbarComponent,
  },
  methods: {
    getProduct(id) {
      return this.products.find(product => product.id === id);
    },
    async checkout() {
      try {
        for (let item of this.shoppingCart) {
          await axios.delete(`http://localhost:3000/shoppingCart/${item.id}`);
        }
        alert('Compra exitosa');
        this.shoppingCart = [];
      } catch (error) {
        console.error('Error deleting items from cart:', error);
      }
    },
    async deleteFromCart(id) {
      try {
        await axios.delete(`http://localhost:3000/shoppingCart/${id}`);
        this.shoppingCart = this.shoppingCart.filter(item => item.id !== id);
      } catch (error) {
        console.error('Error deleting item from cart:', error);
      }
    }
  },
  computed: {
    totalPrice() {
      return this.shoppingCart.reduce((total, item) => total + this.getProduct(item.productid).precio, 0);
    }
  },
  async created() {
    try {
      const shoppingCartResponse = await axios.get('http://localhost:3000/shoppingCart');
      this.shoppingCart = shoppingCartResponse.data;

      const productsResponse = await axios.get('http://localhost:3000/products');
      this.products = productsResponse.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.cart-container {
  display: flex;
  justify-content: space-between;
}

.cart-items {
  width: 70%;
  margin-top: 150px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.item-image img {
  width: 50px;
  height: 50px;
}

.cart-summary {
  width: 25%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.checkout-button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>