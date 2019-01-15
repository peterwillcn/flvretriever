var fmt_str = new Array();
fmt_str[0]  = '(FLV, 320 x 240, Mono 22KHz MP3)'; // delete ?
fmt_str[5]  = '(FLV, 400 x 240, Mono 44KHz MP3)';
fmt_str[6]  = '(FLV, 480 x 360, Mono 44KHz MP3)'; // delete ?
fmt_str[34] = '(FLV, 640 x 360, Stereo 44KHz AAC)';
fmt_str[35] = '(FLV, 854 x 480, Stereo 44KHz AAC)';

fmt_str[13] = '(3GP, 176 x 144, Stereo 8KHz)';    // delete ?
fmt_str[17] = '(3GP, 176 x 144, Stereo 44KHz AAC)';
fmt_str[36] = '(3GP, 320 x 240, Stereo 44KHz AAC)';

fmt_str[18] = '(MP4(H.264), 640 x 360, Stereo 44KHz AAC)';
fmt_str[22] = '(MP4(H.264), 1280 x 720, Stereo 44KHz AAC)';
fmt_str[37] = '(MP4(H.264), 1920 x 1080, Stereo 44KHz AAC)';
fmt_str[38] = '(MP4(H.264), 4096 x 3072, Stereo 44KHz AAC)';
fmt_str[83] = '(MP4(H.264), 854 x 240, Stereo 44KHz AAC)';
fmt_str[82] = '(MP4(H.264), 640 x 360, Stereo 44KHz AAC)';
fmt_str[85] = '(MP4(H.264), 1920 x 520, Stereo 44KHz AAC)';
fmt_str[84] = '(MP4(H.264), 1280 x 720, Stereo 44KHz AAC)';

fmt_str[43] = '(WebM(VP8), 640 x 360, Stereo 44KHz Vorbis)';
fmt_str[44] = '(WebM(VP8), 854 x 480, Stereo 44KHz Vorbis)';
fmt_str[45] = '(WebM(VP8), 1280 x 720, Stereo 44KHz Vorbis)';
fmt_str[100] = '(WebM(VP8), 640 x 360, Stereo 44KHz Vorbis)';
fmt_str[101] = '(WebM(VP8), 854 x 480, Stereo 44KHz Vorbis)';
fmt_str[46] = '(WebM(VP8), 1920 x 540, Stereo 44KHz Vorbis)';
fmt_str[102] = '(WebM(VP8), 1280 x 720, Stereo 44KHz Vorbis)';

fmt_str[133] = '(MP4(H.264), 426 x 240, <span style="color:#f00;">no audio</span>)';
fmt_str[134] = '(MP4(H.264), 640 x 360, <span style="color:#f00;">no audio</span>)';
fmt_str[135] = '(MP4(H.264), 854 x 480, <span style="color:#f00;">no audio</span>)';
fmt_str[136] = '(MP4(H.264), 1280 x 720, <span style="color:#f00;">no audio</span>)';
fmt_str[137] = '(MP4(H.264), 1920 x 1080, <span style="color:#f00;">no audio</span>)';
fmt_str[138] = '(MP4(H.264), 4096 x 3072, <span style="color:#f00;">no audio</span>)';
fmt_str[139] = '(M4A, 48 kbit/s <span style="color:#f00;">audio only</span>)';
fmt_str[140] = '(M4A, 128 kbit/s <span style="color:#f00;">audio only</span>)';
fmt_str[141] = '(M4A, 256 kbit/s <span style="color:#f00;">audio only</span>)';
fmt_str[160] = '(MP4(H.264), 256 x 144, <span style="color:#f00;">no audio</span>)';
fmt_str[264] = '(MP4(H.264), 1920 x 1080, <span style="color:#f00;">no audio</span>)';

var fmt_ext = new Array();
fmt_ext[0]  = '.flv'; // delete ?
fmt_ext[5]  = '.flv';
fmt_ext[6]  = '.flv'; // delete ?
fmt_ext[34] = '.flv';
fmt_ext[35] = '.flv';

