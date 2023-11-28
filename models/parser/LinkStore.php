<?php
namespace parser;

use DiDom\Document;

class LinkStore
{
    public static $catalogUrlList;
    public static $productUrlList;
    public static $catalogLinkName;
    public static $checkedCatalogUrlList;
    public static $productLinkName;
    public static $checkedProductUrlList;
    public static $pageNow;
    public static $baseUrl;
    
    public function __construct($url){
        $this::$catalogUrlList = [];
        $this::$productUrlList = [];
        $this::$checkedCatalogUrlList = [];
        $this::$checkedProductUrlList = [];
        $this::$catalogLinkName = 'catalog';
        $this::$productLinkName = 'product';
        $this::$pageNow = 'main';
        $this::$baseUrl = $url;
    }

    public function setCatalog($newCatalogName){
        self::$catalogLinkName = $newCatalogName;
    }

    public function getHTMLPage($url=''){
        
        if(is_string($url) && !strlen($url)){
            return new Document(self::$baseUrl, true);
        } else {
            if(strpos($url, self::$catalogLinkName)){

                self::handlerCatalogLink($url);
                
                return new Document($url, true);

            } else if (strpos($url, self::$productLinkName)) {
                self::handlerProductLink($url);

                return new Document($url, true);
            }
        }
    }

    public static function handlerProductLink($url){
        $urlIndex = array_search($url, self::$productUrlList);

        if($urlIndex){
            unset(self::$productUrlList[$urlIndex]);
            array_push(self::$checkedProductUrlList, $url);
        } else {
            array_push(self::$checkedProductUrlList, $url);
        }

        self::$pageNow = 'product';
    }

    public static function handlerCatalogLink($url){
        $urlIndex = array_search($url, self::$catalogUrlList);

        if($urlIndex){
            unset(self::$catalogUrlList[$urlIndex]);
            array_push(self::$checkedCatalogUrlList, $url);
        } else {
            array_push(self::$checkedCatalogUrlList, $url);
        }

        self::$pageNow = 'catalog';
    }

    public static function addCatalogUrl($url){
        array_push(self::$catalogUrlList, $url);
    }

    public static function addProductUrl($url){
        array_push(self::$productUrlList, $url);
    }

    public static function getCatalogLinks($document){

        $links = $document->find('a');

        foreach($links as $link){
            $link = $link->getAttribute('href');

            $nameCatalog = self::$catalogLinkName;

            if(strpos($link, $nameCatalog)){
                if(!in_array(self::$baseUrl . $link, self::$catalogUrlList) && !in_array(self::$baseUrl . $link, self::$checkedCatalogUrlList)){
                    array_push(self::$catalogUrlList, self::$baseUrl . $link);
                }
            }
        }

        return self::$catalogUrlList;
    }

    public static function getProdsuctLinks($document){

        $links = $document->find('a');

        foreach($links as $link){
            $link = $link->getAttribute('href');

            $nameProduct = self::$productLinkName;

            if(strpos($link, $nameProduct)){
                if(!in_array(self::$baseUrl . $link, self::$productUrlList) && !in_array(self::$baseUrl . $link, self::$checkedProductUrlList)){
                    array_push(self::$productUrlList, self::$baseUrl . $link);
                }
            }
        }

        return self::$productUrlList;
    }

}


?>