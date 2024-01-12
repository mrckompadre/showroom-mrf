<script setup lang="ts">
import html2pdf from "html2pdf.js";

import { kviz, cdiis, page } from "../buffer";

const filename: string =
  kviz.name +
  "_коммерческое_предложение." +
  Math.random().toString(36).substring(2, 15) +
  ".pdf";

function generatePDF() {
  const element = document.getElementById("pdf");
  html2pdf().from(element).save(filename);
}

function toKviz() {
  page.value = "quiz";
}
</script>

<template>
  <div id="pdf">
    <header>
      <h1>Коммерческое предложение</h1>
    </header>
    <div class="block">
      <h2>Персональные данные клиента</h2>
      <p>ФИО: {{ kviz.fio }}</p>
      <p>Телефон: {{ kviz.phone }}</p>
      <p>Должность: {{ kviz.work }}</p>
      <p>Электронная почта: {{ kviz.email }}</p>
    </div>
    <div class="block">
      <h2>Параметры объекта</h2>
      <p>
        Тип объекта:
        <span v-if="cdiis.base">Базовый</span>
        <span v-if="cdiis.basePlus">Базовый+</span>
        <span v-if="cdiis.standart">Стандарт</span>
        <span v-if="cdiis.standartPlus">Стандарт+</span>
        <span v-if="cdiis.max">Максимальный</span>
        <span v-if="cdiis.maxPlus">Максимальный+</span>
      </p>
      <br />
      <p>Площадь объекта/количество помещений: {{ kviz.square }}</p>
      <p>Название/тематика: {{ kviz.name }}</p>
      <p>Тип пространства/наполнение: {{ kviz.type }}</p>
      <p>Город/источник финансирования: {{ kviz.city }}</p>
      <p>Бюджет/сроки: {{ kviz.budget }}</p>
      <br />
      <p>
        Есть концепция:
        <span v-if="kviz.concept">да</span>
        <span v-else>нет</span>
      </p>
      <p>
        Есть дизайн-проект:
        <span v-if="kviz.design">да</span>
        <span v-else>нет</span>
      </p>
      <p>
        Есть техническое задание:
        <span v-if="kviz.exercise">да</span>
        <span v-else>нет</span>
      </p>
    </div>
  </div>

  <div class="buttons">
    <button @click="toKviz">Назад</button>
    <button @click="generatePDF">Сохранить</button>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  padding: 10px;

  border-bottom: 1px solid black;
}
h1 {
  font-family: "YandexSansText-Bold", sans-serif;
  font-weight: normal;
}
.block {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
h2 {
  margin-bottom: 10px;
  font-family: "YandexSansText-Regular", sans-serif;
}
p {
  font-family: "YandexSansText-Normal", sans-serif;
  font-size: large;
  margin-bottom: 5px;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}
button {
  margin: 10px 10px 10px 0;
  padding: 10px;
  font-family: "YandexSansText-Regular", sans-serif;
  font-size: large;
}
</style>
