<template>
  <section id="about" class="container">
    <div class="wrapper about">
      <div class="about-images">
        <div class="about-images-first">
          <NuxtImg
            width="454"
            height="571"
            src="images/main/dog6.webp"
            alt="Dog" />
        </div>
        <div class="about-images-second">
          <NuxtImg
            width="260"
            height="271"
            src="images/main/dog7.webp"
            alt="Dog" />
        </div>
      </div>
      <div class="about-info">
        <h3 class="about-info-title">What is Malamute?</h3>
        <p class="about-info-text">
          Malamute is a good boy with a knack for marketing who rose from park
          bench nobody to CEO of memecoins. His rise to the top was paved with
          his insightful critiques of dog biscuits and his undeniable canine
          charisma. Nicknamed "The Barketing Whiz," Malamute is a legend,
          proving success can come with wagging tails and a love for squirrels.
        </p>
        <p class="about-info-text">
          Is Malamute a Husky? No, he is just a Malamute.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: var(--black);
}

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 115px;
  padding: 80px 0 180px;

  &-images {
    flex: 1 1 auto;
    position: relative;
    max-width: 454px;

    &-first {
      width: 100%;
      overflow: hidden;
      border-radius: 120% 120% 0px 0px / 70% 70% 0px 0px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-second {
      position: absolute;
      bottom: -17%;
      right: -20%;
      max-width: 60%;
      width: 100%;
      height: 46%;
      border-top: 10px solid var(--black);
      border-left: 10px solid var(--black);
      border-radius: 0px 0px 100px 0px / 0px 0px 100px 0px;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &-info {
    flex: 1;
    max-width: 600px;

    &-title {
      margin-bottom: 17px;
      color: var(--primary);
    }

    &-text {
      &:last-child {
        margin-top: 10px;
      }
    }
  }

  @media (320px <= width <= 1320px) {
    margin: 0 20px;
  }
  @media (320px <= width <= 992px) {
    text-align: center;
    flex-direction: column-reverse;
    gap: 20px;

    &-images {
      max-width: 380px;
    }
  }
  @media (320px <= width <= 768px) {
    padding: 50px 0 150px;

    &-images {
      max-width: 60%;
    }
  }
  @media (320px <= width <= 768px) {
    padding: 50px 0 100px;

    &-images {
      max-width: 60%;
    }
  }
}
</style>
