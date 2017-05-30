<?php
/**
 * Created by vunguyenhung on 5/10/17
 */

namespace app\Http\Controllers;


use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class MQTTController extends Controller {
    private $mqtt;

    public function __construct() {
        $host = "hivemq";
        $port = 1883;
        $clientID = md5(uniqid());
        $username = '';
        $password = '';
        $this->mqtt = new \Lightning\App($host, $port, $clientID, $username, $password);
        if (!$this->mqtt->connect()) {
            echo "Failed to connect.\n";
        }
    }

    public function testPublish() {
        $this->mqtt->publish("s2d", '123', 0);
        $this->mqtt->close();
        return [
            'ok' => 'OK'
        ];
    }

    public function testSubscribe() {
        $this->mqtt->subscribe('d2s', 0, function (\Lightning\Response $response) {
            return ['ok' => 'OK'];
        });

        $this->mqtt->listen();
    }

    public function publishS2D(Request $request) {
        $data = $request->all();
//        print_r($data);
//        return $data;

        foreach ($data as $product){
            $this->mqtt->publish('s2d/' . $product['deviceId'], $product['quantity'], 0);
        }

        return ['msg' => config('msg.PUBLISH_SUCCESS')];
    }


    public function testCORS() {
        return [
            'ok' => 'OK'
        ];
    }
}