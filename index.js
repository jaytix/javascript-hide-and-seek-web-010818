function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementsByClassName('target')[0];
}

function deepestChild(){
  const grandDiv = document.getElementById('grand-node');
  const divs = grandDiv.querySelectorAll('div');
  return divs[divs.length-1];
}

function increaseRankBy(n) {
  const rankedLi = document.querySelectorAll('ul.ranked-list li')
  let i = 0;
  for (i = 0; i < rankedLi.length; i++ ) {
    rankedLi[i].textContent = parseInt(rankedLi[i].textContent, 10) + n
  }
}
