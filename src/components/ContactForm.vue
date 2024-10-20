<template>
    <form class="rsvp-form" action="">
        <div class="div-text">
            <label class="label-text">Nom</label>
            <input class="input-text" type="text" v-model="localModel.name" placeholder="Nom Prénom"/>
        </div>
        <p >Serez-vous présents à notre mariage ?</p>
        <div class="div-text">
            <span class="radio-span">Oui</span>
            <input type="radio" name="presence" value="Oui" v-model="localModel.presence"/>
            <span class="radio-span">Non</span>
            <input type="radio" name="presence" value="Non" v-model="localModel.presence"/>
        </div>
        <div v-if="localModel.presence === 'Oui'">
            <label>Samedi</label>
            <input type="checkbox"  v-model="localModel.samedi" />
        </div>
        <div class="div-text" v-if="localModel.presence === 'Oui'">
            <label>Dimanche</label>
            <input type="checkbox"  v-model="localModel.dimanche" />
        </div>
        <div  v-if="localModel.presence === 'Oui'">
            <label class="label-number">Combien de personne</label>
            <input class="input-number" type="number"  v-model="localModel.number" />
        </div>
    </form>
</template>

<script setup>
import { toRefs, watch, reactive } from 'vue';

// Props
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
        name: '',
        presence: null,
        samedi: false,
        dimanche: false,
        number: 0,
    })
  }
});

// Emit event
const emit = defineEmits(['update:modelValue']);

const localModel = reactive({ ...props.modelValue });

watch(localModel, (newVal) => {
  emit('update:modelValue', newVal);
}, { deep: true });

</script>
