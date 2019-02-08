<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
}
html { min-height:100%; }
body { 
  position: relative;; 
  top:0; 
  bottom:0; 
  right:0; 
  left:0; 
  margin: 0 auto;
  min-height: 100%;
}
</style>
