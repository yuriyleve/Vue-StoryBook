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
        <div class="title">
            <div class="header">
                <p>CtA - Main conversion</p>
            </div>
        </div>
        <div class="content">
            <div class=" left">
                <div class="actionTitle">
                    A wonderful serenity has taken possessio
                </div>
                <div class="actionDescription">
                    A wonderful serenity has taken possessio of my entire soul, like these sweet mo
                </div>
                <button class="button" @click="showContact">Link button</button>
            </div>
            <div class=" right">
                <img src="../assets/aaa.jpg" class="" alt="" />
            </div>
        </div>
    </div>
    <Contact v-show="isContactVisible" @close="hideContact"></Contact>
</template>
