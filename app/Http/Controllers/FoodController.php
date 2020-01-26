<?php

namespace App\Http\Controllers;

use App\Food;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $date = $request->input('date');
        $user = Auth::user();
        $query = Food::where(['user_id' => $user->id]);

        if ($date) {
            $formattedDate = Carbon::parse($date);
            $query = $query->where('logged_on', '=', $formattedDate);
        }

        return $query->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $data = $request->validate(Food::VALIDATION_RULES);

        $loggedOn = date('Y-m-d');
        $data['user_id'] = $user->id;
        $data['logged_on'] = Carbon::parse($loggedOn);
        
        $food = Food::create($data);

        return $food;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $food = Food::find($id);

        if (!$food) {
            return response(['message' => "Cannot find food with id '$id'"], 404);
        }

        return $food;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $data = $request->validate(Food::VALIDATION_RULES);

        $user->name = $data['name'];
        $user->calories = $data['calories'];
        $user->protein = $data['protein'];
        $user->fat = $data['fat'];
        $user->carbohydrates = $data['carbohydrates'];
        $user->category = $data['category'];

        $user->save();

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result = Food::destroy($id);
        
        if (!$result) {
            return response(['message' => "Cannot locate food with id '$id'"], 404);
        }

        return ['message' => 'Food successfully deleted.'];
    }
}
