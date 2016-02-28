<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {
        $this->UserTableSeeder();
    }


    /**
     * Seeding user table.
     *
     * @return void
     */
    public function UserTableSeeder(){
        //Temporarily disable the mass assignment protection of the model which helps to seed
        Model::unguard();
        //Empty users table
        DB::table('users')->delete();

        $user = array(
                'name' => 'Sabbir Rahman Sakib',
                'email' => 'sakib3@gmail.com',
                'password' => Hash::make('secret'),

        );

        // create a user in the database
        User::create($user);


        Model::reguard();
    }
}
