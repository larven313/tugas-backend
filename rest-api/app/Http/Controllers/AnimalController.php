<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// $animals = ['Kucing', 'Burung', 'Ayam'];

class AnimalController extends Controller
{
    public $animals = ['Kucing', 'Burung', 'Ayam'];
    // public function __construct()
    // {
    //     $animals = ['Kucing', 'Burung', 'Ayam'];
    // }

    function index()
    {
        foreach ($this->animals as $animal) {
            echo "$animal, ";
        }
        echo '<br>';
        echo "Menampilkan data hewan";
    }

    function store(Request $request)
    {

        array_push($this->animals, $request->nama);
        echo "<br>";
        echo "Menambahkan data hewan baru";
        echo "<br>";
        foreach ($this->animals as $animal) {
            echo "$animal, ";
        }
    }
    function update(Request $request, $id)
    {
        $this->animals[$id] = $request->nama;
        echo "Mengubah data hewan id $id";
        echo "<br>";
        foreach ($this->animals as $animal) {
            echo "$animal, ";
        }
    }
    function destroy($id)
    {
        unset($this->animals[$id]);
        echo "Menghapus data hewan id $id";
        echo "<br>";

        foreach ($this->animals as $animal) {
            echo "$animal, ";
        }
    }
}
