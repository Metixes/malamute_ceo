<template>
  <header :class="['header', { sticky: headerSticky }]">
    <div class="header-container">
      <NuxtLink class="logo" to="/"
        ><NuxtImg width="200" src="/images/main/logo.svg" alt="Malamute Ceo"
      /></NuxtLink>
      <div class="nav-wrapper">
        <nav :class="['nav', { active: showMenu }]">
          <NuxtLink @click="showBurgerMenu" class="nav_link" to="/"
            >Home</NuxtLink
          >
          <NuxtLink
            @click="showBurgerMenu"
            class="nav_link"
            :to="{ path: '/', hash: '#about' }"
            :external="true"
            >About</NuxtLink
          >
          <NuxtLink
            @click="showBurgerMenu"
            class="nav_link"
            :to="{ path: '/', hash: '#gettingStarted' }"
            :external="true"
            >Getting Started</NuxtLink
          >
          <NuxtLink
            @click="showBurgerMenu"
            class="nav_link"
            :to="{ path: '/', hash: '#video' }"
            :external="true"
            >Video</NuxtLink
          >
          <NuxtLink
            @click="showBurgerMenu"
            class="nav_link"
            :to="{ path: '/', hash: '#faq' }"
            :external="true"
            >Faq</NuxtLink
          >
          <NuxtLink
            @click="showBurgerMenu"
            class="nav_link"
            :to="{ path: '/', hash: '#contact' }"
            :external="true"
            >Contact</NuxtLink
          >
        </nav>
        <span class="btn">Buy Now</span>
        <div @click="showBurgerMenu" class="menu-wrapper">
          <div
            :class="['hamburger-menu', { 'hamburger-active': showMenu }]"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMediaQuery, useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();
const isSm = useMediaQuery("(max-width: 992px)");
const showMenu = ref(false);
const headerSticky = ref(false);

const showBurgerMenu = () => {
  if (!isSm.value) {
    return;
  }

  showMenu.value = !showMenu.value;

  if (showMenu.value) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }
};

watch(
  () => y.value,
  (n, o) => {
    if (n > 90 && isSm.value) {
      headerSticky.value = true;
    } else {
      headerSticky.value = false;
    }
  }
);
</script>

<style scoped lang="scss">
.header {
  background-color: var(--white);

  &:is(.sticky) .header-container .nav-wrapper .btn {
    color: var(--primary);
    border-color: var(--primary);

    &:hover {
      color: var(--white);
      border-color: var(--white);
    }
  }

  @media (320px <= width <= 992px) {
    backdrop-filter: blur(2px);
    transition: top 0.3s ease-in, background-color 0.5s ease;
    position: sticky;
    top: 0px;
    z-index: 10;
  }
}

.header-container {
  padding: 26px 70px;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (320px <= width <= 1124px) {
    padding: 26px 40px;
  }
  @media (320px <= width <= 992px) {
    padding: 10px;
  }
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 45px;

  @media (320px <= width <= 400px) {
    gap: 20px;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;

  @media (320px <= width <= 1124px) {
    gap: 20px;
  }

  @media (320px <= width <= 992px) {
    overflow-y: scroll;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 100%;
    height: 100dvh;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: var(--white);
    transform: translateY(-150%);
    transition: 0.4s ease-in-out;

    z-index: 4;
  }
}

.active {
  transform: translateY(0);
}

.menu-wrapper {
  position: relative;
  width: 30px;
  height: 24px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (320px <= width <= 992px) {
    display: flex;
    z-index: 5;
  }
}

.hamburger-menu {
  width: 100%;
  height: 4px;
  border-radius: 8px;
  background: var(--primary);
  visibility: visible;
  transition: visibility 0.2s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 4px;
    border-radius: 8px;
    background: var(--primary);
    transition: top 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6),
      bottom 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6), width 0.3s ease,
      transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    right: 0;
    bottom: 0;
  }
}

.hamburger-active {
  visibility: hidden;
  transition: visibility 0.2s ease;
  &::before {
    width: 100%;
    top: calc(50% - 2px);
    transform: rotate(230deg);
    visibility: visible;
  }
  &::after {
    width: 100%;
    bottom: calc(50% - 2px);
    transform: rotate(130deg);
    visibility: visible;
  }
}

.sticky {
  transition: top 0.3s ease-in, background-color 0.5s ease;
  top: 0.1px;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
