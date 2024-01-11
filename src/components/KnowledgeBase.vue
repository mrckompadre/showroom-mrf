<script setup lang="ts">
import { ref } from "vue";

let mass: { [key: string]: boolean } = {
  wall: true,
  stand: false,
  electric: false,
  light: false,
  network: false,
  equipment: false,
};

function reset() {
  for (const key in mass) {
    mass[key] = false;
  }
}

const image = ref("/wall.png");

let changeImage = (i: string) => {
  reset();
  if (i === "wall") {
    image.value = "/wall.png";
    mass.wall = true;
  } else if (i === "stand") {
    image.value = "/stand.png";
    mass.stand = true;
  } else if (i === "electric") {
    image.value = "/electric.png";
    mass.electric = true;
  } else if (i === "light") {
    image.value = "/light.png";
    mass.light = true;
  } else if (i === "network") {
    image.value = "/network.png";
    mass.network = true;
  } else if (i === "equipment") {
    image.value = "/equipment.png";
    mass.equipment = true;
  }
};
</script>

<template>
  <main>
    <div class="navigation">
      <h1>База знаний</h1>

      <div class="buttons">
        <button>Музеи</button>
        <button>Выставки</button>
        <button>Шоурумы</button>
        <button>Учебные классы</button>
        <button>Экспоцентры</button>
        <button>Учебные детские центры</button>
        <button>Экспозиционное оборудование</button>
        <br />
        <button @click="changeImage('wall')">Стены</button>
        <button @click="changeImage('stand')">Стенды</button>
        <button @click="changeImage('electric')">Электричество</button>
        <button @click="changeImage('light')">Освещение</button>
        <button @click="changeImage('network')">Сеть</button>
        <button @click="changeImage('equipment')">Оборудование</button>
        <br />
        <button>Дизайн</button>
        <button>Концепция</button>
        <button>Наполнение</button>
      </div>
    </div>

    <div class="center">
      <img :src="image" class="main-image" />
    </div>

    <div class="right-panel">
      <div class="board" v-if="mass.wall">
        <h2>Стены:</h2>
        <ul>
          <li>
            Перед монтажом экспозиции необходимо привести помещение в
            соотвитствие с дизайном
          </li>
          <li>
            Обратить внимание на материал покрытий, закладные элементы,
            существующие инженерные коммуникации
          </li>
        </ul>
      </div>
      <div class="board" v-if="mass.stand">
        <h2>Стенды:</h2>
        <ul>
          <li>
            После разгрузки необходимо проверить стенды на предмет дефектов,
            зафиксировать, определить места хранения, передать заказчику на
            хранение
          </li>
          <li>
            Важно! Передача ТМЦ обязательно письменно фиксируется актом
            передачи, в котором расписываются обе стороны
          </li>
        </ul>
      </div>
      <div class="board" v-if="mass.electric">
        <h2>Электричество:</h2>
        <br />
        <p>Монтаж производится в 2 этапа:</p>
        <ol>
          <li>
            При СМР подготовке помещения – установка электрощитовой, прокладка
            инженерных коммуникаций
          </li>
          <li>При монтаже стендов – установка скрытых элементов подключения</li>
          <li>
            После монтажа стендов – монтаж инженерного оборудования
            (мультимедиа, сервер)
          </li>
        </ol>
      </div>
      <div class="board" v-if="mass.light">
        <h2>Освещение:</h2>
        <p>
          <br />
          Необходимо предусмотреть аварийное, рабочее и экспозиционное освещение
          пространства. <br />
          Монтаж производится в 2 этапа:
        </p>
        <ol>
          <li>При монтаже стендов – установка скрытых элементов подключения</li>
          <li>Монтаж и настройка светильников</li>
        </ol>
      </div>
      <div class="board" v-if="mass.equipment">
        <h2>Оборудование:</h2>
        <p><br />Для сохранности гарантии на изделия нельзя:</p>
        <ul>
          <li>Проводить рядом пыльные работы</li>
          <li>Резать/заменять/повреждать кабели питания</li>
          <li>Красить и наносить не предусмотренные производителем покрытия</li>
          <li>При уборке смотреть рекомендации производителя</li>
        </ul>
        <p>
          Важно! Установить ИБП на случай аварийного отключения электричества и
          скачков напряжения сети
        </p>
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

.buttons {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
button {
  width: 80%;
  font-family: "YandexSansdisplay-Regular";
  font-size: large;
  padding: 5px;
  text-align: start;
  border: 0;
  border-radius: 5px;

  transition: 200ms;
}
button:hover {
  background: #e1e1e1;
}
</style>

<!-- Center -->
<style scoped>
.center {
  height: 840px;
  width: 60%;
  padding-right: 20px;
}
.main-image {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.favorite-block {
  display: flex;
  justify-content: flex-end;
}
.favorite-block > img {
  width: 30px;
  margin-right: 170px;
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

ul,
ol {
  margin: 10px 0 15px 20px;
}
</style>
