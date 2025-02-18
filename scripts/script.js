const apiKey = "AIzaSyBNVvCRlRwxs4alahVoCRUvUygGvAmiO3o";
const sheetsID = "1qVWFAWsBUW4bp7B3cGEzcAD_DSoiUYM25EOwMOC1oKY";
const sheetItems = `https://sheets.googleapis.com/v4/spreadsheets/${sheetsID}/values/Items?key=${apiKey}`;
const sheetChecked = `https://sheets.googleapis.com/v4/spreadsheets/${sheetsID}/values/Checked?key=${apiKey}`;
let dataItems = []; let dataChecked = []; let data = []; let dataRow = 0;
let $ = (id) => document.getElementById(id);
let iName = 0; let iPass = 1; let iChecked = 2;

document.addEventListener('DOMContentLoaded', async function() {
    // get sheets data
    try {
        const responseItems = await fetch(sheetItems);
        const dataItemsJson = await responseItems.json();
        dataItems = dataItemsJson.values;

        const responseChecked = await fetch(sheetChecked);
        const dataCheckedJson = await responseChecked.json();
        dataChecked = dataCheckedJson.values;
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error('Error:', error);
    }

    // check password + get data
    let username = "John Doe";
    for (let i = 0; i < dataChecked.length; i++) {
        let row = dataChecked[i];
        if (username == row[iName]) {
            let password = "TestPassword";
            if (password == row[iPass]) {
                data = row; dataRow = i;
                if (data[iChecked].includes(','))
                    data[iChecked] = data[iChecked].split(',');
                else data[iChecked] = [data[iChecked]];
                console.log(data, dataRow);
                break;
            }
            alert('Incorrect password');
            break;
        }
    }
    
    // end here if password incorrect
    if (data.length == 0) return;
    let frag = document.createDocumentFragment();

    // create categories
    let categories = dataItems[0];
    for (let cat of categories) {
        let elDiv = document.createElement('div');
        elDiv.className = 'category';
        elDiv.textContent = cat;
        
        let elList = document.createElement('ul');
        elList.id = cat;

        frag.appendChild(elDiv);
        frag.appendChild(elList);
    };

    // populate categories
    for (let i = 1; i < dataItems.length; i++) {
        dataItems[i].forEach((item, index) => {
            if (!item) return;
            let qID = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index] + String(i + 1);

            let elItem = document.createElement('li');
            let elInp = document.createElement('input');
            elInp.type = 'checkbox'; elInp.setAttribute('data-id', qID);
            elItem.appendChild(elInp);
            let elText = document.createTextNode(` ${item}`);
            elItem.appendChild(elText);

            if (data[iChecked].includes(qID)) {
                elInp.checked = true
                elItem.classList.add('completed');
            };

            elInp.addEventListener('change', async function() {
                const qID = this.getAttribute('data-id');
                const state = this.checked ? 'checked' : 'unchecked';

                if (this.checked) {
                    this.parentElement.classList.add('completed');
                    if (!data[iChecked].includes(qID)) data[iChecked].push(qID);
                } else {
                    this.parentElement.classList.remove('completed');
                    data[iChecked] = data[iChecked].filter(id => id !== qID);
                    if (data[iChecked].length == 0) data[iChecked].push('A');
                }

                let newChecked = data[iChecked].join(',');
                console.log(newChecked, username);

                $("update").style.display = 'block';
            });
            
            // add elItem to frag's cat element with id == categories[index]
            frag.getElementById(categories[index]).appendChild(elItem);
        });
    }

    // finalize
    $("items").appendChild(frag);
    $("title").innerHTML = data[0].split(" ")[0] + "'s Family Tree";
    //$("tree").src = "images/TREE.png"
    document.documentElement.style.backgroundColor = "#dfe6e9";
});


window.addEventListener("load", function() {
    const form = document.getElementById('form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
        alert("crashout");
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });
  