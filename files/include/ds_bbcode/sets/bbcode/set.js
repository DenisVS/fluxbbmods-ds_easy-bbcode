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
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]'},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...'},
		{separator:'---------------' },
		{name:'Size', key:'S', openWith:'[size=[![Text size]!]]', closeWith:'[/size]',
		dropMenu :[
			{name:'Heading', openWith:'[h]', closeWith:'[/h]', className:"icon-heading" },
			{name:'Offtop', openWith:'[off]', closeWith:'[/off]', className:"icon-offtop" }
		]},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]'},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]'}, 
		{name:'List item', openWith:'[*] '},
		{separator:'---------------' },
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]'}, 
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Preview', className:"preview", call:'preview' },
		{separator:'---------------' },
		{name:'Colors', openWith:'[color=[![Color code:]!]]', closeWith:'[/color]', dropMenu: [
			{name:'Yellow', openWith:'[color=yellow]', closeWith:'[/color]', className:"col1-1" },
				{name:'Orange', openWith:'[color=orange]', closeWith:'[/color]', className:"col1-2" },
				{name:'Red', openWith:'[color=red]', closeWith:'[/color]', className:"col1-3" },
				{name:'Blue', openWith:'[color=blue]', closeWith:'[/color]', className:"col2-1" },
				{name:'Purple', openWith:'[color=purple]', closeWith:'[/color]', className:"col2-2" },
				{name:'Green', openWith:'[color=green]', closeWith:'[/color]', className:"col2-3" },
				{name:'White', openWith:'[color=white]', closeWith:'[/color]', className:"col3-1" },
				{name:'Gray', openWith:'[color=gray]', closeWith:'[/color]', className:"col3-2" },
				{name:'Black', openWith:'[color=black]', closeWith:'[/color]', className:"col3-3" }
			]},
		{separator:'---------------' },
		{name:'Stroke through', key:'S', openWith:'[s]', closeWith:'[/s]' },
		{name:'Media', key:'M', openWith:'[media]', closeWith:'[/media]' },

	]
}
//		
