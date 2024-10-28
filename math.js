function validateInput(a, b) {
    // Fungsi untuk memvalidasi input
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;  // Input tidak valid
    }
    return true;  // Input valid
}

function tambah(a, b) {
    if (!validateInput(a, b)) return NaN;  // Mengembalikan NaN jika input tidak valid
    return a + b;  // Mengembalikan hasil penjumlahan
}

function kali(a, b) {
    if (!validateInput(a, b)) return NaN;  // Mengembalikan NaN jika input tidak valid
    return a * b;  // Mengembalikan hasil perkalian
}

function kurang(a, b) {
    return a - b;  // Mengembalikan hasil pengurangan
}

function bagi(a, b) {
    if (b === 0) {
        throw new Error('Tidak bisa membagi dengan nol');  // Menangani pembagian dengan nol
    }
    return a / b;  // Mengembalikan hasil pembagian
}

// Ekspor fungsi
module.exports = { tambah, kali, kurang, bagi };
