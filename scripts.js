// [VP]Blade's Pokemon Online Client Scripts //
// Many of the commands were made by [VP]Blade //
var auth_symbol = {
	"0": "",
	"1": "+",
	"2": "+",
	"3": "+",
	"4": ""
	//change these to what you have set yourself and more if needed using the format "x": "symbol",
}
var auth_style = {
	"0": "<b>",
	"1": "<i><b>",
	"2": "<i><b>",
	"3": "<i><b>",
	"4": "<b>"
	//change this to the style you have set, only start tags are needed
}
var stalkwords = [], // add stalkwords for you to be pinged format is ["word1","word2"], obviously you can add more than 2
    hilight = "BACKGROUND-COLOR: #ffff00", //change this if you want a different highlight color when pinged (leave background there unless you want a different style)
    fontcolour = "black", //change this for different font colous
    fontstyle = "", //this changes the font type of your text, leave it blank for default
    fontsize = 3, //this changes the font size of your text, 3 is default
    greentext = 'green', //changes the text when someone quotes with ">" at the start
    punctuation = [".", ",", "\"", "'", "&", ";", ":"]; //list of common punctuation, increase or decrease as you see fit
//these things below shouldn't be touched unless you know what you're doing~
function intellisult(e){var t=intellisult.config;var n=t.A,r=t.B,i=t.C,s=t.D,o=t.E,u=t.F;var a,f,l,c,h,p,d;do{a=n[Math.floor(Math.random()*n.length)]}while(a===intellisult.a);intellisult.a=a;do{f=r[Math.floor(Math.random()*r.length)]}while(f===intellisult.a);intellisult.b=f;do{l=i[Math.floor(Math.random()*i.length)]}while(l===intellisult.c);intellisult.c=l;do{c=s[Math.floor(Math.random()*s.length)]}while(c===intellisult.d);intellisult.d=c;do{h=o[Math.floor(Math.random()*o.length)]}while(h===intellisult.e);intellisult.e=h;do{p=u[Math.floor(Math.random()*u.length)]}while(p===intellisult.f);intellisult.f=p;e=e||"";if(e.trim()!==""){d=e+" is "+a+" "+f+" "+l+" and a "+c+" "+h+" "+p+"."}else{if(t.names[0]){e=t.names[Math.floor(Math.random()*t.names.length)];d=e+" is "+a+" "+f+" "+l+" and a "+c+" "+h+" "+p+"."}else{d="You are "+a+" "+f+" "+l+" and a "+c+" "+h+" "+p+"."}}return d}intellisult.a=intellisult.b=intellisult.c=intellisult.d=intellisult.e=intellisult.f="";intellisult.config={names:[],A:["a confoundedly","a conspicuously","a cruelly","a deucedly","a devilishly","a dreadfully","a frightfully","a grievously","a lamentably","a miserably","a monstrously","a piteously","a precociously","a preposterously","a shockingly","a sickly","a wickedly","a woefully","an abominably","an egregiously","an incalculably","an indescribably","an ineffably","an irredeemably","an outrageously","an unconscionably","an unequivocally","an unutterably"],B:["appalling","babbling","backward","bantering","blabbering","blighted","boorish","contemptible","corpulent","cretinous","debauched","decadent","demented","depraved","detestable","dissolute","execrable","fiendish","foolish","foul","gluttonous","grotesque","gruesome","hermaphroditic","hideous","ignominious","ignorant","ill-bred","ill-mannered","incompetent","incorrigible","indecent","inept","insignificant","insufferable","insufferable","lascivious","lecherous","licentious","loathsome","maladjusted","malignant","minuscule","miserable","myopic","naive","narcissistic","nonintuitive","obese","obtuse","offensive","parasitic","pedestrian","perverted","petty","primitive","promiscuous","reprehensible","repugnant","repulsive","revolting","salacious","subliterate","sybaritic","uncivilized","uncouth","unseemly","unsightly","vile","vulgar","witless"],C:["barbarian","cannibal","coccydynia","cretin","degenerate","delinquent","derelict","dingleberry","dolt","dullard","dunce","fiend","filcher","glutton","half-wit","heathen","hemorrhoid","idiot","ignoramus","imbecile","lackey","lecher","libertine","loafer","lout","malefactor","menace","microphallus","miscreant","misdemeanant","moron","narcissist","neanderthal","nincompoop","ninny","nose picker","oaf","onanist","parasite","peon","pervert","pick pocket","plebeian","polisson","prostitute","rapscallion","reprobate","reprobate","reptile","rogue","ruffian","scoundrel","simpleton","slattern","sphincter","subhuman","swine","sycophant","sycophant","troglodyte","trollop","twit","varmint","vermin","wretch"],D:["belligerent","catatonic","corrupt","dastardly","debased","debauched","decadent","decrepit","degenerate","demented","deplorable","depraved","disgusting","fecal","feculent","fiendish","flaccid","flagitious","flagrant","frightful","gaudy","glaring","gluttonous","gross","grotesque","heinous","hopeless","horribly atrocious","infamous","loathsome","ludicrous","maladjusted","malingering","malingering","malodorous","maniacal","maniacal","masturbatory","miscreant","miserable","monstrous","myopic","myopic","naive","narcissistic","narcissistic","nefarious","nefarious","outrageous","perverse","perverted","petty","preposterous","preposterous","primitive","primitive","putrid","putrid","rank","reprehensible","repugnant","revolting","rotten","vacuous","vapid","villainous","wearisome"],E:["acidly acrimonious","air-polluting","all-befouling","all-defiling","armpit-licking","blood-curdling","blood-freezing","bug-eyed","buttock-rimming","cantankerously-caterwauling","chromosome deficient","chronically flatulent","cold-hearted","coma-inducing","congenitally clueless","dandruff-eating","disease-ridden","dull-witted","enema-addicted","feces-collecting","feeble-minded","flea-infested","flesh-creeping","foul-smelling","gossip-mongering","grudge-festering","halitosis-infested","heart-sickening","Internet-addicted","irredeemably boring","maliciously malodorous","mattress-soiling","monotonous solitaire playing","mucous-eating","nose-picking","nostril-offending","odiously suffocating","one dimensional","orgasm faking","scruffy-looking","sheep-molesting","simple-minded","small-minded","snake-eyed","sock-sucking","soul-destroying","stench-emitting","thick-headed","toe-sucking","urine-reeking"],F:["aberration of nature","abomination of humanity","abomination to all the senses","abomination to all the senses","acrid smog of oppressively caustic oral effluvium","amalgamation of loathsome repulsiveness","arbitrary dereliction of genetics","assault on the ocular senses","blight upon society","buggering buttock bandit","cacophonous catastrophe","cesspool of putrid effluvium","cesspool of sub-human filth","cheap Internet loiterer","chromosome-deficient test tube experiment","conglomerate of intellectual constipation","conglomerate of intellectual constipation","delinquent who has delusions of adequacy","deplorable calamity of birth","depraved orgy of subhuman indecency","depravity of genetics","display of indecency","dreg of the Internet","derelict whose birth certificate is an apology from the condom factory","derelict whose birth certificate is an apology from the condom factory","evangelical crusader of sub-mediocrity","evangelical crusader of sub-mediocrity","excrement stain on a Sumo Wrestler's underpants","glob of grease","grotesque visual experience","grudge-festering haggard","gruesome vista to all eyes assaulted by the sight of you","hysterical mass of warbling inanity","lamentable mistake by your parent's reckless exchange of genetic material","leach on humanity","malfunctioning little twerp","malodorous heathen","malodorous marinade of sweat and fear","manifestation of contraceptive personality","mass of existential impotence","mass of loathsome repulsiveness","mass of neuroses and complexes","mass of neuroses and pathologies","mass of neuroses and pathologies","mean-spirited poltroon","mediocrity afflicted with mental retardation","menace to, not only society, but all living creatures","mental midget with the natural grace of an intoxicated beluga whale","molester of small furry animals","molester of small old men","moving stench of leprosy","mutilation of decency","nauseating assault on the senses","nauseating assault on the senses","nefarious vermin","obfuscation of all that is good","object of execration","ocular depravity to all of discrimination","odious leach-covered blob of quivering slime","odious leach-covered glob of quivering slime","offense to all of good taste and decency","oppressive orgy of perversion","orgy of indecency","orgy of indignity","parasite on the states resources","personification of vulgarity","piece of excrement attached to a dogs posterior","pitiful sideshow freak","plague of sighing and grief","plague upon humanity","plot-less melodrama of uneventful life","plot-less melodrama of uneventful life","practitioner of bestiality","proof that evolution can go in reverse","proof that test tube experiments can go horribly wrong","pulp of stultifying inanity","putrid waste of flesh","repulsive polisson","sadistic hippophilic necrophile","scourge of decency","sexual assaulter of barnyard animals","shameless exhibition of genetic deficiency","shameless exhibition of genetic deficiency","sideshow freak whose word is as valuable as an aging cow paddy","spawn from a lunatics rectum","spawn of a mad scientist and a disastrous test tube experiment","sub-literate simple minded mental midget","tainted spawn of a syphilitic swamp rat","tainted spawn of a syphilitic swamp hog","tasteless amalgam of dross","toll on the nerves of those with good taste and decency","unfortunate occurrence of unprotected intercourse","unspeakably offensive barbarian","vulgarity to all and sundry","wretched horror to all who encounter you"]}
function init() {
    if (sys.getVal("recmsg") === undefined) {
        sys.saveVal("recmsg", "off");
    }
    if (sys.getVal('etext') === "true") {
        etext = "true"
    } else {
        etext = "false"
    }
    if (sys.getVal('tgreentext') === "true") {
        tgreentext = "true"
    } else {
        tgreentext = "false"
    }
}

