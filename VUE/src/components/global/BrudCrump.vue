<template>
  <nav class="t" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#home"> Home </a>
      </li>
      <li class="breadcrumb-item"><a href="#">dashbord</a></li>
      <li class="breadcrumb-item active" aria-current="page">statistiques</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbExample",
};
</script>

<style scoped lang="scss">
.breadcrumb {
  background: #c1c6cf;
  padding: 10px;
  margin: 0;
}
</style>
