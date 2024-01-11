<script setup lang="ts"></script>

<template>
  <main>
    <div class="navigation">
      <h1>Пространства</h1>

      <h3>Музеи</h3>
      <h3>Выставки</h3>
      <h3>Шоурумы</h3>
      <h3>Учебные классы</h3>
      <h3>Экспоцентры</h3>
      <h3>Учебные детские центры</h3>
      <h3>Экспозиционное оборудование</h3>
      <h3>Стены</h3>
      <h3>Стенды</h3>
      <h3>Электричество</h3>
      <h3>Освещение</h3>
      <h3>Сеть</h3>
      <h3>Подсветка</h3>
      <h3>Оборудование</h3>

      <button>Мультимедийное оборудование</button>
    </div>

    <div class="center">
      <img src="/spaces.png" class="main-image" />
    </div>

    <div class="right-panel">
      <div class="board">
        <h2>
          На что стоит обратить внимание?<br />
          <span style="font-weight: normal">(важно знать, советы)</span>
        </h2>
        <ul>
          <li>Один подрядчик на все виды работ</li>
          <li>Обязательная ежедневная отчётность (фото/видео)</li>
          <li>Фиксация всех скрытых работ, исполнительные документы</li>
          <li>Единый куратор на всём протяжении монтажа</li>
        </ul>
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
}
h3 {
  margin-bottom: 10px;
  font-weight: normal;
}
h1,
h3 {
  font-family: "YandexSansdisplay-Regular";
}

button {
  background: #5a5a5a;
  border: 0;
  border-radius: 5px;
  padding: 20px;
  margin-top: 30px;
  color: #fff;
  font-family: "YandexSansDisplay-Regular";
  font-size: large;

  transition: 200ms;
}
button:hover {
  background: #3a3a3a;
}
</style>

<!-- Center -->
<style scoped>
.center {
  height: 840px;
  width: 60%;
}
.main-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
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
