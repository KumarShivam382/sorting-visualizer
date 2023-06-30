
async function quickSort(low, high) {
    if (low < high) {
      const pivotIndex = await partition(low, high);
      await quickSort(low, pivotIndex - 1);
      await quickSort(pivotIndex + 1, high);
    }
  }
  
  async function partition(low, high) {
    const pivotValue = parseInt(bars[high].style.height);
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
      bars[j].style.backgroundColor = 'red';
      await delay(20 + UserDelay); // Delay for visualization
  
      const currentHeight = parseInt(bars[j].style.height);
      if (currentHeight < pivotValue) {
        i++;
        swapBars(i, j);
      }
  
      bars[j].style.backgroundColor = 'blue';
    }
  
    swapBars(i + 1, high);
  
    for (let k = low; k <= high; k++) {
      if (k < i + 1 || k > high) {
        bars[k].style.backgroundColor = 'green';
      }
      await delay(20 + UserDelay); // Delay for visualization
    }
  
    return i + 1;
  }
  
  async function startQuickSort() {
    const speedInput = document.querySelector('.input-speed-field');
    // speedInput.disabled = true;
    const len = bars.length;
    const buttons = document.getElementsByTagName("button");
    const rangeInput = document.querySelector('.input-data-field');
    rangeInput.disabled = true;
  for (const button of buttons) {
    button.disabled = true;
  }
    await quickSort(0, len - 1);
  
  
    for (let i = 0; i < len; i++) {
      bars[i].style.backgroundColor = 'green';
      await delay(20 + UserDelay); // Delay for visualization
    }
  
    enableButtons();
    
  }

  
function QuickSort() {
    let title = document.querySelector('.card-title');
    title.innerText = 'Quick Sort';
    const cardText = document.querySelector('.card-action');
    
    cardText.innerHTML ='';
    console.log(document.querySelector('.card-change'));
    const dataSizeInput = document.querySelector('.input-data-field');
  
    dataSizeInput.value =  parseInt( document.querySelector('.input-data-field').value);
    const speedSize = document.querySelector('.input-speed-field');
    speedSize.value = parseInt( document.querySelector('.input-speed-field').value);
    
  
    // Add description of color coding
    const colorList = document.createElement('div');
    const descriptions = [
      '<span style="color:red">Red Color:</span> Indicates the bars being compared with the pivot element during the partitioning process.',
      '<span style="color:blue">Blue Color:</span> Represents bars that have been processed, potentially swapped, and are awaiting further comparisons.',
      '<span style="color:green">Green Color:</span> Would indicate the sorted portion of the array, applied to bars outside the range i + 1 to high.'
    ];
  
    descriptions.forEach(description => {
      const listItem = document.createElement('p');
      listItem.innerHTML = description;
      colorList.appendChild(listItem);
    });
  
    cardText.appendChild(colorList);
  
    const TimeComplexity = document.createElement('div');
    const complexity1 = document.createElement('h5');
    const complexity2 = document.createElement('h5');
    const complexity3 = document.createElement('h5');
    complexity1.innerHTML = 'Worst-Time = O(N<sup>2</sup>)';
    TimeComplexity.appendChild(complexity1);
    complexity2.innerHTML = 'Average-Time = &Theta;(NlogN)';
    TimeComplexity.appendChild(complexity2);
    complexity3.innerHTML = ' Best-Time = &ohm;(NlogN)';
    TimeComplexity.appendChild(complexity3);
    const complexity4 = document.createElement('h5');
    complexity4.innerHTML='Worst-Space = O(logN)';
    TimeComplexity.appendChild(complexity4);
  
    const cardfooter = document.querySelector('.card-footer');
    cardfooter.innerHTML='';
    cardfooter.appendChild(TimeComplexity);
  
    const addBtn = document.querySelector('.make-btn');
    addBtn.innerHTML = "";
    const btnReset = document.createElement('button');
    const btnStart = document.createElement('button');
    btnStart.innerHTML = "Start";
    btnReset.innerHTML = "Reset"
    btnStart.onclick = startQuickSort;
    btnReset.onclick = changeDataSize;
    btnStart.classList.add("start-btn");
    btnReset.classList.add("reset-btn");
    addBtn.appendChild(btnStart );
    addBtn.appendChild(btnReset );

    changeDataSize();
  }

  