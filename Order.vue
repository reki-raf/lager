<script >

export default {
    methods: {
        findOrderById() {
            console.log('YAAAAY')
        }
    }
}
</script>

<template>
    <div>
        <label>Kennitala <input v-model="user"></label>
        <div>
            <button @click=findOrderById>Leita</button>
    </div>
    </div>
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
