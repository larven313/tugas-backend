<?php

// membuat class atau cetakan
class Person
{
    // membuat property atau variable
    public $nama;
    public $alamat;
    public $jurusan;

    // method construct
    function __construct($dataNama, $dataAlamat, $datajurusan)
    {
        $this->nama = $dataNama;
        $this->alamat = $dataAlamat;
        $this->jurusan = $datajurusan;
    }

    // membuat method untuk atur nama: setNama
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

// object sukma
$sukma = new Person('Sukma Hidayatullah', 'Jakarta Barat', 'TI');
// $sukma->setNama('Sukma Hidayatullah');
// $sukma->setAlamat('Jakarta');
// $sukma->setJurusan('Teknik Informatika');
echo $sukma->getNama();
echo $sukma->getAlamat();
echo $sukma->getJurusan();

echo "<br>";

// obejct ucup
$ucup = new Person('Ucup Sarucup', 'Depok', 'SI');
// $ucup->setNama('Ucup Sarucup ');
// $ucup->setAlamat('Bandung');
// $ucup->setJurusan('Sistem Informasi');

echo $ucup->getNama();
echo $ucup->getAlamat();
echo $ucup->getJurusan();
