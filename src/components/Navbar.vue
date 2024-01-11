<script setup lang="ts">
import { page } from "../buffer";

function setPageValue(id: string) {
  page.value = id;
}
</script>

<template>
  <nav>
    <button id="concepts" @click="setPageValue('concepts')">Концепция</button>
    <button id="design" @click="setPageValue('design')">Дизайн</button>
    <button id="filling" @click="setPageValue('filling')">Наполнение</button>
    <button id="spaces" @click="setPageValue('spaces')">Пространства</button>
    <button id="cdiis" @click="setPageValue('cdiis')">ЦДИИ</button>
    <button id="knowledge" @click="setPageValue('knowledge')">
      База знаний
    </button>
    <button id="favorite" @click="setPageValue('favorite')">Избранное</button>
    <button id="actions" @click="setPageValue('actions')">Акции</button>
    <button id="quiz" @click="setPageValue('quiz')">КВИЗ</button>
  </nav>
</template>

<style scoped>
nav {
  margin-bottom: 10px;
}
button {
  background: white;
  border: 0;
  border-radius: 0 0 5px 5px;
  padding: 15px 8px 5px 8px;

  font-family: "YandexSansText-Regular", sans-serif;
  font-size: medium;

  transition: 200ms;
}
button:hover {
  background: #ebebeb;
}
</style>
