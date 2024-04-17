<template>
  <section id="video" class="container">
    <div class="wrapper malamute">
      <div class="malamute-info">
        <h3 class="malamute-info-title">What is Malamute CEO</h3>
        <p class="malamute-info-text">
          The Dogecoin community cares about supporting each other, being kind,
          teaching people about cryptocurrency, fundraising, having fun, making
          memes, and being absurd. This is nicely captured by Dogecoin’s
          unofficial tagline: Do Only Good Everyday. Get involved in our awesome
          community via the below links:
        </p>
      </div>
      <div class="malamute-image">
        <NuxtImg
          width="564"
          height="474"
          src="images/main/dog1.webp"
          alt="Dog" />
        <div class="malamute-image-wrapper-icon">
          <Icon class="malamute-image-icon" name="solar:playback-speed-bold" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: var(--black);
}

.malamute {
  display: flex;
  padding-right: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 0;

  &-image {
    flex: 1 1 auto;
    position: relative;
    max-width: 560px;
    margin-right: 40px;
    width: 100%;
    height: 475px;
    z-index: 1;

    & > img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 237px 0px 0px 237px / 237px 0px 0px 237px;
    }

    &-wrapper-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: absolute;
      right: -48px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--primary);
      border-radius: 50%;
      border: 10px solid var(--black);
      z-index: 10;
      cursor: pointer;
    }

    &-icon {
      width: 38px;
      height: 38px;
      color: var(--white);
    }
  }

  &-info {
    flex: 1;
    max-width: 600px;

    &-title {
      color: var(--primary);
      line-height: 44.5px;
    }

    &-text {
      font-weight: 400;
      &:last-child {
        margin-top: 10px;
      }
    }
  }

  @media (320px <= width <= 1300px) {
    margin: 0 20px;
  }
  @media (320px <= width <= 1024px) {
    text-align: center;
    flex-direction: column;
  }
  @media (320px <= width <= 992px) {
    &-image {
      margin-right: 0;
      flex: 0;
      max-width: 100%;

      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.21);
        z-index: 1;
      }

      & > img {
        border-radius: 18px;
      }

      &-wrapper-icon {
        padding: 20px;
        right: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid var(--black);
      }
    }
  }
  @media (320px <= width <= 768px) {
    padding: 50px 0;

    &-image {
      &-wrapper-icon {
        padding: 15px;
        border: 5px solid var(--black);
      }

      &-icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
