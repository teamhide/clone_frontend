showCart = () => {
    var con = document.getElementById("aside");
    if(con.style.display == 'none') {
        con.style.display = 'flex';
    } else {
        con.style.display = 'none';
    }
}

test = () => {
    document.getElementById("aside").style.display = 'flex';
}