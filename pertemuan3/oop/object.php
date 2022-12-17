<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;
}

# membuat object aufa dari class Person
$aufa = new Person();
# mengakses property nama
echo $aufa->nama;
# memberikan nilai baru ke property nama
$aufa->nama = "Aufa Billah";
echo "$aufa->nama <br>";

# membuat object ismail dari class Person
$ismail = new Person();
echo $ismail->nama;
$ismail->nama = "Ismail Yusuf";
echo "$ismail->nama <br>";
