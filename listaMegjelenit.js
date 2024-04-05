export function htmlOsszeallit(lista){
    //tablazatot allitok ossze:
    let txt = "<table class='table table-striped'>";
    txt += "<thead><tr><th>Nev</th><th>Kor</th><th>Nem</th></tr></thead>";
    txt += "<tbody>"
    lista.forEach(elem => {
        //a tablanak egy sora:
        txt += `<tr><td>${elem.nev}</td><td>${elem.kor}</td><td>${elem.nem}</td></tr>`;
    });

    txt += "</tbody></table>";
    return txt;
}

export function megjelenit(txt){
    const divELEM=$(".adatok")
    divELEM.html(txt);

}