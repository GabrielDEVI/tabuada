function gerar() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Preencha os dados abaixo')
    } else {
        let nd = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${nd} x ${c} = ${nd*c}`
            tab.appendChild(item) 
            c++
        }
    }


}