<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Validator;

class AuthenticateController extends Controller
{
      public function __construct()
      {
         // Apply the jwt.auth middleware to all methods in this controller
         // except for the authenticate method. We don't want to prevent
         // the user from retrieving their token if they don't already have it
         //$this->middleware('jwt.auth', ['except' => ['authenticate']]);
      }

      //if valid token then only proceed
      public function index()
      {

          // this will set the token on the object
          JWTAuth::parseToken();

          // get the authenticated user
          $user = JWTAuth::parseToken()->authenticate();

          // Return the authenticated user
          return $user;

      }

      public function authenticate(Request $request)
      {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors return a JWT
        return response()->json(compact('token'));
      }
      public function register(Request $request){


            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|unique:users',
                'password' => 'required'
            ]);


            if ($validator->fails()) {
                return response()->json(['error' => $validator->messages()], 400);
            }
            else{
              User::create([
                  'name' => $request->name,
                  'email' => $request->email,
                  'password' => bcrypt($request->password),
              ]);

              $credentials = $request->only('email', 'password');

              try {
                  // verify the credentials and create a token for the user
                  if (! $token = JWTAuth::attempt($credentials)) {
                      return response()->json(['error' => 'invalid_credentials'], 401);
                  }
              } catch (JWTException $e) {
                  // something went wrong
                  return response()->json(['error' => 'could_not_create_token'], 500);
              }

              // if no errors return a JWT
              return response()->json(compact('token'));

            }
      }
}
