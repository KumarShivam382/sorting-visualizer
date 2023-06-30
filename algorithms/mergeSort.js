async function mergeSort(start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(start, mid, end);
  }
}

async function merge(start, mid, end) {
  const leftSize = mid - start + 1;
  const rightSize = end - mid;
  const leftArray = new Array(leftSize);
  const rightArray = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftArray[i] = parseInt(bars[start + i].style.height);
  }

  for (let j = 0; j < rightSize; j++) {
    rightArray[j] = parseInt(bars[mid + 1 + j].style.height);
  }

  let i = 0,
    j = 0,
    k = start;

  while (i < leftSize && j < rightSize) {
    bars[start + i].style.backgroundColor = 'red';
    bars[mid + 1 + j].style.backgroundColor = 'red';
    await delay(20 + UserDelay); // Delay for visualization

    if (leftArray[i] <= rightArray[j]) {
      bars[k].style.height = leftArray[i] + 'px';
      i++;
    } else {
      bars[k].style.height = rightArray[j] + 'px';
      j++;
    }

    bars[k].style.backgroundColor = 'blue';
    k++;

    await delay(20 + UserDelay); // Delay for visualization
  }

  while (i < leftSize) {
    bars[k].style.height = leftArray[i] + 'px';
    bars[k].style.backgroundColor = 'blue';
    i++;
    k++;
    await delay(20 + UserDelay); // Delay for visualization
  }

  while (j < rightSize) {
    bars[k].style.height = rightArray[j] + 'px';
    bars[k].style.backgroundColor = 'blue';
    j++;
    k++;
    await delay(20 + UserDelay); // Delay for visualization
  }
}

async function startMergeSort() {
  const speedInput = document.querySelector('.input-speed-field');
  // speedInput.disabled = true;
  const buttons = document.getElementsByTagName("button");
  const rangeInput = document.querySelector('.input-data-field');
  rangeInput.disabled = true;

  for (const button of buttons) {
    button.disabled = true;
  }

  await mergeSort(0, bars.length - 1);

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = 'green';
    await delay(20 + UserDelay); // Delay for visualization
  }

  enableButtons();
}



function MergeSort() {
  let title = document.querySelector('.card-title');
  title.innerText='Merge Sort'; 
  const cardText = document.querySelector('.card-action');
  
  cardText.innerHTML ='';
  console.log(document.querySelector('.card-change'));
  const dataSizeInput = document.querySelector('.input-data-field');

  dataSizeInput.value =  parseInt( document.querySelector('.input-data-field').value);
  const speedSize = document.querySelector('.input-speed-field');
  speedSize.value = parseInt( document.querySelector('.input-speed-field').value);

  const colorList = document.createElement('div');
  const descriptions = [
    '<span style="color:red">Red Color:</span>  Indicates the bars being compared and merged during the merging process.',
    '<span style="color:blue">Blue Color:</span>  Represents the merged bars after each comparison and placement.',
    '<span style="color:green">Green Color:</span> Highlights the entire array in green once the merge sort process is complete and the bars are in their final sorted positions.'
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
  complexity1.innerHTML = 'Worst-Time = O(NlogN)';
  TimeComplexity.appendChild(complexity1);
  complexity2.innerHTML = 'Average-Time = &Theta;(NlogN)';
  TimeComplexity.appendChild(complexity2);
  complexity3.innerHTML = ' Best-Time = &ohm;(NlogN)';
  TimeComplexity.appendChild(complexity3);
  const complexity4 = document.createElement('h5');
  complexity4.innerHTML='Worst-Space = O(N)';
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
    btnStart.onclick = startMergeSort;
    btnReset.onclick = changeDataSize;
    btnStart.classList.add("start-btn");
    btnReset.classList.add("reset-btn");
    addBtn.appendChild(btnStart );
    addBtn.appendChild(btnReset );
    changeDataSize();

  // startMergeSort();
}

