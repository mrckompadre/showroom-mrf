<script setup lang="ts">
import { cdiis, resetCdiis } from "../buffer";

function changeFavorite(favorite: string): void {
  resetCdiis();
  cdiis[favorite] = !cdiis[favorite];
}
</script>

<template>
  <main>
    <div class="navigation">
      <h1>Центр достижения инвестиций и истории</h1>
    </div>

    <div class="center">
      <p>Общее описание идеи - письмо</p>
      <p>Основные состовляющие - структура сайта</p>
      <p>Готовые решения</p>
      <div class="card-block">
        <div class="card">
          <div class="info">
            <h2>1. Базовый</h2>
            <h3>S общ. 30-50 м<sup>2</sup></h3>
            <h3>1 помещение</h3>
            <h3>Система транспортёр</h3>
            <h3>Минимум интерактива</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('base')">
              <img src="../assets/icons/favorite.svg" v-if="!cdiis.base" />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h2>2. Базовый+</h2>
            <h3>S общ. 50-80 м<sup>2</sup></h3>
            <h3>1 помещение</h3>
            <h3>Система транспортёр</h3>
            <h3>5-7 типовых интерактивных инсталляций</h3>
            <h3>- интерактивная диорама</h3>
            <h3>- карта</h3>
            <h3>- макет</h3>
            <h3>- тач-терминал</h3>
            <h3>- витрины</h3>

            <h3>Аналог: Курорт ключи</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('basePlus')">
              <img src="../assets/icons/favorite.svg" v-if="!cdiis.basePlus" />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h2>3. Стандарт</h2>
            <h3>S общ. 80-100 м<sup>2</sup></h3>
            <h3>1-2 помещения</h3>
            <h3>Система транспортёр</h3>
            <h3>7+ интерактивных инсталляций</h3>
            <h3>Аналог: Посольство Казахстан</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('standart')">
              <img src="../assets/icons/favorite.svg" v-if="!cdiis.standart" />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h2>4. Стандарт+</h2>
            <h3>S общ. 120-250 м<sup>2</sup></h3>
            <h3>1-3 помещений</h3>
            <h3>Система транспортёр</h3>
            <h3>Типовые интерактивные инсталляции</h3>
            <h3>+ индивидуальные интерактивные инсталляции</h3>
            <h3>+ объёмные макеты</h3>
            <h3>Аналог: Газпром</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('standartPlus')">
              <img
                src="../assets/icons/favorite.svg"
                v-if="!cdiis.standartPlus"
              />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h2>4. Максимальный</h2>
            <h3>S общ. 400 м<sup>2</sup></h3>
            <h3>2-5 помещений</h3>
            <h3>+ отдельные зоны для конференций</h3>
            <h3>ВКС</h3>
            <h3>Мониторинг</h3>
            <h3>Аналог: ЯЩ ВДНХ</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('max')">
              <img src="../assets/icons/favorite.svg" v-if="!cdiis.max" />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="info">
            <h2>4. Максимальный+</h2>
            <h3>S общ. 400 м<sup>2</sup></h3>
            <h3>Неограниченное кол-во помещений</h3>
            <h3>Неограниченное кол-во инсталляций</h3>
            <h3>Аналог: Санаторий "Шульганташ", Музей истории Земли</h3>
          </div>
          <div class="favorite-block">
            <div @click="changeFavorite('maxPlus')">
              <img src="../assets/icons/favorite.svg" v-if="!cdiis.maxPlus" />
              <img src="../assets/icons/favoriteRed.svg" v-else />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-panel">
      <div class="board">
        <h4>
          Заполнив КВИЗ вы получите автоматчески сгенерированное КП на вашу
          почту<br /><br />
          Важно фиксировать ошибки в функционале автоматических КП
        </h4>
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
  padding: 5px;
}
p {
  font-family: "YandexSansText-Bold", sans-serif;
}
.card-block {
  margin-top: 10px;
  height: 756px;

  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.card {
  border: 1px solid black;
  border-radius: 5px;
  width: 33%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
h2,
h3 {
  font-weight: normal;
}
h2 {
  margin-bottom: 15px;
  font-family: "YandexSansText-Medium", sans-serif;
}
h3 {
  font-family: "YandexSansDisplay-Normal", sans-serif;
}
.favorite-block {
  display: flex;
  justify-content: flex-end;
}
img {
  height: 35px;
  margin-top: 5px;
  cursor: pointer;
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
</style>