fmt_ext[13] = '.3gp';    // delete ?
fmt_ext[17] = '.3gp';
fmt_ext[36] = '.3gp';

fmt_ext[18] = '.mp4';
fmt_ext[22] = '.mp4';
fmt_ext[37] = '.mp4';
fmt_ext[38] = '.mp4';
fmt_ext[83] = '.mp4';
fmt_ext[82] = '.mp4';
fmt_ext[85] = '.mp4';
fmt_ext[84] = '.mp4';

fmt_ext[43] = '.webm';
fmt_ext[44] = '.webm';
fmt_ext[45] = '.webm';
fmt_ext[100] = '.webm';
fmt_ext[101] = '.webm';
fmt_ext[46] = '.webm';
fmt_ext[102] = '.webm';

fmt_ext[133] = '.mp4';
fmt_ext[134] = '.mp4';
fmt_ext[135] = '.mp4';
fmt_ext[136] = '.mp4';
fmt_ext[137] = '.mp4';
fmt_ext[137] = '.mp4';
fmt_ext[139] = '.m4a';
fmt_ext[140] = '.m4a';
fmt_ext[141] = '.m4a';
fmt_ext[160] = '.mp4';
fmt_ext[264] = '.mp4';

function retrieverYouTubeUrl(){
  //http://kej.tw/flvretriever
  var inputUrl = $('#url_input').val();
  var urlArray = inputUrl.split('=');
  //http://www.youtube.com/get_video_info?eurl=http%3A%2F%2Fkej.tw%2F&sts=1586&video_id=LXZoSQDj0pA
  var link = 'http://www.youtube.com/get_video_info?eurl=http%3A%2F%2Fkej.tw%2F&sts=1586&video_id='+urlArray[1];
  $("a#down_link").attr('href', link);
  window.location.href = link;
}

/*
function getYouTubeUrl(){
  var rdata = $('#videoInfo').val();
  var rdataArray = rdata.split('&');
  var succ = 0;
  for(i = 0; i < rdataArray.length; i++){
    r0 = rdataArray[i].substr(0, 11);
    if(r0 == 'fmt_url_map'){
      r1 = unescape(rdataArray[i].substr(12));
      var temp1 = r1.split(',');
      var fmt = new Array;
      var fmt_url = new Array;
      for(j = 0; j < temp1.length; j++){
        var temp2 = temp1[j].split('|');
        fmt.push(parseInt(temp2[0], 10));
        fmt_url.push(temp2[1]);
      }
      
      var dllinks = '';
      for(var k in fmt){
        if(dllinks.length > 0){
          dllinks += '<br />';
        }
        dllinks += '<a href="' + fmt_url[k] + '"><b>Download' + fmt_str[fmt[k]] + '</b></a>';
      }
      $('#result_div').remove();
      var div_dl = document.createElement('div');
      $(div_dl).html(dllinks).css('padding', '7 0 7px 0');
      $(div_dl).attr('id', 'result_div');
      $('#videoInfo').after(div_dl);
      succ = 1;
    }
  }
  if(succ == 0){
    var result;
    var rdata_status;
    var rdata_reason;
    var rdata_temp;
    for(i = 0; i < rdataArray.length; i++){
      rdata_temp = rdataArray[i].split('=');
      if(rdata_temp[0] == 'status'){
        rdata_status = rdata_temp[1];
      }
      if(rdata_temp[0] == 'reason'){
        rdata_reason = urldecode(rdata_temp[1]);
      }
    }
    result = '<b>&#28961;&#27861;&#21462;&#24471;&#24433;&#29255; URL</b><br />status : <span style="color:#f00;">' + rdata_status + '</span><br />' + 'reason : <span style="color:#f00;">' + rdata_reason + '</span>';
    $('#result_div').remove();
    var div_dl = document.createElement('div');
    $(div_dl).html(result).css('padding', '7 0 7px 0');
    $(div_dl).attr('id', 'result_div');
    $('#videoInfo').after(div_dl);
  }
}
*/

