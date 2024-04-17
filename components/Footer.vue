<template>
  <footer class="footer">
    <div class="container">
      <NuxtLink class="logo" to="/"
        ><NuxtImg src="/images/logo.png" alt="Premier Lines"
      /></NuxtLink>
      <section class="info">
        <div class="info_top">
          <span class="info_top_desc"
            ><Icon
              class="icon"
              name="tabler:clock-filled"
              width="26"
              height="26"
              color="white" />
            Sunday to Saturday - Open 10:00 AM - Close 1:00 AM
          </span>
          <nav class="nav">
            <NuxtLink class="nav_link" to="/">Home</NuxtLink>
            <NuxtLink class="nav_link" to="/">Prices</NuxtLink>
            <NuxtLink class="nav_link" to="/">Food</NuxtLink>
            <NuxtLink class="nav_link" to="/">Catering</NuxtLink>
            <NuxtLink class="nav_link" to="/">Parties</NuxtLink>
            <NuxtLink class="nav_link" to="/">Movies</NuxtLink>
            <NuxtLink class="nav_link" to="/">Contact</NuxtLink>
          </nav>
        </div>
        <div class="info_bottom">
          <div class="social-icons">
            <Icon
              class="icon"
              name="ri:facebook-fill"
              width="26"
              height="26"
              color="white" />
            <Icon
              class="icon"
              name="ri:twitter-x-fill"
              width="26"
              height="26"
              color="white" />
            <Icon
              class="icon"
              name="mdi:instagram"
              width="26"
              height="26"
              color="white" />
            <Icon
              class="icon"
              name="ic:baseline-tiktok"
              width="26"
              height="26"
              color="white" />
          </div>
          <div class="contact-info">
            <span class="contact-info_link"
              ><Icon
                class="icon"
                name="mingcute:location-fill"
                width="26"
                height="26"
                color="white" />5851 Ridgeway Ctr Pkwy, Memphis TN 38120</span
            >
            <span class="contact-info_link"
              ><Icon
                class="icon"
                name="eva:phone-call-fill"
                width="26"
                height="26"
                opacity="1"
                color="white" />
              (225)-621-2695
            </span>
            <span class="contact-info_link"
              ><Icon
                class="icon"
                name="uiw:mail"
                width="26"
                height="26"
                color="white" />
              info@bowling.com</span
            >
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped lang="scss">
.footer {
  background-color: var(--white);
}
.container {
  padding: 50px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (320px <= width <= 1280px) {
    flex-direction: column;
  }

  @media (320px <= width <= 768px) {
    padding: 50px 0;
  }
}
.info {
  max-width: 1133px;
  width: 100%;

  &_top {
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-light);

    &_desc {
      font-size: 14px;
      line-height: 21px;
      color: var(--black);

      @media (320px <= width <= 992px) {
        text-align: center;
      }
    }

    @media (320px <= width <= 1280px) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }

  &_bottom {
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (320px <= width <= 1280px) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
}

.icon {
  padding: 5px;
  background-color: var(--black);
  border-radius: 50%;
  cursor: pointer;
}
.nav {
  display: flex;
  gap: 30px;

  &_link {
    position: relative;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;

    &:not(:first-child):before {
      position: absolute;
      content: "";
      width: 2px;
      height: 100%;
      top: 50%;
      left: -17px;
      transform: translateY(-50%);
      background-color: var(--black);
    }

    @media (320px <= width <= 550px) {
      &:not(:first-child):before {
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(10px);
        background-color: var(--black);
      }
      &:first-child:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(0px);
        background-color: var(--black);
      }
    }
  }

  @media (320px <= width <= 992px) {
    display: none;
  }
}
.social-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}
.contact-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 19px;

  &_link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    line-height: 21px;
    color: var(--black);

    @media (320px <= width <= 992px) {
      text-align: center;
    }
  }

  @media (320px <= width <= 992px) {
    justify-content: center;
  }
}
</style>
