var data = {
    "itens": [
        {
            "id": 1,
            "name": "Smartphone Apple Iphone 7 128GB",
            "idHtml": "iphone",
            "parcelas": 389.90,
            "aVista": 3509.10,
            "img": "../static/img/iphone.png",
            "active": false
        },
        {
            "id":2,
            "name": "Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana",
            "idHtml": "tv",
            "parcelas": 134.11,
            "aVista": 1139.90,
            "img": "../static/img/smart_tv.png",
            "active": false
        },
        {
            "id": 3,
            "name": "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
            "idHtml": "camera",
            "parcelas": 235.20,
            "aVista": 1999.20,
            "img": "../static/img/camera1.png",
            "active": false
        },
        {
            "id": 4,
            "name": "Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB",
            "idHtml": "notebook",
            "parcelas": 259.90,
            "aVista": 2599.00,
            "img": "../static/img/notebook1.png",
            "active": false
        }
        
    ]
}


var totalAVista = totalParcelado = 0.00;
var tv = smartphone = camera = notebook = false;


function addCart(clicked_id) {
    
    var indice;
    if (clicked_id == "addCart0") {
        indice = 0;
    }
    else if (clicked_id == "addCart1") {
        indice = 1;
    }
    else if (clicked_id == "addCart2") {
        indice = 2;
    }
    else if (clicked_id == "addCart3") {
        indice = 3;
    }

    var div = document.createElement('div');
    div.className = 'itemCart';
    div.id = 'itemCart' + indice;
    var close = '<a href="#" class="itemCartDel" id="delCart' + indice + '" onclick="delCart(this.id)">X</a>';
    var img = '<img src="' + data.itens[indice].img + '" alt="' + div.id + '" class="imgProdutoCart" id="' + div.id + '">';
    var titulo = '<p class="tituloProdutoCart" id="' + div.id + '">' + data.itens[indice].name; 
    var parcelas = '<p class="valorProdutoCart" id="' + div.id + '">10x R$ ' + data.itens[indice].parcelas;
    var aVista = '<br>ou R$ ' + data.itens[indice].aVista + ' à vista </p>';
    div.innerHTML = close + img + titulo + parcelas + aVista;
    

    if (data.itens[indice].active == false) {
        var element = document.getElementById("dropdownMenu");
        element.insertBefore(div, element.firstChild);
        data.itens[indice].active = true;
        
        //Cálculos
        totalParcelado += data.itens[indice].parcelas;
        totalAVista += data.itens[indice].aVista;

        document.getElementById("valorParcelas").innerHTML = totalParcelado.toFixed(2);
        document.getElementById("valorAVista").innerHTML = totalAVista.toFixed(2);
    }
}

function delCart(clicked_id) {

    var indice;
    if (clicked_id == "delCart0") {
        indice = 0;
    }
    else if (clicked_id == "delCart1") {
        indice = 1;
    }
    else if (clicked_id == "delCart2") {
        indice = 2;
    }
    else if (clicked_id == "delCart3") {
        indice = 3;
    }

    var element = document.getElementById('itemCart' + indice);
    element.parentNode.removeChild( element );
    data.itens[indice].active = false;

    totalParcelado -= data.itens[indice].parcelas;
    totalAVista -= data.itens[indice].aVista;
    
    document.getElementById("valorParcelas").innerHTML = totalParcelado.toFixed(2);
    document.getElementById("valorAVista").innerHTML =  Math.abs(totalAVista.toFixed(2)).toFixed(2);
}

function openDropdownMenu() {
    document.getElementsByClassName("dropdownMenu")[0].style.transform = "scaleY(1)";
    document.getElementsByClassName("backgroundSide")[0].style.height = "100%";
}

document.addEventListener('click', evt => {
        if (evt.path.indexOf(document.querySelector('div.dropdownMenu')) < 0) {
            document.getElementsByClassName("dropdownMenu")[0].style.transform = "scaleY(0)";
            document.getElementsByClassName("backgroundSide")[0].style.height = "0";
        }    
}, true);