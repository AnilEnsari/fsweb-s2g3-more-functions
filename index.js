// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path /* kodlar buraya */) {
  const bolunenDosyaAdi = path.split("/");
  return bolunenDosyaAdi[bolunenDosyaAdi.length - 1];
  // kodlar buraya
}
console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(Array2 /* kodlar buraya */) {
  //let ortalama = Array2.reduce((accumulator, currentValue) => {
  // return accumulator + currentValue;
  // }, 0);
  // return ortalama / Array2.length;
  if (Array2.length === 0) {
    return null;
  } else {
    let total = 0;
    for (let i = 0; i < Array2.length; i++) {
      total += Array2[i];
    }
    return total / Array2.length;
  }
}
console.log(ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayiArray2, ortBul2 /* kodlar buraya */) {
  let ort2 = ortBul2(sayiArray2);
  // let buyukSayilar = sayiArray2.filter((x) => x >= ort2);
  //  return buyukSayilar;
  let newArray2 = [];
  if (sayiArray2.length === 0) {
    return null;
  } else {
    for (let i = 0; i < sayiArray2.length; i++) {
      if (sayiArray2[i] >= ort2) {
        newArray2.push(sayiArray2[i]);
      }
    }

    return newArray2;
  }
}
console.log(
  ortalamadanBuyukleriBul(
    [109, 216, 288, 143, 71, 185, -278, 194, 5],
    ortalamaBul
  )
);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
