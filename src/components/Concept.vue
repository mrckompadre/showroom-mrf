<template>
  <main>
    <div class="navigation">
      <h1>Концепция</h1>

      <h3>Образец</h3>
      <h3>Состав</h3>
      <h3>Проект</h3>
      <h3>Бюджет</h3>
      <h3>Тех. задание</h3>
    </div>

    <div class="center">
      <img src="/concept.png" class="main-image" />
    </div>

    <div class="right-panel">
      <div class="board">
        <h2>
          Зачем это нужно?<br />
          <span style="font-weight: normal">(важно знать, советы)</span>
        </h2>
        <ul>
          <li>Определить вектор направления и сформировать идею</li>
          <li>Сочная и яркая презентация идеи</li>
          <li>
            Позволяет легко и быстро сформирвать идею без больших вложений на
            первом этапе
          </li>
        </ul>
        <h2>
          Что будет, если её не делать?<br />
          <span style="font-weight: normal">И сразу заказать весь проект</span>
        </h2>
        <ul>
          <li>
            Это можно сделать при условии, что над проектом работают
            квалифицированные дизайнеры с музейным профилем
          </li>
        </ul>
        <h2>Финансовые преимущества при заказе услуги?</h2>
        <ul>
          <li>В минимальные сроки и минимальным бюджетом сформировать идею</li>
          <li>Сделать без проведения торгов, т.к. это небольшой бюджет</li>
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
