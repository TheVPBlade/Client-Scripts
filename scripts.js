// [VP]Blade's Pokemon Online Client Scripts //
// Many of the commands were made by [VP]Blade //
var auth_symbol = {
    "0": "",
    "1": "+",
    "2": "+",
    "3": "+",
    "4": ""
    //change these to what you have set yourself and more if needed using the format "x": "symbol",
};
var auth_style = {
    "0": "<b>",
    "1": "<i><b>",
    "2": "<i><b>",
    "3": "<i><b>",
    "4": "<b>"
    //change this to the style you have set, only start tags are needed
};
var stalkwords = [], // add stalkwords for you to be pinged format is ["word1","word2"], obviously you can add more than 2
    hilight = "BACKGROUND-COLOR: #ffff00", //change this if you want a different highlight color when pinged (leave background there unless you want a different style)
    fontcolour = "black", //change this for different font colous
    fontstyle = "", //this changes the font type of your text, leave it blank for default
    fontsize = 3, //this changes the font size of your text, 3 is default
    greentext = 'green', //changes the text when someone quotes with ">" at the start
    punctuation = [".", ",", "\"", "'", "&", ";", ":"]; //list of common punctuation, increase or decrease as you see fit

var Insults = [];
//these things below shouldn't be touched unless you know what you're doing~
function intellisult(e) {
    var t = intellisult.config;
    var n = t.A,
        r = t.B,
        i = t.C,
        s = t.D,
        o = t.E,
        u = t.F;
    var a, f, l, c, h, p, d;
    do {
        a = n[Math.floor(Math.random() * n.length)];
    } while (a === intellisult.a);
    intellisult.a = a;
    do {
        f = r[Math.floor(Math.random() * r.length)];
    } while (f === intellisult.a);
    intellisult.b = f;
    do {
        l = i[Math.floor(Math.random() * i.length)];
    } while (l === intellisult.c);
    intellisult.c = l;
    do {
        c = s[Math.floor(Math.random() * s.length)];
    } while (c === intellisult.d);
    intellisult.d = c;
    do {
        h = o[Math.floor(Math.random() * o.length)];
    } while (h === intellisult.e);
    intellisult.e = h;
    do {
        p = u[Math.floor(Math.random() * u.length)];
    } while (p === intellisult.f);
    intellisult.f = p;
    e = e || "";
    if (e.trim() !== "") {
        d = e + " is " + a + " " + f + " " + l + " and a " + c + " " + h + " " + p + ".";
    } else {
        if (t.names[0]) {
            e = t.names[Math.floor(Math.random() * t.names.length)];
            d = e + " is " + a + " " + f + " " + l + " and a " + c + " " + h + " " + p + ".";
        } else {
            d = "You are " + a + " " + f + " " + l + " and a " + c + " " + h + " " + p + ".";
        }
    }
    return d;
}
intellisult.a = intellisult.b = intellisult.c = intellisult.d = intellisult.e = intellisult.f = "";
intellisult.config = {
    names: [],
    A: ["a confoundedly", "a conspicuously", "a cruelly", "a deucedly", "a devilishly", "a dreadfully", "a frightfully", "a grievously", "a lamentably", "a miserably", "a monstrously", "a piteously", "a precociously", "a preposterously", "a shockingly", "a sickly", "a wickedly", "a woefully", "an abominably", "an egregiously", "an incalculably", "an indescribably", "an ineffably", "an irredeemably", "an outrageously", "an unconscionably", "an unequivocally", "an unutterably"],
    B: ["appalling", "babbling", "backward", "bantering", "blabbering", "blighted", "boorish", "contemptible", "corpulent", "cretinous", "debauched", "decadent", "demented", "depraved", "detestable", "dissolute", "execrable", "fiendish", "foolish", "foul", "gluttonous", "grotesque", "gruesome", "hermaphroditic", "hideous", "ignominious", "ignorant", "ill-bred", "ill-mannered", "incompetent", "incorrigible", "indecent", "inept", "insignificant", "insufferable", "insufferable", "lascivious", "lecherous", "licentious", "loathsome", "maladjusted", "malignant", "minuscule", "miserable", "myopic", "naive", "narcissistic", "nonintuitive", "obese", "obtuse", "offensive", "parasitic", "pedestrian", "perverted", "petty", "primitive", "promiscuous", "reprehensible", "repugnant", "repulsive", "revolting", "salacious", "subliterate", "sybaritic", "uncivilized", "uncouth", "unseemly", "unsightly", "vile", "vulgar", "witless"],
    C: ["barbarian", "cannibal", "coccydynia", "cretin", "degenerate", "delinquent", "derelict", "dingleberry", "dolt", "dullard", "dunce", "fiend", "filcher", "glutton", "half-wit", "heathen", "hemorrhoid", "idiot", "ignoramus", "imbecile", "lackey", "lecher", "libertine", "loafer", "lout", "malefactor", "menace", "microphallus", "miscreant", "misdemeanant", "moron", "narcissist", "neanderthal", "nincompoop", "ninny", "nose picker", "oaf", "onanist", "parasite", "peon", "pervert", "pick pocket", "plebeian", "polisson", "prostitute", "rapscallion", "reprobate", "reprobate", "reptile", "rogue", "ruffian", "scoundrel", "simpleton", "slattern", "sphincter", "subhuman", "swine", "sycophant", "sycophant", "troglodyte", "trollop", "twit", "varmint", "vermin", "wretch"],
    D: ["belligerent", "catatonic", "corrupt", "dastardly", "debased", "debauched", "decadent", "decrepit", "degenerate", "demented", "deplorable", "depraved", "disgusting", "fecal", "feculent", "fiendish", "flaccid", "flagitious", "flagrant", "frightful", "gaudy", "glaring", "gluttonous", "gross", "grotesque", "heinous", "hopeless", "horribly atrocious", "infamous", "loathsome", "ludicrous", "maladjusted", "malingering", "malingering", "malodorous", "maniacal", "maniacal", "masturbatory", "miscreant", "miserable", "monstrous", "myopic", "myopic", "naive", "narcissistic", "narcissistic", "nefarious", "nefarious", "outrageous", "perverse", "perverted", "petty", "preposterous", "preposterous", "primitive", "primitive", "putrid", "putrid", "rank", "reprehensible", "repugnant", "revolting", "rotten", "vacuous", "vapid", "villainous", "wearisome"],
    E: ["acidly acrimonious", "air-polluting", "all-befouling", "all-defiling", "armpit-licking", "blood-curdling", "blood-freezing", "bug-eyed", "buttock-rimming", "cantankerously-caterwauling", "chromosome deficient", "chronically flatulent", "cold-hearted", "coma-inducing", "congenitally clueless", "dandruff-eating", "disease-ridden", "dull-witted", "enema-addicted", "feces-collecting", "feeble-minded", "flea-infested", "flesh-creeping", "foul-smelling", "gossip-mongering", "grudge-festering", "halitosis-infested", "heart-sickening", "Internet-addicted", "irredeemably boring", "maliciously malodorous", "mattress-soiling", "monotonous solitaire playing", "mucous-eating", "nose-picking", "nostril-offending", "odiously suffocating", "one dimensional", "orgasm faking", "scruffy-looking", "sheep-molesting", "simple-minded", "small-minded", "snake-eyed", "sock-sucking", "soul-destroying", "stench-emitting", "thick-headed", "toe-sucking", "urine-reeking"],
    F: ["aberration of nature", "abomination of humanity", "abomination to all the senses", "abomination to all the senses", "acrid smog of oppressively caustic oral effluvium", "amalgamation of loathsome repulsiveness", "arbitrary dereliction of genetics", "assault on the ocular senses", "blight upon society", "buggering buttock bandit", "cacophonous catastrophe", "cesspool of putrid effluvium", "cesspool of sub-human filth", "cheap Internet loiterer", "chromosome-deficient test tube experiment", "conglomerate of intellectual constipation", "conglomerate of intellectual constipation", "delinquent who has delusions of adequacy", "deplorable calamity of birth", "depraved orgy of subhuman indecency", "depravity of genetics", "display of indecency", "dreg of the Internet", "derelict whose birth certificate is an apology from the condom factory", "derelict whose birth certificate is an apology from the condom factory", "evangelical crusader of sub-mediocrity", "evangelical crusader of sub-mediocrity", "excrement stain on a Sumo Wrestler's underpants", "glob of grease", "grotesque visual experience", "grudge-festering haggard", "gruesome vista to all eyes assaulted by the sight of you", "hysterical mass of warbling inanity", "lamentable mistake by your parent's reckless exchange of genetic material", "leach on humanity", "malfunctioning little twerp", "malodorous heathen", "malodorous marinade of sweat and fear", "manifestation of contraceptive personality", "mass of existential impotence", "mass of loathsome repulsiveness", "mass of neuroses and complexes", "mass of neuroses and pathologies", "mass of neuroses and pathologies", "mean-spirited poltroon", "mediocrity afflicted with mental retardation", "menace to, not only society, but all living creatures", "mental midget with the natural grace of an intoxicated beluga whale", "molester of small furry animals", "molester of small old men", "moving stench of leprosy", "mutilation of decency", "nauseating assault on the senses", "nauseating assault on the senses", "nefarious vermin", "obfuscation of all that is good", "object of execration", "ocular depravity to all of discrimination", "odious leach-covered blob of quivering slime", "odious leach-covered glob of quivering slime", "offense to all of good taste and decency", "oppressive orgy of perversion", "orgy of indecency", "orgy of indignity", "parasite on the states resources", "personification of vulgarity", "piece of excrement attached to a dogs posterior", "pitiful sideshow freak", "plague of sighing and grief", "plague upon humanity", "plot-less melodrama of uneventful life", "plot-less melodrama of uneventful life", "practitioner of bestiality", "proof that evolution can go in reverse", "proof that test tube experiments can go horribly wrong", "pulp of stultifying inanity", "putrid waste of flesh", "repulsive polisson", "sadistic hippophilic necrophile", "scourge of decency", "sexual assaulter of barnyard animals", "shameless exhibition of genetic deficiency", "shameless exhibition of genetic deficiency", "sideshow freak whose word is as valuable as an aging cow paddy", "spawn from a lunatics rectum", "spawn of a mad scientist and a disastrous test tube experiment", "sub-literate simple minded mental midget", "tainted spawn of a syphilitic swamp rat", "tainted spawn of a syphilitic swamp hog", "tasteless amalgam of dross", "toll on the nerves of those with good taste and decency", "unfortunate occurrence of unprotected intercourse", "unspeakably offensive barbarian", "vulgarity to all and sundry", "wretched horror to all who encounter you"]
};

