<template>
  <section id="contact" class="container">
    <div class="wrapper contact">
      <h3 class="contact-title">Contact</h3>
      <NuxtImg class="logo" src="images/main/logo.svg" alt="Malamute Ceo" />
      <p class="contact-text">
        The Dogecoin community cares about supporting each other, being kind,
        teaching people about cryptocurrency, fundraising, having fun, making
        memes, and being absurd. This is nicely captured by Dogecoin’s
        unofficial tagline: Do Only Good Everyday. Get involved in our awesome
        community via the below links.
      </p>
      <div class="contact-social">
        <div
          class="contact-social-icon-wrapper contact-social-icon-wrapper-telegram">
          <Icon class="contact-social-icon" name="mingcute:telegram-fill" />
        </div>
        <div
          class="contact-social-icon-wrapper contact-social-icon-wrapper-discord">
          <Icon class="contact-social-icon" name="ic:baseline-discord" />
        </div>
        <div
          class="contact-social-icon-wrapper contact-social-icon-wrapper-twitterX">
          <Icon class="contact-social-icon" name="prime:twitter" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: var(--white-middle);
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-title {
    color: var(--black);
  }

  &-text {
    max-width: 1054px;
    text-align: center;
    color: var(--black);
  }

  &-social {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-radius: 50%;
      cursor: pointer;
    }

    &-icon-wrapper-telegram {
      background-color: #2aabee;
    }
    &-icon-wrapper-discord {
      background-color: #5865f2;
    }
    &-icon-wrapper-twitterX {
      background-color: #000002;
    }

    &-icon {
      width: 34px;
      height: 34px;
    }
  }

  @media (320px <= width <= 768px) {
    &-social {
      &-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
      }

      &-icon {
        width: 34px;
        height: 34px;
      }
    }
  }
}

.logo {
  margin: 56px 0 32px;
  max-width: 210px;

  @media (320px <= width <= 768px) {
    margin: 46px 0 32px;

    max-width: 180px;
  }
}

.twitter {
  background-color: #2aabee;
}
</style>
