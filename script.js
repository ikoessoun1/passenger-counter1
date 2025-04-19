let count = 0;

function handleIncrement () {
  count +=1;
  document.getElementById('count').innerText = count;
  console.log(`1 passenger was added to ${count}`);
}

function handleSave () {
  document.getElementById('log').innerText += `${count} - `;
  console.log(`Passengers added: ${count}`);
}

function handleReset () {
  if (confirm("Are you sure you want to reset the counter?")) {
    resetCounter();
  } else {
    console.log("Reset cancelled");
  }
}


function resetCounter () {
  count = 0;
  document.getElementById('count').innerText = count;
  document.getElementById('log').innerText = '';
  console.log(`Counter reset to ${count}`);
}

const incrementButton = document.getElementById('increment');
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', handleIncrement);
saveButton.addEventListener('click', handleSave);   
resetButton.addEventListener('click', handleReset);

document.addEventListener('keydown', function (event) {
  switch (event.key.toLowerCase()) {
    case 'i': // Press 'i' to increment
      handleIncrement();
      break;
    case 's': // Press 's' to save
      handleSave();
      break;
    case 'r': // Press 'r' to reset
      handleReset();
      break;
  }
});
