function getFirstSelector( selector ) {
  return document.querySelectorAll( selector )[0];
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy( n ) {
  let rankedLists = document.querySelectorAll('.ranked-list > li');

  for ( let i = 0; i < rankedLists.length; i++ ) {
    rankedLists[i].innerHTML = parseInt( rankedLists[i].innerHTML ) + n;
  }

}


function deepestChild() {

}
