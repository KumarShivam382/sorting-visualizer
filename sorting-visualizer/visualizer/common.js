
// Helper function to swap two bars
function swapBars(index1, index2) {
    const tempHeight = bars[index1].style.height;
    bars[index1].style.height = bars[index2].style.height;
    bars[index2].style.height = tempHeight;
  }
  
  // Helper function for delaying execution
  function delay(mst) {
    return new Promise(resolve => setTimeout(resolve, mst));
  }

 function enableButtons() {

  window.setTimeout( function() {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
      button.disabled = false;
    }
    const rangeInput = document.querySelector('.input-data-field');
    rangeInput.disabled = false;
    const speedInput = document.querySelector('.input-speed-field');
    speedInput.disabled = false;
  } , UserDelay + 20 )};

const sizeChange = document.querySelector('.input-data-field');
sizeChange.addEventListener('change', changeDataSize);

const speedChange = document.querySelector('.input-speed-field');
speedChange.addEventListener('change', changeSpeed);

const startButton = document.querySelector('.start-btn');

  