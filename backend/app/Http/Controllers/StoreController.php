<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Http\Controllers;


use App\Repositories\StoreRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class StoreController extends Controller {

    private $storeRepository;

    public function __construct(StoreRepository $storeRepository) {
        $this->storeRepository = $storeRepository;
    }


    public function primary() {
        return $this->storeRepository->primary();
    }


    public function show(Request $request) {
        $reqLat = $request->input('latitude');
        $reqLong = $request->input('longitude');

        return $this->storeRepository
            ->all()
            ->map(function ($store) use ($reqLat, $reqLong) {
                return [
                    'store' => $store,
                    'distance' => $this->distance($store->latitude, $store->longitude, $reqLat, $reqLong)
                ];
            })
            ->sortBy('distance')
            ->flatten()
            ->first();
    }

    private function distance($lat1, $lon1, $lat2, $lon2) {
        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;

        return ($miles * 1.609344); // kilometer
    }
}