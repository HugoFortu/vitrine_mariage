<template>
    <form action="" @submit.prevent="sendEmail">
        <div>
            <input type="text" v-model="firstName" placeholder="First Name" />
        </div>
        <div>
            <input type="text" v-model="subject" placeholder="Subject of message" />
        </div>
        <div>
            <input type="email" v-model="email" placeholder="Enter your Email" />
        </div>
        <div>
            <button type="submit">
                SUBMIT
            </button>
        </div>
    </form>
</template>

<script setup>
    import { ref } from "vue";
    import emailjs from '@emailjs/browser';

    const firstName = ref("");
    const email = ref("");
    const subject = ref("");

    const sendEmail = () => {
        const body = {
            from_name: firstName.value,
            message: `Email : ${email.value} \n etc etc`,
            email: email.value,
        }

        emailjs
        .send(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, body, {
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

</script>

<style scoped>

/* Ajoutez ici tout style personnalisé si nécessaire */
</style>