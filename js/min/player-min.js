$(document).ready(function(){var a="http://www.kozco.com/tech/piano2.wav",e=$("body").data("podcast"),t=$("body").data("podcastimg"),o={title:"Pre-Roll",wav:a},l={title:"Podcast",mp3:e};new jPlayerPlaylist({jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},[o,l],{supplied:"mp3, wav",wmode:"window",useStateClassSkin:!0,autoBlur:!1,smoothPlayBar:!0,keyEnabled:!0}),$("#jp_container_1").css("background-image","url("+t+")")});