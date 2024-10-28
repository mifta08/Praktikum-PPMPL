const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', function () {

    // Pengujian pengurangan dengan bilangan negatif
    it('seharusnya mengembalikan hasil yang benar ketika mengurangi bilangan negatif, misalnya 2 - (-3)', function () {
        expect(kurang(2, -3)).to.equal(5);
    });

    it('seharusnya mengembalikan hasil negatif ketika mengurangi bilangan yang lebih kecil dari bilangan negatif, misalnya -5 - (-3)', function () {
        expect(kurang(-5, -3)).to.equal(-2);
    });

    // Pembagian dengan nol
    it('seharusnya mengembalikan error ketika membagi dengan 0', function () {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    it('seharusnya mengembalikan hasil negatif ketika membagi bilangan positif dengan bilangan negatif, misalnya 6 / -3', function () {
        expect(bagi(6, -3)).to.equal(-2);
    });

    it('seharusnya mengembalikan hasil positif ketika membagi bilangan negatif dengan bilangan negatif, misalnya -6 / -3', function () {
        expect(bagi(-6, -3)).to.equal(2);
    });



    // Negative Case untuk tambah
    it('seharusnya mengembalikan NaN jika input adalah string, misalnya "2" + 2', function () {
        expect(tambah("2", 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika input adalah null, misalnya null + 2', function () {
        expect(tambah(null, 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika kedua input adalah string, misalnya "2" + "3"', function () {
        expect(tambah("2", "3")).to.be.NaN;
    });

    // Negative case untuk fungsi kali
    it('seharusnya mengembalikan NaN jika input adalah string, misalnya "2" * 2', function () {
        expect(kali("2", 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika input adalah null, misalnya null * 2', function () {
        expect(kali(null, 2)).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika kedua input adalah string, misalnya "2" * "3"', function () {
        expect(kali("2", "3")).to.be.NaN;
    });
})

