<script >
import axios from 'axios'
export default {
    
  methods: {
    login: async function() {
        const auth = { username: 'demo@dkplus.is', password: 'Demo123' };
        const url = 'https://api.dkplus.is/api/v1';
        this.success = false;
        const error = null;
        try {
          const res = await axios.get(url, { auth }).then(res => res.data);
          this.success = true;
          if(this.success == true) {
            console.log(res)
            this.$router.push({path: '/company', replace: true})
          }
        } catch (err) {
          error = err.message;
        }
      }
  }
}
</script>

<template>
      <button @click=login>Innskráning</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}
input {
    margin-bottom: 10px;
    display:block;
}
button {
    display: block;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
