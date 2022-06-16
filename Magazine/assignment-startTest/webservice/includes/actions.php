<?php
/**
 * @return array
 */
function getCars()
{
    return [
        [
            "id" => 1,
            "brand" => "Chevrolet",
            "type" => "Camaro",
        ],
        [
            "id" => 2,
            "brand" => "BMW",
            "type" => "M8",
        ],
        [
            "id" => 3,
            "brand" => "Tesla",
            "type" => "Model s",
        ],
        [
            "id" => 4,
            "brand" => "Tesla",
            "type" => "Roadster",
        ],
        [
            "id" => 5,
            "brand" => "Mazda",
            "type" => "MX-5",
        ],
        [
            "id" => 6,
            "brand" => "Audi",
            "type" => "A7",
        ],
        [
            "id" => 7,
            "brand" => "Bugatti",
            "type" => "Chiron",
        ],
        [
            "id" => 8,
            "brand" => "Koenigsegg",
            "type" => "Agera",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCarDetails($id)
{
    $tags = [
        1 => [
            "brand" => "Chevrolet",
            "type" => "Camaro",
            "top_speed" => "318 km/h",
            "release_date" => '1967'
        ],
        2 => [
            "brand" => "BMW",
            "type" => "M8",
            "top_speed" => "305 km/h",
            "release_date" => '2019'
        ],
        3 => [
            "brand" => "Tesla",
            "type" => "Model s",
            "top_speed" => "322 km/h",
            "release_date" => '2012'
        ],
        4 => [
            "brand" => "Tesla",
            "type" => "Roadster",
            "top_speed" => "402 km/h",
            "release_date" => '2022'
        ],
        5 => [
            "brand" => "Mazda",
            "type" => "MX-5",
            "top_speed" => "213 km/h",
            "release_date" => '1989'
        ],
        6 => [
            "brand" => "Audi",
            "type" => "A7",
            "top_speed" => "250 km/h",
            "release_date" => '2010'
        ],
        7 => [
            "brand" => "Bugatti",
            "type" => "Chiron",
            "top_speed" => "420 km/h",
            "release_date" => '2018'
        ],
        8 => [
            "brand" => "Koenigsegg",
            "type" => "Agera",
            "top_speed" => "458 km/h",
            "release_date" => '2011'
        ],
    ];

    return $tags[$id];
}
