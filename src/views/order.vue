<template>
  <div class="orders">
    <div>{{ totalOriginPrice }}</div>
    <div class="order" v-for="p in projects" :key="p.id">
      {{ p.projectInfo.title }}
      <div class="count">
        <span class="circle" @click="subProject(p.id)">-</span>
        <span>{{ p.count }}</span>
        <span class="circle" @click="addProject(p.id)">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "order",
  computed: {
    ...mapState("orders", {
      projects: (state) => state.projects,
    }),
    ...mapGetters("orders", {
      totalOriginPrice: "totalOriginPrice",
    }),
  },
  methods: {
    ...mapActions("orders", ["addProject"]),
    ...mapMutations("orders", {
      subProject: "SUB_PROJECT",
    }),
  },
};
</script>
<style lang="scss" scoped>
.order {
  padding: 10px 20px;
  border: 1px solid gray;
  margin: 10px 0;
}
.count span {
  margin: 0 4px;
}
.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  background-color: #e2e2e2;
}
</style>
