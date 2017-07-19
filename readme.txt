##
##
##        Mod title:  DS BBCode
##
##      Mod version:  1.1.1
##  Works on FluxBB:  1.5.10
##     Release date:  2017-07-19
##           Author:  DenisVS
##         Based on:  Easy BBCode by Rickard Andersson & Daris (daris91@gmail.com), markItUp! by Jay Salvat.
##
##      Description:  This mod adds buttons for easy insertion of BBCode and
##                    lazy loading emoticons when posting and editing messages.
##                    Quick quote mod included.
##                    Quote back (clickable quotebox header) included.
##
##   Repository URL:  https://fluxbb.org/resources/mods/ds-bbcode/
##
##   Affected files:  post.php
##                    edit.php
##                    viewtopic.php
##                    include/pms_new/mdl/topic.php
##                    include/pms_new/mdl/post.php
##                    include/pms_new/mdl/edit.php
##                    include/parser.php
##		     
##
##       Affects DB:  No
##
##       DISCLAIMER:  Please note that "mods" are not officially supported by
##                    FluxBB. Installation of this modification is done at 
##                    your own risk. Backup your forum database and any and
##                    all applicable files before proceeding.
##
##
##
##

#
#---------[ 0. ]-------------------------------------------------------

#
#                    ATTENTION! 
#   Now You should to check the source code of the pages of your forum in your browser.
#   Open viewtopic.php, post.php, edit.php. Then open the source code viewer by 
#   pressing Ctrl+U.
#   Press Ctrl+F and type "jquery" into the search form.
#   If You find an entry jquery.min.js, jquery-xxxxxxx.min.js etc, You must use it (just go to step 1)
#   But if jquery is not present (this will be if no any mod is installed), open 
#   the files/ds_bbcode.php file and remove two forward slashes in line 7
#   In original, line 7:
#   //echo '<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>'."\n";
#   must be seen as
#   echo '<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>'."\n";
#   jQuery needs to be the first script you import. Take care about it.
#   

#
#---------[ 1. UPLOAD ]-------------------------------------------------------
#

files/ds_bbcode.php to /
files/lang/English/ds_bbcode.php to lang/English/ds_bbcode.php
files/lang/Russian/ds_bbcode.php to lang/Russian/ds_bbcode.php
files/js/jquery.lazy.min.js to js/jquery.lazy.min.js
files/js/ds_bbcode.js to js/ds_bbcode.js

#
#---------[ 2. OPEN ]---------------------------------------------------------
#

post.php


#
#---------[ 3. FIND (line: 528) ]---------------------------------------------
#

$quote = '[quote='.$q_poster.']'.$q_message.'[/quote]'."\n";

#
#---------[ 4. REPLACE WITH ]-------------------------------------------------
#

$quote = '[quote='.$q_poster.';'.$qid.']'.$q_message.'[/quote]'."\n";

#
#---------[ 5. FIND (line: 656) ]---------------------------------------------
#

<?php endif; ?>						<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />

#
#---------[ 6. REPLACE WITH ]-------------------------------------------------
#

<?php endif; require PUN_ROOT.'ds_bbcode.php'; ?>						<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />

#
#---------[ 7. OPEN ]---------------------------------------------------------
#

edit.php

#
#---------[ 8. FIND (line: 228) ]---------------------------------------------
#

<?php endif; ?>						<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />

#
#---------[ 9. REPLACE WITH ]-------------------------------------------------
#

<?php endif; $bbcode_form = 'edit'; $bbcode_field = 'req_message'; require PUN_ROOT.'ds_bbcode.php'; ?>						<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />

#
#---------[ 10. OPEN ]---------------------------------------------------------
#

viewtopic.php

#
#---------[ 11. FIND (line: 24) ]---------------------------------------------
#

require PUN_ROOT.'lang/'.$pun_user['language'].'/topic.php';

#
#---------[ 12. AFTER, ADD ]-------------------------------------------------
#

if (file_exists(PUN_ROOT.'lang/'.$pun_user['language'].'/ds_bbcode.php'))
	require PUN_ROOT.'lang/'.$pun_user['language'].'/ds_bbcode.php';
else
	require PUN_ROOT.'lang/English/ds_bbcode.php';

#
#---------[ 13. FIND (line: 355) ]---------------------------------------------
#

	// Perform the main parsing of the message (BBCode, smilies, censor words etc)
	$cur_post['message'] = parse_message($cur_post['message'], $cur_post['hide_smilies']);

#
#---------[ 14. BEFORE, ADD ]-------------------------------------------------
#

	if ($pun_config['o_quickpost'] == '1' &&
		!$pun_user['is_guest'] &&
		($cur_topic['post_replies'] == '1' || ($cur_topic['post_replies'] == '' && $pun_user['g_post_replies'] == '1')) &&
		($cur_topic['closed'] == '0' || $is_admmod))  {
      // Clean up message from POST
      $cur_post['message'] = pun_linebreaks(pun_trim($cur_post['message']));
      // Replace four-byte characters (MySQL cannot handle them)
      $cur_post['message'] = strip_bad_multibyte_chars($cur_post['message']);
	$post_actions[] = '<li class="postquickquote"><span><a onmousedown="get_quote_text();" onclick="Quote(\''.pun_htmlspecialchars($cur_post['username']).'\', \''.pun_htmlspecialchars($db->escape($cur_post['message'])).'\', \''.pun_htmlspecialchars($cur_post['id']).'\'); return false;" href="post.php?tid='.$id.'&amp;qid='.$cur_post['id'].'">'.$lang_ds_bbcode['Quick quote'].'</a></span></li>';
    }

