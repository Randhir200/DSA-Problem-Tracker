//variable

var dataArr = JSON.parse(localStorage.getItem('tracker')) || [];

display(dataArr);

//events

//function
function display(dataArr) {
  var parent = document.querySelector('tbody');
  parent.innerText = '';
  dataArr.forEach(function (ele, index) {
    var row = document.createElement('tr');
    var ttl = document.createElement('td');
    ttl.innerText = ele.queTitle;
    var lnk = document.createElement('td');
    lnk.innerText = ele.link;
    var level = document.createElement('td');
    level.innerText = ele.level;
    var status = document.createElement('td');
    status.innerText = ele.status;

    row.append(ttl, lnk, level, status);

    parent.append(row);
  });
}
