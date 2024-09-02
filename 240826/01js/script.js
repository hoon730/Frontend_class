// 15 API
// - LocalStorage // Todolist
// - Geolocation // Weather
// - Geolocation // Kakao Map + Public Data(*캠핑장);
// - Canvas > 그림판

// 번외
// - svg
// > 라이브러리

// 저장공간

// setItem(key, value);
// getItem(key);
// removeItem(key);
// clear();

let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;

if(localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("Choi");

console.log(localData);