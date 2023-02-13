<script>

export default {
    methods: {
    search() {
      this.$router.push({path: '/search', replace: true})
      console.log('click search')
      console.log(this.$router)
    },
    order() {
      this.$router.push({path: '/order', replace: true})
    },
    intake() {
      this.$router.push({path: '/intake', replace: true})
    }
  }
}

</script>

<template>
    <div>
        <h2>Rafstilling</h2>
        <button @click=search>Leita að Vöru</button>
        <button @click=order>Leita að Reikning</button>
        <button @click=intake>Ný Sending</button>
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
