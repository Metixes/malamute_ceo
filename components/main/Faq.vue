<template>
  <section id="faq" class="container">
    <div class="wrapper faq">
      <h3 class="faq-title">Faq</h3>
      <Accordion class="stepper" :activeIndex="0">
        <AccordionTab v-for="item of faqs" :key="item.id" :header="item.title">
          <template #header>
            <span class="index">{{ item.id }}</span>
          </template>
          <p class="m-0">
            {{ item.content }}
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    id: "1",
    title: "A whale holds nearly 30% of Dogecoin supply! Is this true?",
    content:
      "The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links.",
  },
  {
    id: "2",
    title: "Dogecoin has no utility!",
    content:
      "The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links.",
  },
  {
    id: "3",
    title:
      'Section 1.10.32 of de "Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    content:
      "The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links.",
  },
  {
    id: "4",
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    content:
      "The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links.",
  },
];
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--white);
}

.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 20px 100px 40px;

  &-title {
    color: var(--black-middle);
    margin-bottom: 45px;
    line-height: 44.5px;
  }

  @media (320px <= width <= 1024px) {
    margin: 0 20px 0 40px;
    padding: 50px 0 50px;
  }
  @media (320px <= width <= 768px) {
    &-title {
      margin-bottom: 20px;
    }
  }
}

.stepper {
  max-width: 1260px;
  width: 100%;

  &:deep(.p-accordion-tab:not(:last-child)::before) {
    content: "";
    position: absolute;
    left: -8px;
    top: 40px;
    bottom: -40px;
    border: 1px dashed var(--black);
  }
  &:deep(.p-icon) {
    visibility: hidden;
  }
  &:deep(.p-accordion-tab) {
    border: none;
    box-shadow: none;
  }
  &:deep(.p-accordion-tab) {
    padding: 20px 0;

    @media (320px <= width <= 768px) {
      padding: 0;
    }
  }
  &:deep(.p-accordion-tab-active) {
    & > .p-accordion-header .p-accordion-header-link .p-accordion-header-text {
      color: var(--primary);
    }
  }
  &:deep(.p-accordion-tab:first-child) {
    padding: 0 0 20px 0 !important;
  }
  &:deep(.p-accordion-content > p) {
    font-size: 18px;
    margin-left: 20px !important;
    color: var(--black-light);

    @media (320px <= width <= 768px) {
      font-size: 16px;
    }
  }
  &:deep(.p-accordion-header-link) {
    padding: 20px 20px !important;
  }
  &:deep(.p-accordion-header:hover) {
    & > .p-accordion-header-link > .p-accordion-header-text {
      color: var(--primary) !important;
    }
    & > .p-accordion-header-link {
      background-color: transparent !important;
      background: none !important;
    }
  }
  &:deep(.p-accordion-header) {
    & > .p-accordion-header-link {
      background: none !important;
    }
  }
  &:deep(.p-accordion-header-text) {
    transition: color 0.3s ease;
    font-weight: 700;
    font-size: 20px;
    color: var(--black);

    @media (320px <= width <= 768px) {
      font-size: 18px;
    }
  }
  &-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  &-content {
    &-input {
      &:checked ~ .stepper-content-text {
        display: block;
      }
    }
    &-title {
      width: 100%;
    }
    &-text {
      display: none;
    }
    &-input:is(:checked):where(.stepper-content-text) {
      display: block;
    }
  }
}

.index {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  left: -24px;
  background: var(--primary);
  color: var(--white);
  border-radius: 50%;
}
</style>
