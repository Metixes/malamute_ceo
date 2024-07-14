<template>
  <section class="container">
    <div class="wrapper dog-coins">
      <ul class="dog-coins-info">
        Change to the following:
        <li class="dog-coins-info-text">LP burned</li>
        <li class="dog-coins-info-text">Mint authority revoked</li>
        <li class="dog-coins-info-text">Freeze authority revoked</li>
        <span class="">Malamute is a good boy, he plays it clean</span>
      </ul>
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
  justify-content: center;
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
    width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;

    &-text {
      width: 100%;
      list-style-type: disc;
      color: var(--primary);

      &::marker {
        color: black;
      }
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
