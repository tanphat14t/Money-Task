<template>
  <h1>Overview this here</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(car, index) in carFilter" :key="index">{{ car }}</li>
  </ul>
  <p>{{ transactions }}</p>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from "vue";
import useTransactions from "../uses/fetchTransactions";

export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup({ theme }, { emit }) {
    console.log(theme);
    console.log(emit);
    const { transactions, fetchAll } = useTransactions();
    fetchAll();
    const searchText = ref("");
    let cars = reactive(["Mec", "Lexus", "BMW", "Toyota", "Suzuki"]);
    const carFilter = computed(() =>
      cars.filter((car) =>
        car.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // xử lý sự kiện không trả về dữ liệu
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });
    return {
      searchText,
      cars,
      carFilter,
      transactions,
    };
  },
};
</script>
