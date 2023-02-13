<script>
export default {
    methods: {
    goToReki() {
      this.$router.push({path: '/reki', replace: true})
      console.log('click reki')
      console.log(this.$router)
    },
    goToRafstilling() {
      this.$router.push({path: '/rafstilling', replace: true})
      console.log('click rafstilling')
      console.log(this.$router)
    }
  }
}

</script>

<template>
    <div>
        <button @click=goToReki>Reki</button>
        <button @click=goToRafstilling>Rafstilling</button>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
button {
    margin-bottom: 10px;
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
