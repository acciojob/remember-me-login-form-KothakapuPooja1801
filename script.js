//your JS code here. If required.
//your JS code here. If required.
let form = document.getElementById("loginForm")
let username = document.getElementById("username")
let password = document.getElementById("password")
let checkbox = document.getElementById("checkbox")
let existing = document.getElementById("existing")

if(localStorage.getItem("username") && localStorage.getItem("password")){
	existing.style.display = "block"
}
form.addEventListener("submit",function(event){
	event.preventDefault()
	alert("Logged in as " + username.value)

	if(checkbox.checked){
		localStorage.setItem("username",username.value)
		localStorage.setItem("password",password.value)
		existing.style.display = "block"
	}else{
		localStorage.removeItem("username")
		localStorage.removeItem("password")
		existing.style.display = "none"
	}
})

existing.addEventListener("click",function () {
	alert("Logged in as "+ localStorage.getItem("username"))
})