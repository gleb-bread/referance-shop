<?php
    require_once __DIR__ . '/models/vendor/autoload.php';

    
    use DiDom\Document;

    echo new Document('https://moscow.petrovich.ru', true);

    
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
    
?>