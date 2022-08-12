function tabuada() {
        let num = document.getElementById ("txtn")// designando a variavél num pelo id do HTML
        let tab = document.getElementById ("seltab")// designando a variavél tab pelo id DO HTML
        if (num.value.length == 0) {// se numero for igual a 0
             window.alert("Por favor, digite um numero!")// mensagem de alerta
        } else {// senão
        let n = Number(num.value)// convertendo para numero
        let c = 1 // designando variavél c
        tab.innerHTML = ``// limpando a tabuada antes de outro calculo
        while (c <= 10) {//enquanto c for menor ou igual a 10
            let item = document.createElement ("option")// criando um elemento no JS
            item.text = `${n} x ${c} = ${n*c}`// sempre entre crases
            item.value = `tab${c}`// fazendo a tabulação dos resultados
            tab.appendChild (item)// para mostar o resultado adicionando elemeto filho
            c++// fazendo a indexação de c
            }
        }
}
    