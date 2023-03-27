//studying Switch/Case functionality
function caseInSwitch(val) {
  var answer = '';
  switch(val) {
    case 1: 
      answer = 'John';
      break;
    case 2:
      answer = 'Paul';
      break;
    case 3: 
      answer = 'George';
      break;
    case 4:
      answer = 'Ringo';
      break;
  }
  return answer;
}
console.log(caseInSwitch(3));
