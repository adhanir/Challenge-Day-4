var angka = prompt("Masukkan Bilangan : ");
// ganjil genap
var bil = function (angka) {
  if (angka % 2 == 0) {
    alert(angka + " " + " adalah bilangan genap");
  } else {
    alert(angka + " " + " adalah bilangan ganjil");
  }
  //   perkalian
  var kali = angka * 5;
  alert("Hasil perkalian " + angka + " kali 5" + " adalah" + kali);
  return angka;
  //   bilangan prima
  for (var i = 2; i <= angka; i++) {
    if (angka % 1 == 0) {
      alert(angka + " " + "bukan bilangan prima");
    }
  }
  alert(angka + " " + "bilangan prima");
};
