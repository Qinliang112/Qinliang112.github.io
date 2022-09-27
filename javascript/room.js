var modal = document.getElementById("conf-modal");

window.onclick = function(event) {
    if (event.target == modal) {
       close_modal();
    }
}

function random() {
    var result           = '';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < 3; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

   return result;
}

function parse_stock() {
    var stocks = [];
    var stock = localStorage.getItem("stock");

    if (stock == null) {
        return stocks;
    }

    stock_count = stock.length / 3

    for (var i = 0; i < stock_count; i++) {
        var counter = i * 3;
        stocks.push(stock.slice(counter, counter + 3));
    }

    return stocks
}

function add_stock(img_name) {
    var stocks = localStorage.getItem('stock');
    var stock_id = random()

    if (stocks == null) {
        stocks = stock_id
    } else {
        stocks += stock_id
    }

    localStorage.setItem("stock", stocks);
    localStorage.setItem(stock_id, img_name)
}

function get_stock() {
    var stocks =  parse_stock()
    var images = []

    for (var i = 0; i < stocks.length; i++) {
        stock_id = stocks[i]
        images.push(localStorage.getItem(stock_id))
    }

    return images
}

function print_stock() {
    images = get_stock()
    length = images.length
    txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus recusandae, et aperiam corrupti quod temporibus, explicabo quas eligendi commodi sunt, dicta voluptas porro fuga illo. Assumenda magnam maiores necessitatibus.'
    html = ''

    for (var i = 0; i < length; i++) {
        html += '<div class="cart-images"><div class="wrapper"><div class="img-text"><img src="../images/rooms/' + images[i] +'.png"><p>' + txt + '</p></div><div class="quan"><h2>1</h2><h2>RM 99.99</h2></div></div></div>'
    }
    
    document.getElementById("container").innerHTML = html;
}

function clear_stock() {
    localStorage.clear()
}

var container = document.getElementById("container")

if (container != null) {
    print_stock()

    window.addEventListener('storage', (event) => {
        print_stock()
    });
}


function close_modal() {
    modal.style.display = "none";
}

function show_modal() {
    modal.style.display = "block";
}
