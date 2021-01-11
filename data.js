var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.6648673590442584,
        "pitch": 0.092038223104419,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": -0.0506742566784375,
          "pitch": 0.13891455965277189,
          "rotation": 0,
          "target": "2-social-hub"
        },
        {
          "yaw": 0.2671096668163404,
          "pitch": 0.3320565865679921,
          "rotation": 0,
          "target": "1-innovation-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-innovation-center",
      "name": "Innovation Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": -2.959302607307766,
          "pitch": 0.21942985301369689,
          "rotation": 6.283185307179586,
          "target": "0-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2613396553833685,
          "pitch": 0.4181751657971233,
          "title": "Autonomous Robots",
          "text": "Product stability test"
        },
        {
          "yaw": -0.7946999370339789,
          "pitch": -0.004684878253744529,
          "title": "Data Analysis Totem",
          "text": "Cloud based experiments &amp; data analysis point"
        },
        {
          "yaw": 2.277419058038298,
          "pitch": 0.31384601919966926,
          "title": "Formulation counters",
          "text": "Ingredients &amp; product formulation&nbsp;"
        },
        {
          "yaw": -0.22792071917265666,
          "pitch": -0.02975608279088604,
          "title": "Live Ingredient Pod",
          "text": ""
        }
      ]
    },
    {
      "id": "2-social-hub",
      "name": "Social Hub",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0845484627577715,
        "pitch": -0.02427826013807355,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": -0.9464704768368559,
          "pitch": 0.25868561630173303,
          "rotation": 0,
          "target": "3-video-presentation"
        },
        {
          "yaw": 0.2665980653618547,
          "pitch": 0.2502887484012071,
          "rotation": 0,
          "target": "5-focus-room"
        },
        {
          "yaw": -2.0150400185782633,
          "pitch": 0.5817594904460073,
          "rotation": 0,
          "target": "4-scent-pod"
        },
        {
          "yaw": -2.842747562110345,
          "pitch": 0.5589562496703664,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6333737763030332,
          "pitch": 0.14853609139876411,
          "title": "Product Sample &amp; Health bar",
          "text": "Feel free to try on our products &amp; refresh yourself with our Health boost!"
        },
        {
          "yaw": -2.01499211913171,
          "pitch": 0.44910293406922364,
          "title": "Scent Pod",
          "text": "Why don't you try our Olfactory experience with your choice of fragrance!"
        }
      ]
    },
    {
      "id": "3-video-presentation",
      "name": "Video Presentation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.3010954663851066,
        "pitch": 0.04885276501442881,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": 0.05870905564428597,
          "pitch": 0.21162551118714035,
          "rotation": 4.71238898038469,
          "target": "4-scent-pod"
        },
        {
          "yaw": -0.39415958020509123,
          "pitch": 0.38126481497710074,
          "rotation": 4.71238898038469,
          "target": "2-social-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-scent-pod",
      "name": "Scent Pod",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.847482845746427,
        "pitch": -0.09745556226252106,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": 0.7509166305857349,
          "pitch": 0.0668659074223914,
          "rotation": 0,
          "target": "2-social-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-focus-room",
      "name": "Focus Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.11059016544208511,
        "pitch": 0.04292207975746187,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": -0.3049736379051371,
          "pitch": -0.035755161733625584,
          "rotation": 0,
          "target": "6-collaboration-area"
        },
        {
          "yaw": -3.0977104130879543,
          "pitch": 0.11261597738436535,
          "rotation": 0,
          "target": "2-social-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-collaboration-area",
      "name": "Collaboration Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0082961669507071,
        "pitch": 0.07091024524006428,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": 1.8890656878292083,
          "pitch": 0.22275542666717918,
          "rotation": 0,
          "target": "2-social-hub"
        },
        {
          "yaw": 2.013352242700182,
          "pitch": 0.2947243016646883,
          "rotation": 1.5707963267948966,
          "target": "7-breakout--physical-activity"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5671372073697931,
          "pitch": 0.7438313077596135,
          "title": "Preliminary Research Area",
          "text": ""
        },
        {
          "yaw": -1.7758013228801275,
          "pitch": 0.4011654729084775,
          "title": "Packaging &amp; Prototyping Area",
          "text": ""
        }
      ]
    },
    {
      "id": "7-breakout--physical-activity",
      "name": "Breakout & Physical activity",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4381273926997977,
        "pitch": 0.0008106603025836989,
        "fov": 1.3845933826976107
      },
      "linkHotspots": [
        {
          "yaw": -2.5314363340297135,
          "pitch": 0.2938545760982354,
          "rotation": 4.71238898038469,
          "target": "6-collaboration-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3604965133413316,
          "pitch": 0.19377210646653253,
          "title": "Wellness &amp; Physical Activity room",
          "text": ""
        }
      ]
    }
  ],
  "name": "DOSE_Wellness Incubator",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
