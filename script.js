
function validateLogin() {
	let userId = document.getElementById("user-id").value;
	let password = document.getElementById("password").value;
	let errorMessage = document.getElementById("error-message");

	if (userId === "123456" || password === "654321") {
		errorMessage.style.display = "none";
		window.location.href = 'index.html'
	} else {
		errorMessage.innerText = "ID yoki parol noto‘g‘ri!";
		errorMessage.style.display = "block";
	}
}
const exitBtn = document.getElementById('exit-btn')
exitBtn.addEventListener('click', () => {
	window.location.href = 'kirish.html'
})