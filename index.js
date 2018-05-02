function getFirstSelector(selector) {
  const el = document.querySelector(selector);
  return el;
}

function nestedTarget() {
  const el= document.querySelector('#nested .target');
  return el;
}