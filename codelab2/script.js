function validateForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;

    if (!fname || !lname || !email || !address || !dob) {
        alert("Semua bidang harus diisi!");
        return false; 
    }
    else{
        alert("Data berhasil terkirim")
    }
    return true; 
}