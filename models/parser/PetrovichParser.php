<?php
namespace parser;

class PetrovichParser extends AParser{

    public function __construct(){
        $this::$product_shop = 'Петрович';
    }

    public function parseTitle($document)
    {
        $title = $document->find('div.product-title')->find('h1[data-test="product-title"]')->text();
        echo $title;
        exit;
        self::$product_title = $title;
    }
}


?>