function hide (elements) {
    elements = elements.length ? elements : [elements];

    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
}

function show (elements) {
    elements = elements.length ? elements : [elements];

    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'block';
    }
}

function toggle_desktop() {
    document.getElementById('desktop').style.display = 'flex'
    document.getElementById('mobile').style.display = 'none';
}
function toggle_mobile() {
    document.getElementById('desktop').style.display = 'none'
    document.getElementById('mobile').style.display = 'flex';
}
  
function on_reload() {
    var width = window.outerWidth;

    var home = 'Home'
    var i_home = '<i class="icon icon-home"> Home</i>'

    var services = 'Services'
    var i_services= '<i class="icon icon-services"> Services</i>'

    var about = 'About'
    var i_about = '<i class="icon icon-about"> About</i>'

    var contact = 'Contact'
    var i_contact = '<i class="icon icon-contact"> Contact</i>' 

    close_bar()

    if (width > 860) {
        toggle_desktop()
        document.getElementById('home').innerHTML = i_home;
        document.getElementById('services').innerHTML = i_services;
        document.getElementById('about').innerHTML = i_about;
        document.getElementById('contact').innerHTML = i_contact;

    } else if (width > 680){
        toggle_desktop()
        document.getElementById('home').innerHTML = home;
        document.getElementById('services').innerHTML = services;
        document.getElementById('about').innerHTML = about;
        document.getElementById('contact').innerHTML = contact;
        
    } else {
        toggle_mobile()
    }
}

function on_ready() {
    on_reload();
}

function open_bar() {
    document.getElementById("mobile-bar").style.width = '40%';
    document.getElementById("main").style.marginLeft = '0';
}

function close_bar() {
    document.getElementById("mobile-bar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0"; 
}