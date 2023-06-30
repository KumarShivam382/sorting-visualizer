async function heapSort() {
  const n = bars.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    await swapBars(0, i);
    bars[i].style.backgroundColor = 'green';
    await delay(50); // Delay for visualization
    await heapify(i, 0);
  }

  // Mark first bar as green
  bars[0].style.backgroundColor = 'green';
}

async function heapify(heapSize, rootIndex) {
  let largest = rootIndex;
  const leftIndex = 2 * rootIndex + 1;
  const rightIndex = 2 * rootIndex + 2;

  if (leftIndex < heapSize && parseInt(bars[leftIndex].style.height) > parseInt(bars[largest].style.height)) {
    largest = leftIndex;
  }

  if (rightIndex < heapSize && parseInt(bars[rightIndex].style.height) > parseInt(bars[largest].style.height)) {
    largest = rightIndex;
  }

  bars[rootIndex].style.backgroundColor = 'red';
  bars[largest].style.backgroundColor = 'red';
  await delay(20 + UserDelay); // Delay for visualization

  if (largest !== rootIndex) {
    await swapBars(rootIndex, largest);
    bars[rootIndex].style.backgroundColor = 'blue';
    bars[largest].style.backgroundColor = 'blue';
    await delay(20 + UserDelay); // Delay for visualization
    await heapify(heapSize, largest);
  }

  bars[rootIndex].style.backgroundColor = 'green';
  bars[largest].style.backgroundColor = 'green';
}

async function startHeapSort() {
  const len = bars.length;
  const speedInput = document.querySelector('.input-speed-field');
  // speedInput.disabled = true;
  const buttons = document.getElementsByTagName("button");
  const rangeInput = document.querySelector('.input-data-field');
  rangeInput.disabled = true;

  for (const button of buttons) {
    button.disabled = true;
  }

  await heapSort();

  for (let i = 0; i < len; i++) {
    bars[i].style.backgroundColor = 'green';
    await delay(20 + UserDelay); // Delay for visualization
  }

  enableButtons();
}

function HeapSort() {
  let title = document.querySelector('.card-title');
  title.innerText = 'Heap Sort';
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
    'During the heapify process, the root element and the largest child element are marked as <span style="color:red">red</span>.',
    'After the swap, the root element and the largest child element are marked as <span style="color:blue">blue</span>.',
    'Once the heapify process is complete for a particular root, the root element and the largest child element are marked as <span style="color:green">green</span>.'
  ];

  descriptions.forEach(description => {
    const listItem = document.createElement('p');
    listItem.innerHTML = description;
    colorList.appendChild(listItem);
  });

  cardText.append(colorList);

  const TimeComplexity = document.createElement('div');
  const complexity1 = document.createElement('h5');
  const complexity2 = document.createElement('h5');
  const complexity3 = document.createElement('h5');
  complexity1.innerHTML = 'Worst-Time = O(NlogN)';
  TimeComplexity.appendChild(complexity1);
  complexity2.innerHTML = 'Average-Time = &Theta;(NlogN)';
  TimeComplexity.appendChild(complexity2);
  complexity3.innerHTML = ' Best-Time = &ohm;(NlogN)';
  TimeComplexity.appendChild(complexity3);
  const complexity4 = document.createElement('h5');
  complexity4.innerHTML='Worst-Space = O(1)';
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
  btnStart.onclick = startHeapSort;
  btnReset.onclick = changeDataSize;
  btnStart.classList.add("start-btn");
  btnReset.classList.add("reset-btn");
  addBtn.appendChild(btnStart );
  addBtn.appendChild(btnReset );

  changeDataSize();
}
