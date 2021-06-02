<template>
  <div class="coupons">
    <div class="coupon" v-for="c in coupons" :key="c.id">
      <div class="header">
        <div class="title">({{ c.id }}){{ c.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from "../api";
export default {
  data() {
    return {
      COUPON_TYPE: api.COUPON_TYPE,
      USE_TYPE: api.USE_TYPE,
    };
  },
  computed: {
    coupons() {
      return this.$store.state.coupons;
    },
  },
  mounted() {
    this.$store.dispatch("getCoupons");
  },
};
</script>
<style lang="scss" scoped>
.coupon {
  border: 1px solid gray;
  padding: 12px;
  margin: 10px 0;
  position: relative;

  &.disabled {
    background-color: gray;
  }

  .header {
    display: flex;
    margin-bottom: 5px;
  }
}
</style>
