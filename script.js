function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  
    return i;
}

/*------------------------------hide-----------------------------------------------------*/

const box = document.getElementById('closeBox');

const btn = document.getElementById('closeDiv');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'Hide div';
  } else {
    box.style.display = 'none';

    btn.textContent = 'Show div';
  }
});

