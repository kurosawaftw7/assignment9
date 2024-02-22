<template>
  <div class="about">
    <h1>This is the movie poster page</h1>
  </div>
  <div>
    <!-- loop for movie posters -->
      <div class="posters">
        <!-- <img v-for="(movie, key) in movies" :key=key :alt="movie.Title" :src="movie.Poster"/> -->
      </div>
        </div>
        <div v-for="(movie, key) in movies" :key=key>
          <ImageComponent 
            :msg="movie.Title"  
            :alt="movie.Title"
            :image="movie.Poster"
            :title="movie.Title">
          </ImageComponent>
        </div>

      <!-- button code -->
      <div>
        <button @click="show = !show">{{buttontext}}</button>
        <h2 v-if="show">Kurosawa made great movies.</h2>
        <h2 v-else>I hate good movies.</h2>
      </div>
  
  </template>

  <script>
    import ImageComponent from '@/components/ImageComponent.vue';

    export default {
      data() {
        return {
        // array for images and titles
        movies: [
            {Title: 'The Seven Samurai', Poster: 'images/Seven_Samurai_poster.jpg'},
            {Title: 'Ran', Poster: 'images/Ran-Vintage-Movie-Poster-Original-Japanese-1-panel-20x29.jpg'},
            {Title: 'Ikiru', Poster: 'images/Ikiru_poster.jpg'},

        ],
      show: false, 
      buttontext: "quality toggle"
      }
      },
      components: {
        ImageComponent
      },

    }
</script>

<!-- CSS styling -->
<style>
img {
  max-width: 400px;
  height: auto;
  padding: 2rem;
}
</style>