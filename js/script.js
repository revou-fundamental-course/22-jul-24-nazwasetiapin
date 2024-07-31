/*Ini Javascript*/


function formValidation() {
    console.log('ini form');
    let name = document.getElementById('input-name').value;
    console.log(name);

    // pengecekan dimana name tidak boleh ''
    if (name == '') {
        // Code ini akan di eksekusi ketika name = ''
        alert('Maaf inputan anda kosong');
    } else {
        // Code ini akan di eksekusi ketika name tidak ''
        alert('Sukses menginput');
    }
}

