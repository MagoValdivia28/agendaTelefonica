class contato{
    constructor(name, tell, cell, imagem, data, email, cep, city, insta, github){
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
        this.client = this.possibleClient();
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

class contatoList{
    constructor(){
        this.list = [];
    }

    addontat(param){
        this.list.push(param);
    }
}
const newContatoList = new contatoList();

