function getFirstSelector( selector ) {
  return document.querySelectorAll( selector )[0];
}

function nestedTarget() {
  return document.querySelector( '#nested .target' );
}

function increaseRankBy( n ) {
  let rankedLists = document.querySelectorAll( '.ranked-list > li' );

  for ( let i = 0; i < rankedLists.length; i++ ) {
    rankedLists[i].innerHTML = parseInt( rankedLists[i].innerHTML ) + n;
  }

}

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.

function deepestChild() {
  let currentNode = document.getElementById( 'grand-node' );

  while ( currentNode.querySelector( 'div' ) ) {
    currentNode = currentNode.querySelector( 'div' );
  }
  return currentNode;
}

// could locate by length - 1 on a querySelectorAll NodeList
