var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botlist = /^\/list/; botstats = /^\/stats/; botstallone = /^\/thankyoustallone/; botfrancesa = /^\/francesa/; botbbc = /^\/bbc/; botPAWG = /^\/PAWG/; botajlee = /^\/ajlee/; botDbag = /^\/douchebagjar/; botRecords = /^\/records/; botStandings = /^\/standings/; botSchedule = /^\/schedule/; botWebsite = /^\/website/; botForum = /^\/forum/; botSavage = /^\/savage/; botRegexSh = /^\/shrug/; botGoat = /^\/goat/; botCat = /^\/paws/; botJew = /^\/jewboy/; botRegexWk = /^\/users/; botaaron = /^\/aaron/; botcmpunk = /^\/cmpunk/; botcuppahaters = /^\/cuppahaters/; botbetts = /^\/betts/; botcomplaint = /^\/complaint/; bottradeproposal = /^\/tradeproposal/; botpositionchange = /^\/positionchange/; bottradetally = /^\/tradetally/; botsob = /^\/sob/; botbroadcast = /^\/broadcast/; botalex = /^\/alex/; bottrophy = /^\/trophy/; botcommish = /^\/commish/; botgort = /^\/thankyougort/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mof/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/rules.htm");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mof/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mof/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/coaches.htm");
    this.res.end();
  } 
      else if(request.text && botlist.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/72156863.jpg");
    this.res.end();
  }
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
    else if(request.text && botJew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://upload.wikimedia.org/wikipedia/en/2/20/Jewboy_movie_poster.jpg");
    this.res.end();
  }
      else if(request.text && botCat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/d7/0d/dd/d70ddd3374982302f9657869901a1931.jpg");
    this.res.end();
  }
        else if(request.text && botGoat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media4.popsugar-assets.com/files/2012/08/33/4/192/1922398/0ec8ac79215b9c3f_4/i/Tom-Brady-Looks-Hot-Poses-Dog-VMAN-Magazine-Shot-Mario-Testino.jpg");
    this.res.end();
  }
          else if(request.text && botSavage.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i479.photobucket.com/albums/rr160/fishbulb-suplex/Wrestlers/Randy%20Savage/The_Macho_Man_Randy_Savage_-_Ran-7.jpg");
    this.res.end();
  }            
     else if(request.text && botPAWG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img15.deviantart.net/416d/i/2016/005/c/7/ass_morph_by_bury_she-d9mvyaz.jpg");
    this.res.end();
  }
       else if(request.text && botfrancesa.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://gothamsn.com/wp-content/uploads/2015/01/Mike_Francesa_Article1-482x307.jpg");
    this.res.end();
  }
       else if(request.text && botbbc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.colourbox.com/preview/5522898-black-rooster-on-a-white-background.jpg");
    this.res.end();
  }
            else if(request.text && botajlee.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.pwpix.net/superstars/m/missapril/images/ep/049.jpg");
    this.res.end();
  }
            else if(request.text && botDbag.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.serialoptimist.com/admin/wp-content/uploads/2012/12/douchebag-jar-how-quickly-would-this-fill-up-from-contributions-from-people-in-your-life_1338542678_epiclolcom.jpeg");
    this.res.end();
  }
            else if(request.text && botForum.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://s9.zetaboards.com/mofleagues/index/");
    this.res.end();
  }
              else if(request.text && botRecords.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://mofleagues.com/history/records.htm");
    this.res.end();
  }
                else if(request.text && botStandings.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MOF/standings");
    this.res.end();
  }
                else if(request.text && botSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MOF/schedules");
    this.res.end();
  }
                else if(request.text && botstats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MOF/stats/player");
    this.res.end();
  }
                else if(request.text && bottradeproposal.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/tradeproposal.htm");
    this.res.end();
  }
                  else if(request.text && botpositionchange.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/positionchange.htm");
    this.res.end();
  }
                    else if(request.text && botcomplaint.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/complaint.htm");
    this.res.end();
  }
                    else if(request.text && bottradetally.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1foIJOHqOZve959PmJiqaNmDU00PLD0EnRBZSIPn5l3s/pubhtml");
    this.res.end();
  }
              else if(request.text && botWebsite.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://mofleagues.com");
    this.res.end();
  }
                else if(request.text && botstallone.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/y8t1r.jpg");
    this.res.end();
  }
                else if(request.text && botaaron.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/b1/d0/6a/b1d06ac9a89ff1974b90ad050f652e3d.jpg");
    this.res.end();
  }
                  else if(request.text && botalex.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.dailymail.co.uk/i/pix/2010/09/09/article-1310349-0060142800000258-687_468x286.jpg");
    this.res.end();
  }
                    else if(request.text && bottrophy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/pictures/trophy/trophy_1.JPG");
    this.res.end();
}
                    else if(request.text && botcommish.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.gif");
    this.res.end();
  }
                      else if(request.text && botthankyougort.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/236x/4a/05/af/4a05af9a54ee42ba009ce9809371b772.jpg");
    this.res.end();
  }
                else if(request.text && botcuppahaters.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/media/ClXh-B2XIAAfH2-.jpg");
    this.res.end();
  }
                 else if(request.text && botcmpunk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://s2.quickmeme.com/img/9c/9cb99372b9137f833e3d27214e001d0863c6b291ca6b67bee1878f3fe89608cd.jpg");
    this.res.end();
  }
                   else if(request.text && botbetts.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://hw.infowars.com/wp-content/uploads/2016/11/trump-win1laugh.jpg");
    this.res.end();
  }
                   else if(request.text && botsob.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.pandawhale.com/post-55902-son-of-a-bitch-gif-Imgur-Tumbl-sOAG.gif");
    this.res.end();
  }
                     else if(request.text && botbroadcast.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.mofleagues.com/broadcast.htm");
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
