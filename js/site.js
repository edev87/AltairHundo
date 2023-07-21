// Get numbers from our form inputs
//ENTRY POINT
//Controller function
function getValues() {
  let startNum = document.getElementById("start-value").value;  //out of scope, in a different scope
  let endNum = document.getElementById("end-value").value;

  startNum = Number(startNum);
  endNum = Number(endNum);

  //input validation to make sure user is typing in numbers
  if (isNaN(startNum) == true || isNaN(endNum) == true) {
    Swal.fire({
      title: 'Oops!',
      text: 'Hundo only works with numbers',
      icon: 'error',
      backdrop: false
    });

  } else if (startNum > endNum) {
    //display an error message
    Swal.fire({
      title: 'Oops!',
      text: 'The starting number must be less than the ending number',
      icon: 'error',
      backdrop: false
    });

  } else if (endNum > 150) {
    //display an error message
    Swal.fire({
      title: 'Oops!',
      text: 'The starting number must be less than 150',
      icon: 'error',
      backdrop: false
    });

  }else {

    let numberArray = generateNumbers(startNum, endNum)
    displayNumbers(numberArray);

  }

}

//Business logic - creates every number in the input range
//Data Model
function generateNumbers(start, end) {  //start and end are parameters

  let range = [];

  for (let number = start; number <= end; number++) {
    range.push(number);
  }
  return range;
}

//put the numbers of page
//View Function
const displayNumbers = (numbersToDisplay) => {

  let tableHtml = '';

  for (let index = 0; index < numbersToDisplay.length; index++) {
    let currentNumber = numbersToDisplay[index];

    let className = ''

    if (currentNumber % 2 === 0) {
      className = 'even';

    } else {
      className = 'odd';
    }

    let tableRowHtml = `<tr><td class="${className}"> ${currentNumber} </td></tr>`;
    tableHtml += tableRowHtml;

  }

  document.getElementById("results").innerHTML = tableHtml;


}

const clearTable = () => {
  document.getElementById("results").innerHTML = '';
}