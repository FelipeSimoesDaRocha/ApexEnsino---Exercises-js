function teste() {
    debugger
    let teste = window.prompt(`Digite a data:`)
    let batata = teste.split("/")
    let data = []

    batata.map(function (value) {
        data.push(parseInt(value));
    })

    console.log("Dia: " + data[0] ,"Mês: " + data[1] , "Ano: " + data[2])

 }