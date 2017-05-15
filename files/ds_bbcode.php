<?php

if (!isset($bbcode_form))
	$bbcode_form = 'post';

if (!isset($bbcode_field))
	$bbcode_field = 'req_message';

?>
						<script type="text/javascript">
						<!--
							function insert_text(open, close)
							{
								if (document.forms['<?php echo $bbcode_form ?>'])
									msgfield = document.forms['<?php echo $bbcode_form ?>']['<?php echo $bbcode_field ?>'];
								else if (document.getElementsByName('<?php echo $bbcode_field ?>'))
									msgfield = document.getElementsByName('<?php echo $bbcode_field ?>')[0];
								else
									document.all.req_message;

								// IE support
								if (document.selection && document.selection.createRange)
								{
									msgfield.focus();
									sel = document.selection.createRange();
									sel.text = open + sel.text + close;
								}

								// Moz support
								else if (msgfield.selectionStart || msgfield.selectionStart == '0')
								{
									var startPos = msgfield.selectionStart;
									var endPos = msgfield.selectionEnd;
									var selText = msgfield.value.substring(startPos, endPos);
									
									msgfield.value = msgfield.value.substring(0, startPos) + open + selText + close + msgfield.value.substring(endPos, msgfield.value.length);
									if (selText != '')
									{
										msgfield.selectionStart = endPos + open.length + close.length;
										msgfield.selectionEnd = msgfield.selectionStart;
									}
									else
									{
										msgfield.selectionStart = startPos + open.length;
										msgfield.selectionEnd = msgfield.selectionStart;    
									}
								}

								// Fallback support for other browsers
								else
									msgfield.value += open + close;

								msgfield.focus();
								
								return;
							}
							

							/***********
							* Functions for mod QuickQuote v1.1 by D.S.Denton
							***********/
							
							quote_text = '';
							function get_quote_text()
							{
								//IE
								if (document.selection && document.selection.createRange())
									quote_text = document.selection.createRange().text;

								//NS,FF,SM
								if (document.getSelection)
									quote_text = document.getSelection();
							}
							
							function Quote(user_name, message)
							{
								startq = '[quote=' + user_name + ']' + (quote_text != '' ? quote_text : message) + '[/quote]';
								insert_text(startq,'');
							}
						-->
						</script>
						
<div style="">

<?php

// Display the smiley set
require_once PUN_ROOT.'include/parser.php';

$smiley_dups = array();
$i = 0;
foreach ($smilies as $smiley_text => $smiley_img)
{
	//if ($i > 15) break;
    if (!in_array($smiley_img, $smiley_dups))
	{
		echo "\t\t\t\t\t\t\t".'<img onclick="insert_text(\' '.$smiley_text.' \', \'\');" src="img/smilies/'.$smiley_img.'" alt="'.$smiley_text.'" title="'.$smiley_text.'" />'."\n";
		$i++;
	}
		
	$smiley_dups[] = $smiley_img;
}

if (file_exists(PUN_ROOT.'style/'.$pun_user['style'].'/img/bbcode/b.png'))
    $btndir = $pun_config['o_base_url'].'/style/'.$pun_user['style'].'/img/bbcode/';
else
    $btndir = $pun_config['o_base_url'].'/style/'.$pun_user['style'].'/icons/';


?>

<script type="text/javascript" src="include/ds_bbcode/jquery.markitup.js"></script>
<script type="text/javascript" src="include/ds_bbcode/sets/bbcode/set.js"></script>
<link rel="stylesheet" type="text/css" href="include/ds_bbcode/skins/markitup/style.css" />
<link rel="stylesheet" type="text/css" href="include/ds_bbcode/sets/bbcode/style.css" />
<script type="text/javascript" >
  $(document).ready(function() {
    $("textarea").markItUp(mySettings);
  });
</script>

</div>
