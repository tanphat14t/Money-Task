<template>
  <h1>Transactions is here</h1>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>
    <p>Loading transaction ....</p>
  </div>
</template>

<script>
import useTransactions from "../uses/fetchTransactions";
export default {
  setup() {
    const { transactions, error, fetchAll } = useTransactions();
    fetchAll();
    return {
      transactions,
      error,
    };
  },
};
</script>
