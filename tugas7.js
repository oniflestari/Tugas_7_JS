var tinggiBadan = [150, 155, 160, 165, 170, 175, 180, 185, 190, 195]

// Menampilkan Array dengan for
for (var i = 0; i < tinggiBadan.length; i++) {
  console.log(tinggiBadan[i])
}

// Menampilkan Array dengan for of
for (let x of tinggiBadan) {
  console.log(x)
}

// Hasil Analisa :
// - for :
// 	1. Kita dapat menentukan nilai index mana yang ingin ditampilkan.
// 	2. Sehingga kita dapat menampilkan sebagian maupun seluruh nilai pada Array.
// - for of :
// 	1. Semua nilai dari tiap index pada Array akan ditampung di variabel x
// 	2. Sehingga seluruh nilai pada array akan ditampilkan
// 	3. Dan kita tidak dapat menentukan index mana saja yang ingin ditampilkan