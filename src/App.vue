<template>
  <Navbar @openForm="open"/>
  <Banner @openForm="open"/>
  <DaySchedule />
  <Quote />
  <HeartImage />
  <MapsSection />
  <Accommodation />
  <Contacts @openForm="open"/>

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
  import { ModalsContainer, useModal, useModalSlot } from 'vue-final-modal'
  import ModalConfirmPlainCss from './components/ModalConfirmPlainCss.vue'
  import emailjs from '@emailjs/browser';
  import { ref } from 'vue';

  const reponse = ref({
        name: '',
        presence: null,
        samedi: false,
        dimanche: false,
        number: 0,
    })

  const sendEmail = () => {
      emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, reponse.value, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  const { open, close } = useModal({
    component: ModalConfirmPlainCss,
    attrs: {
      title: 'RSVP',
      onConfirm() {
        sendEmail()
        close()
      },
    },
    slots: {
    default: useModalSlot({
      component: ContactForm,
      attrs: {
        modelValue: reponse.value,
        'onUpdate:modelValue': (newData) => {
          reponse.value = newData;
        },
      }
    })
  }
  })
</script>

<style scoped>

</style> 