function init() {
    if (sys.getVal("recmsg") === undefined) {
        sys.saveVal("recmsg", "off");
    }
    if (sys.getVal('etext') === "true") {
        etext = "true";
    } else {
        etext = "false";
    }
    if (sys.getVal('tgreentext') === "true") {
        tgreentext = "true";
    } else {
        tgreentext = "false";
    }
}

init();

client.network().playerLogin.connect(function () { //only call when the user has logged in to prevent any crashes
    init();
});

poScript = ({
    clientStartUp: function () {
        client.printHtml("<timestamp/> You are using <b><font color=navy>Blade's</font> Client<font color=red> Scripts!</b></font><br/><timestamp/> Type <b>~cmds</b> to view the <b>commands</b>!");
        init();
        script.getInsults();
    },
    bot: function (msg) {
        client.printHtml("<font color=blue><timestamp/><b> +Bot:</font></b> " + sys.htmlEscape(msg));
        return;
    },
    channelLinks: function (string) {
        var channels = client.channelNames();
        for (var x in channels) {
            if (string.toLowerCase().indexOf("#" + channels[x].toLowerCase()) != -1) {
                var channel = new RegExp("#" + channels[x], "i");
                string = string.replace(channel, '<a href="po:join/' + channels[x] + '">#' + channels[x] + "</a>");
            }
        }
        return string;
    },
    authEnd: function (string) {
        newstring = string.replace(/</g, "</");
        return newstring;
    },
    getInsults: function () {
        script.bot("Retrieving insults...");
        
        sys.webCall("https://raw.github.com/TheVPBlade/Client-Scripts/master/insults.txt", function(resp) {
            if (resp.length > 0) {
                Insults = resp.split("\n");
                script.bot("Insults retrieved!");
            }
        });
    },
    beforeChannelMessage: function (message, chan, html) {
        var pos = message.indexOf(': ');
        if (pos != -1) {
            if (client.id(message.substring(0, pos)) == -1) {
                return;
            }
            var id = client.id(message.substring(0, pos));
            var playname = message.substring(0, pos);
            var playmessage = sys.htmlEscape(message.substr(pos + 2));
            var msg = playmessage.split(' ');
            for (var x in msg) {
                var msgnew, otherend;
                var msgl = msg[x].length;
                var start = msg[x][0];
                var end = msg[x][parseInt(msgl - 1)];
                for (var y in punctuation) {
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
                        newmsg = msg[x].substring(0, i) + endmodifier + (otherend === undefined ? "" : otherend);
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
            for (var x in auth_symbol) {
                if (x > symbolLength) {
                    symbolLength = x;
                }
            }
            var auth = client.auth(id);
            if (auth > symbolLength) {
                auth = 0;
            }
            playmessage = this.channelLinks(playmessage);
            client.printChannelMessage("<font face ='" + fontstyle + "'><font size = " + fontsize + "><font color='" + colour + "'><timestamp/> " + auth_symbol[auth] + auth_style[auth] + playname + ": </font>" + this.authEnd(auth_style[auth]) + playmessage, chan, true);
            sys.stopEvent();
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
            if (cmd === "cmds") {
                client.printHtml("<br><font color='black'size='4'><b>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font></b><br><br><font color='red'size='5'><b><u>Commands:</font></b></u><br><br><ul><li><b>~etext <font color=red>[on/off]</font> -- to toggle enriched text <font color=red>on</font> or <font color=red> off</font></li><b><li>~greentext <font color=red>[on/off]</font> -- to toggle greentext <font color=red>on</font> or <font color=red>off</font></li><b><li>~id <font color=red>[player]</font> -- to retrieve the id of an online player</li><b><li>~eval <font color=red>[code]</font> -- to evaluate a client script code</li><b><li>~updatescript -- to load the script after an update</li><b><li>~pokedex <font color=red>[pokemon]</font> -- to view details about a <font color=red>pokemon</font> [Alternate formes do NOT work!!]</li><b><li>~reconnect -- to reconnect to a server if you've disconnected</li><b><li>~recmsg <font color=red>[on/off]</font> -- to toggle the reconnect message <font color=red>on</font> or <font color=red>off</font></li><b><li>~setrecmsg <font color=red>[message]</font> -- to set a reconnect message</li><b><li>~sprite <font color=red>[pokemon]:[generation]</font> -- to generate a Pokemon's sprite from a specific generation</li><b><li>~imp <font color=red>[new name]</font> -- to change your name</li><b><li>~scriptinfo -- to view information about the client scripts</li><b><li>~html <font color=red>[html code]</font> -- to test an HTML code, only you can see it</li><b><li>~insult <font color=red>[player]</font> -- to insult a player</li><b><li>~intellisult <font color=red>[player]</font> -- to insult a player with intelligent words</ul><br><font color='black'size='4'><b>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font></b><br>");
                return;
            }
            if (cmd === "etext") {
                if (cData == "on") {
                    etext = "true";
                    sys.saveVal('etext', true);
                    script.bot("You turned Enriched text on!");
                    return;
                }
                if (cData == "off") {
                    etext = "false";
                    sys.saveVal('etext', false);
                    script.bot("You turned Enriched text off!");
                    return;
                }
                script.bot("Please use on/off.");
                return;
            }
            if (cmd === "greentext") {
                if (cData == "on") {
                    tgreentext = "true";
                    sys.saveVal('tgreentext', true);
                    script.bot("You turned greentext on!");
                    return;
                }
                if (cData == "off") {
                    tgreentext = "false";
                    sys.saveVal('tgreentext', false);
                    script.bot("You turned greentext off!");
                    return;
                }
                script.bot("Please use on/off.");
                return;
            }
            if (cmd === "id") {
                if (client.id(cData) == "-1") {
                    script.bot("This person either doesn't exist, or isn't logged on.");
                    return;
                }
                script.bot(cData + "'s id is " + client.id(cData) + ".");
                return;
            }
            if (cmd === "reconnect" && sys.getVal("recmsg") == "on") {
                script.bot("You have decided to reconnect.");
                client.reconnect();
                sys.delayedCall(function () {
                    client.network().sendChanMessage(0, sys.getVal("recmsgset"));
                }, 5);
                return;
            }
            if (cmd === "reconnect" && sys.getVal("recmsg") == "off") {
                script.bot("You have decided to reconnect.");
                client.reconnect();
                return;
            }
            if (cmd === "sprite") {
                var cda = cData.split(":");
                var poke = sys.pokeNum(cda[0]);
                var gen = cda[1];
                if (cda[0].length < 1 || poke === undefined) {
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
            if (cmd === "recmsg") {
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
            if (cmd === "setrecmsg") {
                if (cData.length < 2) {
                    script.bot("That reconnect message is too small.");
                } else {
                    script.bot("Reconnect message set to: " + cData);
                    sys.saveVal("recmsgset", cData);
                }
                return;
            }
            if (cmd === "insult") {
                if (cData.length < 2) {
                    script.bot("Please specify a real name!");
                    return;
                }
                if (Insults.length === 0) {
                    script.bot("Error: Insults not found. Use ~getinsults");
                    return;
                }
                var index = Math.floor(Insults.length * Math.random());
                var insult = Insults[index].replace(/{name}/g, cData.toLowerCase()).replace(/{Name}/g, cData).replace(/{NAME}/g, cData.toUpperCase());
                client.network().sendChanMessage(channel, insult);
                return;
            }
            if (cmd === "intellisult") {
                if (cData.length < 2) {
                    script.bot("Please specify a real name!");
                    return;
                }
                client.network().sendChanMessage(channel, intellisult(cData));
                return;
            }
            if (cmd === "scriptinfo") {
                client.printHtml("<br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br><font color=black><timestamp/><b>[VP]Blade's Client Scripts™</b></font><br><font color=blue><timestamp/><b>Created by: <font color=navy>[VP]Blade</b></font><br><font color=green><timestamp/><b>Full Script: <a href='https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js'>https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js</a></b></font><br><font color=navy><timestamp/><b>Special Thanks To:</font> <b><font color=black>TheUnknownOne and Ethan</b></font><br><font color=black><timestamp/><b> © [VP]Blade, 2013</b></font><br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br>", 0);
                return;
            }
            if (cmd === "pokedex") {
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
                if (poke === undefined) {
                    script.bot("'" + cData + "' is not a Pokemon.");
                } else {
                    var baseStats = sys.pokeBaseStats(poke2, '6');
                    var getStat = function (stat) {
                        var stats = {
                            "hp": 0,
                            "atk": 1,
                            "def": 2,
                            "satk": 3,
                            "sdef": 4,
                            "spd": 5
                        };
                        return baseStats[stats[stat]];
                    };
                    client.printHtml("<br><b><font color='red'size='4'>" + border + "</font><br>");
                    client.printHtml("<h2>" + cData + "</h2><br>");
                    client.printHtml("<img src='pokemon:" + poke + "&gen=6'/><img src='pokemon:" + poke + "&gen=6&back=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true&back=true'/></b><br><br>");
                    if (type2 == 18) {
                        client.printHtml("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")));
                        client.printHtml("<timestamp/><b>Base Stats:</b> " + getStat('hp') + " <b>HP</b>, " + getStat('atk') + " <b>ATK</b>, " + getStat('def') + " <b>DEF</b>, " + getStat('satk') + " <b>SATK</b>, " + getStat('sdef') + " <b>SDEF</b>, " + getStat('spd') + " <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</font><br>");
                    } else {
                        client.printHtml("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/> / <img src='Themes/Classic/types/type" + type2 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")));
                        client.printHtml("<timestamp/><b>Base Stats:</b> " + getStat('hp') + " <b>HP</b>, " + getStat('atk') + " <b>ATK</b>, " + getStat('def') + " <b>DEF</b>, " + getStat('satk') + " <b>SATK</b>, " + getStat('sdef') + " <b>SDEF</b>, " + getStat('spd') + " <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</font><br>");
                    }
                }
                return;
            }
            if (cmd === "getinsults") {
                script.getInsults();
                return;
            }
            if (cmd === "updatescript") {
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
            if (cmd === "imp") {
                if (cData.length < 1) {
                    script.bot("Invalid name. Please try again.");
                    return;
                }
                script.bot("You have changed your name to " + cData + "!");
                client.changeName(cData);
                return;
            }
            if (cmd === "html") {
                client.printHtml(cData);
                return;
            }
            if (cmd === "eval") {
                script.bot("You evaluated the following code: " + cData);
                eval(cData);
                return;
            }
            script.bot("This command does not exist.");
        }
    }
});
