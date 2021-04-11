/* Усложненное задание к уроку № 2 */
/* let num = 266219;
let a = String(num).length;
let resault = 1;
for (let i = 0; i < a; i++) {
  resault = resault * String(num)[i];
}
console.log(resault);
resault = resault ** 3;
console.log(String(resault)[0] + String(resault)[1]); */

/* Усложненное задание к уроку № 3 */
let lang = prompt("Укажите, на каком языке будут отображаться дни недели", '"ru" или "en"');

/* Через if */
if (lang === "ru") {
  alert("Дни недели: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else {
  alert("Days of the week: monday, tuesday, wednesday, thursday,	friday, saturday, sunday");
}

/* Через switch */
switch (lang) {
  case "ru":
    alert("Дни недели: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
    break;
  case "en":
    alert("Days of the week: monday, tuesday, wednesday, thursday,	friday, saturday, sunday");
    break;
  default:
    alert("Возникла ошибка");
}

/* Через arr */
let daysOfTheWeek = {
  ru: ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  en: ["monday", "tuesday", "wednesday", "thursday",	"friday", "saturday", "sunday"]
};
  alert(daysOfTheWeek[lang]);

let namePerson;
namePerson = prompt("Укажите имя пользователя");
namePerson = (namePerson === "Артем") ? console.log("Директор") :
    (namePerson === "Максим") ? console.log("Преподаватель") : console.log("Студент");
