<?php
/**
 * Created by vunguyenhung on 5/10/17
 */

namespace app\Http\Controllers;


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
        $this->mqtt->publish("s2a", '123', 0);
        $this->mqtt->close();
        return 'message sent';
    }

    public function testSubscribe() {
        $this->mqtt->subscribe('a2s', 0, function (\Lightning\Response $response) {
            echo $response->getMessage();
            exit(1);
        });

        $this->mqtt->listen();
    }

}