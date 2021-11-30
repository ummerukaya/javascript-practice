var customerInfoList = ['Photo', 'Fist name', 'Last name', 'Email', 'Phone', 'Address'];
var customerInfoIds = ['img', 'fname', 'lname', 'email', 'phone', 'address'];

validateForm = function () {

    var enteredEmail = document.getElementById('email');
    var enteredPhone = document.getElementById('phone');

    //readFile();
    var e = emailaddress(enteredEmail);
    var p = phonenumber(enteredPhone);

    if (e == true && p == true) {
        fetchCustomerInfo();
    }
}

emailaddress = function (enteredEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (enteredEmail.value.match(mailformat)) {
        return true;
    }
    else {
        if (enteredEmail.value == "")
            document.getElementById('invalidEmailMsg').innerHTML = 'Field cannot be empty';
        else
            document.getElementById('invalidEmailMsg').innerHTML = 'Field should contain valid email';
        return false;
    }
}

var phonenumber = function (enteredPhone) {
    var phoneformat = /^0\d{10}$/;
    if (enteredPhone.value.match(phoneformat)) {
        return true;
    }
    else {
        if (enteredPhone.value == "")
            document.getElementById('invalidPhoneMsg').innerHTML = 'Field cannot be empty';
        else
            document.getElementById('invalidPhoneMsg').innerHTML = 'Field';
        return false;
    }
}

var readFile = function (key,imgPath) {

    var reader = new FileReader();

    reader.addEventListener("change", function () {
        localStorage.setItem(key, reader.result);
    }, false);

    if (imgPath) {
        reader.readAsDataURL(imgPath);
    }

}

var fetchCustomerInfo = function () {

    var list = document.getElementById('list');
    list.style.display = 'block';

    for (var i = 0; i < customerInfoIds.length; i++) {

        var key = customerInfoList[i];
        if (i == 0) {
            var imgPath = document.querySelector('#img').files[0];
            readFile(key,imgPath);
        }
        else {
            var value = document.getElementById(customerInfoIds[i]).value;
            localStorage.setItem(key, value);
        }
    }


    for (var i = 0; i < customerInfoList.length; i++) {

        if (i == 0) {
            var data = document.createElement('img');
            data.id = 'customerimg';
            data.height = '150';
            data.src = localStorage.getItem('image');
            document.getElementById('list').appendChild(data);
        }
        else {
            var data = document.createElement('div');
            document.getElementById('list').appendChild(data);
            data.innerHTML = customerInfoList[i] + ': ' + localStorage.getItem(customerInfoList[i]);
        }

        if (i == customerInfoList.length - 1)
            data.style.borderBottom = '1px solid black';
    }
}


var form = document.getElementById("customerInfoForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);