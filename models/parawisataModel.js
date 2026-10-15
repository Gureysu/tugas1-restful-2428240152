let Parawisata = [
    { id: 1, nama: "Kawah Putih", kota: "Bandung", kategori: "alam", hargaTiket: 30000, jamBuka: "07.00-17.00" },
    { id: 2, nama: "Tangkuban Perahu", kota: "Bandung", kategori: "alam", hargaTiket: 50000, jamBuka: "08.00-16.00" },
];
let nextId = 3;

function getAll(kota, kategori) {
    if (kategori) return Parawisata.filter((p) => p.kategori === kategori);
    return Parawisata;
}

function getById(id) {
    return Parawisata.find((p) => p.id === id);
}

function create(data) {
    const baru = { id: nextId++, ...data };
    Parawisata.push(baru);
    return baru;
}

function update(id, data) {
    const index = Parawisata.findIndex((p) => p.id === id);
    if (index === -1) return null;
    Parawisata[index] = { ...Parawisata[index], ...data, id };
    return Parawisata[index];
}

function remove(id) {
    const index = Parawisata.findIndex((p) => p.id === id);
    if (index === -1) return false;
    Parawisata.splice(index, 1);
    return true;
}

module.exports = { getAll, getById, create, update, remove };