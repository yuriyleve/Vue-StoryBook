<script setup lang="ts">
import Contact from "./Contact.vue";
import { ref } from 'vue';

const isContactVisible = ref(false)

const showContact = () => {
    isContactVisible.value = true
}

const hideContact = () => {
    isContactVisible.value = false
}
</script>

<template>
    <div class="cta">
        <div class="cta__title">
            <div class="cta__title__header">
                <p class="cta__title__header__text">CtA - Main conversion</p>
            </div>
        </div>
        <div class="cta__content">
            <div class="cta__content__left">
                <div class="cta__content__action-title">
                    A wonderful serenity has taken possession
                </div>
                <div class="cta__content__action-description">
                    A wonderful serenity has taken possession of my entire soul, like these sweet moments
                </div>
                <button class="cta__content__button" @click="showContact">Link button</button>
            </div>
            <div class="cta__content__right">
                <img src="../assets/aaa.jpg" class="cta__content__right__image" alt="description" />
            </div>
        </div>
    </div>
    <Contact v-show="isContactVisible" @close="hideContact"></Contact>
</template>
