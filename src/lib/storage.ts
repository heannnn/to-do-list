import { IToDo } from "../atoms";

export function setItem(key: string, value: IToDo[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key: string) {
  const json: IToDo[] = JSON.parse(localStorage.getItem(key) || "[]");
  return json;
}
