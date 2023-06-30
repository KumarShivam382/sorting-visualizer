// Bubble Sort algorithm
async function bubbleSort() {
  const buttons = document.getElementsByTagName("button");
  const rangeInput = document.querySelector('.input-data-field');
  rangeInput.disabled = true;
  const speedInput = document.querySelector('.input-speed-field');
  // speedInput.disabled = true;
  for (const button of buttons) {
    button.disabled = true;
  }

  const n = bars.length;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < n - 1; i++) {
      bars[i].style.backgroundColor = 'red';
      bars[i + 1].style.backgroundColor = 'red';
      await delay(20 + UserDelay); // Delay for visualization

      const height1 = parseInt(bars[i].style.height);
      const height2 = parseInt(bars[i + 1].style.height);

      if (height1 > height2) {
        swapBars(i, i + 1);
        sorted = false;
      }

      bars[i].style.backgroundColor = 'blue';
      bars[i + 1].style.backgroundColor = 'blue';
      await delay(20 + UserDelay); // Delay for visualization
    }
  }

  async function greenColor(){
    for (let i = 0; i < n; i++) {
      bars[i].style.backgroundColor = 'green';
      await delay(20 + UserDelay); // Delay for visualization
    }
  }
  greenColor();


  enableButtons(); // Enable the buttons after the process is completed

  speedInput.disabled = false;
  rangeInput.disabled = false;
}


// Start the bubble sorting process
function startSorting() {
  let title = document.querySelector('.card-title');
  title.innerText = 'Bubble Sort';
  let cardText = document.querySelector('.card-action');

  // Clear existing content
  cardText.innerHTML = '';

  const parent = document.querySelector('.card-change');
  parent.innerHTML = '';
  const speedInput = document.createElement('input');
  speedInput.type = 'range';
  speedInput.min = '1';
  speedInput.max = '100';
  speedInput.value = '50';
  speedInput.classList.add('input-speed-field');
  const speedLabel = document.createElement('label');
  speedLabel.innerText = 'Speed: ';
  speedLabel.appendChild(speedInput);

  const dataSizeInput = document.createElement('input');
  dataSizeInput.type = 'range';
  dataSizeInput.min = '10';
  dataSizeInput.max = '100';
  dataSizeInput.value = '20';
  dataSizeInput.classList.add('input-data-field');
  const dataSizeLabel = document.createElement('label');
  dataSizeLabel.innerText = 'Data Size: ';
  dataSizeLabel.appendChild(dataSizeInput);

  // Add description of color coding
  const colorList = document.createElement('div');
  const descriptions = [
    '<span style="color:red">Red Color:</span> Indicates the bars being compared in each iteration of the inner loop. The bars being compared are marked as red to highlight the current comparison.',
    '<span style="color:blue">Blue Color:</span> Represents the bars that have been processed in the inner loop. After each comparison, the bars are marked as blue to indicate that they have been compared and potentially swapped.',
    '<span style="color:green">Green Color:</span> Highlights the entire array in green once the sorting process is complete. All the bars are marked as green to indicate that they are in their final sorted positions.'
  ];

  descriptions.forEach(description => {
    const listItem = document.createElement('p');
    listItem.innerHTML = description;
    colorList.appendChild(listItem);
  });

  cardText.appendChild(colorList);
  parent.appendChild(speedLabel);
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  para1.innerText = ' (Manipulates Speed of showing algorithm)';
  para1.classList.add('para');
  parent.appendChild(para1);
  parent.appendChild(dataSizeLabel);
  para2.innerText = ' (Manipulates Size of array as well as refreshes data)';
  para2.classList.add('para');
  parent.appendChild(para2);

  const TimeComplexity = document.createElement('div');
  const complexity1 = document.createElement('h5');
  const complexity2 = document.createElement('h5');
  const complexity3 = document.createElement('h5');
  complexity1.innerHTML = 'Worst-Time = O(N^2)';
  TimeComplexity.appendChild(complexity1);
  complexity2.innerHTML = 'Average-Time = Θ(N^2)';
  TimeComplexity.appendChild(complexity2);
  complexity3.innerHTML = 'Best-Time = Ω(N)';
  TimeComplexity.appendChild(complexity3);
  const complexity4 = document.createElement('h5');
  complexity4.innerHTML = 'Worst-Space = O(1)';
  TimeComplexity.appendChild(complexity4);

  const cardfooter = document.querySelector('.card-footer');
  cardfooter.innerHTML = '';
  cardfooter.appendChild(TimeComplexity);

  const addBtn = document.querySelector('.make-btn');
  addBtn.innerHTML = "";
  const btnReset = document.createElement('button');
  const btnStart = document.createElement('button');
  btnStart.innerHTML = "Start";
  btnReset.innerHTML = "Reset"
  btnStart.onclick = bubbleSort;
  btnReset.onclick = changeDataSize;
  btnStart.classList.add("start-btn");
  btnReset.classList.add("reset-btn");
  addBtn.appendChild(btnStart );
  addBtn.appendChild(btnReset );
}

startSorting();

changeDataSize();
