function isandroid() {
    return /Android/.test(navigator.userAgent);
}

function ocultarQR(){
    var QR = document.getElementById('qr')
    QR.hidden = true
}

function ocultarLink(){
    var link = document.getElementById('link')
    link.hidden = true
}

function inicio(){
    const navType = isandroid()
    if (navType){
        ocultarQR()

    }
    else {
        ocultarLink()

    }
}
window.onload = inicio