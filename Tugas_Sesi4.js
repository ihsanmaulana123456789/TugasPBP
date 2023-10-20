const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungKomisi(pendapatan) {
  let uangJasa;
  let uangKomisi;

  if (pendapatan <= 200000) {
    uangJasa = 10000;
    uangKomisi = pendapatan * 0.10;
  } else if (pendapatan > 200000 && pendapatan <= 500000) {
    uangJasa = 20000;
    uangKomisi = pendapatan * 0.15;
  } else if (pendapatan > 500000) {
    uangJasa = 30000;
    uangKomisi = pendapatan * 0.20;
  }

  return uangJasa + uangKomisi;
}

rl.question('Masukkan pendapatan hari ini (dalam Rp.): ', (pendapatan) => {
  const komisi = hitungKomisi(parseFloat(pendapatan));
  console.log("Pendapatan: Rp. " + pendapatan);
  console.log("Komisi: Rp. " + komisi);
  rl.close();
});
