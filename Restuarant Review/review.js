const tableData=["Food","Restuarant","Rating","Comments"];

function validateForm(){
    //localStorage.clear();
    if((document.getElementById('comment').value)=='')
    {
        alert("Comment is required!");
    }
    else
    {
        fetchData();
    }
   
}

function fetchData(){
    document.getElementById('showForm').style.display='block';

    var foods= document.getElementById('food').value;
    var restuarants= document.getElementById('restuarant').value;
    var rating = document.getElementById('rate').value;
    var comments= document.getElementById('comment').value;

    localStorage.setItem('Food',foods);
    localStorage.setItem('Restuarant',restuarants);
    localStorage.setItem('Rating',rating);
    localStorage.setItem('Comments',comments);

    var reviewtable = document.getElementById('reviewTable');
    var row = reviewtable.insertRow(1);

    for(var i=0;i<4;i++){
        row.insertCell(i).innerHTML=localStorage.getItem(tableData[i]);
    }
}





