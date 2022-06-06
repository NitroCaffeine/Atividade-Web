try{
    FuncStorage()

} catch(e){

}



function getValue() {
    
    const input_nome = document.getElementById('nome').value
    const input_nota1 = document.getElementById('nota1').value
    const input_nota2 = document.getElementById('nota2').value
    const input_nota3 = document.getElementById('nota3').value

    if (input_nome == '' || input_nota1 == '' || input_nota2 == '' || input_nota3 == '') {
        return false
    }



    obj = {
      
        nome: input_nome,
        nota1: input_nota1,
        nota2: input_nota2,
        nota3: input_nota3,
        media: null,
        situacao: null,

    }

   



    return obj

}


function Val() {

    const data = getValue()

    console.log(data)

    if (data === false) {
        alert("Insira todos os dados")
    }

    window.location.href = 'tabela.html'


    localStorage.setItem(data.nome, JSON.stringify(data))





}


function FuncStorage() {
    let dados = []


    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        var value = localStorage.getItem(key);

        dados.push(JSON.parse(value))

        // console.log('Key: ' + key + ', Value: ' + value);

    }

    dados.forEach(objeto => {
        situation(objeto)


    })


    for (var i = 0; i < dados.length; i++) {
        let tbody = document.getElementById('tabela')
        tbody.innerHTML += `<tr id=${i}></tr>`

        let tr_element = document.getElementById(`${i}`)

        if (dados.indexOf(dados[i]) == tr_element.id) {
            console.log(tr_element.id, dados[i])


            tr_element.innerHTML += `<td> ${dados[i].nome} </td>`
            tr_element.innerHTML += `<td> ${dados[i].nota1} </td>`
            tr_element.innerHTML += `<td> ${dados[i].nota2} </td>`
            tr_element.innerHTML += `<td> ${dados[i].nota3} </td>`
            tr_element.innerHTML += `<td> ${dados[i].media} </td>`
            tr_element.innerHTML += `<td> ${dados[i].situacao} </td>`

        }


    }

}

function situation(dados) {

    nota1 = parseFloat(dados.nota1)
    nota2 = parseFloat(dados.nota2)
    nota3 = parseFloat(dados.nota3)


    const media = (nota1 + nota2 + nota3) / 3

    dados.media = media.toFixed(2)

    console.log(media)


    if (media >= 7.0) {

        dados.situacao = "Aprovado"

    }
    else if (4.0 <= media && media < 7.0) {
        dados.situacao = "Prova Final"
    }
    else if (media < 4.0) {
        dados.situacao = "Reprovado"
    }

}






