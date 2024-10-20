<template>
    <div class="navbar-container display-full-flex">
        <div>
            <h1 class="navbar-title">C+A</h1>
        </div>
        <div class="desktop-menu-items">
            <a href="#la-journee" class="menu-item">
                LA JOURNEE
            </a>
            <a href="#plans" class="menu-item">
                PLANS
            </a>
            <a href="#hebergement" class="menu-item">
                HEBERGEMENTS
            </a>
            <a @click="$emit('openForm')" class="menu-item">
                RSVP
            </a>
            <a href="#contact" class="menu-item">
                CONTACT
            </a>
        </div>
        <IconBars @click="openMenu()" class="burger"></IconBars>
    </div>
    <div v-if="menuItem === 1" class="dropdown-menu">
        <a href="#la-journee" @click="openMenu()">
            LA JOURNEE
        </a>
        <a href="#plans" @click="openMenu()">
            PLANS
        </a>
        <a href="#hebergement" @click="openMenu()">
            HEBERGEMENTS
        </a>
        <a @click="openRsvp()">
            RSVP
        </a>
        <a href="#contact" @click="openMenu()">
            CONTACT
        </a>
    </div>
</template>

<script setup>
    import IconBars from './icons/IconBars.vue'
    import { ref } from 'vue';
    const emit = defineEmits('openForm');
    let menuItem = ref(0);

    const openMenu = () => {
        if (menuItem.value === 0) {
            menuItem.value += 1;
        } else {
            menuItem.value = 0;
        }
    };
    const openRsvp = () => {
        openMenu();
        emit('openForm');
    }
</script>
