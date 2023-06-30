

async function selectionSort() {
    const buttons = document.getElementsByTagName("button");
    const rangeInput = document.querySelector('.input-data-field');
    const speedInput = document.querySelector('.input-speed-field');
    // speedInput.disabled = true;
    rangeInput.disabled = true;
  for (const button of buttons) {
    button.disabled = true;
  }
    for (let i = 0; i < bars.length - 1; i++) {
      let minIndex = i;
      bars[i].style.backgroundColor = 'red';
      
      for (let j = i + 1; j < bars.length; j++) {
        bars[j].style.backgroundColor = 'red';
        await delay(20 + UserDelay); // Delay for visualization
  
        const height1 = parseInt(bars[minIndex].style.height);
        const height2 = parseInt(bars[j].style.height);
        if (height2 < height1) {
          if (minIndex !== i) {
            bars[minIndex].style.backgroundColor = 'blue';
          }
          minIndex = j;
        } else {
          bars[j].style.backgroundColor = 'blue';
        }
      }
  
      swapBars(i, minIndex);
  
      bars[i].style.backgroundColor = 'green';
      if (minIndex !== i) {
        bars[minIndex].style.backgroundColor = 'blue';
      }
  
      await delay(20 + UserDelay); // Delay for visualization
  
      bars[i].style.backgroundColor = 'blue';
    }
  
    bars[bars.length - 1].style.backgroundColor = 'blue';
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = 'green';
      await delay(20 + UserDelay); // Delay for visualization
    }
     enableButtons();
   
  }

function SelectionSort() {
    let title = document.querySelector('.card-title');
    title.innerText='Selection Sort';
    const cardText = document.querySelector('.card-action');
    
    cardText.innerHTML ='';
  
    // Create elements for speed and data size inputs
  
    console.log(document.querySelector('.card-change'));
    const dataSizeInput = document.querySelector('.input-data-field');
  
    dataSizeInput.value =  parseInt( document.querySelector('.input-data-field').value);
    // dataSizeInput.value = parseInt(document.querySelector('.input-data-field').value);
    const speedSize = document.querySelector('.input-speed-field');
    speedSize.value = parseInt( document.querySelector('.input-speed-field').value);
  
  
    // Add description of color coding
    const colorList = document.createElement('div');
    const descriptions = [
      '<span style="color:red">Red Color:</span> Indicates the current element being considered as the minimum value. The bar is marked as red to highlight the comparison with other elements.',
      '<span style="color:blue">Blue Color:</span>  Represents the elements that are not selected as the minimum value. These bars are marked as blue after the comparison.',
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
    complexity3.innerHTML = ' Best-Time = &ohm;(N<sup>2</sup>)';
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
    btnStart.onclick = selectionSort;
    btnReset.onclick = changeDataSize;
    btnStart.classList.add("start-btn");
    btnReset.classList.add("reset-btn");
    addBtn.appendChild(btnStart );
    addBtn.appendChild(btnReset );
    
    changeDataSize();
  }
  