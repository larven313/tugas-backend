<?php

# membuat class Person
class Person
{
  # membuat property (variable)
  public $nama;
  public $alamat;
  public $jurusan;

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
$aufa = new Person();
$aufa->setNama("Aufa Billah");
echo $aufa->getNama() . "<br>";
$aufa->setAlamat(("Depok"));
echo $aufa->getAlamat() . "<br>";
$aufa->setJurusan("Teknik Informatika");
echo $aufa->getJurusan() . "<br>";

# membuat object ismail dari class Person
$ismail = new Person();
$ismail->setNama("Ismail Yusuf");
echo $ismail->getNama() . "<br>";
$ismail->setAlamat("Bekasi");
echo $ismail->getAlamat() . "<br>";
$ismail->setJurusan("Sistem Informasi");
echo $ismail->getJurusan() . "<br>";
