<?php
require_once PUN_ROOT.'include/parser.php';
if (!isset($bbcode_form))
	$bbcode_form = 'post';
if (!isset($bbcode_field))
	$bbcode_field = 'req_message';
?>
<script type="text/javascript" src="include/ds_bbcode/jquery.markitup.js"></script>
<script type="text/javascript" src="include/ds_bbcode/sets/bbcode/set.js"></script>
<script type="text/javascript" src="js/jquery.lazy.min.js"></script>
<link rel="stylesheet" type="text/css" href="include/ds_bbcode/skins/markitup/style.css" />
<link rel="stylesheet" type="text/css" href="include/ds_bbcode/sets/bbcode/style.css" />
<script>var bbcodeField = <?php echo json_encode($bbcode_field); ?>; var bbcodeForm = <?php echo json_encode($bbcode_form); ?>;</script>
<div class="emoticonBlock" style="display: none; padding : 5px;">
<?php
// Display the smiley set
$smiley_dups = array();
$i = 0;
foreach ($smilies as $smiley_text => $smiley_img)
{
  if (!in_array($smiley_img, $smiley_dups))
	{
		echo "\t\t\t\t\t\t\t".'<img class="lazy" onclick="insert_text(\' '.$smiley_text.' \', \'\');" data-src="img/smilies/'.$smiley_img.'" alt="'.$smiley_text.'" title="'.$smiley_text.'" />'."\n";
		$i++;
	}
	$smiley_dups[] = $smiley_img;
}

?>
</div>
<script type="text/javascript" src="js/ds_bbcode.js"></script>
