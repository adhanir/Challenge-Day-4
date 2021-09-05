var leap = function (tahun) {
  if ((0 == tahun % 4 && !0 == tahun % 100) || 0 == tahun % 400) {
    console.log(" tahun kabisat");
  } else {
    console.log("bukan tahun kabisat");
  }
};
leap(2015);
