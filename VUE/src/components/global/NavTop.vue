<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><font-awesome-icon icon="fa-solid fa-list"
        /></a>

        <div class="navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul class="dropdown-menu" aria-labelledby="userDropdown ">
                <li>
                  <a class="dropdown-item" href="/Admin/profile"
                    ><span><font-awesome-icon icon="fa-solid fa-user" /></span
                    >Profile</a
                  >
                </li>
                <li class="mr-3">
                  <a class="dropdown-item" href="/login"
                    ><span
                      ><font-awesome-icon
                        icon="fa-solid fa-right-from-bracket" /></span
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="langDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lang
              </a>
              <ul class="dropdown-menu" aria-labelledby="langDropdown">
                <li><a class="dropdown-item" href="#">EN</a></li>
                <li><a class="dropdown-item" href="#">AR</a></li>
                <li><a class="dropdown-item" href="#">FR</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavTop",
};
</script>

<style scoped lang="scss">
.navbar {
  height: 70px;
}
nav {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
span {
  margin-right: 10px;
}
</style>
