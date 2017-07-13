<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import request from 'superagent-bluebird-promise'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },

  methods: {
    fetchData() {
      request
        .get('/api/hello')
        .then((res) => {
          console.log(res.body)
          this.msg = res.body.hello
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  created() {
    this.fetchData()
  }
}
</script>
