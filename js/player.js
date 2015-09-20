//<![CDATA[
$(document).ready(function(){

    //var prerollFile = "http://www.kozco.com/tech/piano2.wav";
    var prerollFile = $('body').data('preroll');
    var podcastFile = $('body').data('podcast');
    var podcastImg = $('body').data('podcastImg');
  var preroll = {
    title: "Pre-Roll",
    wav: prerollFile
  };
  var podcast = {
    title: "Podcast",
    mp3: podcastFile
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
  $("#jp_container_1").css('background-image', 'url('+podcastImg+')');

});
//]]>
