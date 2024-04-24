function login() {

    let password = document.querySelector(".password").value;
    let email = document.querySelector(".email").value;

    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v)=> {
        return v.email == email && v.password == password
    }
    )) {        

        let currrent_user = user_records.filter((v) => {
            return v.email == email && v.password == password

        })[0]
        
        localStorage.setItem("email", currrent_user.email)
        localStorage.setItem("password",currrent_user.password)
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem("name", currrent_user.firstName);
        localStorage.setItem("phone",currrent_user.phone)
        //not wwrking 
        window.location.href='main.html'

    }

    else {
        alert("login failed")
        localStorage.setItem('isLoggedIn', false)
    
    }

    return 0;
}

function change(){
    element = document.querySelector(".email")
    element.setAttribute("action", "https://formsubmit.co/tyoussef050@gmail.com");
  }
   