function getYouTubeUrl(){
  var rdata = $('#videoInfo').val();
  var rdataArray = rdata.split('&');
  var succ = 0;

  var url_classic = parseUrlsClassic(rdataArray);
  var url_adaptive = parseUrlsAdaptive(rdataArray);
  var url_alter = parseUrlsAlter(rdataArray, url_classic, url_adaptive);
  var title = parseTitle(rdataArray);

  var dllinks = '';
  var webmlinks = '';
  var dllinksAdaptive = '';
  var dllinksAlter = '';

  for(var i in url_classic){
    if(url_classic[i].fmt == 43 || url_classic[i].fmt == 44 || url_classic[i].fmt == 45 || url_classic[i].fmt == 46 || url_classic[i].fmt == 100 || url_classic[i].fmt == 101 || url_classic[i].fmt == 102){
      if(webmlinks.length > 0){
        webmlinks += '<br />';
      }          
      webmlinks += '<a href="' + unescape(url_classic[i].fmt_url) + "&signature=" + url_classic[i].fmt_sig + "&title=" + title + '" target="_blank"><b>Watch online&nbsp;&nbsp;&nbsp;' + fmt_str[url_classic[i].fmt] + '</b></a>';
    }else{
      if(dllinks.length > 0){
        dllinks += '<br />';
      }
      dllinks += '<a href="' + unescape(url_classic[i].fmt_url) + "&signature=" + url_classic[i].fmt_sig + "&title=" + title + '" target="_blank"><b>Download&nbsp;&nbsp;&nbsp;' + fmt_str[url_classic[i].fmt] + '</b></a>';
    }
  }
  if(webmlinks.length > 0){
    if(dllinks.length > 0){
      dllinks += '<br />';
    }
    dllinks += webmlinks;
  }

  if(url_alter.length > 0){
    for(var i in url_alter){
      if(dllinksAlter.length > 0){
        dllinksAlter += '<br />';
      }
      dllinksAlter += '<a href="' + unescape(url_alter[i].fmt_url) + "&title=" + escape(title) + '" target="_blank"><b>Download&nbsp;&nbsp;&nbsp;' + fmt_str[url_alter[i].fmt] + '</b></a>';
    }
  }
  if(dllinksAlter.length > 0){
    if(dllinks.length > 0){
      dllinks += '<br /><br /><span style="color:#f00; font-weight:bold;">sadly 1080p\'s dead again...</span><br /><del>1080p & some other formats redirect download are back online and <span style="color:#f00;font-weight:bold;">testing</span>:<br />';
    }
    dllinks += dllinksAlter + '</del>';
  }

  for(var i in url_adaptive){
    if(dllinksAdaptive.length > 0){
      dllinksAdaptive += '<br />';
    }
    //dllinksAdaptive += '<a href="' + unescape(url_adaptive[i].fmt_url) + "&signature=" + url_adaptive[i].fmt_sig + "&title=" + escape(title) + '" target="_blank"><b>Download&nbsp;&nbsp;&nbsp;' + fmt_str[url_adaptive[i].fmt] + '</b></a>';
    dllinksAdaptive += '<a href="' + unescape(url_adaptive[i].fmt_url) + "&title=" + escape(title) + '" target="_blank"><b>Download&nbsp;&nbsp;&nbsp;' + fmt_str[url_adaptive[i].fmt] + '</b></a>';
  }
  if(dllinksAdaptive.length > 0){
    if(dllinks.length > 0){
      dllinks += '<br /><br />special files (separated audio and video):<br />';
    }
    dllinks += dllinksAdaptive;
  }
  
  if(dllinks.length > 0){
    $('#result_div').remove();
    var div_dl = document.createElement('div');
    $(div_dl).html(dllinks).css('padding', '7px 0 0 0');
    $(div_dl).attr('id', 'result_div');
    $('#videoInfo').after(div_dl);
    $('#downloadInfo').css('display', 'block');
    succ = 1;
  }

  if(succ == 0){
    var result;
    var rdata_status;
    var rdata_reason;
    var rdata_temp;
    for(i = 0; i < rdataArray.length; i++){
      rdata_temp = rdataArray[i].split('=');
      if(rdata_temp[0] == 'status'){
        rdata_status = rdata_temp[1];
      }
      if(rdata_temp[0] == 'reason'){
        rdata_reason = urldecode(rdata_temp[1]);
      }
    }
    result = '<b>&#28961;&#27861;&#21462;&#24471;&#24433;&#29255; URL</b><br />status : <span style="color:#f00;">' + rdata_status + '</span><br />' + 'reason : <span style="color:#f00;">' + rdata_reason + '</span>';
    $('#result_div').remove();
    var div_dl = document.createElement('div');
    $(div_dl).html(result).css('padding', '7 0 7px 0');
    $(div_dl).attr('id', 'result_div');
    $('#videoInfo').after(div_dl);
  }
}

