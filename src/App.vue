<template>
  <div id="app">
    <leftNav></leftNav>
    <keep-alive>
      <router-view class="main"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import leftNav from "@/components/leftNav";
export default {
  name: "App",
  components: { leftNav },
};
</script>

<style>
.main {
  float: left;
  width: 95%;
  background-color: #eff2f7;
  height: 100%;
}
</style>
