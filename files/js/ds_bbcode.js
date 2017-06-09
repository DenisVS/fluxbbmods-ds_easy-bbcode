/*
 * Modified by DenisVS (deniswebcomm@gmail.com)
 *
 */
function insert_text(open, close)
{
  if (document.forms[bbcodeForm])
    msgfield = document.forms[bbcodeForm][bbcodeField];
  else if (document.getElementsByName(bbcodeField))
    msgfield = document.getElementsByName(bbcodeField)[0];
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
* Functions for mod QuickQuote by DenisVS (based on v1.1 by D.S.Denton)
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

function Quote(user_name, message, qid)
{
  startq = '[quote=' + user_name + ';' + qid + ']' + (quote_text != '' ? quote_text : message) + '[/quote]';
  insert_text(startq,'');
}

/***********
* Lazy loading collapsible Emoticons set by DenisVS
***********/
$(document).ready(function() {
  $("textarea").markItUp(mySettings);
    $(".emoticonButton").click(function () {
    $header = $(".emoticonBlock");
    //getting current element
    $content = $header;
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
      //execute this after slideToggle is done
      var instance = $("img.lazy").Lazy({chainable: false});  //load image
     });
  });	  
});