function parseUrlsClassic(rdataArray){
  for(i = 0; i < rdataArray.length; i++){
   r0 = rdataArray[i].substr(0, 26);
   if(r0 == 'url_encoded_fmt_stream_map'){
     r1 = unescape(rdataArray[i].substr(27));
      var temp1 = r1.split(',');
      var fmt = new Array;
      var fmt_url = new Array;
      var fmt_sig = new Array;
      var items = [];
      for(j = 0; j < temp1.length; j++){
        var temp2 = temp1[j].split('&');
        var item = {};
        var temp_itag = -1;
        var temp_type = '';
        for(jj = 0; jj < temp2.length; jj++){
          if(temp2[jj].substr(0, 5) == 'itag='){
            temp_itag = parseInt(temp2[jj].substr(5), 10);
            item.fmt = temp_itag;
          }else if(temp2[jj].substr(0, 4) == 'url='){
            item.fmt_url = temp2[jj].substr(4);
          }else if(temp2[jj].substr(0, 4) == 'sig='){
            item.fmt_sig = temp2[jj].substr(4);
          }else if(temp2[jj].substr(0, 2) == 's='){
            item.fmt_sig = SigHandlerAlternative(temp2[jj].substr(2));
          }else if(temp2[jj].substr(0, 5) == 'type='){
            temp_type = '(' + unescape(temp2[jj].substr(5)) + ')';
          }
        }
        if(fmt_str[temp_itag] == 'undefined'){
          fmt_str[temp_itag] = temp_type;
        }
        items.push(item);
      }
      return items;
    }
  }
}

function parseUrlsAdaptive(rdataArray){
  for(i = 0; i < rdataArray.length; i++){
    r0 = rdataArray[i].substr(0, 13);
    if(r0 == 'adaptive_fmts'){
      r1 = unescape(rdataArray[i].substr(14));
      var temp1 = r1.split(',');
      var fmt = new Array;
      var fmt_url = new Array;
      var fmt_sig = new Array;
      var items = [];
      for(j = 0; j < temp1.length; j++){
        var temp2 = temp1[j].split('&');
        var item = {};
        var temp_itag = -1;
        var temp_type = '';
        for(jj = 0; jj < temp2.length; jj++){
          if(temp2[jj].substr(0, 5) == 'itag='){
            temp_itag = parseInt(temp2[jj].substr(5), 10);
            item.fmt = temp_itag;
          }else if(temp2[jj].substr(0, 4) == 'url='){
            item.fmt_url = temp2[jj].substr(4);
          }else if(temp2[jj].substr(0, 4) == 'sig='){
            item.fmt_sig = temp2[jj].substr(4);
          }else if(temp2[jj].substr(0, 2) == 's='){
            item.fmt_sig = SigHandlerAlternative(temp2[jj].substr(2));
          }else if(temp2[jj].substr(0, 5) == 'type='){
            temp_type = '(' + unescape(temp2[jj].substr(5)) + ')';
          }
        }          
        if(fmt_str[temp_itag] == 'undefined'){
          fmt_str[temp_itag] = temp_type;
        }
        items.push(item);
      }
      return items;
    }
  }
}

