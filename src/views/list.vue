<template>
  <div class="projects">
    <div class="project" v-for="p in projects" :key="p.id">
      <div class="header">
        <div class="title">({{ p.id }}){{ p.title }}</div>
        <div class="type">{{ p.typeName }}</div>
      </div>
      <div class="price">{{ p.price }}</div>
      <div class="add" @click="addOrder(p)">预约</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("getProjects");
  },
  methods: {
    addOrder(project) {
      this.$store.dispatch("orders/addProject", project.id);
      this.$router.push("/order");
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  border: 1px solid gray;
  padding: 12px;
  margin: 10px 0;
  position: relative;

  .header {
    display: flex;
    margin-bottom: 5px;
  }

  .type {
    color: red;
    margin-left: 10px;
  }
  .price {
    color: darkblue;
  }

  .add {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: #e2e2e2;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
