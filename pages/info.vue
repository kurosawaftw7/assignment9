<template>
<h1>This is the info page</h1>
<div class="accordion" id="accordionExample">
  <div class="accordion-item" v-for="(movie, key) in movies" :key="key">
    <h2 class="accordion-header">
      <!-- accordion and movie title code -->
      <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + key" aria-expanded="true" aria-controls="collapseOne">
        {{ movie.Title }}
      </button>
    </h2>
    <!-- insert of array info -->
    <div :id="'collapse' + key" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {{ movie.Genre }}
        {{ movie.Year }}
        {{ movie.Runtime }}
        <!-- This needs to be wrapped in this if otherwise it may show an error since this data doesn't exist on pageload -->
        <div v-if="actors.results">
          <h4>Actor</h4>
          <div>Name: {{ actors.results['primaryName'] }}</div>
          <div>Born: {{ actors.results['birthYear'] }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      movies: [
        {Title: 'The Seven Samurai', Genre: 'Genre: Epic Adventure', Year: 'Year of Release: 1954', Runtime: 'Runtime: 3 hours and 27 minutes', Actor: 'test'},
        {Title: 'Ikiru', Genre: 'Genre: Humanist Drama', Year: 'Year of Release: 1952', Runtime: 'Runtime: 2 hours and 23 minutes', Actor: 'test'},
        {Title: 'Ran', Genre: 'Genre: Epic Action', Year: 'Year of Release: 1985', Runtime: 'Runtime: 2 hours and 40 minutes', Actor: 'test'},
      ],
      actors: []
    };
  },
  methods: {
    // Moved your api code into a function and made some small edits.
    async getActorData(){
      const url = 'https://moviesdatabase.p.rapidapi.com/actors/nm0001536';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8be9c0067dmsh6e89ffadb61885cp15da93jsn87bd1fdf7cf1',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };

      const data = await $fetch(url, options)
      console.log('this the data: ' + JSON.stringify(data))
      
      // Set the return data value from the api the Vue actors data variable
      this.actors = await data
    }
  },
  mounted(){
    // Run this function when the Vue instance is created
    this.getActorData();
  }
};
</script>
