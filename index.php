<?php
    require_once __DIR__ . '/models/vendor/autoload.php';
    
    //use parser;

    // $model = new parser\LinkStore('https://moscow.petrovich.ru');
    // $parserPetrovich = new parser\PetrovichParser;

    // $document = $model->getHTMLPage();

    // $linksCatalog = $model::getCatalogLinks($document);
    // $linksProducts = $model::getProdsuctLinks($document);

    // if(count($linksProducts) != 0){
    //     foreach($linksProducts as $link){
    //         echo $link;
    //     }
    // }
    
    $result = file_get_contents('https://api.petrovich.ru/catalog/v4/products/680046?city_code=msk&client_id=pet_site');
    echo $result;
?>