init();

function awayFunction() {
	if (sys.getVal("idle") === "true") {
		print("You are now Auto-Idling!");
		client.goAway(true);
	} else {
		client.printHtml("<timestamp/> To give yourself <b>Auto-Idle</b>, type <b>~idle on</b>");
		client.goAway(false);
	}
}
client.network().playerLogin.connect(function () { //only call when the user has logged in to prevent any crashes
	awayFunction();
	init();
});
poScript = ({
	clientStartUp: function () {
		client.printHtml("<timestamp/> You are using <b><font color=navy>Blade's</font> Client<font color=red> Scripts!</b></font><br/><timestamp/> Type <b>~cmds</b> to view the <b>commands</b>!");
		init();
		this.stepEvent();
	},
	stepEvent: function () {
		var id = client.ownId()
		if (id === -1) {
			sys.setTimer(function () {
				script.stepEvent();
			}, 1000,false)
		} else {
			this.awayFunction();
		}
	},
	bot: function (msg) {
		client.printHtml("<font color=blue><timestamp/><b> +Bot:</font></b> " + msg);
		return;
	},
	channelLinks: function (string) {
		var channels = client.channelNames();
		for (x in channels) {
			if (string.toLowerCase().indexOf("#" + channels[x].toLowerCase()) != -1) {
				var channel = new RegExp("#" + channels[x], "i");
				string = string.replace(channel, '<a href="po:join/' + channels[x] + '">#' + channels[x] + "</a>");
			}
		}
		return string
	},
	authEnd: function (string) {
		newstring = string.replace(/</g, "</");
		return newstring;
	},
	stepEvent: function () {
		var id = client.ownId()
		if (id === -1) {
			sys.setTimer(function () {
				script.stepEvent();
			}, 1000,false)
		} else {

		}
	},
	html_escape: function (text) {
		var m = String(text);
		if (m.length > 0) {
			var amp = "&am" + "p;";
			var lt = "&l" + "t;";
			var gt = "&g" + "t;";
			return m.replace(/&/g, amp).replace(/</g, lt).replace(/>/g, gt);
		} else {
			return "";
		}
	},
	beforeChannelMessage: function (message, chan, html) {
		var pos = message.indexOf(': ');
		if (pos != -1) {
			if (client.id(message.substring(0, pos)) == -1) {
				return;
			}
			var id = client.id(message.substring(0, pos));
			var playname = message.substring(0, pos);
			var playmessage = this.html_escape(message.substr(pos + 2));
			var msg = playmessage.split(' ');
			for (x in msg) {
				var msgnew, otherend;
				var msgl = msg[x].length;
				var start = msg[x][0];
				var end = msg[x][parseInt(msgl - 1)];
				for (y in punctuation) {
					if (start == punctuation[y]) {
						start = msg[x][1];
					}
					if (end == punctuation[y]) {
						end = msg[x][parseInt(msgl - 2)];
						otherend = punctuation[y];
					}
				}
				if (msg[x].substr(0, 7) == "http://" || msg[x].substr(0, 8) == "https://") {
					var link = msg[x];
					link = link.replace(/&amp;/g, "&");
					msgnew = "<a href = '" + link + "'>" + link + "</a>";
					playmessage = playmessage.replace(msg[x], msgnew);
				}
				if (((start == "*" && end == "*" && msgl > 2) || ((start == "/" || start == "\\") && (end == "/" || end == "\\") && msgl > 2) || (start == "_" && end == "_" && msgl > 2)) && etext === "true") {
					var modifier, endmodifier, newmsg;
					if (start == "*") {
						modifier = "<b>";
						endmodifier = "</b>";
					}
					if (start == "/" || start == "\\") {
						modifier = "<i>";
						endmodifier = "</i>";
					}
					if (start == "_") {
						modifier = "<u>";
						endmodifier = "</u>";
					}
					var i = msg[x].lastIndexOf(end);
					if (i >= 0) {
						newmsg = msg[x].substring(0, i) + endmodifier + (otherend == undefined ? "" : otherend);
					}
					msgnew = newmsg.replace(start, modifier);
					playmessage = playmessage.replace(msg[x], msgnew);
				}
			}
			var colour = client.color(id);
			if (colour === "#000000") {
				var clist = ['#5811b1', '#399bcd', '#0474bb', '#f8760d', '#a00c9e', '#0d762b', '#5f4c00', '#9a4f6d', '#d0990f', '#1b1390', '#028678', '#0324b1'];
				colour = clist[src % clist.length];
			}
			if (playmessage.toLowerCase().indexOf(client.ownName().toLowerCase()) != -1 && playname !== client.ownName()) {
				var name = new RegExp("\\b" + client.ownName() + "\\b", "i");
				newplaymessage = playmessage.replace(name, "<span style='" + hilight + "'>" + client.ownName() + "</span>");
				if (newplaymessage !== playmessage) {
					playmessage = newplaymessage.replace(newplaymessage, "<i> " + newplaymessage + "</i><ping/>");
				}
			}
			for (x in stalkwords) {
				if (playmessage.toLowerCase().indexOf(stalkwords[x].toLowerCase()) != -1 && playname !== client.ownName()) {
					var stalk = new RegExp("\\b" + stalkwords[x] + "\\b", "i");
					newplaymessage = playmessage.replace(stalk, "<span style='" + hilight + "'>" + stalkwords[x] + "</span>");
					if (newplaymessage !== playmessage) {
						playmessage = newplaymessage.replace(newplaymessage, "<i> " + newplaymessage + "</i><ping/>");
					}
				}
			}
			if (playmessage.substr(0, 4) == "&gt;" && tgreentext === "true") {
				playmessage = "<font color = '" + greentext + "'>" + playmessage + "</font>";
			} else {
				playmessage = "<font color = '" + fontcolour + "'>" + playmessage;
			}
			var symbolLength = 0;
			for (x in auth_symbol) {
				if (x > symbolLength) {
					symbolLength = x;
				}
			}
			var auth = client.auth(id)
			if (auth > symbolLength) {
				auth = 0;
			}
			playmessage = this.channelLinks(playmessage)
			client.printChannelMessage("<font face ='" + fontstyle + "'><font size = " + fontsize + "><font color='" + colour + "'><timestamp/> " + auth_symbol[auth] + auth_style[auth] + playname + ": </font>" + this.authEnd(auth_style[auth]) + playmessage, chan, true)
			sys.stopEvent()
		}
	},
	beforeSendMessage: function (msg, channel) {
		if (msg.substr(0, 1) == "~" && msg.length > 1) {
            sys.stopEvent();
            var cmd;
            var cData;
            var pos = msg.indexOf(' ');
            if (pos != -1) {
                cmd = msg.substring(1, pos).toLowerCase();
                cData = msg.substr(pos + 1);
            } else {
                cmd = msg.substr(1).toLowerCase();
            }
            if (cmd == "cmds") {
                client.printHtml("<br><font color='black'size='4'><b>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font></b><br><br><font color='red'size='5'><b><u>Commands:</font></b></u><br><br><ul><li><b>~etext <font color=red>[on/off]</font> -- to toggle enriched text <font color=red>on</font> or <font color=red> off</font></li><b><li>~greentext <font color=red>[on/off]</font> -- to toggle greentext <font color=red>on</font> or <font color=red>off</font></li><b><li>~idle <font color=red>[on/off]</font> -- to toggle auto-idle <font color=red>on</font> or <font color=red>off</font></li><b><li>~id <font color=red>[player]</font> -- to retrieve the id of an online player</li><b><li>~eval <font color=red>[code]</font> -- to evaluate a client script code</li><b><li>~updatescript -- to load the script after an update</li><b><li>~pokedex <font color=red>[pokemon]</font> -- to view details about a <font color=red>pokemon</font> [Alternate formes do NOT work!!]</li><b><li>~reconnect -- to reconnect to a server if you've disconnected</li><b><li>~recmsg <font color=red>[on/off]</font> -- to toggle the reconnect message <font color=red>on</font> or <font color=red>off</font></li><b><li>~setrecmsg <font color=red>[message]</font> -- to set a reconnect message</li><b><li>~sprite <font color=red>[pokemon]:[generation]</font> -- to generate a Pokemon's sprite from a specific generation</li><b><li>~imp <font color=red>[new name]</font> -- to change your name</li><b><li>~scriptinfo -- to view information about the client scripts</li><b><li>~html <font color=red>[html code]</font> -- to test an HTML code, only you can see it</li><b><li>~insult <font color=red>[player]</font> -- to insult a player</li><b><li>~intellisult <font color=red>[player]</font> -- to insult a player with intelligent words</ul><br><font color='black'size='4'><b>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font></b><br>");
                return;
            }
            if (cmd == "etext") {
                if (cData == "on") {
                    etext = "true";
                    sys.saveVal('etext', true)
                    script.bot("You turned Enriched text on!")
                    return;
                }
                if (cData == "off") {
                    etext = "false";
                    sys.saveVal('etext', false)
                    script.bot("You turned Enriched text off!")
                    return;
                }
                script.bot("Please use on/off.")
            }
            if (cmd == "greentext") {
                if (cData == "on") {
                    tgreentext = "true"
                    sys.saveVal('tgreentext', true)
                    script.bot("You turned greentext on!")
                    return;
                }
                if (cData == "off") {
                    tgreentext = "false"
                    sys.saveVal('tgreentext', false)
                    script.bot("You turned greentext off!")
                    return;
                }
                script.bot("Please use on/off.")
            }
            if (cmd == "idle") {
                if (cData == "on") {
                    client.goAway(true)
                    sys.saveVal('idle', true)
                    script.bot("You turned auto-idling on!")
                    return;
                }
                if (cData == "off") {
                    client.goAway(false)
                    sys.saveVal('idle', false)
                    script.bot("You turned auto-idling off!")
                    return;
                }
                script.bot("Please use on/off")
            }
            if (cmd == "id") {
                if (client.id(cData) == "-1") {
                    script.bot("This person either doesn't exist, or isn't logged on.");
                    return;
                }
                script.bot(cData + "'s id is " + client.id(cData) + ".")
                return;
            }
            if (cmd == "reconnect" && sys.getVal("recmsg") == "on") {
                script.bot("You have decided to reconnect.");
                client.reconnect();
                sys.delayedCall(function () {
                    client.network().sendChanMessage(0, sys.getVal("recmsgset"));
                }, 5);
                return;
            }
            if (cmd == "reconnect" && sys.getVal("recmsg") == "off") {
                script.bot("You have decided to reconnect.");
                client.reconnect();
                return;
            }
            if (cmd == "sprite") {
                var cda = cData.split(":");
                var poke = sys.pokeNum(cda[0]);
                var gen = cda[1];
                if (cda[0].length < 1 || poke == undefined) {
                    script.bot("'" + cda[0] + "' is not a Pokemon.");
                    return;
                }
                var nums = ["1", "2", "3", "4", "5", "6"];
                if (nums.indexOf(gen) == -1) {
                    script.bot("Invalid generation.");
                    return;
                }
                client.printHtml("<timestamp/><b><font size=4>" + cda[0] + "'s Gen " + gen + " Sprite: <img src='pokemon:" + poke + "&gen=" + gen + "'/></b></font>");
                return;
            }
            if (cmd == "recmsg") {
                var bool = ["off", "on"];
                if (bool.indexOf(cData) == -1) {
                    script.bot("On and off are the only options.");
                    return;
                }
                if (cData == "off" && sys.getVal("recmsg") == "off" || cData == "on" && sys.getVal("recmsg") == "on") {
                    script.bot("The reconnect message is already " + cData + ".");
                    return;
                }
                if (cData == "off") {
                    script.bot("You turned the reconnect message off.");
                    sys.saveVal("recmsg", "off");
                } else {
                    script.bot("You turned the reconnect message on.");
                    sys.saveVal("recmsg", "on");
                    return;
                }
            }
            if (cmd == "setrecmsg") {
                if (cData.length < 2) {
                    script.bot("That reconnect message is too small.");
                } else {
                    script.bot("Reconnect message set to: <b>" + cData);
                    sys.saveVal("recmsgset", cData);
                }
                return;
            }
            if (cmd == "insult") {
                if (cData.length < 2) {
                    script.bot("Please specify a real name!");
                    return;
                }
                var Links = new Array();
                Links[0] = "That was very rude, " + cData + ", you feces sucking ratfaced little cunt. You swine. You vulgar little maggot. Don't you know that you are pathetic? You worthless bag of filth. As they say in Texas, I'll bet you couldn't pour piss out of a boot with instructions on the heel. You are a canker. A sore that won't go away. I would rather kiss a horse's rear end than be seen with you.";
                Links[1] = "" + cData + ", your astounding illiteracy is only exceeded by your wanton ignorance. Your brain would be better off if it were to be genetically modified in a pile of feces. Your subnormal intellectual capacity may interest someone studying abnormal psychology, since your level of intellect is lower than a single celled organism, however, I realize that may be beyond your ability to comprehend due to your lack of intelligence, let me voice this in a fashion you're probably accustomed to: You are uneducated, and stupid. Please cease the appearance on the internet, from now on. You are like a cancer. Goodbye.";
                Links[2] = "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in guerilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, " + cData + ".";
                Links[3] = "" + cData + " is a deucedly miserable troglodyte and is belligerent soul-destroying proof that evolution can go in reverse.";
                Links[4] = "I refuse to have a battle of the wits with an unarmed opponent, such as " + cData + ".";
                Links[5] = "YOU KNOW WHAT, " + cData.toUpperCase() + "? FUCK THESE FORUMS AND FUCK VP! IM TIRED OF BEING FUCKING INSULTED OVER THE GODDAM FORUMS EVEN THOUGH ITFS FUCKING FORUM HUMOR OR SOME BULLSHIT LIKE THAT. NOT ONE PERSON EVEN CARES ABOUT ME IN VP, MUCH LESS LIKES ME SO FUCK IT, AND FUCK ALL OF YOU GUYS FOR FUCKS SAKE IM DONE WITH VP. IVE STAYED HERE FOR AN ENTIRE FUCKING YEAR AND NOBODY STILL HAS ANY GODDAMN RESPECT FOR ME. ALL THE PEOPLE I KNEW FROM WAY BACK WHEN ALREADY QUIT VP SO ITS ABOUT TIME I DID TOO";
                Links[6] = "first of all, "+cData.toLowerCase()+", i m not a atteantion whore, sir, you are, and second of all,how about you fucking quit po already and take your fucking dumbass out of here,son of a bitch,a nd we are normal for our fucking age,bitchy ass, u butthurt so bad that rouge is fucking rapeing u while a fucking furry 100000 long dick is fucking your anus hole and sperming in your mouth";
                Links[7] = "Hey, "+cData+", learn from your parents' mistakes - use birth control!";
                Links[8] = ""+cData+", I'd really like to see things from your point of view but I can't seem to get my head that far up my ass.";
                Links[9] = ""+cData+", you fucking ass muncher you cheating mu fucka i hope yo daddy booty rape yo bitch ass and you catch aids you lonely white trash piece of shit waste of human flesh drink bleach please hoe mu fucka eat 2 godzilla dicks";
                Links[10] = "Hey, "+cData+", the thing you are confused about is a brain. You probably don't have one, as you've shown and I've taken notice. Unfortunately for you, you will never be able to comprehend anything farther than a simple two letter word. Have fun living a simple and pathetic life you worthless troglodyte.";
                Links[11] = "sorry "+cData.toLowerCase()+" a least in know how to mother fucking sprll bitch";
                Links[12] = "Look, "+cData+", you're a maggot. We've been talking for like what 5 minutes? Your going to address me ass retarded? I Get straight A's in ever class I get. My professors Praise me infringement of every one how my vast my knowledge is. So calm down. Go back to drinking your juice boxes pooping and falling asleep mmk?";		
                Links[13] = "" + cData.toUpperCase() + " IN MY LIFE UR JUST ON A COMPUTER SCREEN OH WOW A GIANT ASS COMPUTER SCREEN U CAN JUST FUCK URSELF AND JIZZ ON IT AND I HOPE UR ASS GETS BEAT BY A BELT BY UR MOM NOW LEAVE";
                Links[14] = ""+cData.toLowerCase()+" ur a shitty ass troll with no life and u keep saying everything is my fault well i have news for u SAY SOMETHING INTELLIGENT OR SHUT UR FACE";
                Links[15] = "WHAT THE FUCK "+cData.toUpperCase()+" YOU OLDIE? KATTY PERY IS A ASPIRATION! GO FUCK URSEF! OH AND PEECOK ISNT ABOUT DICKS PERVERTE!!! STFU UR LIKE 50YEARS OLD!!! I LIKE KATTIE PERY, JUSTIN BEIBER AND 1D YOU LIKE 1920 COWBOY MUSICS, UR NOT A LIL GURL ANYMORRE! FUCK YOU OLDIE, DUMMIE M-FUCKARE!!!!";			
                Links[16] = ""+cData+", please shut the fuck up and tell me this shit later when I have a nice life and you're a homeless bum with your extensive knowledge of sociaty";
                Links[17] = "*sigh* "+cData+" You just don't get it do you. Ive already lived Everything you aren't even close to. Immaturity? Actually it's a sense in humor but call it what you please. It doesn't affect me in any way.Solitude? Don't make me laugh kid. I've been in the army for 4 Years and Have a girlfriend. What do you have? Your computers and video games.Learn some more about the world? Look kid I have enough knowledge about this world we live in sometimes I wish I didn't.Grow the fuck up? I think I've grown plenty. See, Kid";
                Links[18] = ""+cData.toLowerCase()+" shut up u obese penis";			
                Links[19] = "Excuse me, "+cData+", but just who in the fuck do you think you are? YOU, bossing ME around? Suck a trillion dicks. I don't have to do a single motherfucking thing you tell me. You think your hot shit mouthing off to me but I bet if we were face to face you'd change colors quicker than the fucking Aroara Boaryalice.";
                Links[20] = "I just know your going to reply to this with \"LOL U MAD\", "+cData+". Your fucking andissipating my reply. The second you post that outdated cumback I will track you're IP, find out where you live and tear you a new arsehole.";
                Links[21] = ""+cData.toLowerCase()+" mother fucker you dont know who the fuck i am, you are a fag who likes sticking it in guys asses and you best believe that you'd be the one getting crammed in your fuckin rear by my Ukranian Fort-500 shotgun before i blow your fucking guts out your chest you faggit little bitch your fucking pathetic you best hope i never head to your town, i'll find yeah and shank you in your sleep, you wanna die motherfucker?";
                Links[22] = "lol "+cData.toLowerCase()+" you faggot, we get it, you want to sound intelligent and important and so you go to a forum like this and find some other jizzbag like you who just writes the same shit over and over again to have a debate so that someone can finally listen and hear your point of view because everybody who comes across you isn't interested.";			
                Links[23] = "Oooooooh, "+cData+", I'm so scared, you think you're tough pussy? I'm behind 7 proxies and use ZoneAlarm, Sygate and Comodo Internetnet Securtiy which I all keep up-to-date. THAT'S THREE FIREWALLS AT THE SAME TIME motherfucker. You can't hack me you little piece of shit. You're peeshooter and kung fu won't make a difference when my friend woh's a B-51 pilot in the Air Force can turn your entire house and backyard into a fuckhuge bomb crater.";
                Links[24] = ""+cData+", you are pathetic, while you're sitting there writing insults like the sad little nerd you are i'm having sex with my hot girlfriends. Yeah you read that right, i have not one but FIVE girlfriends. Top that motherfucker, I dont think you've ever even held hands with a girl.";
                Links[25] = ""+cData.toUpperCase()+" WHAT DID YOU FUCKING CALL ME? A FAGGOT? DO YOU FUCKING KN OW WHAT FAGGOT EVEN MEANS? IT MEANS A HOMOSEXUAL. A FUCKING QUEER. A WHOOPSY. A PRANCING LALA FRUITY BOY. YOU COME HERE, AND CALL ME FUCKING THAT? DO YOU HAVE ANY IDEA HOW MANY GIGABYTES OF PORNOGRAPHY FEATURING ONLY FUCKING !!!FEMALES!! I HAVE? DO YOU HAVE ANY IDEA HOW MANY TIMES A DAY I MASTURBATE TO THIS COLLECTION, HOW MANY HOURS I SPEND EXPANDING IT?";			
                Links[26] = "Hey, "+cData+", WTF are you doing back here? I thought you got out of here! Will you shut your fucking mouth up, stop circle-jerking around in the closet?! WTF IS WRONG WITH YOU?!? Why don't you try messing with some real trolls, like Yahoo Answers people for instance instead? Oh, and grow some fucking balls and grow the fuck up too! This site is so full of trolls like you that I can't take it anymore!";
                Links[27] = "shut up "+cData.toLowerCase()+" you little peasanty homosexual slave i dont give a fuck of what you are saying just chill out and shut your yap because i am fed up with this silly trolling at least i thiught pbc was cool";
                Links[28] = ""+cData.toLowerCase()+" ur so stupid thinking u can hack this chat ur just jelious of me and tails being together u know wht ur justa desprate hoe who wants nothing but sex from tails gtfo u cant have tails he's mine mine and mine only not even linky can get to him with me around u make me laugh";
                Links[29] = ""+cData.toUpperCase()+" YOU MEAN FUCKER IM DONE WITH THIS SHIT ALL U DO IS PICK ON ME GET A LIFE UGH YOU UGLY FUCKER GO AWAY BEFORE SHIT ON UR FACE";
                Links[30] = "oh my god your the most annoying ass person to ever walk the face of the earth please just shve your head back up your ass and please stop bothering us no one wants to battle you!!! @"+cData+"";
                Links[31] = "shut your white whole cracker "+cData.toLowerCase()+"";
                Links[32] = ""+cData+" you need a life because your parents didn't slave away in the Wal-Mart cotton fields just for you to live on welfare and collect foodstamps.";
                Links[33] = "hey "+cData.toLowerCase()+" stop acting cool because you got no dick";
                Links[34] = ""+cData.toLowerCase()+" is tht wat u do all day? make fun of po users? i bet uve never gotten laid nd ive fucked many bitchs";
                Links[35] = ""+cData+" Iam no dumed ass cuz that mean I a Lil bitch ass fack ass trainer suck on my pokeballs bitch";
                Links[36] = ""+cData.toLowerCase()+" your the faggot who protects barrack obamashit who by the way is a goddamn terrerrest";
                Links[37] = ""+cData.toUpperCase()+" FUK U NIGGA STOP SO MUTHA FUKN RACIST MAN JUST CUZ IM BLACK DOESNT MEAN U CAN BE A FUKN CUNT";
                Links[38] = ""+cData.toLowerCase()+" just shut the fuck up your just an annoying lil black bitch that dont phase shit so why dont u get yo im black and im bad ass the fuck outa hers";
                Links[39] = "actually dumbfuck "+cData.toLowerCase()+" it nevee said recover it said lefovers and actually noobs play fair unlike you your an epic and so was your moms abortion";
                var i = Math.floor(Links.length * Math.random())
                client.network().sendChanMessage(channel, Links[i]);
                return;
            }
            if (cmd == "intellisult") {
                if (cData.length < 2) {
                    script.bot("Please specify a real name!");
                    return;
                }
                client.network().sendChanMessage(channel, intellisult(cData));
                return;
            }
            if (cmd == "scriptinfo") {
                client.printHtml("<br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br><font color=black><timestamp/><b>[VP]Blade's Client Scripts™</b></font><br><font color=blue><timestamp/><b>Created by: <font color=navy>[VP]Blade</b></font><br><font color=green><timestamp/><b>Full Script: <a href='https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js'>https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js</a></b></font><br><font color=navy><timestamp/><b>Special Thanks To:</font> <b><font color=black>TheUnknownOne and Ethan</b></font><br><font color=black><timestamp/><b> © [VP]Blade, 2013</b></font><br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br>",0);
                return;
            }
            if (cmd == "pokedex") {
                var poke = sys.pokeNum(cData);
                var poke2 = sys.pokeNum(cData);
                var type1 = sys.pokeType1(poke, 6);
                var type2 = sys.pokeType2(poke, 6);
                var ability1 = sys.ability(sys.pokeAbility(poke, 0)),
                    ability2 = sys.ability(sys.pokeAbility(poke, 1)),
                    ability3 = sys.ability(sys.pokeAbility(poke, 2));
                var border = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
                if (!cData) {
                    script.bot("Please specify a Pokémon!");
                    return;
                }
                if (poke == undefined) {
                    script.bot("'" + cData + "' is not a Pokemon.");
                } else {
                    var baseStats = sys.pokeBaseStats(poke2, '6');
                    var getStat = function(stat) {
                        var stats = {
                            "hp": 0,
                            "atk": 1,
                            "def": 2,
                            "satk": 3,
                            "sdef": 4,
                            "spd": 5
                        };
                        return baseStats[stats[stat]];
                    }
                    client.printHtml("<br><b><font color='red'size='4'>" + border + "</font><br>");
                    client.printHtml("<h2>" + cData + "</h2><br>");
                    client.printHtml("<img src='pokemon:" + poke + "&gen=6'/><img src='pokemon:" + poke + "&gen=6&back=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true&back=true'/></b><br><br>");
                    if (type2 == 18) {
                        client.printHtml("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")));
                        client.printHtml("<timestamp/><b>Base Stats:</b> "+getStat('hp')+" <b>HP</b>, "+getStat('atk')+" <b>ATK</b>, "+getStat('def')+" <b>DEF</b>, "+getStat('satk')+" <b>SATK</b>, "+getStat('sdef')+" <b>SDEF</b>, "+getStat('spd')+" <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</font><br>");
                    } else {
                        client.printHtml("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/> / <img src='Themes/Classic/types/type" + type2 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")));
                        client.printHtml("<timestamp/><b>Base Stats:</b> "+getStat('hp')+" <b>HP</b>, "+getStat('atk')+" <b>ATK</b>, "+getStat('def')+" <b>DEF</b>, "+getStat('satk')+" <b>SATK</b>, "+getStat('sdef')+" <b>SDEF</b>, "+getStat('spd')+" <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</font><br>");
                    }
                }
                return;
            }
            if (cmd == "updatescript") {
                try {
                    sys.webCall("https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js", function (resp) {
                        sys.changeScript(resp, true);
                        sys.writeToFile(sys.scriptsFolder + "scripts.js", resp);
                        script.bot("You updated the scripts!");
                    });
                    script.bot("Grabbing scripts...");
                } catch (e) {
                    script.bot("You made an error: " + e);
                    return;
                }
                return;
            }
            if (cmd == "imp") {
                if (cData.length < 1) {
                    script.bot("Invalid name. Please try again.");
                    return;
                }
                script.bot("You have changed your name to " + cData + "!");
                client.changeName(cData);
                return;
            }
            if (cmd == "html") {
                client.printHtml(cData);
                return;
            }
            if (cmd == "eval") {
                script.bot("You evaluated the following code: " + cData);
                eval(cData);
                return;
            }
            script.bot("This command does not exist.");
        }
	},
})
