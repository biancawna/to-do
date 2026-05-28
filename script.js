let block = document.querySelector('.container');
let button = document.querySelector('.lucide');
button.addEventListener('click', function() {
    var div = document.createElement('div');
    let div2 = document.createElement('div');
    div.setAttribute('class', 'task');
    div2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.addEventListener('change', function(){
        if (text.getAttribute('class')) {
            text.removeAttribute('class');
        } else {
            text.setAttribute('class', 'feito');
        }
    })
    let text = document.createElement('p');
    let input = document.querySelector('input').value;
    document.querySelector('input').value = "";
    text.innerText = input;
    div2.append(text);
    div.append(checkbox);
    div.append(div2);
    block.append(div);
    let xButton = div.querySelector('.lucide-x-icon');
    xButton.addEventListener('click', function() {
        block.removeChild(div);
    })

})
