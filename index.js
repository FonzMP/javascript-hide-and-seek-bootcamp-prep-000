function getFirstSelector(selector) {
  const variable = document.querySelector(selector);
  return variable
}

function nestedTarget() {
  const variableTwo = document.getElementById('app').querySelector('div#nested div div div div.target');
  return variableTwo;
}

function increaseRankBy(n) {
  const variableThree = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i  = 0; i < variableThree.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}
