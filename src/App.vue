<script setup lang="ts">
import { page } from "./buffer";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Concept from "./components/Concept.vue";
import Design from "./components/Design.vue";
import Filling from "./components/Filling.vue";
import Spaces from "./components/Spaces.vue";
import KnowledgeBase from "./components/KnowledgeBase.vue";
import Cdiis from "./components/Cdiis.vue";
import Kviz from "./components/Kviz.vue";

import Commerce from "./components/Commerce.vue";
</script>

<template>
  <Commerce v-if="page === 'commerce'" />
  <div class="root" v-else>
    <div class="wrapper">
      <Navbar v-if="page !== 'home'" />
      <Home v-if="page === 'home'" />
      <Concept v-if="page === 'concepts'" />
      <Design v-if="page === 'design'" />
      <Filling v-if="page === 'filling'" />
      <Spaces v-if="page === 'spaces'" />
      <KnowledgeBase v-if="page === 'knowledge'" />
      <Cdiis v-if="page === 'cdiis'" />
      <Kviz v-if="page === 'quiz'" />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.root {
  height: 100vh;
  width: 100vw;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  background: #fff;
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 10px 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1921px) {
    height: 980px;
    width: 1890px;
  }
}
</style>