#
#---------[ 15. FIND (line: 470) ]---------------------------------------------
#


	echo "\t\t\t\t\t\t".'<label class="required"><strong>'.$lang_common['Message'].' <span>'.$lang_common['Required'].'</span></strong><br />';
}
else
	echo "\t\t\t\t\t\t".'<label>';


#
#---------[ 16. REPLACE WITH ]-------------------------------------------------
#

	$bbcode_form = 'quickpostform';
	$bbcode_field = 'req_message';
	require PUN_ROOT.'ds_bbcode.php';
	echo "\t\t\t\t\t\t".'<label class="required"><strong>'.$lang_common['Message'].' <span>'.$lang_common['Required'].'</span></strong><br />';
}
else
{
	$bbcode_form = 'quickpostform';
	$bbcode_field = 'req_message';
	require PUN_ROOT.'ds_bbcode.php';
	echo "\t\t\t\t\t\t".'<label>';
}

#
#---------[ 17. OPEN ]---------------------------------------------------------
#

include/parser.php

#
#---------[ 18. FIND (line: 764) ]---------------------------------------------
#

$text = preg_replace_callback('%\[quote=(&quot;|&\#039;|"|\'|)([^\r\n]*?)\\1\]%s', create_function('$matches', 'global $lang_common; return "</p><div class=\"quotebox\"><cite>".str_replace(array(\'[\', \'\\"\'), array(\'&#91;\', \'"\'), $matches[2])." ".$lang_common[\'wrote\']."</cite><blockquote><div><p>";'), $text);

#
#---------[ 19. BEFORE, ADD ]-------------------------------------------------
#

//use this regex if there is a quote id
$text = preg_replace_callback('%\[quote=(&quot;|&\#039;|"|\'|)([^\r\n]*?);(\d+)\]%s', create_function('$matches', 'global $lang_common; return "</p><div class=\"quotebox\"><cite><a href=\"viewtopic.php?pid=$matches[3]#p$matches[3]\">".str_replace(array(\'[\', \'\\"\'), array(\'&#91;\', \'"\'), $matches[2])." ".$lang_common[\'wrote\']."</a></cite><blockquote><div><p>";'), $text);

#
#---------[ 20. SAVE/UPLOAD ]--------------------------------------------------
#
#                    ATTENTION! 
#   The following fixes only if you use New PMS from Visman! 
#
#
#---------[ 21. OPEN ]---------------------------------------------------------
#

include/pms_new/mdl/topic.php

#
#---------[ 22. FIND (line: 292) ]---------------------------------------------
#

	// Perform the main parsing of the message (BBCode, smilies, censor words etc)
	$cur_post['message'] = parse_message($cur_post['message'], $cur_post['hide_smilies']);

#
#---------[ 23. BEFORE, ADD ]-------------------------------------------------
#

  if (file_exists(PUN_ROOT.'lang/'.$pun_user['language'].'/ds_bbcode.php'))
    require PUN_ROOT.'lang/'.$pun_user['language'].'/ds_bbcode.php';
  else
    require PUN_ROOT.'lang/English/ds_bbcode.php';

	if ($pun_config['o_quickpost'] == '1' &&		
		($cur_topic['post_replies'] == '1' || ($cur_topic['post_replies'] == '' && $pun_user['g_post_replies'] == '1')))  {
      // Clean up message from POST
      $cur_post['message'] = pun_linebreaks(pun_trim($cur_post['message']));
      // Replace four-byte characters (MySQL cannot handle them)
      $cur_post['message'] = strip_bad_multibyte_chars($cur_post['message']);
			$post_actions[] = '<li class="postquickquote"><span><a onmousedown="get_quote_text();" onclick="Quote(\''.pun_htmlspecialchars($cur_post['username']).'\', \''.pun_htmlspecialchars($db->escape($cur_post['message'])).'\'); return false;" href="post.php?tid='.$id.'&amp;qid='.$cur_post['id'].'">'.$lang_ds_bbcode['Quick quote'].'</a></span></li>';
    }

#
#---------[ 25. FIND (line: 373) ]---------------------------------------------
#

							<label><textarea name="req_message" rows="7" cols="75" tabindex="<?php echo $cur_index++ ?>"></textarea></label>

#
#---------[ 26. BEFORE, ADD ]-------------------------------------------------
#

<?php
$bbcode_form = 'quickpostform';
$bbcode_field = 'req_message';
require PUN_ROOT.'ds_bbcode.php';
?>

#
#---------[ 27. OPEN ]---------------------------------------------------------
#

include/pms_new/mdl/post.php

#
#---------[ 28. FIND (line: 513) ]---------------------------------------------
#

?>
							<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />
							
#
#---------[ 29. BEFORE, ADD ]-------------------------------------------------
#

$bbcode_form = 'quickpostform';
$bbcode_field = 'req_message';
require PUN_ROOT.'ds_bbcode.php';

#
#---------[ 30. OPEN ]---------------------------------------------------------
#

include/pms_new/mdl/edit.php

#
#---------[ 31. FIND (line: 513) ]---------------------------------------------
#

							<label class="required"><strong><?php echo $lang_common['Message'] ?> <span><?php echo $lang_common['Required'] ?></span></strong><br />
							
#
#---------[ 32. BEFORE, ADD ]-------------------------------------------------
#

<?php
$bbcode_form = 'quickpostform';
$bbcode_field = 'req_message';
require PUN_ROOT.'ds_bbcode.php';
?>

#
#---------[ 33. SAVE/UPLOAD ]--------------------------------------------------
#
