<?php
/**
 * Created by vunguyenhung on 6/4/17
 */

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;
use Laravel\Lumen\Routing\Controller;

class FileController extends Controller {

    public function saveFile() {
        $file = Request::file('file');
        Storage::disk('local')->put($file->getClientOriginalName(), File::get($file));

        return route('files/{name}.GET', ['name' => $file->getClientOriginalName()]);
    }

    public function deleteFile($name) {
        Storage::delete($name);
        return response()->json('success');
    }

    public function getFileList() {

        $files = Storage::disk('local')->files('/');
        return response()->json($files);

    }

    public function viewFile($name) {

        return response()->make(Storage::disk('local')->get($name), 200, [
            'Content-Type' => Storage::disk('local')->mimeType($name),
            'Content-Disposition' => 'inline; ' . $name,
        ]);

    }


}