(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let clear_all = document.querySelector('.btn-clear_all');
    let history = document.querySelector('.history');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value; 
        }) 
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "Please Enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
            localStorage.setItem("results", JSON.stringify(answer));
            results = JSON.parse(localStorage.getItem('results'));
            history.value = results;
        }
    })

    clear.addEventListener('click', function(e) {
        screen.value = "";
    })

    clear_all.addEventListener('click', function(e) {
        history.value = "";
    })
})();