function parseUrlsAlter(rdataArray, url_classic, url_adaptive){
  for(i = 0; i < rdataArray.length; i++){
    r0 = rdataArray[i].substr(0, 7);
    if(r0 == 'dashmpd'){
      r1 = unescape(rdataArray[i].substr(8)).replace('http://www.youtube.com/api/manifest/dash/', '');
      var temp1 = r1.split('/');
      for(var j = 0; j < temp1.length; j ++){
        if(temp1[j] == 'sig'){
          temp1[j] = 'signature';
        }
        if(temp1[j] == 's'){
          temp1[j] = 'signature';
          temp1[j+1] = SigHandlerAlternative(temp1[j+1]);
        }
      }

      var qstemp = [];
      for(var j = 0; j < temp1.length; j += 2){
        qstemp.push(temp1[j] + '=' + temp1[j+1]);
      }
      var qs = qstemp.join('&');
      if (qs.toLowerCase().indexOf('ratebypass') == -1) {
        qs = qs + '&ratebypass=yes';
      }

      var base_url = '';
      for(var j in url_classic){
        var tempurl = unescape(url_classic[j].fmt_url).split('?');
        if(tempurl[0] !== '' && tempurl[0] !== undefined && tempurl[0].length > 0){
          base_url = tempurl[0];
          break;
        }
      }

      var fmt_classic = [];
      for(var j in url_classic){
        fmt_classic[url_classic[j].fmt] = true;
      }

      var fmt_adaptive = [];
      for(var j in url_adaptive){
        fmt_adaptive[url_adaptive[j].fmt] = true;
      }

      var items = [];
      var item35 = {};
      var item37 = {};
      var item38 = {};
      
      if(fmt_adaptive[135] && fmt_classic[35] == undefined){
        item35.fmt = 35;
        item35.fmt_url = base_url + '?' + qs + '&itag=35';
        items.push(item35);
      }
      
      if((fmt_adaptive[137] || fmt_adaptive[264]) && fmt_classic[37] == undefined){
        item37.fmt = 37;
        item37.fmt_url = base_url + '?' + qs + '&itag=37';
        items.push(item37);
      }
      
      if(fmt_adaptive[138] && fmt_classic[38] == undefined){
        item38.fmt = 38;
        item38.fmt_url = base_url + '?' + qs + '&itag=38';
        items.push(item38);
      }

      return items;
    }
  }
  return [];
}

function parseTitle(rdataArray){
  for(i = 0; i < rdataArray.length; i++){
    r0 = rdataArray[i].substr(0, 5);
    if(r0 == 'title'){
      //return urldecode(rdataArray[i].substr(6));
      return rdataArray[i].substr(6).replace(/%22/g, '');
    }
  }
}

function urldecode(str){
    // Decodes URL-encoded string  
    // 
    // version: 1004.2314
    // discuss at: http://phpjs.org/functions/urldecode    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous    // +   improved by: Orlando
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      bugfixed by: Rob
    // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
    // %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on    // %        note 2: pages served as UTF-8
    // *     example 1: urldecode('Kevin+van+Zonneveld%21');
    // *     returns 1: 'Kevin van Zonneveld!'
    // *     example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
    // *     returns 2: 'http://kevin.vanzonneveld.net/'
    // *     example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
    // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
    
    return decodeURIComponent(str.replace(/\+/g, '%20'));
}

function SigHandlerAlternative(s){
  var sArray = s.split("");
  var tmpA, tmpB;

  tmpA = sArray[0];
  tmpB = sArray[52];

  sArray[0] = tmpB;
  sArray[52] = tmpA;

  tmpA = sArray[83];
  tmpB = sArray[62];

  sArray[83] = tmpB;
  sArray[62] = tmpA;

  sArray = sArray.slice(3);
  sArray = sArray.reverse();
  sArray = sArray.slice(3);

  return sArray.join("");
}