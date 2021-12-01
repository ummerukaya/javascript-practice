var customerInfoList = ['Photo','Name', 'Email', 'Phone', 'Address'];

var id = 0, fname, lname, email, phone, address;
var imageDataBase64 = "";

document.getElementById('img').addEventListener('change',readFile);

validateForm = function () {

    var customer = {
        ImageSrc: "",
        Name: "",
        Email: "",
        Phone: "",
        Address: ""
    }

    fname = document.getElementById('fname');
    lname = document.getElementById('lname');
    email = document.getElementById('email');
    phone = document.getElementById('phone');
    address = document.getElementById('address');

    var e = emailaddress(email);
    var p = phonenumber(phone);

    if (e == true && p == true) {
        storeCustomerInfo(customer);
        alert('finished');
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
            document.getElementById('invalidPhoneMsg').innerHTML = 'Field should contain valid phone number';
        return false;
    }
}

function readFile() {
    
    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            imageDataBase64 = e.target.result;
        });

        FR.readAsDataURL(this.files[0]);
    }

}


var setCustomerInfo = function (customer) {
    customer.ImageSrc = imageDataBase64; 
    customer.Name = fname.value + " " + lname.value;
    customer.Email = email.value;
    customer.Phone = phone.value;
    customer.Address = address.value;
}

var storeCustomerInfo = function (customer) {

    id++;
    var list = document.getElementById('list');
    list.style.display = 'block';

    setCustomerInfo(customer);
   
    localStorage.setItem(id, JSON.stringify(customer));
   
    for (var key in customer) {
        
        if (key == 'ImageSrc' && customer.hasOwnProperty(key)) {
            var data = document.createElement('img');
            data.id = 'customerimg';
            data.src = JSON.parse(localStorage.getItem(id))[key];
            console.log(data.src);
            document.getElementById('list').appendChild(data);
        }
        else {
            var data1 = document.createElement('div');
            document.getElementById('list').appendChild(data1);
            data1.innerHTML = key+ ': ' +JSON.parse(localStorage.getItem(id))[key];
        }

    }
}


var form = document.getElementById("customerInfoForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);