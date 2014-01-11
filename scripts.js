// [VP]Blade's Pokemon Online Client Scripts //
// Many of the commands were made by [VP]Blade //
if (typeof (Insults) !== "object") {
    var Insults = [];
}

(function addIntellisult() {
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

    global.intellisult = intellisult;
}());

poScript = ({
    init: function() {
        if (sys.getVal("recmsg") === undefined) {
            sys.saveVal("recmsg", "off");
        }
    },
    
    clientStartUp: function () {
        client.printHtml("<timestamp/> You are using <b><font color=navy>Blade's</font> Client<font color=red> Scripts!</b></font><br/><timestamp/> Type <b>~cmds</b> to view the <b>commands</b>!");
        script.init();
        script.getInsults(false);
    },

    bot: function (msg, chan) {
        if (!chan) {
            chan = client.currentChannel();
        }
        client.printChannelMessage("<font color=blue><timestamp/><b> ±Bot:</font></b> " + sys.htmlEscape(msg), chan, true);
        return;
    },

    getInsults: function (showMessages) {
        if (showMessages) {
            script.bot("Retrieving insults...");
        }
        
        sys.webCall("https://raw.github.com/TheVPBlade/Client-Scripts/master/insults.txt", function (resp) {
            if (resp.length >= 1) {
                Insults = resp.split("\n").filter(function(insult) {
                    //Strip empty insults
                    return !!insult;
                });
                
                if (showMessages) {
                    script.bot("Insults retrieved!");
                }
            } else {
                script.bot("Error retrieving insults!");
            }
        });
    },

    beforeSendMessage: function (msg, channel) {
        if (msg.substr(0, 1) === "~" && msg.length > 1) {
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
                client.printChannelMessage("<br><font color='navy'size='4'><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br><h2>Commands</h2><i>Type one of the following into the channel's chat to use it:</i><ul><li><b>~id <font color=red>[player]</font></b> To retrieve the id of an online player.</li><li><b>~eval <font color=red>[code]</font></b> To evaluate a client script code.</li><li><b>~updatescript</b> To load the script after an update.</li><li><b>~pokedex <font color=red>[pokemon]</font></b> To view details about a Pokemon.</li><li><b>~reconnect</b> To reconnect to a server if you've disconnected.</li><li><b>~recmsg <font color=red>[on/off]</font></b> To toggle the reconnect message on or off.</li><li><b>~setrecmsg <font color=red>[message]</font></b> To set a reconnect message.</li><li><b>~sprite <font color=red>[pokemon]</b></font>:<font color=red><b>[generation]</font></b> To generate a Pokemon's sprite from a specific generation.</li><li><b>~imp <font color=red>[new name]</font></b> To change your name.</li><li><b>~scriptinfo</b> To view information about the client scripts.</li><li><b>~html <font color=red>[html code]</font></b> To test an HTML code, only you can see it.</li><li><b>~getinsults</b> To webcall the list of insults.</li><li><b>~insult <font color=red>[player]</font></b> To insult a player.</li><li><b>~intellisult <font color=red>[player]</font></b> To insult a player with intelligent words.</ul><br><font color='navy'size='4'><b>»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»</font></b><br>", channel, true);
                return;
            }

            if (cmd === "id") {
                if (client.id(cData) === -1) {
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
                if (nums.indexOf(gen) === -1) {
                    script.bot("Invalid generation.");
                    return;
                }
                client.printChannelMessage("<timestamp/><b><font size=4>" + cda[0] + "'s Gen " + gen + " Sprite: <img src='pokemon:" + poke + "&gen=" + gen + "'/></b></font>", channel, true);
                return;
            }

            if (cmd === "recmsg") {
                var bool = ["off", "on"];
                if (bool.indexOf(cData) === -1) {
                    script.bot("On and off are the only options.");
                    return;
                }
                if (cData === "off" && sys.getVal("recmsg") == "off" || cData == "on" && sys.getVal("recmsg") == "on") {
                    script.bot("The reconnect message is already " + cData + ".");
                    return;
                }
                if (cData === "off") {
                    script.bot("You turned the reconnect message off.");
                    sys.saveVal("recmsg", "off");
                } else {
                    script.bot("You turned the reconnect message on.");
                    sys.saveVal("recmsg", "on");
                }
                return;
            }

            if (cmd === "setrecmsg") {
                if (cData.length < 2) {
                    script.bot("That reconnect message is too small.");
                    return;
                }
                script.bot("Reconnect message set to: " + cData);
                sys.saveVal("recmsgset", cData);
                return;
            }

            if (cmd === "insult") {
                if (cData.length < 1) {
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
                if (cData.length < 1) {
                    script.bot("Please specify a real name!");
                    return;
                }
                client.network().sendChanMessage(channel, intellisult(cData));
                return;
            }

            if (cmd === "scriptinfo") {
                client.printChannelMessage("<br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br><font color=black><timestamp/><b>[VP]Blade's Client Scripts™</b></font><br><font color=blue><timestamp/><b>Created by: <font color=navy>[VP]Blade</b></font><br><font color=green><timestamp/><b>Full Script: <a href='https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js'>https://raw.github.com/TheVPBlade/Client-Scripts/master/scripts.js</a></b></font><br><font color=navy><timestamp/><b>Special Thanks To:</font> <b><font color=black>TheUnknownOne and Ethan</b></font><br><font color=black><timestamp/><b> © [VP]Blade, 2014</b></font><br><font color=red><timestamp/><b> ««««««««««««««««««««»»»»»»»»»»»»»»»»»»»»</b></font><br>", channel, true);
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
                var border = "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»";
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
                    client.printChannelMessage("<br><b><font color='red'size='4'>" + border + "</font></b><br>", channel, true);
                    client.printChannelMessage("<h2>" + cData + "</h2><br>", channel, true);
                    client.printChannelMessage("<img src='pokemon:" + poke + "&gen=6'/><img src='pokemon:" + poke + "&gen=6&back=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true'/><img src='pokemon:" + poke + "&gen=6&shiny=true&back=true'/></b><br><br>", channel, true);
                    if (type2 === 18) {
                        client.printChannelMessage("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")), channel, true);
                        client.printChannelMessage("<timestamp/><b>Base Stats:</b> " + getStat('hp') + " <b>HP</b>, " + getStat('atk') + " <b>ATK</b>, " + getStat('def') + " <b>DEF</b>, " + getStat('satk') + " <b>SATK</b>, " + getStat('sdef') + " <b>SDEF</b>, " + getStat('spd') + " <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</b></font><br>", channel, true);
                    } else {
                        client.printChannelMessage("<timestamp/><b>PokeDex Number:</b> " + poke2 % 65536 + "<br><timestamp/><b> Type(s): <img src='Themes/Classic/types/type" + type1 + ".png'/> / <img src='Themes/Classic/types/type" + type2 + ".png'/></b><br><timestamp/><b>Abilities:</b> " + ability1 + (sys.pokemon(poke).substr(0, 5) === "Mega " ? "" : (ability2 === "(No Ability)" ? "" : ", " + ability2) + (ability3 === "(No Ability)" ? "" : ", " + ability3 + " (Hidden Ability)")), channel, true);
                        client.printChannelMessage("<timestamp/><b>Base Stats:</b> " + getStat('hp') + " <b>HP</b>, " + getStat('atk') + " <b>ATK</b>, " + getStat('def') + " <b>DEF</b>, " + getStat('satk') + " <b>SATK</b>, " + getStat('sdef') + " <b>SDEF</b>, " + getStat('spd') + " <b>SPD</b><br><br><b><font color='blue'size='4'>" + border + "</font></b><br>", channel, true);
                    }
                }
                return;
            }

            if (cmd === "getinsults") {
                script.getInsults(true);
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
                client.printChannelMessage(cData, channel, true);
                return;
            }

            if (cmd === "eval") {
                script.bot("You evaluated the following code: " + cData);
                var res;
                try {
                    res = eval(cData);
                } catch (err) {
                    script.bot("ERROR: " + err);
                    return;
                }
                script.bot("Result: " + res);
                return;
            }

            script.bot("This command does not exist.");
        }
    }
});
