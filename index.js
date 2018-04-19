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
    let content = variableThree[i].textContent;
    variableThree[i].innerHTML =  parseInt(content) + n;
  }
}

function deepestChild() {
  
}