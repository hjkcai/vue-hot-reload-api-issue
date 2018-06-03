<template>
  <div>
    <button @click="test">invoke test() in extends.js</button><br>
    <button @click="changeThis">invoke changeThis() in component.vue</button>
  </div>
</template>

<script>
  export default {
    methods: {
      changeThis () {
        alert('changeThis!!')
      }
    }
  }
</script>
