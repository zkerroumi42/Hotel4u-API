<template>
  <div class="navbar">
    <div class="logo">HOTEL4U</div>
    <hr />
    <br />
    <br />
    <!-- <div class="nav-links">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/hotels">Hotels</router-link>
        <router-link to="/bookings">Bookings</router-link>
      </div> -->

    <ul class="nav">
      <li class="nav-item active">
        <a class="nav-link active" href="/Admin/dashbord" aria-current="page"
          ><font-awesome-icon icon="fa-solid fa-gauge" />&nbsp;
          <span>Dashbord</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Admin/clients">
          <font-awesome-icon icon="fa-solid fa-users" />&nbsp;
          <span>Clients</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Admin/categories"
          ><font-awesome-icon icon="fa-solid fa-user" />&nbsp;
          <span>Catgory</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Admin/villes"
          ><font-awesome-icon icon="fa-solid fa-user" />&nbsp;
          <span>Villes</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Admin/hotels">
          <font-awesome-icon icon="fa-solid fa-hotel" />&nbsp;
          <span>Hotels</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Admin/profile"
          ><font-awesome-icon icon="fa-solid fa-user" />&nbsp;
          <span>Profile</span></a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login"
          ><font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          &nbsp;<span>Deconnecter</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBarC",
};
</script>

<style scoped>
.navbar {
  /* background-color: #333; */
  color: white;
  display: block;
}

.logo {
  font-size: 2em;
  font-weight: bold;
  margin-top: 30px;
}

.nav {
  display: block;
  justify-content: start;
  align-items: start;
}

.nav-links,
a {
  color: #c1c6cf;
}

.nav-item:hover {
  background: #494e53;
}

.nav-item {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 30px;
}

.active {
  --bs-bg-opacity: 1;
  background-color: rgba(
    var(--bs-primary-rgb),
    var(--bs-bg-opacity)
  ) !important;
}

ul {
  display: flex;
}

li {
  display: flex;
  margin-left: 30px;
}
</style>
