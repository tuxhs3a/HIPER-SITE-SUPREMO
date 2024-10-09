var a = document.getElementById('botao')
a.addEventListener('click', clicar)
			
function clicar() {
	var sexo = document.getElementById('sexo').value
	var mensagemDiv = document.getElementById('mensagem')
	if (document.getElementById("name").value.trim() == ""){
		mensagemDiv.textContent = "Nome em branco!"
		setTimeout(() => {
		mensagemDiv.textContent = ""
			}, 3000)
		return
	}
	if (document.getElementById("lastname").value.trim() == "") {
		mensagemDiv.textContent = "Sobrenome em branco!"
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	}
	if (document.getElementById("username").value.trim() == "") {
		mensagemDiv.textContent = "Nome de usuário em branco!"
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	} else if (document.getElementById("username").value.length < 3) {
		mensagemDiv.textContent = "Nome de usuário muito curto! (Precisa haver mais de 3 caracteres)"
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	}
	if (document.getElementById("years").value.trim() == "") {
		mensagemDiv.textContent = "Idade em branco!"
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	} else if (parseInt(document.getElementById("years").value) < 13) {
		mensagemDiv.textContent = "Deve ser maior de treze anos para cadastrar-se!"
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	}
	if (sexo === "selecione") {
		mensagemDiv.textContent = 'Por favor, selecione uma opção de sexo.'
		setTimeout(() => {
			mensagemDiv.textContent = ""
		}, 3000)
		return
	}
	window.location.href = "https://www.roblox.com/home"
}