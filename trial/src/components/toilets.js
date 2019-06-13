import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

var myIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  

class toilets extends Component{

    // getLocation()

    // render(){
    //     return(
            
    //     );
    // }
}

var toiletList =
[
    {
        "name": "BIZ1",
        "location": [
            1.2924024167154038,
            103.77438630260782
        ],
        "floors": {
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ]
        }
    },
    {
        "name": "BIZ1",
        "location": [
            1.2925955072075026,
            103.77389717118332
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                8
            ],
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ]
        }
    },
    {
        "name": "BIZ2",
        "location": [
            1.2933659653400351,
            103.77494837387947
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                5
            ],
            "Female": [
                4
            ]
        }
    },
    {
        "name": "BIZ2",
        "location": [
            1.2933843645421157,
            103.77538883690603
        ],
        "floors": {
            "Female": [
                1,
                3,
                5
            ],
            "Male s": [
                2
            ],
            "Male": [
                4
            ]
        }
    },
    {
        "name": "BIZ2",
        "location": [
            1.2936605483313293,
            103.77460747238601
        ],
        "floors": {
            "Female": [
                3,
                5
            ],
            "Male": [
                4,
                6
            ]
        }
    },
    {
        "name": "COM1",
        "location": [
            1.2951603434662073,
            103.77386553781963
        ],
        "floors": {
            "Female": [
                1,
                2,
                3
            ],
            "Male": [
                2,
                3
            ]
        }
    },
    {
        "name": "COM1",
        "location": [
            1.2954329516845147,
            103.77360214772081
        ],
        "floors": {
            "Male": [
                1
            ]
        }
    },
    {
        "name": "COM1",
        "location": [
            1.2947778072806475,
            103.77374374840542
        ],
        "floors": {
            "Male": [
                1,
                2,
                3
            ],
            "Handicap": [
                1,
                2,
                3
            ],
            "Female": [
                1,
                2,
                3
            ]
        }
    },
    {
        "name": "COM2",
        "location": [
            1.2935313133562956,
            103.77434226755533
        ],
        "floors": {
            "Male": [
                -1,
                2,
                4
            ],
            "Female": [
                1,
                3
            ]
        }
    },
    {
        "name": "COM2",
        "location": [
            1.294107448211119,
            103.77410616551258
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                2,
                4
            ]
        }
    },
    {
        "name": "HSS",
        "location": [
            1.2932276076242892,
            103.77436892173374
        ],
        "floors": {
            "Female": [
                1
            ],
            "Handicap": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "HSS",
        "location": [
            1.2931335762324285,
            103.77463579405712
        ],
        "floors": {
            "Female": [
                -1
            ],
            "Male": [
                -1
            ],
            "Handicap": [
                -1
            ]
        }
    },
    {
        "name": "I3",
        "location": [
            1.2926519385209885,
            103.77559954632814
        ],
        "floors": {
            "Male": [
                1
            ],
            "Female": [
                1
            ]
        }
    },
    {
        "name": "I3",
        "location": [
            1.2925022598301013,
            103.77574676781383
        ],
        "floors": {
            "Male": [
                2,
                3,
                4,
                5
            ],
            "Female": [
                2,
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "I3",
        "location": [
            1.292409056822781,
            103.77602291090307
        ],
        "floors": {
            "Male": [
                2,
                3,
                5
            ],
            "Female": [
                2,
                3,
                5
            ]
        }
    },
    {
        "name": "SFAH",
        "location": [
            1.2931681375401667,
            103.77382390182429
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4
            ],
            "Female": [
                1,
                2,
                3,
                4
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "SFAH",
        "location": [
            1.2931790156049787,
            103.77373105259305
        ],
        "floors": {
            "Handicap": [
                1
            ],
            "Female": [
                4
            ]
        }
    },
    {
        "name": "SFAH",
        "location": [
            1.2935796422729755,
            103.77365149567476
        ],
        "floors": {
            "Female": [
                2,
                4,
                5
            ],
            "Male": [
                2,
                4,
                5
            ],
            "Handicap": [
                4
            ]
        }
    },
    {
        "name": "THE TERRACE",
        "location": [
            1.2943834392150282,
            103.77444503964149
        ],
        "floors": {
            "Male": [
                1
            ],
            "Female": [
                1
            ]
        }
    },
    {
        "name": "VT",
        "location": [
            1.2951545948093544,
            103.77016079198391
        ],
        "floors": {
            "Toilet": [
                2
            ]
        }
    },
    {
        "name": "AS4",
        "location": [
            1.2943810880768445,
            103.77137100895376
        ],
        "floors": {
            "Male": [
                -1,
                1
            ],
            "Female": [
                -1,
                2
            ]
        }
    },
    {
        "name": "AS4",
        "location": [
            1.2946707734380916,
            103.771729498498
        ],
        "floors": {
            "Female": [
                1,
                2
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "AS4",
        "location": [
            1.2947512028570731,
            103.77208205878155
        ],
        "floors": {
            "Handicap": [
                1,
                3,
                4,
                5,
                6
            ],
            "Male": [
                1,
                3,
                5
            ],
            "Female": [
                2,
                4,
                6
            ]
        }
    },
    {
        "name": "AS4",
        "location": [
            1.2947173525470987,
            103.77220499355475
        ],
        "floors": {
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "THE DECK",
        "location": [
            1.2946083941819329,
            103.77259354305713
        ],
        "floors": {
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "AS7",
        "location": [
            1.294323001776296,
            103.77107138548473
        ],
        "floors": {
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "AS6",
        "location": [
            1.2958498943344168,
            103.7732094324911
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4,
                5
            ],
            "Female": [
                1,
                2,
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "AS5",
        "location": [
            1.2943997994424956,
            103.77187688238398
        ],
        "floors": {
            "Male": [
                3,
                4,
                5,
                6
            ],
            "Female": [
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "AS3",
        "location": [
            1.294847136251837,
            103.77121120388361
        ],
        "floors": {
            "Female": [
                2,
                3,
                4,
                5,
                6
            ],
            "Male": [
                2,
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "AS2",
        "location": [
            1.295017812547395,
            103.77133655049563
        ],
        "floors": {
            "Female": [
                2
            ],
            "Male": [
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "AS2",
        "location": [
            1.2950962944740527,
            103.77130538413097
        ],
        "floors": {
            "Male": [
                2
            ]
        }
    },
    {
        "name": "AS1",
        "location": [
            1.2951109776900631,
            103.77181988666464
        ],
        "floors": {
            "Female": [
                -1,
                1,
                2,
                4
            ],
            "Male": [
                3,
                5
            ]
        }
    },
    {
        "name": "AS1",
        "location": [
            1.2955382126074615,
            103.77251282098446
        ],
        "floors": {
            "Male": [
                2,
                5
            ],
            "Female": [
                3
            ]
        }
    },
    {
        "name": "AS1",
        "location": [
            1.2951780580272318,
            103.77237859356667
        ],
        "floors": {
            "Female": [
                3
            ],
            "Male": [
                4,
                5
            ]
        }
    },
    {
        "name": "LT10",
        "location": [
            1.2949012304474865,
            103.77216087100328
        ],
        "floors": {
            "Female": [
                2
            ],
            "Male": [
                2
            ]
        }
    },
    {
        "name": "AS8",
        "location": [
            1.2959607094470236,
            103.77244677405687
        ],
        "floors": {
            "Male": [
                2
            ],
            "Handicap": [
                2
            ],
            "Female": [
                2
            ]
        }
    },
    {
        "name": "AS8",
        "location": [
            1.2959589694422446,
            103.7722119944822
        ],
        "floors": {
            "Male": [
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                3,
                4,
                5,
                6
            ],
            "Female": [
                3,
                4,
                5,
                6,
                7
            ]
        }
    },
    {
        "name": "CC",
        "location": [
            1.2974164478399854,
            103.77243908016426
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                1,
                2,
                4
            ]
        }
    },
    {
        "name": "CLB",
        "location": [
            1.2966451610878866,
            103.77300622904458
        ],
        "floors": {
            "Male": [
                1,
                3,
                5
            ],
            "Female": [
                1,
                2,
                4,
                6
            ],
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "CLB",
        "location": [
            1.2966797954541296,
            103.77334769236631
        ],
        "floors": {
            "Female": [
                2,
                3,
                5
            ],
            "Male": [
                4,
                6
            ]
        }
    },
    {
        "name": "CLB",
        "location": [
            1.2968957474528497,
            103.77295907354362
        ],
        "floors": {
            "Staff": [
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "LT4",
        "location": [
            1.297705670702946,
            103.77359795785837
        ],
        "floors": {
            "Female": [
                6
            ],
            "Male": [
                6
            ]
        }
    },
    {
        "name": "YIH",
        "location": [
            1.2983306716051992,
            103.77534898795739
        ],
        "floors": {
            "Toilet": [
                2
            ],
            "Female": [
                3
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "YIH",
        "location": [
            1.298428818857485,
            103.77479118452725
        ],
        "floors": {
            "Male": [
                2
            ],
            "Female": [
                2
            ]
        }
    },
    {
        "name": "YIH",
        "location": [
            1.2985926750832422,
            103.77464382822046
        ],
        "floors": {
            "Female": [
                3
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "YIH",
        "location": [
            1.298673472850309,
            103.77496610745916
        ],
        "floors": {
            "Female": [
                4
            ],
            "Handicap": [
                4
            ],
            "Male": [
                4
            ]
        }
    },
    {
        "name": "YIH",
        "location": [
            1.2984010242830637,
            103.77451406521935
        ],
        "floors": {
            "Female": [
                6
            ],
            "Male": [
                6
            ]
        }
    },
    {
        "name": "E2A",
        "location": [
            1.2989339432037657,
            103.77143456324794
        ],
        "floors": {
            "Handicap": [
                1,
                2,
                3,
                4
            ],
            "Female": [
                1,
                3
            ],
            "Male": [
                1,
                2,
                4
            ]
        }
    },
    {
        "name": "E5",
        "location": [
            1.2977856975700257,
            103.77260290206259
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                2,
                4
            ]
        }
    },
    {
        "name": "E5",
        "location": [
            1.2982318785267941,
            103.77216233805093
        ],
        "floors": {
            "Female": [
                2,
                4
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "E1",
        "location": [
            1.2983328311863647,
            103.77114694934286
        ],
        "floors": {
            "Toilet": [
                2,
                5,
                6,
                7
            ],
            "Female": [
                3
            ],
            "Male": [
                4,
                8
            ]
        }
    },
    {
        "name": "E1A",
        "location": [
            1.2996340726056697,
            103.7707457847695
        ],
        "floors": {
            "Toilet": [
                1,
                6,
                7
            ],
            "Female": [
                2,
                3,
                4,
                5
            ],
            "Handicap": [
                2,
                3,
                4,
                5
            ],
            "Male": [
                2,
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "E2",
        "location": [
            1.2996235072531663,
            103.77117612879363
        ],
        "floors": {
            "Female": [
                -1,
                1,
                2,
                3
            ],
            "Male": [
                2
            ]
        }
    },
    {
        "name": "E3",
        "location": [
            1.299358223853924,
            103.7719838901145
        ],
        "floors": {
            "Male": [
                1,
                3,
                5
            ],
            "Female": [
                2,
                4,
                6
            ]
        }
    },
    {
        "name": "E3",
        "location": [
            1.299807972301678,
            103.77161827193389
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                2
            ]
        }
    },
    {
        "name": "E3",
        "location": [
            1.2997144636151026,
            103.77140725195318
        ],
        "floors": {
            "Female": [
                3,
                5
            ],
            "Male": [
                4,
                6
            ]
        }
    },
    {
        "name": "E4",
        "location": [
            1.2990319258624197,
            103.77177809976496
        ],
        "floors": {
            "Male": [
                3,
                5,
                7
            ],
            "Handicap": [
                4,
                6,
                7,
                8
            ],
            "Female": [
                4,
                6,
                8
            ]
        }
    },
    {
        "name": "E3A",
        "location": [
            1.3000618094238208,
            103.7713544902294
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ]
        }
    },
    {
        "name": "E4",
        "location": [
            1.2983710118426082,
            103.77281724473906
        ],
        "floors": {
            "Female": [
                -1,
                2,
                5
            ],
            "Male": [
                1,
                3,
                4
            ]
        }
    },
    {
        "name": "E4",
        "location": [
            1.2986450558788114,
            103.77162557925767
        ],
        "floors": {
            "Toilet": [
                4
            ],
            "Female": [
                5,
                6,
                7,
                8
            ]
        }
    },
    {
        "name": "E4A",
        "location": [
            1.298795072689157,
            103.7723360955558
        ],
        "floors": {
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ]
        }
    },
    {
        "name": "EA",
        "location": [
            1.3002682201440843,
            103.77087450832698
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                2,
                3,
                4,
                5,
                6,
                7
            ]
        }
    },
    {
        "name": "EA",
        "location": [
            1.3004017288773928,
            103.77051115008489
        ],
        "floors": {
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "EW1",
        "location": [
            1.2980921800052252,
            103.77074788608591
        ],
        "floors": {
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "EW1",
        "location": [
            1.2982803603034498,
            103.77099158767204
        ],
        "floors": {
            "Male": [
                3,
                4
            ],
            "Female": [
                4
            ]
        }
    },
    {
        "name": "EW1",
        "location": [
            1.2988332679600958,
            103.77072453386894
        ],
        "floors": {
            "Female": [
                4
            ],
            "Male": [
                4
            ]
        }
    },
    {
        "name": "EW2",
        "location": [
            1.2992354433495807,
            103.77266591520268
        ],
        "floors": {
            "Toilet": [
                1
            ],
            "Female": [
                1,
                105
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5,
                105
            ],
            "Handicap": [
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "WS2",
        "location": [
            1.299263713744664,
            103.772622832622
        ],
        "floors": {
            "Handicap": [
                1,
                6,
                105
            ],
            "Female": [
                2,
                3,
                4,
                5,
                6
            ],
            "Male": [
                6
            ]
        }
    },
    {
        "name": "WS2",
        "location": [
            1.299428619385547,
            103.7725392180594
        ],
        "floors": {
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "TECHNO EDGE",
        "location": [
            1.2982035184302563,
            103.77145501039881
        ],
        "floors": {
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "TL",
        "location": [
            1.2996979475565023,
            103.7720221278718
        ],
        "floors": {
            "Female": [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            "Handicap": [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ],
            "Male": [
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ]
        }
    },
    {
        "name": "SDE1",
        "location": [
            1.2971996997445263,
            103.77041233347936
        ],
        "floors": {
            "Unisex": [
                2
            ]
        }
    },
    {
        "name": "SDE2",
        "location": [
            1.297206819777451,
            103.77081007717163
        ],
        "floors": {
            "Female": [
                3,
                5
            ]
        }
    },
    {
        "name": "SDE2",
        "location": [
            1.2973046809944917,
            103.77084477502285
        ],
        "floors": {
            "Male": [
                3,
                5
            ]
        }
    },
    {
        "name": "SDE2",
        "location": [
            1.297194893896592,
            103.77124690438139
        ],
        "floors": {
            "Male": [
                1
            ]
        }
    },
    {
        "name": "SDE2",
        "location": [
            1.2974654018090837,
            103.77102324399918
        ],
        "floors": {
            "Male": [
                2
            ],
            "Female": [
                3
            ]
        }
    },
    {
        "name": "SDE3",
        "location": [
            1.2981089151271277,
            103.77065160266227
        ],
        "floors": {
            "Male": [
                2,
                3,
                4
            ]
        }
    },
    {
        "name": "SDE3",
        "location": [
            1.2986041523107292,
            103.77041944039658
        ],
        "floors": {
            "Female": [
                2,
                3,
                4
            ]
        }
    },
    {
        "name": "SDE3",
        "location": [
            1.2977231234957596,
            103.77066404018778
        ],
        "floors": {
            "Male": [
                2,
                4
            ],
            "Female": [
                3
            ]
        }
    },
    {
        "name": "CELC",
        "location": [
            1.2967910386824906,
            103.77123237925746
        ],
        "floors": {
            "Male": [
                2,
                3
            ],
            "Female": [
                2,
                3
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "UT22",
        "location": [
            1.3038399252957706,
            103.77341927561399
        ],
        "floors": {
            "Female": [
                1,
                2
            ],
            "Handicap": [
                1,
                2
            ],
            "Male": [
                1,
                2
            ]
        }
    },
    {
        "name": "UT23",
        "location": [
            1.3056155150355926,
            103.77319393220036
        ],
        "floors": {
            "Male": [
                -1,
                1,
                2
            ],
            "Female": [
                -1,
                1,
                2
            ],
            "Handicap": [
                -1,
                1,
                2
            ],
            "Toilet": [
                3
            ]
        }
    },
    {
        "name": "UT23",
        "location": [
            1.3057717365097081,
            103.77271383840159
        ],
        "floors": {
            "Female": [
                1,
                2
            ],
            "Handicap": [
                1,
                2
            ],
            "Male": [
                1,
                2,
                3
            ]
        }
    },
    {
        "name": "UT23",
        "location": [
            1.3060172387764415,
            103.7730191163251
        ],
        "floors": {
            "Female": [
                2
            ],
            "Male": [
                2
            ],
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "UT23",
        "location": [
            1.305799604186541,
            103.77265770826347
        ],
        "floors": {
            "Female": [
                3
            ],
            "Handicap": [
                3
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3048968007958743,
            103.77195105294095
        ],
        "floors": {
            "Female": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3044858865317708,
            103.77252198308202
        ],
        "floors": {
            "Female": [
                1,
                2
            ],
            "Handicap": [
                1,
                2
            ],
            "Male": [
                1,
                2
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3042960698578465,
            103.77303440718222
        ],
        "floors": {
            "Female": [
                1
            ],
            "Male": [
                1,
                2
            ],
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3053196324216527,
            103.77211254022808
        ],
        "floors": {
            "Toilet": [
                1
            ],
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3053266063935707,
            103.77201897382535
        ],
        "floors": {
            "Toilet": [
                1
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3049317745287705,
            103.77205581929044
        ],
        "floors": {
            "Handicap": [
                1
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3042590568473253,
            103.77314812457355
        ],
        "floors": {
            "Female": [
                2
            ],
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3041358754853343,
            103.77277283060366
        ],
        "floors": {
            "Male": [
                2
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3042837763141604,
            103.7728555382301
        ],
        "floors": {
            "Female": [
                2
            ]
        }
    },
    {
        "name": "UT25",
        "location": [
            1.3044540826556372,
            103.77264422892216
        ],
        "floors": {
            "Female": [
                3
            ],
            "Handicap": [
                3
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "RC2",
        "location": [
            1.3064194004653877,
            103.77210480816203
        ],
        "floors": {
            "Male": [
                0,
                1
            ],
            "Female": [
                1,
                105
            ]
        }
    },
    {
        "name": "RC2",
        "location": [
            1.3065430937222906,
            103.77182942850095
        ],
        "floors": {
            "Handicap": [
                0,
                1,
                105
            ],
            "Toilet": [
                0,
                105
            ]
        }
    },
    {
        "name": "RC2",
        "location": [
            1.3064688671702036,
            103.77249576629163
        ],
        "floors": {
            "Male": [
                2
            ]
        }
    },
    {
        "name": "WC",
        "location": [
            1.3073379996118624,
            103.77206953843034
        ],
        "floors": {
            "Male": [
                2
            ],
            "Female": [
                2
            ]
        }
    },
    {
        "name": "RC1",
        "location": [
            1.305692502787854,
            103.77176897430388
        ],
        "floors": {
            "Female": [
                0,
                1
            ],
            "Male": [
                0,
                1
            ],
            "Handicap": [
                0,
                1
            ]
        }
    },
    {
        "name": "RC1",
        "location": [
            1.305934276428653,
            103.77234518237746
        ],
        "floors": {
            "Male": [
                1,
                2
            ],
            "Female": [
                1,
                2
            ]
        }
    },
    {
        "name": "EC",
        "location": [
            1.3070869285538673,
            103.77260711092046
        ],
        "floors": {
            "Female": [
                1,
                2,
                3
            ],
            "Male": [
                1,
                2,
                3
            ]
        }
    },
    {
        "name": "RC3",
        "location": [
            1.307783805115481,
            103.7719763865505
        ],
        "floors": {
            "Male": [
                1
            ],
            "Handicap": [
                1
            ],
            "Female": [
                1,
                2
            ]
        }
    },
    {
        "name": "RC3",
        "location": [
            1.3081983715545082,
            103.77252331379086
        ],
        "floors": {
            "Female": [
                1,
                2
            ],
            "Handicap": [
                1,
                2
            ],
            "Male": [
                1,
                2
            ]
        }
    },
    {
        "name": "RC3",
        "location": [
            1.3082270330806443,
            103.77239037138393
        ],
        "floors": {
            "Male": [
                1
            ],
            "Female": [
                1
            ]
        }
    },
    {
        "name": "RC3",
        "location": [
            1.307891006263037,
            103.7724628632047
        ],
        "floors": {
            "Male": [
                0
            ]
        }
    },
    {
        "name": "UCC",
        "location": [
            1.3017457861952562,
            103.77163991214032
        ],
        "floors": {
            "Male": [
                1,
                2
            ],
            "Handicap": [
                1,
                2
            ],
            "Female": [
                1,
                2
            ]
        }
    },
    {
        "name": "UCC",
        "location": [
            1.3016329133746964,
            103.7723304073647
        ],
        "floors": {
            "Female": [
                1
            ],
            "Male": [
                1,
                2,
                3
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "UCC",
        "location": [
            1.301364093695065,
            103.77275797678057
        ],
        "floors": {
            "Handicap": [
                0,
                2
            ],
            "Female": [
                0,
                1,
                2
            ],
            "Male": [
                0,
                1
            ]
        }
    },
    {
        "name": "UCC",
        "location": [
            1.3015765372871053,
            103.77231450015019
        ],
        "floors": {
            "Female": [
                2,
                3
            ]
        }
    },
    {
        "name": "UHC",
        "location": [
            1.299242261709655,
            103.77620407008952
        ],
        "floors": {
            "Toilet": [
                2
            ]
        }
    },
    {
        "name": "UHC",
        "location": [
            1.2991458066143033,
            103.77639808413647
        ],
        "floors": {
            "Handicap": [
                2
            ]
        }
    },
    {
        "name": "UHC",
        "location": [
            1.2991602706625953,
            103.77614369245208
        ],
        "floors": {
            "Toilet": [
                2
            ]
        }
    },
    {
        "name": "UHC",
        "location": [
            1.299279807078999,
            103.77636348111554
        ],
        "floors": {
            "Female": [
                1
            ],
            "Handicap": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "UHC",
        "location": [
            1.2988815699069307,
            103.77657873449462
        ],
        "floors": {
            "Female": [
                1
            ],
            "Handicap": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "YSTCM",
        "location": [
            1.3021816169466,
            103.77288838145557
        ],
        "floors": {
            "Female": [
                1
            ],
            "Handicap": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "YSTCM",
        "location": [
            1.3023493337991658,
            103.77290961440478
        ],
        "floors": {
            "Female": [
                1,
                2,
                3
            ],
            "Male": [
                1,
                2,
                3
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "YSTCM",
        "location": [
            1.3015739609045982,
            103.77298056261469
        ],
        "floors": {
            "Male": [
                -1
            ],
            "Female": [
                -1
            ]
        }
    },
    {
        "name": "S12",
        "location": [
            1.297098814853795,
            103.7784549771468
        ],
        "floors": {
            "Male": [
                1,
                2,
                4
            ],
            "Female": [
                1,
                3
            ]
        }
    },
    {
        "name": "S13",
        "location": [
            1.2966333808227528,
            103.77948313724103
        ],
        "floors": {
            "Female": [
                1,
                2,
                4
            ],
            "Male": [
                3,
                5,
                105
            ]
        }
    },
    {
        "name": "S15",
        "location": [
            1.2970003843270739,
            103.78004482724204
        ],
        "floors": {
            "Male": [
                1,
                3,
                5
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            "Female": [
                2,
                4,
                6
            ]
        }
    },
    {
        "name": "S16",
        "location": [
            1.296554506353467,
            103.78028388754312
        ],
        "floors": {
            "Female": [
                1,
                3,
                5,
                7,
                9
            ],
            "Male": [
                2,
                4,
                6,
                8
            ]
        }
    },
    {
        "name": "S17",
        "location": [
            1.2978336061586926,
            103.78070985899349
        ],
        "floors": {
            "Male": [
                1,
                3,
                5,
                7
            ],
            "Handicap": [
                1,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "Female": [
                4,
                6,
                8
            ]
        }
    },
    {
        "name": "S17",
        "location": [
            1.2975366977102594,
            103.78036692308429
        ],
        "floors": {
            "Female": [
                1,
                3,
                5,
                7
            ],
            "Male": [
                4,
                6,
                8
            ]
        }
    },
    {
        "name": "S1A",
        "location": [
            1.2958656906214943,
            103.77839300979002
        ],
        "floors": {
            "Female": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
            ]
        }
    },
    {
        "name": "S2",
        "location": [
            1.295605038026749,
            103.77788939967358
        ],
        "floors": {
            "Handicap": [
                2,
                3,
                4,
                5
            ],
            "Female": [
                3,
                5
            ],
            "Male": [
                4
            ]
        }
    },
    {
        "name": "S4A",
        "location": [
            1.2957245619375874,
            103.77936744978486
        ],
        "floors": {
            "Female": [
                1,
                2,
                3
            ],
            "Handicap": [
                1,
                2,
                3
            ],
            "Male": [
                1,
                2,
                3
            ]
        }
    },
    {
        "name": "S6",
        "location": [
            1.2952348944611558,
            103.78028930381615
        ],
        "floors": {
            "Female": [
                4,
                5,
                6
            ],
            "Male": [
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "S8",
        "location": [
            1.2960129674847516,
            103.77967246197758
        ],
        "floors": {
            "Female": [
                2,
                4
            ],
            "Handicap": [
                2,
                4
            ],
            "Male": [
                3,
                5
            ]
        }
    },
    {
        "name": "S3",
        "location": [
            1.2956197605227362,
            103.77888879834373
        ],
        "floors": {
            "Female": [
                1,
                3,
                5
            ],
            "Male": [
                2,
                4,
                6
            ]
        }
    },
    {
        "name": "S5",
        "location": [
            1.2952884478896314,
            103.77992568996443
        ],
        "floors": {
            "Female": [
                1,
                3,
                5
            ],
            "Male": [
                2,
                4
            ]
        }
    },
    {
        "name": "S7",
        "location": [
            1.2964299759214575,
            103.77867862587422
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                2,
                4
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "CELS",
        "location": [
            1.2944742901475574,
            103.78079887723275
        ],
        "floors": {
            "Female": [
                1
            ],
            "Male": [
                1
            ]
        }
    },
    {
        "name": "MD1",
        "location": [
            1.295397338936371,
            103.78048278089469
        ],
        "floors": {
            "Female": [
                1,
                3,
                5,
                6,
                8,
                9,
                10,
                11
            ],
            "Handicap": [
                1,
                3,
                5,
                6,
                8,
                9,
                10,
                11
            ],
            "Male": [
                1,
                3,
                5,
                6,
                8,
                9,
                10,
                11
            ]
        }
    },
    {
        "name": "MD1",
        "location": [
            1.295494365615522,
            103.78023795249447
        ],
        "floors": {
            "Female": [
                3
            ],
            "Handicap": [
                3
            ],
            "Male": [
                3
            ]
        }
    },
    {
        "name": "MD1",
        "location": [
            1.2950814817696519,
            103.78083461923016
        ],
        "floors": {
            "Male": [
                8,
                9,
                10,
                11
            ],
            "Handicap": [
                8,
                9,
                10,
                11
            ],
            "Female": [
                8,
                9,
                10,
                11
            ]
        }
    },
    {
        "name": "MD3",
        "location": [
            1.2951917805817237,
            103.7810208564436
        ],
        "floors": {
            "Female": [
                2,
                3,
                4,
                5,
                6
            ],
            "Male": [
                2,
                3,
                4,
                5,
                6
            ],
            "Handicap": [
                2,
                3,
                4,
                5,
                6
            ]
        }
    },
    {
        "name": "MD4",
        "location": [
            1.295809613125782,
            103.78073730639021
        ],
        "floors": {
            "Male": [
                1,
                3,
                5
            ],
            "Female": [
                2,
                4
            ],
            "Handicap": [
                2,
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "MD4",
        "location": [
            1.2956203370731507,
            103.78070939472947
        ],
        "floors": {
            "Female": [
                1,
                3,
                5
            ],
            "Handicap": [
                1
            ],
            "Male": [
                2,
                4
            ]
        }
    },
    {
        "name": "MD4",
        "location": [
            1.2955905644072314,
            103.78117723328674
        ],
        "floors": {
            "Female": [
                1,
                3
            ],
            "Handicap": [
                1,
                2,
                3
            ],
            "Male": [
                2,
                3
            ]
        }
    },
    {
        "name": "MD7",
        "location": [
            1.2961714180488575,
            103.78087370920849
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Female": [
                2,
                4
            ],
            "Handicap": [
                2,
                3,
                4
            ]
        }
    },
    {
        "name": "MD7",
        "location": [
            1.2960608822212274,
            103.78134059994575
        ],
        "floors": {
            "Female": [
                1
            ],
            "Male": [
                2
            ]
        }
    },
    {
        "name": "MD9",
        "location": [
            1.2966974981851844,
            103.78105681537842
        ],
        "floors": {
            "Male": [
                1,
                3
            ],
            "Handicap": [
                1,
                4
            ],
            "Female": [
                2,
                4
            ]
        }
    },
    {
        "name": "LT26",
        "location": [
            1.29636505463066,
            103.78099046733799
        ],
        "floors": {
            "Male": [
                1
            ],
            "Female": [
                1
            ]
        }
    },
    {
        "name": "LT27",
        "location": [
            1.2970715041010181,
            103.78097876996308
        ],
        "floors": {
            "Female": [
                1
            ]
        }
    },
    {
        "name": "LT27",
        "location": [
            1.2968835350750358,
            103.7809116517251
        ],
        "floors": {
            "Male": [
                1
            ]
        }
    },
    {
        "name": "FOD",
        "location": [
            1.2967776708163632,
            103.7816517162965
        ],
        "floors": {
            "Male": [
                1,
                2,
                3
            ],
            "Female": [
                1,
                2,
                3
            ],
            "Handicap": [
                2,
                3
            ]
        }
    },
    {
        "name": "FOD",
        "location": [
            1.2969458316707876,
            103.78195439767035
        ],
        "floors": {
            "Male": [
                1,
                2,
                3
            ],
            "Female": [
                1,
                2,
                3
            ],
            "Handicap": [
                1,
                2,
                3
            ]
        }
    },
    {
        "name": "MD6",
        "location": [
            1.2952495569270948,
            103.78161216936797
        ],
        "floors": {
            "Female": [
                1,
                2,
                3,
                4,
                5
            ],
            "Handicap": [
                1,
                2,
                3,
                4,
                5
            ],
            "Male": [
                1,
                2,
                3,
                4,
                5
            ]
        }
    },
    {
        "name": "MD6",
        "location": [
            1.295417529327836,
            103.78167380689388
        ],
        "floors": {
            "Male": [
                4
            ],
            "Female": [
                4
            ]
        }
    },
    {
        "name": "MD10",
        "location": [
            1.2963706414071976,
            103.78198607403507
        ],
        "floors": {
            "Male": [
                1,
                4
            ],
            "Handicap": [
                1,
                2,
                3,
                4
            ],
            "Female": [
                2,
                3
            ]
        }
    },
    {
        "name": "MD11",
        "location": [
            1.2959584600300083,
            103.7816952730742
        ],
        "floors": {
            "Male": [
                -1,
                1,
                2,
                3,
                4,
                5
            ],
            "Handicap": [
                -1,
                1,
                2,
                3,
                4,
                5
            ],
            "Female": [
                -1,
                1,
                2,
                3,
                4,
                5
            ]
        }
    }
]

export default toilets;