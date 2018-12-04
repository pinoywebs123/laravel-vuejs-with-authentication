<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public function getDate(){
    	return $this->created_at->toDayDateTimeString();
    }
}
