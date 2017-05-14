<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);
define('PUN_ROOT', dirname(dirname(dirname($_SERVER["SCRIPT_FILENAME"])))."/");
$text=$_POST["data"];
require PUN_ROOT.'include/common.php';
require PUN_ROOT.'include/parser.php';
$cssPreview = file_get_contents(PUN_ROOT."include/ds_bbcode/templates/preview.css");
$headPreview ='<head><style type="text/css">'. $cssPreview . '</style></head>';

$text = $headPreview.parse_message($text, 0);
echo $text;
//echo $cssPreview;

//echo '<pre>';
//echo $scriptFilename. PHP_EOL;
//echo $forumRoot. PHP_EOL;
//var_dump ($_SERVER);
//echo '</pre>';

