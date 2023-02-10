let tan = Math.tan;
let sin = Math.sin;
let cos =Math.cos;
let sqrt=Math.sqrt;
let prev_id = "";
let error_flag=0;

let display = (a, id = "") => {
    if(error_flag==1)
    {
        document.getElementById('display').value = " ";
        document.getElementById('display').classList="bg-dark text-white font-weight-bold"
        error_flag=0
    }

    let display_text=document.getElementById("display").value;
    if(display_text!="")
    {
         document.getElementById('cal').disabled =false
    }
    document.getElementById("display").value += a;
    check(a, id);


}
let back = () => {
    let value = document.getElementById("display").value;
    let res="";
    if(value.slice(-2,-1)=="n" || value.slice(-2,-1)=="t" || value.slice(-2,-1)=="s")
    {
        res = value.slice(0,-4)
    }
    else if(value.slice(-2)=="**")
    {
        res = value.slice(0,-2)
    }else if(error_flag==1)
    {
        res="";
        document.getElementById('display').classList="bg-dark text-white font-weight-bold";
        error_flag=0;
    }
    else{
       res = value.slice(0, value.length - 1);
    }
    document.getElementById('display').value = res;
}
let calculation = () => {
    try {
        let display_string = document.getElementById("display").value;
        let result = eval(display_string);
        document.getElementById("display").value = result;
    }
    catch (e) {
        document.getElementById('display').value = "Please enter valid input";
        document.getElementById('display').classList="bg-dark text-danger font-weight-bold"
        error_flag=1
    }

}
let check = (value, id = "") => {
    if (prev_id != id && prev_id != "") {
        document.getElementById(prev_id).disabled = false;
    }
    let present_value = document.getElementById("display").value;
    if (id != "") {
        if (present_value.slice(-1) == value || value == "**") {
            document.getElementById(id).disabled = true;
        }
    }
    prev_id = id;
}

let cl = () => {
    document.getElementById("display").value = "";
    (prev_id != "") ? (document.getElementById(prev_id).disabled = false) : null;
    document.getElementById('cal').disabled =true;
}




