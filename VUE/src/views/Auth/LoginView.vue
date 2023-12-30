<template>
  <div class="login-box">
    <div class="login-logo"></div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg text-center">Authentificate</p>
        <form @submit.prevent="createVille">
          <div class="form-group">
            <input
              id="email"
              type="text"
              class="form-control"
              required
              autocomplete="email"
              autofocus
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

          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" name="remember" id="remember" />
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">
                Connexion
              </button>
            </div>
          </div>
        </form>

        <p class="mb-1">
          <a href="/password_oublier"> Password Oublier ? </a>
        </p>
        <p class="mb-1">
          <a class="text-center" href="/register"> s'inscrire </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import { useRouter } from "vue-router";

export default {
  data() {
    return {
      postData: {
        userName: "",
        password: "",
        email: "zkerroumi42@gmail.com",
      },
    };
  },
  methods: {
    async createVille() {
      // const router = useRouter();
      const response = await axios.post(
        "http://localhost:3000/auth",
        this.postData
      );
      localStorage.setItem("token", response.data.token);
    },
  },
};
</script>

<style scoped lang="scss">
.login-box {
  margin: 12% auto;
  max-width: 400px;
}

.login-logo img {
  width: 100%;
  height: auto;
}

.card {
  border: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 80px;
}

.login-card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  margin-bottom: 20px;
  margin-top: 10px;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.text-center {
  text-align: center;
  justify-content: center;
}
#remember {
  margin-right: 5px;
}
</style>
