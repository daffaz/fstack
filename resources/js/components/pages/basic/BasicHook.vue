<template>
  <div>
    <h2 ref="myref">
      Hook tutorial by <strong>{{ name }}</strong>
    </h2>
    <h3 v-if="wawan">Wawan is true</h3>
    <h3 v-else>Wawan is false</h3>
    <button @click="wawan = !wawan">Wawan now</button>
  </div>
</template>

<script>
export default {
  name: "BasicHook",
  data: function () {
    return {
      name: "Daffa Z",
      wawan: false,
    };
  },
  methods: {},
  beforeCreate() {
    alert("This is before create");
    console.log("before created, objek isi dari objek name adalah", this.name);
  },
  created() {
    alert("This is creted");
    console.log("created, objek isi dari objek name adalah", this.name);
    console.log(
      "Finna call the myref from created, and the result is",
      this.$refs.myref
    );
  },
  mounted() {
    console.log(
      "Finna call the myref from mounted, and the result is",
      this.$refs.myref
    );
  },
};
</script>

<style>
</style>