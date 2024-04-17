<template>
  <section class="container">
    <div class="wrapper dog-coins">
      <div class="dog-coins-image">
        <NuxtImg
          width="324"
          height="278"
          src="images/main/dog2.webp"
          alt="Dog" />
      </div>
      <div class="dog-coins-info">
        <p class="dog-coins-info-text">
          The Dogecoin community cares about supporting each other, being kind,
          teaching people about cryptocurrency, fundraising, having fun, making
          memes, and being absurd. This is nicely captured by Dogecoin’s
          unofficial
        </p>
        <span class="dog-coins-info-btn btn">Buy now</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: var(--gray);
}

.dog-coins {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  &-image {
    flex: 1 1 auto;
    position: relative;
    max-width: 324px;
    height: 278px;
    border-radius: 0px 165px 165px 0px / 0px 165px 165px 0px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-info {
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 18px;

    &-text {
      color: var(--primary);
    }

    &-btn {
      color: var(--white);
      border-color: var(--white);

      &:hover {
        color: var(--primary);
        border-color: var(--primary);
      }
    }
  }

  @media (320px <= width <= 1024px) {
    margin: 0 20px 0 0;
  }

  @media (320px <= width <= 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
    margin: 0 20px;
    padding: 50px 0;

    &-info {
      text-align: center;
      align-items: center;
    }

    &-image {
      max-width: 270px;
      height: 100%;
      border-radius: 165px 165px 0px 0px / 165px 165px 0px 0px;
    }
  }
}
</style>
