<template>
  <section class="container">
    <div class="wrapper hero">
      <h1 class="hero-title">The Dog coin of the people</h1>
      <p class="hero-text">
        The most memeable memecoin in existence. The dogs have had their day,
        it’s time for Pepe to take reign.
      </p>
      <span class="hero-btn btn">Buy Now</span>
      <div class="hero-images">
        <div v-for="image of 5" :key="image" class="hero-images-wrapper">
          <NuxtImg
            class="hero-images-image"
            :src="`images/main/dog${image}.webp`"
            width="212"
            height="311"
            alt="Dog" />
        </div>
      </div>
      <NuxtLink
        class="hero-icon-wrapper"
        :to="{ path: '/', hash: '#about' }"
        :external="true"
        ><Icon class="hero-icon" name="ei:arrow-down"
      /></NuxtLink>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: var(--primary);
}
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    text-align: center;
  }

  &-text {
    margin: 20px 0 10px;
    max-width: 560px;
    text-align: center;
  }

  &-btn {
    color: var(--white);
    border: 2px solid var(--white);

    &:hover {
      color: var(--black);
      border-color: var(--black);
    }
  }

  &-images {
    margin: 70px 0 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &-wrapper {
      max-width: 212px;
      width: 100%;
      height: 313px;
      border-radius: 100px;
      overflow: hidden;
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-icon-wrapper {
    color: white;
    animation: sdb05 1.5s infinite;
  }

  &-icon {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  @media (320px <= width <= 992px) {
    &-images {
      &-wrapper {
        &:nth-child(4),
        &:nth-child(5) {
          display: none;
        }
      }
    }
  }
  @media (320px <= width <= 550px) {
    &-images {
      &-wrapper {
        &:nth-child(3),
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
}

.hideImg {
  display: none;
}

@keyframes sdb05 {
  0% {
    transform: rotate(0deg) translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-0deg) translateY(20px);
    opacity: 0;
  }
}
</style>
