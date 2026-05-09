// ==========================
// LATIHAN 1
// UBAH WARNA BACKGROUND
// ==========================

const tombolWarna = document.getElementById("btnWarna");

const warna = ["white", "lightblue", "yellow"];

let indexWarna = 0;

tombolWarna.addEventListener("click", function(){

    indexWarna++;

    if(indexWarna >= warna.length){
        indexWarna = 0;
    }

    document.body.style.backgroundColor = warna[indexWarna];

});


// ==========================
// LATIHAN 2
// TAMPILKAN NAMA
// ==========================

const tombolNama = document.getElementById("btnNama");

tombolNama.addEventListener("click", function(){

    const nama = document.getElementById("nama").value;

    document.getElementById("hasilNama").textContent =
    "Halo, " + nama + "!";

});


// EVENT KEYUP
document.getElementById("nama").addEventListener("keyup", function(){

    console.log("Sedang mengetik nama");

});


// ==========================
// LATIHAN 3
// VALIDASI FORM LOGIN
// ==========================

const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event){

    event.preventDefault();

    // Ambil nilai input
    const username =
    document.getElementById("username").value.trim();

    const password =
    document.getElementById("password").value;

    // Reset error
    document.getElementById("errorUsername").textContent = "";
    document.getElementById("errorPassword").textContent = "";
    document.getElementById("pesanBerhasil").textContent = "";

    let valid = true;

    // Validasi Username
    if(username === ""){
        document.getElementById("errorUsername").textContent =
        "Username tidak boleh kosong";

        valid = false;
    }

    // Validasi Password
    if(password.length < 8){
        document.getElementById("errorPassword").textContent =
        "Password minimal 8 karakter";

        valid = false;
    }

    // Jika valid
    if(valid){

        document.getElementById("pesanBerhasil").textContent =
        "Login berhasil!";

    }

});