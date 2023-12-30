<template>
  <section>
    <form @submit.prevent="createHotel">
      <div>
        <label for="name">name: </label>
        <input type="text" id="name" v-model="postData.name" />
      </div>
      <div>
        <label for="email">email: </label>
        <input type="text" id="email" v-model="postData.email" />
      </div>
      <div>
        <label for="telephone">telephone: </label>
        <input type="text" id="telephone" v-model="postData.telephone" />
      </div>
      <div>
        <label for="logo">logo: </label>
        <input type="text" id="logo" v-model="postData.logo" />
      </div>
      <div>
        <label for="facebook">facebook: </label>
        <input type="text" id="facebook" v-model="postData.facebook" />
      </div>
      <div>
        <label for="instagrame">instagrame: </label>
        <input type="text" id="name" v-model="postData.instagrame" />
      </div>
      <div>
        <label for="youtube">youtube: </label>
        <input type="text" id="youtube" v-model="postData.youtube" />
      </div>
      <div>
        <label for="longitude">longitude: </label>
        <input type="number" id="longitude" v-model="postData.longitude" />
      </div>
      <div>
        <label for="latitude">latitude: </label>
        <input type="number" id="latitude" v-model="postData.latitude" />
      </div>
      <button>Create hotel</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postData: {
        id: 0,
        name: "",
        email: "",
        telephone: "",
        logo: "",
        facebook: "",
        instagrame: "",
        youtube: "",
        longitude: "",
        latitude: "",
      },
    };
  },
  methods: {
    createHotel() {
      axios
        .post("http://localhost:3000/api/hotel", this.postData, {
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
