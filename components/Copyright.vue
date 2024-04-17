<template>
  <section class="container">
    <div class="wrapper">
      <p class="copyright">
        &copy;{{ currentYear }} | What is Malamute CEO. All rights reserved
      </p>
    </div>
  </section>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--primary);
}

.wrapper {
  padding: 35px 0;
  text-align: center;
}

.copyright {
  user-select: none;
}
</style>
