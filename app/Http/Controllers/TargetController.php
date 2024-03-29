<?php

namespace App\Http\Controllers;

use App\Target;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TargetController extends Controller
{
    /**
     * Returns the target for the logged in user
     */
    public function getForUser()
    {
        return $this->getTargetForUser();
    }

    /**
     * Updates target metrics for logged in user
     */
    public function updateForUser(Request $request)
    {
        $data = $request->validate([
            'calories' => 'required|integer',
            'protein' => 'required|integer',
            'fat' => 'required|integer',
            'carbohydrates' => 'required|integer',
        ]);

        $target = $this->getTargetForUser();

        $target->calories = $data['calories'];
        $target->protein = $data['protein'];
        $target->fat = $data['fat'];
        $target->carbohydrates = $data['carbohydrates'];
        $target->is_updated = true;

        $target->save();

        return $this->formatTargetResponse($target);
    }

    /**
     * Retrives target for logged in user
     */
    private function getTargetForUser()
    {
        $user = Auth::user();
        $target = Target::where('user_id', $user->id)->first();

        return $this->formatTargetResponse($target);
    }

    /**
     * Returns formatted target response
     */
    private function formatTargetResponse($target) {
        return [
            'calories' => $target->calories,
            'protein' => $target->protein,
            'fat' => $target->fat,
            'carbohydrates' => $target->carbohydrates,
            'isUpdated' => $target->is_updated,
        ];
    }
}
