// ===================================
// Aplikasi Kasir - Undo/Redo & Riwayat
// ===================================

// Step 1: Implementasi Stack untuk Undo/Redo
let undoStack = [];
let redoStack = [];

function pushAction(action) {
    undoStack.push(action);
    redoStack = []; // reset redo saat ada aksi baru
    console.log(`Aksi ditambahkan: ${action}`);
}

function undo() {
    if (undoStack.length === 0) {
        console.log("Tidak ada aksi untuk di-undo");
        return;
    }

    let action = undoStack.pop();
    redoStack.push(action);
    console.log(`Undo: ${action}`);
}

function redo() {
    if (redoStack.length === 0) {
        console.log("Tidak ada aksi untuk di-redo");
        return;
    }

    let action = redoStack.pop();
    undoStack.push(action);
    console.log(`Redo: ${action}`);
}

// Step 2: Function rekursif hitung total
function hitungTotalRekursif(items, index = 0) {
    if (index >= items.length) {
        return 0;
    }

    return (items[index].harga * items[index].jumlah) +
           hitungTotalRekursif(items, index + 1);
}

// Step 3: Implementasi Queue untuk Antrian Pesanan
let antrianPesanan = [];

function tambahPesanan(pesanan) {
    antrianPesanan.push(pesanan);
    console.log(`Pesanan masuk: ${pesanan}`);
}

function prosesPesanan() {
    if (antrianPesanan.length === 0) {
        console.log("Tidak ada pesanan");
        return;
    }

    let pesanan = antrianPesanan.shift();
    console.log(`Memproses pesanan: ${pesanan}`);
}

function lihatAntrian() {
    console.log("Antrian Pesanan:");
    console.log(antrianPesanan);
}

// Step 4: Simulasi lengkap
console.log("=== SIMULASI KASIR ===\n");

// Undo / Redo
pushAction("Tambah Kopi");
pushAction("Tambah Teh");
undo();
redo();

console.log("");

// Rekursi
let items = [
    { nama: "Kopi", harga: 15000, jumlah: 2 },
    { nama: "Teh", harga: 10000, jumlah: 1 },
    { nama: "Roti", harga: 5000, jumlah: 3 }
];

console.log("Total Belanja:", hitungTotalRekursif(items));

console.log("");

// Queue
tambahPesanan("Pesanan #1");
tambahPesanan("Pesanan #2");
tambahPesanan("Pesanan #3");

lihatAntrian();

prosesPesanan();

lihatAntrian();
