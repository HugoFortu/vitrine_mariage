<template>
  <Navbar />
  <Banner />
  <DaySchedule />
  <Quote />
  <HeartImage />
  <MapsSection />
  <Accommodation />
  <Contacts />
  <ContactForm />
  <VButton @click="open">
    Open Modal
  </VButton>

  <ModalsContainer />

</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
import ContactForm from './components/ContactForm.vue'
import Banner from './components/Banner.vue'
import DaySchedule from './components/DaySchedule.vue'
import Quote from './components/Quote.vue'
import HeartImage from './components/HeartImage.vue'
import MapsSection from './components/MapsSection.vue'
import Accommodation from './components/Accommodation.vue'
import Contacts from './components/Contacts.vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirmPlainCss from './components/ModalConfirmPlainCss.vue'

  const { open, close } = useModal({
    component: ModalConfirmPlainCss,
    attrs: {
      title: 'Hello World!',
      onConfirm() {
        close()
      },
    },
    slots: {
      default: '<p>The content of the modal</p>',
    },
  })
</script>

<style scoped>

</style> 