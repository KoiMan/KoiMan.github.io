document.getElementById('changeButton').addEventListener('click', function () {
    var output = document.getElementById('output');
    if (output.innerText === 'Test') {
        output.innerText = 'Button Clicked';
    } else {
        output.innerText = 'Test';
    }
});

