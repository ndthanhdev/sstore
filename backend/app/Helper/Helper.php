<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

function generateRandomUniqueSequence($length = 1, $range = ['from' => 1, 'to' => 1]) {
    if ($range['to'] < $length) return []; //violate unique constraint

    $randomUniqueElements = [];
    for ($i = 0; $i < $length; $i++) {
        do {
            $currentElement = random_int($range['from'], $range['to']);
        } while (in_array($currentElement, $randomUniqueElements));
        array_push($randomUniqueElements, $currentElement);
    }
    return $randomUniqueElements;
}