//<![CDATA[
$(document).ready(function(){

  var preroll = {
    title: "Pre-Roll",
    wav: "http://www.kozco.com/tech/piano2.wav"
  };
  var podcast = {
    title: "Podcast",
    mp3: "http://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/nerdist/Nerdist_725_-_Sir_Patrick_Stewart_Returns.mp3"
  };

  new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_1",
    cssSelectorAncestor: "#jp_container_1"
    },
    [preroll, podcast],
    {
      supplied: "mp3, wav",
      wmode: "window",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true
    });
  });
//]]>
