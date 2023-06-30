
async function insertionSort() {
    const buttons = document.getElementsByTagName("button");
    const rangeInput = document.querySelector('.input-data-field');
    const speedInput = document.querySelector('.input-speed-field');
    // speedInput.disabled = true;
    rangeInput.disabled = true;
  for (const button of buttons) {
    button.disabled = true;
  }
    for (let i = 1; i < bars.length; i++) {
      const key = parseInt(bars[i].style.height);
      bars[i].style.backgroundColor = 'red';
  
      let j = i - 1;
      while (j >= 0 && parseInt(bars[j].style.height) > key) {
        bars[j].style.backgroundColor = 'red';
        await delay(20 + UserDelay); // Delay for visualization
  
        swapBars(j, j + 1);
  
        bars[j].style.backgroundColor = 'blue';
        j--;
  
        await delay(20 + UserDelay); // Delay for visualization
      }
  
      bars[j + 1].style.height = key + 'px';
      bars[j + 1].style.backgroundColor = 'blue';
    }
  
    bars[bars.length - 1].style.backgroundColor = 'blue';
  
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = 'green';
      await delay(20 + UserDelay); // Delay for visualization
    }
  
      enableButtons();
  
  }

  
function InsertionSort() {
    let title = document.querySelector('.card-title');
    title.innerText='Insertion Sort'; 
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
      '<span style="color:red">Red Color:</span> Represents the current element being compared and moved into its correct position. The bar is marked as red to highlight its position during the comparison process.',
      '<span style="color:blue">Blue Color:</span> Indicates the elements that are temporarily shifted to make space for the current element. These bars are marked as blue after the swap.',
      '<span style="color:green">Green Color:</span>Highlights the bars that are in their final sorted positions. Once the sorting process is complete, all bars are marked as green.'
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
    complexity2.innerHTML = 'Average-Time = &Theta;(N<sup>2</sup>)';
    TimeComplexity.appendChild(complexity2);
    complexity3.innerHTML = ' Best-Time = &ohm;(N)';
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
    btnStart.onclick = insertionSort;
    btnReset.onclick = changeDataSize;
    btnStart.classList.add("start-btn");
    btnReset.classList.add("reset-btn");
    addBtn.appendChild(btnStart );
    addBtn.appendChild(btnReset );

    changeDataSize();
  }

 

  