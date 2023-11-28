<?php
namespace parser;

class AParser{

    public static $product_title;
    public static $product_img;
    public static $product_link;
    public static $product_shop;
    public static $specifications_values;
    public static $specifications_titles;

    public function parsingPage($document){
        $this->parseTitle($document);
        $this->parseImg($document);
        $this->parseLink($document);
        $this->parseSpecificationsValues($document);
        $this->parseSpecificationsTitles($document);
        return $this->getParseParams();
    }

    public function parseTitle($document){
       self::$product_title = $document->title;
    }

    public function parseImg($document){
        self::$product_img = $document->img;
    }

    public function parseLink($document){
        self::$product_link = $document->link;
    }

    public function parseSpecificationsValues($document){
        self::$specifications_values = $document->specifications_values;
    }

    public function parseSpecificationsTitles($document){
        self::$specifications_values = $document->specifications_titles;
    }
    
    public function getParseParams() {
        return [
            'product_title' => self::$product_title,
            'product_img' => self::$product_img,
            'product_link' => self::$product_link,
            'product_shop' => self::$product_shop,
            'specifications_values' => self::$specifications_values,
            'specifications_titles' => self::$specifications_titles,
        ];
    }
}
?>