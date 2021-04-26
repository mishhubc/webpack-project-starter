import _ from "lodash";
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}
import { sum, inmultire } from "./another";
const newinmultire = inmultire(4, 4);
console.log(newinmultire);
const mySum = sum(2, 3);
console.log(mySum);
document.body.appendChild(component());
