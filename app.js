const CalendarDay = document.getElementById("day");
const CalendarMonth = document.getElementById("month");
const CalendarYear = document.getElementById("year");
// button
const btn = document.getElementById("btn");
//  error
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

let Overlay = false;
//  full day
const dd = document.querySelector(".dd");
const mm = document.querySelector(".mm");
const yy = document.querySelector(".yy");

btn.addEventListener("click", (e) => {
  e.preventDefault()
  calculator()
});

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
//  input day
CalendarDay.addEventListener("input", (e) => {
  e.preventDefault();
  
    if (+e.target.value > 31) {
      errorDay.textContent = "Must be a valid day";
      Overlay = false;
      return;
    } else {
      errorDay.textContent = "";
      Overlay = true;
    }
  if (+e.target.value === 0) {
    errorDay.textContent = "Must be a valid day";
    Overlay = false;
    return;
  } else {
    Overlay = true;
    errorDay.textContent = "";
  }
});
// input month
CalendarMonth.addEventListener("input", (e) => {
  e.preventDefault();
  if (+e.target.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    Overlay = false;
    return;
  } else {
    Overlay = true;
    errorMonth.textContent = "";
  }
  if (+e.target.value === 0) {
    errorMonth.textContent = "Must be a valid month";
    Overlay = false;
    return;
  } else {
    Overlay = true;
    errorMonth.textContent = "";
  }
});

// input month

CalendarYear.addEventListener("input", (e) => {
  e.preventDefault();
  if (+e.target.value > year) {
    errorYear.textContent = "Must be in the past";
    Overlay = false;
    return;
  } else {
    Overlay = true;
    errorYear.textContent = "";
  }
  if (+e.target.value === 0) {
    errorYear.textContent = "Must be in the past";
    Overlay = false;
    return;
  } else {
    Overlay = true;
    errorYear.textContent = "";
  }
});

function calculator() {
  if (Overlay) {
    let brithDay = `${CalendarMonth.value},${CalendarDay.value},${CalendarYear.value}`;
    let ObjbrithDay = new Date(brithDay)
    let ageFull = Date.now() - ObjbrithDay
    let ageData =  new Date(ageFull)
    let ageYear = ageData.getFullYear() - 1970;
    let ageMonth =  ageData.getUTCMonth() 
    let ageDay = ageData.getUTCDay();

    dd.textContent = ageDay
    mm.textContent = ageMonth
    yy.textContent = ageYear
    btn.classList.remove("btn-color")
    btn.classList.add("btn-red");
    

  } else {
    alert("error");
  }
}
