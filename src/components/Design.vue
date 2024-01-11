<template>
  <main>
    <div class="navigation">
      <h1>Дизайн</h1>

      <h3>Образец</h3>
      <h3>Эскиз</h3>
      <h3>3D Визуализация</h3>
      <h3>3D Тур</h3>
      <h3>Рабочий чертёж</h3>
      <h3>Спецификация</h3>
      <h3>Смета</h3>
      <h3>График</h3>
      <h3>Авторский надзор</h3>
    </div>

    <div class="center">
      <img src="/design.png" class="main-image" />
    </div>

    <div class="right-panel">
      <div class="board">
        <h2>
          Зачем это нужно?<br />
          <span style="font-weight: normal">(важно знать, советы)</span>
        </h2>
        <ul>
          <li>
            Дизайн проект - это визуализированное тех. задание, понятное всем
            участникам проекта
          </li>
          <li>
            Данный документ позволяет реализовать проект в срок с фиксированным
            бюджетом
          </li>
        </ul>
        <h2>Что будет, если его не делать?<br /></h2>
        <ul>
          <li>Большое количество ошибок</li>
          <li>Неконтролируемое увеличение бюджета</li>
          <li>Постоянный срыв сроков</li>
        </ul>
        <h2>Финансовые преимущества при заказе услуги?</h2>
        <ul>
          <li>Возможность проведения мониторинга цен</li>
          <li>Конечный результат точно соответствует проекту</li>
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
