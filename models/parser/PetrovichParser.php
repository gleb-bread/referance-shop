<?php
namespace parser;

class PetrovichParser extends AParser{

    public function __construct(){
        $this::$product_shop = 'Петрович';
    }

    public function parseTitle($document)
    {   
        echo $document;
        exit();
        $title = $document->find('div.product-title')->find('h1[data-test="product-title"]')->text();
        self::$product_title = $title;
    }
}


?>