class Contato {
    constructor(name, tell, cell, imagem, data, email, cep, city, insta, github) {
        this.name = name;
        this.tell = tell;
        this.cell = cell;
        this.imagem = imagem;
        this.data = data;
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.insta = insta;
        this.github = github;
        this.age = this.getPersonAge()
        this.zodiac = this.getZodiacSign()
    }

    getZodiacSign() {
        let birthdate = new Date(this.data);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getPersonAge() {
        console.log("passou pela conta da idade");

        const birthdaydate = this.data;
        const birthYear = new Date(birthdaydate).getFullYear();
        const weYear = new Date().getFullYear();
        const birthMonth = new Date(birthdaydate).getMonth() + 1;
        const weMonth = new Date().getMonth() + 1;

        const age = weYear - birthYear;
        if (birthMonth > weMonth) {
            return age - 1;
        } else {
            return age;
        }
    }
}

class contatoList {
    constructor() {
        this.list = [];
    }
    addContato(param) {
        if (!isAnyImputAmpty()) {
            sendErrorMsg("Preecha todos os campos")
            this.list.push(param);
        }
    }
}
const newContatoList = new contatoList();

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");
    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}
function isAnyImputAmpty() {

    const name = document.getElementById("name").value;
    const tell = document.getElementById("tell").value;
    const cell = document.getElementById("cell").value;
    const imagem = document.getElementById("imagem").value;
    const data = document.getElementById("data").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const insta = document.getElementById("insta").value;
    const github = document.getElementById("github").value;

    if (name == "" || tell == "" || cell == "" || imagem == "" || data == "" || email == "" || cep == "" || city == "" || insta == "" || github) {
        return true;
    } else if (!isURLValida(imgLink)) {
        sendErrorMsg("URL da imagem inválida!");
    }else {
        return false;
    }
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function clearField() {
    document.getElementById("name").value = ""
    document.getElementById("tell").value = ""
    document.getElementById("cell").value = ""
    document.getElementById("imagem").value = ""
    document.getElementById("data").value = ""
    document.getElementById("email").value = ""
    document.getElementById("cep").value = ""
    document.getElementById("city").value = ""
    document.getElementById("insta").value = ""
    document.getElementById("github").value = ""

}
function addNewContatoList() {
    let name = document.getElementById("name").value;
    let tell = document.getElementById("tell").value;
    let cell = document.getElementById("cell").value;
    let imagem = document.getElementById("imagem").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let github = document.getElementById("github").value;

    const contato = new Contato(name, tell, cell, imagem, data, email, cep, city, insta, github);

    isAnyImputAmpty();
    sendErrorMsg(msg)
    newContatoList.addContato(contato)
    clearField()
}
let msg = ""

console.log(newContatoList);

function wpp(cell) {
    let link = "https://api.whatsapp.com/send?phone=55" + cell;
    return link;
}

function showAllContacts() {
    let showingctts = '';
    newContatoList.contato.forEach((contato) => {
        showingUsers += `
        <div class="list-eachUser">
            <img src="${contato.im}" alt=""
            <p><b>nome:</b>${contato.name}</p>
            <p><b>telefone:</b>${contato.tell}</p>
            <p><b>celular:</b>${contato.cell}</p>
            <p><b>idade:</b>${contato.age}</p>
            <p><b>signo:</b>${contato.zodiac}</p>
            <p><b>cidade:</b>${contato.address}</p>
            <p><b>celular:</b>${contato.telephone}</p>
            <p><b>cpf:</b>${contato.cpf}</p>
        </div>
        `
    })
    document.getElementById("user-list").innerHTML = showingctts;
}