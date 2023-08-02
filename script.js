
    function clearResult(){
        document.getElementById('res').value = '';
    }
    function result(value){
        document.getElementById('res').value += value;
    }
    function calculate() {
        let x=document.getElementById("res").value;
        let y=eval(x);
        document.getElementById("res").value=y;
    }
