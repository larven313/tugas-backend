<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    // define kolom yang boleh di-assign masal
    protected $fillable  = ["nama", "email", "nim", "jurusan"];
}
