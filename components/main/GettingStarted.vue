<template>
  <section id="gettingStarted" class="container">
    <div class="wrapper getting-started">
      <h3 class="getting-started-title">Getting Started</h3>
      <div class="getting-started-info">
        <div
          v-for="card of preview"
          :key="card.icon"
          class="getting-started-preview">
          <span class="getting-started-preview-wrapper-icon">
            <NuxtImg
              class="getting-started-preview-icon"
              :src="`images/main/${card.icon}.svg`"
              alt="choice" />
          </span>
          <strong class="getting-started-preview-title">{{
            card.title
          }}</strong>
          <p class="getting-started-preview-text">
            {{ card.text }}
          </p>
        </div>
      </div>
      <div class="getting-started-wrapper-btn">
        <span class="getting-started-btn btn">Buy Now</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const preview = [
  {
    title: "Choose Your Wallet",
    text: "A wallet is necessary for people wanting to use, trade, or hold coin. You can pick a wallet",
    icon: "choice",
  },
  {
    title: "Choose Your Wallet",
    text: "After downloading, you can configure your wallet according to our guide.",
    icon: "settings",
  },
  {
    title: "Choose Your Wallet",
    text: "There’s lots of ways to get your hands on some Dogecoin.",
    icon: "money",
  },
];
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--gray);
}

.getting-started {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    text-align: center;
    color: var(--primary);
  }

  &-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  &-preview {
    margin-top: 75px;
    max-width: 328px;
    width: 100%;
    height: 292px;
    padding: 100px 40px 57px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--white);
    border-radius: 120% 120% 0px 0px / 100% 100% 0px 0px;

    &:nth-child(2)::before {
      position: absolute;
      content: "";
      left: 50%;
      height: 64px;
      bottom: -64px;
      transform: translateX(-50%);
      border: 1px dashed var(--white);
      z-index: 0;
    }

    &-wrapper-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      position: absolute;
      top: -48px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--primary);
      border-radius: 50%;
      border: 10px solid var(--gray);
    }

    &-icon {
      width: 38px;
      height: 38px;
    }
    &-title {
      color: var(--black);
    }
    &-text {
      text-align: center;
      color: var(--black);
    }
  }

  &-wrapper-btn {
    padding-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 698px;
    width: 100%;
    border-bottom: 1px dashed var(--white);
    border-left: 1px dashed var(--white);
    border-right: 1px dashed var(--white);

    @media (320px <= width <= 1065px) {
      max-width: 70%;
    }
  }

  &-btn {
    margin-bottom: -20px;
    width: fit-content;
    color: var(--white);
    border-color: var(--white);
    background-color: var(--gray);
    z-index: 1;

    &:hover {
      color: var(--primary);
      border-color: var(--primary);
    }
  }

  @media (320px <= width <= 920px) {
    &-preview {
      padding: 50px 20px 30px 20px;

      &-wrapper-icon {
        padding: 10px;
        top: -30px;
        border: 5px solid var(--gray);
      }

      &-icon {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media (320px <= width <= 768px) {
    &-info {
      margin-top: 50px;
      flex-direction: column;
      gap: 60px;
    }

    &-preview {
      height: 250px;
      margin-top: 0;
      padding: 70px 20px 30px 20px;

      &::before {
        position: absolute;
        content: "";
        left: 50%;
        height: 64px;
        bottom: -64px;
        transform: translateX(-50%);
        border: 1px dashed var(--white);
        z-index: 0;
      }
    }

    &-wrapper-btn {
      border-bottom: none;
      border-left: none;
      border-right: none;
    }
  }
}
</style>
