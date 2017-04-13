<template>
  <div class="hello">
    <h1>reddit imager</h1>
    <button v-on:click.prevent="fetchData">Get Images</button>
    <ol>
      <li v-for="img in images">
        <img :src="img.thumbnail">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      item: 'This is my item.',
      images: [{
        title: 'Foo'
      }],
      loading: false
    }
  },

  methods: {
    fetchData () {
      this.loading = true

      this.api('/r/aww.json')
        .then(res => {
          this.loading = false
          this.images = JSON.parse(res.data.body).data.children.map(item => item.data)
        })
        .catch(err => {
          this.loading = false
          this.error = err.toString()
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
