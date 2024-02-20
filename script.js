document.getElementById('changeButton').addEventListener('click', function () {
    var button = document.getElementById('changeButton');
    var output = document.getElementById('output');

    if (button.dataset.state === 'test') {
        output.innerText = 'Button Clicked';
        button.dataset.state = 'clicked';
    } else {
        output.innerText = 'Test';
        button.dataset.state = 'test';
    }
});
