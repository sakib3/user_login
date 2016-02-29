<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function it_shoud_show_the_main_view()
    {
        $this->visit('/')
             ->see('Main View');
    }

    /** @test */
    public function post_api_authenticate_returns_json()
    {
       $this->json('POST', '/api/authenticate', ['email' => 'Test','password'=> 'password'])
            ->seeJson([
                'error' => 'invalid_credentials',
            ]);

    }
    /** @test */
    public function post_api_authenticate_response_401()
    {
      $response = $this->call('POST', '/api/authenticate', ['email' => 'Test','password'=> 'password']);;

      $this->assertEquals(401, $response->status());
    }


    /** @test */
    public function post_api_authenticate_response_json_has_key_named_token()
    {
      $this->json('POST', '/api/authenticate', ['email' => 'sakib3@gmail.com','password'=> 'secret'])
            ->seeJsonStructure([
                  '*' => 'token'

              ]);
    }
}
