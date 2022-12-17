<?php

# membuat fungsi
function hitungLuas($jari)
{
  $phi = 3.14;
  $luasLingkaran = $phi * $jari * $jari;
  return $luasLingkaran;
}

# memanggil fungsi
echo hitungLuas(5) . "<br>";
echo hitungLuas(7) . "<br>";
echo hitungLuas(9) . "<br>";
