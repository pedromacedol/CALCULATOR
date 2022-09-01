
// Update display
function show() {
    document.getElementById("num").innerHTML;
}

var result_list = 0;
var display = document.getElementById("num");
var values = [];
var save_num = "";
var old_value = false;

function calc(elt){
    if(old_value == true){
        save_num = values[0];
        values = []
    }
    
    // Clear Display
    if(elt == "C") {
        display.textContent = null;
        values = [];
        save_num = "";
        result_list = 0;
        old_value = false;
    }

    else if (elt == "="){
        if (save_num !=  "" && save_num != "."){
        save_num = parseFloat(save_num);
        values.push(save_num);
        result();
        }
    }

    
    else if(elt == "."  && save_num != "."){
        if(save_num != "." && old_value == false){
            display.textContent += elt;
            save_num += elt; 
        }
    }

    // Operations
    else if(elt === "+" || elt === "-" || elt === "x" || elt === "÷" ){

        if(save_num == "."){
            display.textContent = values.join(separator="");
            save_num = "";
        }
        if (save_num !=  ""){
            save_num = parseFloat(save_num);
            values.push(save_num);
            values.push(elt);
            display.textContent += elt; 
            save_num = "";
        }
        old_value = false;
    }
    // Add element to display
    else if(elt != "." && old_value != true){
        display.textContent += elt;
        save_num += elt; 
    }

    show();
 }

function result(){
    for (var i = 0; i < values.length; i++) {
        if (values[i] == "÷" ){
            result_list = (values[i-1] / values[i+1]);
            values[i-1] = parseFloat(result_list.toFixed(3));
            values.splice(i,2);   
        }
    
        if (values[i] == "x"){
            result_list = (values[i-1] * values[i+1]);
            values[i-1] = parseFloat(result_list.toFixed(3));
            values.splice(i,2);    
        };
    }
    
        
    for (var i = 0; i < values.length; i++) {

        if (values[i] == "+"){
            result_list = (values[i-1] + values[i+1]);
            values[i-1] = parseFloat(result_list.toFixed(3));
            values.splice(i,2);     
        };

        if (values[i] == "-"){
            result_list = (values[i-1] - values[i+1]);
            values[i-1] = parseFloat(result_list.toFixed(3));
            values.splice(i,2);       
        };
        // more statements
    }

    save_num = "";
    display.textContent = values[0]; 
    old_value = true;
 }
 