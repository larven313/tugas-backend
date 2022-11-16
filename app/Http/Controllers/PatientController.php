<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ambil data dari DB
        $patient = Patient::all();

        if ($patient) {
            $data = [
                'message' => 'Get All Resource',
                'data' => $patient
            ];


            return response($data, 200);
        } else {
            $data = [
                'message' => "Data is empty"
            ];

            return response($data, 200);
        }
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
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_at' => $request->in_date_at,
            'out_date_at' => $request->out_date_at,
        ];


        // membuat validasi
        $rules = [
            'name' => 'required|min:4|max:20',
            'phone' => 'required|numeric|min:9',
            'status' => 'required|min:4|max:12',
            'in_date_out' => 'date|max:30',
            'out_date_out' => 'date|max:30',
        ];
        // membuat error message
        $messages = [
            'required' => ':attribute tidak boleh kosong',
            'min' => ':attribute karakter terlalu pendek',
            'max' => ':attribute karakter terlalu panjang',

        ];

        // jalankan validasi dengan function
        $this->validate($request, $rules, $messages);

        // insert data ke DB lewat eloquent
        $patient = Patient::create($input);


        // mengembalikan response-nya
        $response = [
            'message' => 'Resource is added sucessfully',
            'data' => $patient
        ];

        return response($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        /**
         * Show data
         * Digunakan untuk mencari data berdasarkan id
         */

        // cari data patient berdasarkan id
        $patient = Patient::find($id);

        if ($patient) {
            $data = [
                'message' => "Get Detail Resource",
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        /**
         * Fitur update
         * Sebelum update data
         * dicari dulu data yang ingin diubah berdasarkan id
         * kemudian data yang telah diambil berdasarkan id diubah berdasarkan inputan user
         */
        // ambil data patient berdasarkan id
        $patient = Patient::find($id);

        if ($patient) {
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patient->out_date_at,
            ];

            $patient->update($input);

            $data = [
                'message' => 'Resource is update successfully',
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        /** Fitur destroy
         * untuk menghapus data berdasarkan id
         * */
        // ambil data berdasarkan id
        $patient = Patient::find($id);

        if ($patient) {
            $patient->delete();

            $data = [
                'message' => 'Resource delete is successfully'
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }


        return $patient;
    }

    public function search($name)
    {
        //cari data berdasarkan nama
        $patient = Patient::where('name', '=', $name)->get();

        if ($patient) {
            $data = [
                'message' => 'Get searched resource',
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }

    public function positive()
    {
        // ambil data berdasarkan status yg positive
        $patient = Patient::where('status', '=', 'positive')->get();
        // total data positive
        $total = Patient::where('status', '=', 'positive')->get()->count();

        if ($patient) {
            $data = [
                'message' => 'Get positive resource',
                'total' => $total,
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }

    public function recovered()
    {
        // ambil data berdasarkan status yg recovered
        $patient = Patient::where('status', '=', 'recovered')->get();
        // total data recovered
        $total = Patient::where('status', '=', 'recovered')->get()->count();

        if ($patient) {
            $data = [
                'message' => 'Get recovered resource',
                'total' => $total,
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }

    public function dead()
    {
        // ambil data berdasarkan status yg dead
        $patient = Patient::where('status', '=', 'dead')->get();
        // total data dead
        $total = Patient::where('status', '=', 'dead')->get()->count();

        if ($patient) {
            $data = [
                'message' => 'Get dead resource',
                'total' => $total,
                'data' => $patient
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => "Resource not found"
            ];

            return response($data, 404);
        }
    }
}
