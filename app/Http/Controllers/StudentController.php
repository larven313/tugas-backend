<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use PHPUnit\Framework\MockObject\Builder\Stub;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = Student::all();
        $data = [
            'message' => "Get All Student",
            'data' => $students
        ];

        return response($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // tangkap inputan dari user
        $input = [
            "nama" => $request->nama,
            "nim" => $request->nim,
            "email" => $request->email,
            "jurusan" => $request->jurusan
        ];

        // insert data ke DB lewat eloquent create
        $student = Student::create($input);

        // balikin response-nya
        $response = [
            "message" => "Student is created successfully",
            "data" => $student
        ];

        return response($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $student = Student::find($id);
        if ($student) {
            $data = [
                'message' => "Get Detail Student",
                'data' => $student
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Data not found"
            ];

            return response($data, 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // cari update data
        // cari data yang ingin di-update apakah ada atau tidak
        // jika ada maka update datanya
        // jika tidak ada maka munculkan pesan data tidak ada
        $student = Student::find($id);



        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];
            $student->update($input);

            $data = [
                'message' => 'Data is updated',
                'data' => $student
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Data not found"
            ];

            return response($data, 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // cari id
        // jika ada, hapus data
        // jika tidak ada, kembalikan pesan tidak ada

        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'Data is deleted'
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Data not found"
            ];

            return response($data, 404);
        }
    }
}
