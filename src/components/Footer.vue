<script setup lang="ts">
import { page } from "../buffer";

function setPageValue() {
  switch (page.value) {
    case "quiz": {
      page.value = "actions";
      break;
    }
    case "actions": {
      page.value = "favorite";
      break;
    }
    case "favorite": {
      page.value = "knowledge";
      break;
    }
    case "knowledge": {
      page.value = "cdiis";
      break;
    }
    case "cdiis": {
      page.value = "spaces";
      break;
    }
    case "spaces": {
      page.value = "filling";
      break;
    }
    case "filling": {
      page.value = "design";
      break;
    }
    case "design": {
      page.value = "concepts";
      break;
    }
    case "concepts": {
      page.value = "home";
      break;
    }
    default:
      break;
  }
}
function setPage(id: string) {
  page.value = id;
}
</script>

<template>
  <footer>
    <div class="buttons">
      <button @click="setPageValue">
        <img src="../assets/icons/arrow.svg" />
      </button>
      <button @click="setPage('favorite')">
        <img src="../assets/icons/cart.svg" />
      </button>
      <button @click="setPage('home')">
        <img src="../assets/icons/home.svg" />
      </button>
    </div>
    <p>Все права защищены и принадлежат правообладателю ООО "Макет-РФ"©</p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons {
  display: flex;
  gap: 5px;
}
button {
  background: none;
  border: 0;
  border-radius: 5px;
  padding: 5px;

  transition: 200ms;
}
button:hover {
  background: #ebebeb;
  transition: 200ms;
}
button:active {
  background: #aaaaaa;
}
img {
  height: 40px;
}
p {
  color: #aaa;
  font-family: "YandexSansDisplay-Regular", sans-serif;
}
</style>
