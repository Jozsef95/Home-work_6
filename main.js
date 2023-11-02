let birthYear = prompt("Введіть ваш рік народження:");
let city = prompt("В якому місті ви живете?");
let favoriteSport = prompt("Який ваш улюблений вид спорту?");

if (birthYear && city && favoriteSport) {
    let age = new Date().getFullYear() - birthYear;

if (city === "Kijev" || city === "Washington" || city === "London") {
   alert("Ти живеш у столиці " + getCountryCapital(city));
} 
else {
   alert("Ти живеш у місті " + city);
}
    let sportsChampions = {
        "Futball": "Ліонель Мессі",
        "Baskettball": "Леброн Джеймс",
        "Tenis": "Рафаель Надаль"
    };
if (sportsChampions[favoriteSport]) {
        alert("Круто! Хочеш стати " + sportsChampions[favoriteSport] + "?");
    }
else {
        alert("Не вдалось знайти чемпіона для вашого улюбленого виду спорту.");
    }
} 
else {
    alert("Шкода, що Ви не захотіли ввести свій(ю) "
    + (!birthYear ? "рік народження" : "")
    + (!city ? (birthYear ? " та " : "") + "місто" : "")
    + (!favoriteSport ? (birthYear || city ? " та " : "")
    + "вид спорту" : "") + ".");
}
function getCountryCapital(city) {
  switch (city) {
    case "Kijev":
            return "Україні";
    case "Washington":
            return "Сполучених Штатів Америки";
    case "London":
            return "Великої Британії";
 default:
    return city;
    }
}