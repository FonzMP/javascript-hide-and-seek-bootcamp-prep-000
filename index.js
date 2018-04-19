function getFirstSelector(selector) {
  const variable = document.querySelector(selector);
  return variable
}

function nestedTarget() {
  const variableTwo = document.getElementById('app').querySelector('div#nested div div div div#target');
  return variableTwo;
}
