<script >
export default {

    methods: {
        findProductById: async function() {
        const auth = { token: '3541031f-baf2-4737-a7e8-c66396e5a5e3' };
        const url = "https://api.dkplus.is/api/v1/Product";
        this.success = false;
        const error = null;
        try {
          const res = await axios.get(url, { auth }).then(res => res.data);
          this.success = true;
          if(this.success == true) {
            console.log(res)
          }
        } catch (err) {
          error = err.message;
          console.log(err.message)
        }
      }
    }
}
</script>

<template>
    <div>
        <label>Vörunúmer <input v-model="id"></label>
        <div>
            <button @click=findProductById>Leita</button>
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
