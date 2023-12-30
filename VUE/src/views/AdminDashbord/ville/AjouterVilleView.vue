<template>
  <section>
    <form @submit.prevent="createVille">
      <div>
        <label for="villeid">id:</label>
        <input type="number" id="villeid" v-model="postData.id" />
      </div>
      <div>
        <label for="name">name: </label>
        <input type="text" id="name" v-model="postData.name" />
      </div>
      <button>Create ville</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postData: {
        id: "",
        name: "",
      },
    };
  },
  methods: {
    createVille() {
      axios
        .post("http://localhost:3000/api/ville", this.postData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    },
  },
};
</script>
