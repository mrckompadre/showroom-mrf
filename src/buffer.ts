import { reactive, ref } from "vue";

export const page = ref("home");

export type CdiisType = {
  base: boolean;
  basePlus: boolean;
  standart: boolean;
  standartPlus: boolean;
  max: boolean;
  maxPlus: boolean;
  [key: string]: boolean;
};
export const cdiis: CdiisType = reactive({
  base: true,
  basePlus: false,
  standart: false,
  standartPlus: false,
  max: false,
  maxPlus: false,
});
export function resetCdiis(): void {
  Object.keys(cdiis).forEach((key) => {
    cdiis[key] = false;
  });
}
export const kviz = reactive({
  square: "",
  name: "",
  type: "",
  city: "",
  budget: "",
  concept: false,
  design: false,
  exercise: false,
  fio: "",
  phone: "",
  work: "",
  email: "",
});