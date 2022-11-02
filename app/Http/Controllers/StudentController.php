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
        //
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
        // ambil data berdasarkan id
        $students_edit = Student::find($id);


        $students_edit->nama = $request->nama;
        $students_edit->nim = $request->nim;
        $students_edit->email = $request->email;
        $students_edit->jurusan = $request->jurusan;


        $students_edit->save();

        $response = [
            'message' => 'Updated is successfully',
            'data' => $students_edit
        ];

        return response($response, 200);
        // return $request->nama;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $students_delete = Student::FindOrFail($id);

        $students_delete->delete();

        $response = [
            'message' => 'Deleted is successfully'
        ];

        return $response;
    }
}
