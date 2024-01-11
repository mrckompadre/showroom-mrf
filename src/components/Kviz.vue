<script setup lang="ts">
import { kviz, page } from "../buffer";

function toCommerce() {
  page.value = "commerce";
}
</script>

<template>
  <main>
    <div class="navigation">
      <h1>КВИЗ</h1>
    </div>

    <div class="center">
      <div class="top-block">
        <div>
          <div class="line">
            <p>1. Площадь объекта<br />Количество помещений</p>
            <input type="text" class="text" v-model="kviz.square" />
          </div>
          <div class="line">
            <p>2. Название<br />Тематика</p>
            <input type="text" class="text" v-model="kviz.name" />
          </div>
          <div class="line">
            <p>3. Тип пространства<br />Наполнение</p>
            <input type="text" class="text" v-model="kviz.type" />
          </div>
          <div class="line">
            <p>4. Город<br />Источник финансирования</p>
            <input type="text" class="text" v-model="kviz.city" />
          </div>
          <div class="line">
            <p>5. Бюджет<br />Сроки</p>
            <input type="text" class="text" v-model="kviz.budget" />
          </div>
        </div>

        <div class="right-block">
          <div class="right-top-block">
            <div>
              <input type="checkbox" name="" id="" v-model="kviz.concept" />
              <p>Есть концепция?</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" v-model="kviz.design" />
              <p>Есть дизайн-проект?</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" v-model="kviz.exercise" />
              <p>Есть техническое задание?</p>
            </div>
          </div>
          <div class="right-bottom-block">
            <p>Контакты клиента</p>
            <div class="line">
              <p>ФИО</p>
              <input type="text" v-model="kviz.fio" />
            </div>
            <div class="line">
              <p>Телефон</p>
              <input type="text" v-model="kviz.phone" />
            </div>
            <div class="line">
              <p>Должность</p>
              <input type="text" v-model="kviz.work" />
            </div>
            <div class="line">
              <p>E-mail</p>
              <input type="text" v-model="kviz.email" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-panel">
      <div class="board">
        <ul>
          <li>
            Заполнив КВИз вы получите автоматически сгенерированное КП на вашу
            почту
          </li>
          <li>Важно фиксировать ошибки в функционале автоматических КП</li>
        </ul>
      </div>
      <div class="bottom-block">
        <button @click="toCommerce">Сгенерировать КП</button>
      </div>
    </div>
  </main>
</template>

<!-- Main -->
<style scoped>
main {
  height: 100%;
  width: 100%;

  display: flex;
}
</style>

<!-- Navigation -->
<style scoped>
.navigation {
  width: 20%;
  padding-left: 30px;
}
h1 {
  margin-bottom: 30px;
  font-family: "YandexSansdisplay-Regular";
}
</style>

<!-- Center -->
<style scoped>
.center {
  height: 840px;
  width: 60%;
  display: flex;
  flex-direction: column;
}
.top-block {
  height: 50%;
  display: flex;

  font-family: "YandexSansText-Medium", sans-serif;
}
.top-block > div {
  width: 50%;
  padding: 10px;
  font-size: x-large;
}
.right-block {
  display: flex;
  flex-direction: column;
}
.right-top-block {
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.right-top-block > div {
  display: flex;
  align-items: center;

  font-size: x-large;
}
.right-top-block > div > input[type="checkbox"] {
  margin-right: 10px;
  height: 30px;
  width: 30px;
}
.right-bottom-block {
  height: 50%;
  border: 1px solid black;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-bottom-block > div > p {
  font-family: "YandexSansText-Light", sans-serif;
  font-size: large;
  margin-right: 10px;
  white-space: nowrap;
}
.right-bottom-block > div > input {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  font-size: large;
  width: 100%;
}

.line {
  /* border: 1px solid red; */
  height: 20%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  border: 1px solid black;
  border-radius: 5px;
  height: 70%;
  width: 200px;
  padding: 10px;
  font-family: "YandexSansText-Regular", sans-serif;
  font-size: large;
}
.bottom-block {
  height: 50%;
}

button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: large;

  border: 1px solid green;
  border-radius: 10px;
  background: rgb(163, 255, 163);
  transition: 200ms;
}
button:hover {
  background: rgb(130, 255, 130);
}
</style>

<!-- RightPanel -->
<style scoped>
.right-panel {
  width: 20%;
  font-family: "YandexSansText-Regular", sans-serif;
}

.board {
  background: #e1e1e1;
  padding: 20px;
  border: 0;
  border-radius: 10px;
}

ul {
  margin: 10px 0 15px 20px;
}
</style>
