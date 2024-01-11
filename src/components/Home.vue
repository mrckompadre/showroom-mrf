<script setup lang="ts">
import { page } from "../buffer";

function setPageValue(id: string) {
  page.value = id;
}
</script>

<template>
  <h1>Виртуальный шоурум</h1>
  <div class="parent">
    <div class="div1 block" @click="setPageValue('concepts')">
      <img src="/grid/Concept.jpg" />
      <div class="absoluteTextBlock">
        <p>Концепция</p>
      </div>
    </div>
    <div class="div2 block" @click="setPageValue('design')">
      <img src="/grid/Design.png" />
      <div class="absoluteTextBlock">
        <p>Дизайн</p>
      </div>
    </div>
    <div class="div3 block" @click="setPageValue('filling')">
      <img src="/grid/Filling.jpg" />
      <div class="absoluteTextBlock">
        <p>Наполнение</p>
      </div>
    </div>
    <div class="div4 block" @click="setPageValue('spaces')">
      <img src="/grid/Spaces.png" />
      <div class="absoluteTextBlock">
        <p>Пространства</p>
      </div>
    </div>
    <div class="div5 block" @click="setPageValue('cdiis')">
      <img src="/grid/CdiisBackground.png" />
      <div class="absoluteImageBlock">
        <p>Центр достижений инвестиций и истории</p>
        <div id="cdiis">
          <img src="/grid/Cdiis.png" />
        </div>
      </div>
    </div>
    <div class="div6 block" @click="setPageValue('knowledge')">
      <img src="/grid/Knowledge.jpg" />
      <div class="absoluteTextBlock">
        <p>База знаний</p>
      </div>
    </div>
    <div class="div7 block" @click="setPageValue('favorite')">
      <img src="/grid/Favorite.jpg" />
      <div class="absoluteTextBlock">
        <p>Избранное</p>
      </div>
    </div>
    <div class="div8 block" @click="setPageValue('actions')">
      <img src="/grid/Actions.jpg" />
      <div class="absoluteTextBlock">
        <p>Акции</p>
      </div>
    </div>
    <div class="div9 block" @click="setPageValue('quiz')">
      <div class="absoluteImageBlock">
        <p style="color: black; font-size: xx-large">
          КВИЗ<br />С автоматическим КП
        </p>
        <div id="quiz">
          <img src="/grid/Quiz.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "YandexSansDispaly-Normal", sans-serif;
  font-weight: normal;
  margin: 10px;
}
p {
  color: white;
  margin: 20px;
  font-family: "YandexSansText-Normal", sans-serif;
  font-size: x-large;
}
.parent {
  height: 830px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.div1 {
  grid-area: 1 / 1 / 4 / 2;
}
.div2 {
  grid-area: 1 / 2 / 4 / 3;
}
.div3 {
  grid-area: 1 / 3 / 4 / 4;
}
.div4 {
  grid-area: 1 / 4 / 4 / 5;
}
.div5 {
  grid-area: 4 / 1 / 7 / 3;
}
.div6 {
  grid-area: 4 / 3 / 7 / 4;
}
.div7 {
  grid-area: 4 / 4 / 6 / 5;
}
.div8 {
  height: 87.72px;
  grid-area: 6 / 4 / 7 / 5;
}
.div8 > .absoluteTextBlock {
  height: 100%;
}
.div9 {
  grid-area: 7 / 1 / 10 / 5;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div9 > div > h1 {
  margin-left: 20px;
}

.block {
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  position: relative;
}
.absoluteTextBlock {
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  border-radius: 9px;
}
.absoluteImageBlock {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
}
#quiz,
#cdiis {
  height: 100%;
  width: max-content;
}

#quiz > img,
#cdiis > img {
  object-fit: contain;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 9px;
}
</style>
