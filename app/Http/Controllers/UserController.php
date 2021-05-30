<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class UserController extends Controller
{
    public function register(Request $request){

        $validator = Validator::make($request->json()->all() ,[
            'name'=> 'required|string|max:255',
            'email'=> 'required|string|email|max:255|unique:users',
            'password'=> 'required|string|min:6'
        ]);



        try{
            if($validator->fails()){
                $validator->errors("jkggj");

                return response()->json([
                    "success" => false,
                    "message" => "form validation error",
                    "error" => $validator->errors()
                ],422);
            }
            $user = User::Create([
                'name'=> $request->json()->get('name'),
                'email'=> $request->json()->get('email'),
                'password'=> Hash::make($request->json()->get('password'))
            ]);
        }catch(JWTException $e){
            return response()->json(['success'=> false, "message" => "Could Not Create Token", 'error'=>'Could_not_create_token'],500);
        }

        $token = JWTAuth::fromUser($user);
        return response()->json(['success'=>true ,'message'=>'Register Successfully', 'token' => $token, compact('user')],201);

    }
    public function login(Request $request){

        $credentials = $request->json()->all();
        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['success'=> false, 'message'=>'Invalid Credentials', 'error'=>'Invalid Credentials'],400);
            }
        }catch(JWTException $e){
            return response()->json(['success'=> false, 'message'=>'Could not create User Authentication token', 'error'=>'Could_not_create_token'],500);
        }
        return response()->json(['success'=>true ,'message'=>'Redirecting Dashbard....', 'token' => $token]);
    }


    public function getAuthenticatedUser(){
        // return response()->json(['error'=>JWTAuth::parseToken()->authenticate()],200);

        try{
            if(!$user = JWTAuth::parseToken()->authenticate()){
                return response()->json(['Invalid Credentials'],404);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return response()->json(['error'=>'token_expired'],$e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\TokenInvaliedException $e){
            return response()->json(['error'=>'token_invalid'],$e->getStatusCode());
        }catch(JWTException $e){
            return response()->json(['error'=>'token_absent'],500);
        }


        return response()->json(compact('user'));
    }
}
