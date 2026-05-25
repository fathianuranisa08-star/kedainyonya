function login(event){

event.preventDefault()

let username = document.getElementById("username").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!username || !password){
    alert("Login Gagal")
    return
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cari user
let user = akun.find(u =>
    u.username === username && u.password === password
)

if(!username){
    alert("Login Berhasil")
    return
}

// simpan session login
localStorage.setItem("userLogin", JSON.stringify(username))

alert("Login successful")

//pindahin ke halaman menu kedai
window.location.href = "kedai.html"
}