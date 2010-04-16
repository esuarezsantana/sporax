// $XKeyboardConfig$

// based on a keyboard
// Modified for a real Spanish Keyboard by Jon Tombs
//
// $XFree86: xc/programs/xkbcomp/symbols/es,v 1.2 2002/11/22 04:03:28 dawes Exp $

partial default alphanumeric_keys
xkb_symbols "basic" {

    include "latin(type4)"

    name[Group1]="Spain";

    key <AE01>	{ [         1,     exclam,          bar,   exclamdown ]	};
    key <AE03>	{ [         3, periodcentered, numbersign,   sterling ]	};
    key <AE04>	{ [         4,     dollar,   asciitilde,       dollar ]	};
    key <AE06>	{ [         6,  ampersand,      notsign,  fiveeighths ]	};
    key <AE11>	{ [apostrophe,   question,    backslash, questiondown ]	};
    key <AE12>	{ [exclamdown, questiondown, dead_tilde,   asciitilde ]	};

    key <AD11>	{ [dead_grave, dead_circumflex, bracketleft, dead_abovering ] };
    key <AD12>	{ [      plus,   asterisk, bracketright,  dead_macron ]	};

    key <AC10>	{ [    ntilde, Ntilde,   asciitilde, dead_doubleacute ]	};
    key <AC11>	{ [dead_acute, dead_diaeresis, braceleft,   braceleft ]	};
    key <TLDE>	{ [ masculine, ordfeminine,    backslash,   backslash ]	};

    key <BKSL>	{ [  ccedilla,   Ccedilla,   braceright,   dead_breve ]	};

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "Sundeadkeys" {

    include "es(basic)"

    key <AC11>	{ [SunFA_Acute, SunFA_Diaeresis, braceleft, braceleft ]	};
    key <AD11>	{ [SunFA_Grave, SunFA_Circum, bracketleft, dead_abovering ] };
};

partial alphanumeric_keys
xkb_symbols "sundeadkeys" {

    include "es(Sundeadkeys)"

    name[Group1]="Spain - Sun dead keys";
};

partial alphanumeric_keys
xkb_symbols "nodeadkeys" {

    include "es(basic)"

    name[Group1]="Spain - Eliminate dead keys";

    key <AD11>	{ [     grave, asciicircum,  bracketleft,      degree ]	};
    key <AD12>	{ [      plus,   asterisk, bracketright,       macron ]	};
    key <AC10>	{ [    ntilde,     Ntilde,   asciitilde,  doubleacute ]	};
    key <AC11>	{ [     acute,  diaeresis,    braceleft,    braceleft ]	};
    key <BKSL>	{ [  ccedilla,   Ccedilla,   braceright,        breve ]	};
    key <AB10>	{ [     minus, underscore, dead_belowdot,    abovedot ]	};
};

// Spanish mapping (note R-H exchange)
partial alphanumeric_keys
xkb_symbols "dvorak" {

    name[Group1]="Spain - Dvorak";

    // Alphanumeric section
    key <TLDE> {[  masculine, ordfeminine, backslash, degree		]};
    key <AE01> {[          1, exclam, bar, onesuperior			]};
    key <AE02> {[          2, quotedbl, at, twosuperior			]};
    key <AE03> {[          3, periodcentered, numbersign, threesuperior	]};
    key <AE04> {[          4, dollar, asciitilde, onequarter		]};
    key <AE05> {[          5, percent, brokenbar, fiveeighths		]};
    key <AE06> {[          6, ampersand, notsign, threequarters		]};
    key <AE07> {[          7, slash, onehalf, seveneighths		]};
    key <AE08> {[          8, parenleft, oneeighth, threeeighths	]};
    key <AE09> {[          9, parenright, asciicircum			]};
    key <AE10> {[          0, equal, grave, dead_doubleacute		]};
    key <AE11> {[ apostrophe, question, dead_macron, dead_ogonek	]};
    key <AE12> {[ exclamdown, questiondown, dead_breve, dead_abovedot	]};

    key <AD01> {[     period, colon					]};
    key <AD02> {[      comma, semicolon					]};
    key <AD03> {[     ntilde, Ntilde, lstroke, Lstroke			]};
    key <AD04> {[          p, P, paragraph				]};
    key <AD05> {[          y, Y, yen					]};
    key <AD06> {[          f, F, tslash, Tslash				]};
    key <AD07> {[          g, G, dstroke, Dstroke			]};
    key <AD08> {[          c, C, cent, copyright			]};
    key <AD09> {[          h, H, hstroke, Hstroke			]};
    key <AD10> {[          l, L, sterling				]};
    key <AD11> {[ dead_grave, dead_circumflex, bracketleft, dead_caron	]};
    key <AD12> {[       plus, asterisk, bracketright, plusminus		]};

    key <AC01> {[          a, A, ae, AE					]};
    key <AC02> {[          o, O, oslash, Oslash				]};
    key <AC03> {[          e, E, EuroSign				]};
    key <AC04> {[          u, U, aring, Aring				]};
    key <AC05> {[          i, I, oe, OE					]};
    key <AC06> {[          d, D, eth, ETH				]};
    key <AC07> {[          r, R, registered, trademark			]};
    key <AC08> {[          t, T, thorn, THORN				]};
    key <AC09> {[          n, N, eng, ENG				]};
    key <AC10> {[          s, S, ssharp, section			]};
    key <AC11> {[ dead_acute, dead_diaeresis, braceleft, dead_tilde	]};
    key <BKSL> {[   ccedilla, Ccedilla, braceright, dead_cedilla	]};

    key <LSGT> {[       less, greater, guillemotleft, guillemotright	]};
    key <AB01> {[      minus, underscore, hyphen, macron		]};
    key <AB02> {[          q, Q, currency				]};
    key <AB03> {[          j, J						]};
    key <AB04> {[          k, K, kra					]};
    key <AB05> {[          x, X, multiply, division			]};
    key <AB06> {[          b, B						]};
    key <AB07> {[          m, M, mu					]};
    key <AB08> {[          w, W						]};
    key <AB09> {[          v, V						]};
    key <AB10> {[          z, Z						]};

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "cat" {

    include "es(basic)"

    name[Group1]="Spain - Catalan variant with middle-dot L";

    key <AC09>  { [	    l,      L,		0x1000140,  0x100013F ] };
};

partial alphanumeric_keys
xkb_symbols "ast" {

    include "es(basic)"

    name[Group1]="Spain - Asturian variant with bottom-dot H and bottom-dot L";

    key <AC06>  { [	    h,      H,		0x1001E25,  0x1001E24 ] };
    key <AC09>  { [	    l,      L,		0x1001E37,  0x1001E36 ] };
};

// Copied from macintosh_vndr/es
partial alphanumeric_keys 
xkb_symbols "mac" {

    // Describes the differences between a very simple mac_US
    // keyboard and a very simple Spanish keybaord

    include "es"
    name[Group1]= "Spain - Macintosh";

};

partial alphanumeric_keys
xkb_symbols "olpc" {

    include "us(basic)"
    name[Group1]="Spain";

    key <TLDE> { [    masculine,    ordfeminine      ] };
    key <AE01> { [            1,         exclam,             bar ] };
    key <AE02> { [            2,       quotedbl,              at ] };
    key <AE03> { [            3,     dead_grave,      numbersign,   grave           ] };
    key <AE05> { [            5,        percent,     asciicircum,   dead_circumflex ] };
    key <AE06> { [            6,      ampersand,         notsign ] };
    key <AE07> { [            7,          slash,       backslash ] };
    key <AE08> { [            8,      parenleft                         ] };
    key <AE09> { [            9,     parenright                         ] };
    key <AE10> { [            0,          equal                  ] };
    key <AE11> { [   apostrophe,       question                  ] };
    key <AE12> { [   exclamdown,   questiondown                  ] };

    key <AD03> { [            e,              E,        EuroSign ] };
    key <AD11> { [   dead_acute, dead_diaeresis,           acute,   dead_abovering  ] };
    key <AD12> { [  bracketleft,      braceleft                  ] };

    key <AC10> { [       ntilde,        Ntilde                  ] };
    key <AC11> { [         plus,       asterisk,      dead_tilde ] };
    key <BKSL> { [ bracketright,     braceright                  ] };

    key <AB08> { [        comma,      semicolon                  ] };
    key <AB09> { [       period,          colon                  ] };
    key <AB10> { [        minus,     underscore                  ] };
  
    key <I219> { [         less,        greater,  ISO_Next_Group ] };

    include "level3(ralt_switch)"
};

partial alphanumeric_keys
xkb_symbols "deadtilde" {

    include "es(basic)"

    name[Group1]="Spain - Include dead tilde";

    key <AE04>	{ [         4,     dollar,   dead_tilde,       dollar ]	};
};



partial alphanumeric_keys
xkb_symbols "sporax" {

    include "es(dvorak)"

    name[Group1]="Spain - Sporax";

    key <TLDE> {[  backslash, asciitilde, masculine, ordfeminine        ]};
    key <AE03> {[          3, asciicircum, numbersign, threesuperior	]};
    key <AE04> {[          4, dollar, degree, onequarter		]};
    key <AE07> {[          7, dead_grave, onehalf, seveneighths         ]};
    key <AE09> {[          9, parenright, periodcentered		]};
    key <AC04> {[          i, I, aring, Aring                           ]};
    key <AC05> {[          u, U, oe, OE                                 ]};

    key <AD11> {[      slash, asterisk, dead_circumflex, dead_caron	]};
    key <AD12> {[bracketleft, braceleft, plusminus, dead_cedilla	]};
    key <AC11> {[ dead_acute, plus, dead_diaeresis, dead_tilde	        ]};
    key <BKSL> {[bracketright, braceright, ccedilla, Ccedilla   	]};

};
  
