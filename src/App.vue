<template>
  <div id="app">
    <div>
      <router-link to="/">列表</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/coupon">优惠券</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 375px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
  border: 1px solid #2c3e50;
  padding: 2px 8px;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
    border-color: #42b983;
  }
}
</style>
