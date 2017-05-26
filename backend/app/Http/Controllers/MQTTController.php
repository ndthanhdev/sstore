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
        $clientID = md5(uniqid()); // use a unique client id for each connection
        $username = ''; // username is optional
        $password = ''; // password is optional
        $this->mqtt = new \Lightning\App($host, $port, $clientID, $username, $password);
        if (!$this->mqtt->connect()) {
            echo "Failed to connect.\n";
        }
    }

    public function testPublish() {
        $this->mqtt->publish("s2d", '123', 0);
        $this->mqtt->close();
        return 'message sent';
    }

    public function testSubscribe() {
        $this->mqtt->subscribe('d2s', 0, function (\Lightning\Response $response) {
            echo $response->getMessage();
            exit(1);
        });

        $this->mqtt->listen();
    }

    public function publishS2DThenSubscribeD2S(Request $request, $deviceId) {
        $quantity = $request->only('quantity')['quantity'];

        $this->mqtt->publish('s2d/' . $deviceId, $quantity, 0);
        $this->mqtt->subscribe('d2s', 0, function (\Lightning\Response $response) {
            echo $response->getMessage();
            exit(1);
        });
        $this->mqtt->listen();
    }


}