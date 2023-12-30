<template>
  <div>update ville</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .patch(
        "http://localhost:3000/api/hotel/0",
        {
          id: 6,
          name: "khribgua",
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => console.log(response));
  },
};
</script>
