<?php

class ControllerBase {

	public static $ver;

	function view($page, $args=null) {
		$tpl = self::$ver."/HR/view/".$page.".php";

		if(file_exists($tpl)) {
			if (!$args) {
				$args = [];
			}
			$args['_SPLIT'] = explode('/', $_GET['p']);;
			extract($args);
			ob_start();
			include $tpl;
			$content = ob_get_clean();
			return $content;
		} else {
			return 'not found<br><i>'.$tpl.'</i><br>';
		}
	}
}


?>