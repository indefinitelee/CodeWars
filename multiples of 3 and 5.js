function solution(number){
  // needs to be 0 otherwise there's an empty array error on codewars
  let multiples = [0];
  for ( let i = 0; i < number; i++ ) {
    if ( 0 === i % 3 || 0 === i % 5 ) {
      multiples.push( i );
    }
  }
  return multiples.reduce(function(a,b){return a + b;});
}
