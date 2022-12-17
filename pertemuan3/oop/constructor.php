<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;

  # method constructor
  public function __construct($nama, $alamat, $jurusan)
  {
    $this->nama = $nama;
    $this->alamat = $alamat;
    $this->jurusan = $jurusan;
  }

  # membuat method
  public function setNama($data)
  {
    $this->nama = $data;
  }
  public function getNama()
  {
    return $this->nama;
  }
  public function setAlamat($data)
  {
    $this->alamat = $data;
  }
  public function getAlamat()
  {
    return $this->alamat;
  }
  public function setJurusan($data)
  {
    $this->jurusan = $data;
  }
  public function getJurusan()
  {
    return $this->jurusan;
  }
}

# membuat object aufa dari class Person
$aufa = new Person("Aufa Billah", "Depok", "Teknik Informatika");
echo $aufa->getNama() . "<br>";
echo $aufa->getAlamat() . "<br>";
echo $aufa->getJurusan() . "<br>";

# membuat object ismail dari class Person
$ismail = new Person("Ismail Yusuf", "Bekasi", "Sistem Informasi");
echo $ismail->getNama() . "<br>";
echo $ismail->getAlamat() . "<br>";
echo $ismail->getJurusan() . "<br>";
