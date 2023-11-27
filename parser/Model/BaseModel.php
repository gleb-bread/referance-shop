<?php

class BaseModel {
    public static ?string $ver;

    public function __construct() {
        $this::$ver = __DIR__ . '/';
    }
}

?>