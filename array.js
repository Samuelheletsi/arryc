
function processArray(event) {
    
    event.preventDefault();

    
    const numbersInput = document.getElementById('numbersInput').value;
    const targetNumber = document.getElementById('targetNumberInput').value;

   
    const numbersArray = numbersInput.split(' ').map(Number);

    const occurrences = numbersArray.filter(num => num === parseInt(targetNumber)).length;

   
    const positions = numbersArray.map((num, index) => num === parseInt(targetNumber) ? index + 1 : null).filter(pos => pos !== null);

   

    
    const resultText = `The number ${targetNumber} appears ${occurrences} time(s) at position(s): ${positions.join(', ')}`;
    document.getElementById('resultText').textContent = resultText;

   
}
