<template>
  <div>
    <h1>Transaction Details</h1>
    <div v-if="transaction">
      <p><strong>ID:</strong> {{ transaction.id }}</p>
      <p><strong>Name:</strong> {{ transaction.name }}</p>
      <p><strong>Price:</strong> {{ transaction.price }}</p>
    </div>
    <div v-else>
      <p>Transaction {{ $route.params.id }} is loading ....</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>
