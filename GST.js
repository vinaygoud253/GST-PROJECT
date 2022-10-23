let statersPrice = document.getElementById('starters');
let mainCourse  =  document.getElementById('mainCourse');
let indianFood = document.getElementById('indianFood');
let chinese = document.getElementById('chinese');
let gstamt = document.getElementById('gstamt'); 

function add(){
    let sp = parseInt(statersPrice.value);
    let mc = parseInt(mainCourse.value);
    let inf = parseInt(indianFood.value);
    let chin = parseInt(chinese.value);
    // let gstTax = parseInt(gstTax.value);
     sum = (sp+mc+inf+chin);
    // console.log(sum);
     total = sum*(1+18/100);
    // console.log(total);
    alert('If Amount is greater than 18000 you have to pay bill 500, if less than 18000 tip is 1000 ')
    if (total>18000){
        sums=Math.ceil(total+500);
        
    }
    else{
        sums = Math.ceil(total+1000);
    }

    document.getElementById('gstamt').value =sum;
    document.getElementById('totalamt').value=sums;
}


















// let mainCourse = document.querySelector('#mainCourse').value;
// let sum = statersPrice + parseInt(mainCourse);
// console.log(sum);

// document.innerHTML(statersPrice);
// function findTotal(){
//     var arr = document.getElementsByName('qty');
//     var tot=0;
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             tot += parseInt(arr[i].value);
//     }
//     document.getElementById('total').value = tot;
// }
