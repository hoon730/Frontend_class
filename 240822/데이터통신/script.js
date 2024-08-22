const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result")
    result.innerText = `${student.name}은 ${student.major}학과의 ${student.grade}학년 입니다.`
  }
};