<?php
use Illuminate\Http\Response;

/**
 * Created by vunguyenhung on 5/12/17
 */
class CatalogControllerTest extends TestCase {
    private $apiURL = '/catalogs';


    /** @test */
    public function should_OK_when_index() {

//        $this->assertTrue(true);
        $this->get($this->apiURL)
            ->seeStatusCode(Response::HTTP_OK);
    }

}