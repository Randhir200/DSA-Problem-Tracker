// variable
var form = document.querySelector('form');
var dataArr = JSON.parse(localStorage.getItem('tracker'))||[];

//events
form.addEventListener('submit', takeData);

//functions
function takeData(event) {
  event.preventDefault();

  var data = {
    queTitle: form.queTitle.value,
    link: form.link.value,
    level: form.level.value,
    status: form.status.value,
  };
  dataArr.push(data);
  localStorage.setItem('tracker',JSON.stringify(dataArr));
  console.log(dataArr);
}
