import { emberekLISTA } from "./adat.js";

//fuggveny, metodus
//-- mukodik a hoisting, deklaracio a hatokore tetejere maszik
function kiir(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);

        
    }
}

kiir(emberekLISTA);


//fuggveny kifejezes
// = valtozonak egy fuggvenyt adunk ertekul
//-- nem mukodik a hoisting = itt eloszor kell deklaralni a fuggveny kifejezest es csak utana lehet hivni

const kiir2 = function(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element);
        console.log(lista[index]);
    }
}

kiir2(emberekLISTA);


//FOREACH
//listan akarok vegigmenni, ezen belul lesz egy nevtelen fuggvenyem
//ha kiirom latom hogy az element nem mas mint maga a listanak az eleme
//CSAK listara valo, csak listan tudok vegigmenni
//nyilfuggveny ugyanaz mint a function????
function kiir3(lista){
    /*console.log("forEach");
    lista.forEach(element, index => {
        console.log(element, index);
    });*/

    lista.forEach(function (ember, i){
        console.log(ember, i);
    });
}

kiir(emberekLISTA);


// FILTER:

// 20 evnel idosebbek listazasa
function idosebb20(lista){
    const idosebb20LISTA= lista.filter(function(ember){
        return ember.kor > 20;

    })
    console.log(idosebb20LISTA);

}

idosebb20(emberekLISTA);

/*
// ferfiak lista
function ferfiak(lista){
    const ferfiakLISTA = lista.filter(function(ember){
        return ember.nem;
    })
    console.log(ferfiakLISTA);
}

ferfiak(emberekLISTA);
*/

// 20 evnel idosebb ferfiak lista
function ferfiak(lista){
    const ferfiakLISTA = lista.filter(function(ember){
        return ember.nem && ember.kor > 20;
    })
    console.log(ferfiakLISTA);
}

ferfiak(emberekLISTA);



// SORT:
//kiirja sorrendben, sorrendbe rakja??
//vegigmegy  listaelemeken, visszater a kulonbsegevel, ez ozitiv e vagy negativ, ha ozitiv jo sorrendben van es nem csereli, ha negativ akkor rossz sorrendben van es megcsereli oket

//lista rendezese kor szerint:
function rendez(lista){
    console.log("RENDEZES **********")
    lista.sort(function(e1, e2){
        console.log(e1.kor, e2.kor, e2.kor - e1.kor);
        return e2.kor - e1.kor;
    })
    console.log(lista);
}

rendez(emberekLISTA);

//elemek osszekeverese VELETLEN SORREND kialakitasa
function kever(lista){
    console.log("Veletlen sorrend **********")
    lista.sort(function(){
        return Math.random() - 0.5;
    })
    console.log(lista);
}

kever(emberekLISTA);

