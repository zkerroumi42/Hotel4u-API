<template>
  <div class="register-box">
    <div class="register-logo">
      <!-- <a href="#">
            <img class="img-fluid mx-auto d-block" width="100" height="40" src="@/assets/H4.svg" alt="Logo">
        </a> -->
    </div>
    <div class="card">
      <div class="card-body register-card-body">
        <p class="login-box-msg text-center">S'inscrire</p>

        <form @submit.prevent="createVille">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  id="nom"
                  type="text"
                  class="form-control"
                  required
                  autofocus
                  placeholder="Nom"
                  name="nom"
                  value=""
                  v-model="postData.nom"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  id="prenom"
                  type="text"
                  class="form-control"
                  required
                  autofocus
                  placeholder="Prenom"
                  name="prenom"
                  value=""
                  v-model="postData.prenom"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              id="email"
              type="email"
              class="form-control"
              required
              autocomplete="email"
              placeholder="Email"
              name="email"
              value=""
              v-model="postData.userName"
            />
          </div>

          <div class="form-group">
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              required
              placeholder="Password"
              v-model="postData.password"
            />
          </div>

          <div class="form-group">
            <input
              id="password_confirmation"
              type="password"
              class="form-control"
              name="password_confirmation"
              required
              placeholder="Confirm Password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-block btn-flat w-100"
          >
            s'inscrire
          </button>
          <br />
        </form>

        <p class="mb-2 mt-2">
          <a class="text-center" href="/login">
            J'ai déja un compte? Login ici
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      postData: {
        id: 10,
        nom: "",
        prenom: "",
        userName: "",
        password: "",
        email: "test@test.com",
        role: "User",
        userUUID: "myuuid",
      },
    };
  },
  methods: {
    createVille() {
      axios
        .post("http://localhost:3000/users/register", this.postData)
        .then((response) => console.log(response))
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.register-box {
  margin: 12% auto;
  max-width: 400px;
}

.register-logo img {
  width: 100%;
  height: auto;
}

.card {
  border: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 80px;
}

.register-card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.text-center {
  text-align: center;
  justify-content: center;
}
</style>
