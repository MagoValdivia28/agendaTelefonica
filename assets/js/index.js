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
        if (isAnyImputAmpty() == true) {
            envieMsg("Preecha todos os campos", "erro")
        } else if (!isURLValida(param.imagem)) {
            envieMsg("URL invalida", "erro")
        }
        else {
            envieMsg("cliente cadastrado com sucesso", "sucesso")
            this.list.push(param);
        }
    }
}
function isURLValida(imagem) {
    if (imagem.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById('msg');
    let msgEnviar = `
    <p class = "${tipoMsg}">${msg}</p>`;
    msgDiv.innerHTML = msgEnviar;

    setTimeout(function () {
        msgDiv.innerHTML = ''
    }, 4000)
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

    if (name == "" || tell == "" || cell == "" || imagem == "" || data == "" || email == "" || cep == "" || city == "" || insta == "" || github == "") {
        return true;
        ;
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
const newContatoList = new contatoList();

function comporContato() {
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

    const contacts = new Contato(name, tell, cell, imagem, data, email, cep, city, insta, github);

    isAnyImputAmpty();
    envieMsg()
    newContatoList.addContato(contacts)
    clearField()
    showAllContacts();

}
let msg = ""

console.log(newContatoList.list);


function showAllContacts() {
    let showingctts = '';
    newContatoList.list.forEach(contato => {
        showingctts += `
        <div class="list-eachctt" onclick="comporTudo">
            <img id="img1"src="${contato.imagem}">
            <p><b>nome:</b>${contato.name}</p>
            <p><b>telefone:</b>${contato.tell}</p>
            <p><b>celular:</b>${contato.cell}</p>
        </div>
        `
    })
    document.getElementById("list").innerHTML = showingctts;
}   
function dateinPTBR(data) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = data.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function formatedCellphone(cell) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cell.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function comporTudo() {
        let showingAll = '';
        newContatoList.list.forEach(contato => {
            showingctts += `
            <div class="list-eachctt" onclick="comporTudo">
                <img id="img1"src="${contato.imagem}">
                <p><b>nome:</b>${contato.name}</p>
                <p><b>telefone:</b>${contato.tell}</p>
                <p><b>celular:</b>${contato.cell}</p>
            </div>
            `
        })
        document.getElementById("list").innerHTML = showingctts;
    }   
