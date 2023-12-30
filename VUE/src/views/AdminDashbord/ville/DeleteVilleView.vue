<template>
  <div>delete ville</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .delete("http://localhost:3000/api/ville/6", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => console.log(response));
  },
};
</script>
