// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'include/ds_bbcode/parser-wrap.php', // path to your BBCode parser
	previewAutoRefresh:	false,  
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]'},
		{name:'Stroke through', key:'S', openWith:'[s]', closeWith:'[/s]' },		
		{name:'Heading', openWith:'[h]', closeWith:'[/h]',},
		{name:'Offtop', openWith:'[off]', closeWith:'[/off]',},
		{name:'Inserted', openWith:'[ins]', closeWith:'[/ins]',},
		{name:'Emphasised', openWith:'[em]', closeWith:'[/em]',},
		{separator:'---------------' },
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]'},
		{name:'Spoiler', openWith:'[spoiler]', closeWith:'[/spoiler]'},
		{name:'Hide', 
			openWith:function(markItUp) {
				var text=markItUp.selection;
				posts = prompt("Posts", "");
				if ((posts == "") | (posts == null))  {

					return '[hide]';

				}
				return '[hide='+posts+']';
			  },
  			  closeWith:'[/hide]'
			},
		{separator:'---------------' },
		{name:'Link', key:'L',
		  replaceWith:function(markItUp) {
			var text=markItUp.selection;
			url = prompt("URL", "");
			if (url == null) {
			  return;
			}
			if (text == "") {
			  return '[url]'+url+'[/url]';
			} else {
			  if (url == "") {
				url = text;
			  }
			  return '[url='+url+']'+text+'[/url]';
			}
		  }
		},
		{name:'Picture', key:'P',
		  replaceWith:function(markItUp) {
			var text=markItUp.selection;
			if (text == "") {
			  text = prompt("URL", "");
			  if (text == null) {
				return;
			  }
			}
			return '[img]'+text+'[/img]';
		  }
		},
		{name:'Media', key:'M',
		  replaceWith:function(markItUp) {
			var text=markItUp.selection;
			if (text == "") {
			  text = prompt("URL", "");
			  if (text == null) {
				return;
			  }
			}
			return '[media]'+text+'[/media]';
		  }
		},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]'},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]'}, 
		{name:'List item', openWith:'[*] ', closeWith:' [/*]'},
		{separator:'---------------' },
		{name:'Emoticons', className:'emoticonButton'},
		{	name:'Colors', className:'palette', dropMenu: [
				{name:'Yellow',	openWith:'[color=#FCE94F]', closeWith:'[/color]',	className:"col1-1" },
				{name:'Yellow',	openWith:'[color=#EDD400]', closeWith:'[/color]',	className:"col2-1" },
				{name:'Yellow', openWith:'[color=#C4A000]', closeWith:'[/color]',	className:"col3-1" },
				
				{name:'Orange', openWith:'[color=#FCAF3E]', closeWith:'[/color]',	className:"col1-2" },
				{name:'Orange', openWith:'[color=#F57900]', closeWith:'[/color]',	className:"col2-2" },
				{name:'Orange', openWith:'[color=#CE5C00]', closeWith:'[/color]',	className:"col3-2" },
				
				{name:'Brown', 	openWith:'[color=#E9B96E]', closeWith:'[/color]',	className:"col1-3" },
				{name:'Brown', 	openWith:'[color=#C17D11]', closeWith:'[/color]',	className:"col2-3" },
				{name:'Brown',	openWith:'[color=#8F5902]', closeWith:'[/color]',	className:"col3-3" },
				
				{name:'Green', 	openWith:'[color=#8AE234]', closeWith:'[/color]',	className:"col1-4" },
				{name:'Green', 	openWith:'[color=#73D216]', closeWith:'[/color]',	className:"col2-4" },
				{name:'Green',	openWith:'[color=#4E9A06]', closeWith:'[/color]',	className:"col3-4" },
				
				{name:'Blue', 	openWith:'[color=#729FCF]', closeWith:'[/color]',	className:"col1-5" },
				{name:'Blue', 	openWith:'[color=#3465A4]', closeWith:'[/color]',	className:"col2-5" },
				{name:'Blue',	openWith:'[color=#204A87]', closeWith:'[/color]',	className:"col3-5" },
	
				{name:'Purple', openWith:'[color=#AD7FA8]', closeWith:'[/color]',	className:"col1-6" },
				{name:'Purple', openWith:'[color=#75507B]', closeWith:'[/color]',	className:"col2-6" },
				{name:'Purple',	openWith:'[color=#5C3566]', closeWith:'[/color]',	className:"col3-6" },
				
				{name:'Red', 	openWith:'[color=#EF2929]', closeWith:'[/color]',	className:"col1-7" },
				{name:'Red', 	openWith:'[color=#CC0000]', closeWith:'[/color]',	className:"col2-7" },
				{name:'Red',	openWith:'[color=#A40000]', closeWith:'[/color]',	className:"col3-7" },
				
				{name:'Gray', 	openWith:'[color=#FFFFFF]', closeWith:'[/color]',	className:"col1-8" },
				{name:'Gray', 	openWith:'[color=#D3D7CF]', closeWith:'[/color]',	className:"col2-8" },
				{name:'Gray',	openWith:'[color=#BABDB6]', closeWith:'[/color]',	className:"col3-8" },
				
				{name:'Gray', 	openWith:'[color=#888A85]', closeWith:'[/color]',	className:"col1-9" },
				{name:'Gray', 	openWith:'[color=#555753]', closeWith:'[/color]',	className:"col2-9" },
				{name:'Gray',	openWith:'[color=#000000]', closeWith:'[/color]',	className:"col3-9" }
			]
		},
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Preview', className:"preview", call:'preview' },









	]
}
//		
		

