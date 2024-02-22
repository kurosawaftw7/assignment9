
<template>
   
  <div>    
    <!-- HTML and image code -->
          
    <h1>{{msg}}</h1>  
    <!-- Images for Nuxt are handled differently: Let's use the public folder strategy -->    
    <!-- https://www.lichter.io/articles/nuxt3-vue3-dynamic-images/ -->
    <img :alt="alt" :src="image" :title="title" @click="toggleBorder($event.currentTarget)">
  </div>
   
  </template>
   
   
  <script>
   
  import toggleBorder from "../mixins/mixin.js"
  // JS creating the mixin
   
  export default {
     
    name:
    'ImageComponent',
      
    props: { 
    msg: String,    
    image: String,   
    alt: String, 
    title: String, },
      
    mixins: [toggleBorder]
  }

  </script>
   
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
   
  <style scoped>
     
  .image-border {
    border: 5px solid black; 
  }
  </style>
  
  