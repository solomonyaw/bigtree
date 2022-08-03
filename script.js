TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "adjacentPanoramas": [
   {
    "panorama": {
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_t.jpg",
       "overlays": [
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_720F2230_62EA_144D_41C5_26704F38D144",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 27.59,
           "yaw": -125.32,
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 162,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_0_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22.22
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "yaw": -125.32,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 27.59,
           "image": {
            "levels": [
             {
              "height": 616,
              "width": 502,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -22.22
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_7381533E_62EA_14B4_41B9_2BF79CB681A4",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 38.88,
           "yaw": -112.01,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -32.05
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -112.01,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 38.88,
           "image": {
            "levels": [
             {
              "height": 805,
              "width": 819,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_1_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -32.05
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_72467A50_62EE_14CC_41B0_F3C0A31EF413",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 21.11,
           "yaw": -126.14,
           "image": {
            "levels": [
             {
              "height": 157,
              "width": 200,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_2_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.29
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343, this.camera_71924396_62AE_3475_41D4_18470DCC71AC); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -126.14,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 21.11,
           "image": {
            "levels": [
             {
              "height": 329,
              "width": 417,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_2_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.29
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_73CD084A_62EA_14DC_41CD_9EF5F72FB948",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 23.71,
           "yaw": 108.12,
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 159,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_3_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.24
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "roll": 0,
           "yaw": 108.12,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 23.71,
           "image": {
            "levels": [
             {
              "height": 536,
              "width": 429,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -40.24
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_7343EF7D_62EA_2CB7_41B8_432BB9C3BB88",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 26.29,
           "yaw": 117.34,
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_4_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -50.07
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 117.34,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 26.29,
           "image": {
            "levels": [
             {
              "height": 731,
              "width": 731,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -50.07
          }
         ]
        },
        {
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_73279A8A_62EA_145C_41BA_BEA5187FE705",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 13.81,
           "yaw": 107.51,
           "image": {
            "levels": [
             {
              "height": 157,
              "width": 175,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_5_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -45.36
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6, this.camera_718AD380_62AE_344D_41C0_F03DB0306210); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 107.51,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 13.81,
           "image": {
            "levels": [
             {
              "height": 314,
              "width": 351,
              "url": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -45.36
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ],
     "class": "Panorama",
     "adjacentPanoramas": [
      {
       "panorama": {
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3141,
             "width": 6282,
             "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_t.jpg",
          "overlays": [
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_7107DE9E_62E6_6C75_41C4_48B0FF61D252",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 28.62,
              "yaw": -0.82,
              "image": {
               "levels": [
                {
                 "height": 200,
                 "width": 163,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -20.78
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "roll": 0,
              "yaw": -0.82,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 28.62,
              "image": {
               "levels": [
                {
                 "height": 625,
                 "width": 510,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -20.78
             }
            ]
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_714F6728_62E6_3C5C_41BC_36BB8B2E14F7",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 22.5,
              "yaw": -0.61,
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.74
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -0.61,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 22.5,
              "image": {
               "levels": [
                {
                 "height": 435,
                 "width": 414,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -18.74
             }
            ]
           },
           {
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_71A4F7EF_62E6_1BD4_41C8_613AD1B2FBE6",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 28.48,
              "yaw": -1.64,
              "image": {
               "levels": [
                {
                 "height": 141,
                 "width": 200,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -22.01
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1, this.camera_718E4369_62AE_34DF_41B0_E765684AD48E); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -1.64,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 28.48,
              "image": {
               "levels": [
                {
                 "height": 378,
                 "width": 536,
                 "url": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -22.01
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ],
        "class": "Panorama",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1",
          "backwardYaw": 107.51,
          "yaw": -1.64,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "hfov": 360,
        "id": "panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6",
        "audios": [
         {
          "autoplay": true,
          "id": "audio_707A0319_62EA_747C_41A3_5274789513D2",
          "class": "PanoramaAudio",
          "audio": {
           "mp3Url": "media/audio_717387FF_62EA_7BB4_41CD_621E22D472E9.mp3",
           "id": "audioresource_7020312F_62EA_1453_41D2_D91C7DB0BE5B",
           "class": "AudioResource",
           "oggUrl": "media/audio_717387FF_62EA_7BB4_41CD_621E22D472E9.ogg"
          }
         }
        ],
        "pitch": 0,
        "thumbnailUrl": "media/panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_t.jpg",
        "label": "2z09w8t-city-forest",
        "hfovMax": 120,
        "partial": false,
        "hfovMin": 60,
        "vfov": 180
       },
       "backwardYaw": -1.64,
       "yaw": 107.51,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343",
       "backwardYaw": -81.5,
       "yaw": -126.14,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "hfov": 360,
     "id": "panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1",
     "audios": [
      {
       "autoplay": true,
       "id": "audio_7020212F_62EA_1453_41D8_980E0576AEDA",
       "class": "PanoramaAudio",
       "audio": "this.audioresource_7020312F_62EA_1453_41D2_D91C7DB0BE5B"
      }
     ],
     "pitch": 0,
     "thumbnailUrl": "media/panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_t.jpg",
     "label": "qb01aok-360-view-trees",
     "hfovMax": 120,
     "partial": false,
     "hfovMin": 60,
     "vfov": 180
    },
    "backwardYaw": -126.14,
    "yaw": -81.5,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "hfov": 360,
  "id": "panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343",
  "audios": [
   {
    "autoplay": true,
    "id": "audio_717387FF_62EA_7BB4_41CD_621E22D472E9",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_7020312F_62EA_1453_41D2_D91C7DB0BE5B"
   }
  ],
  "pitch": 0,
  "thumbnailUrl": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_t.jpg",
  "label": "pixexid-8b04b448-0f91-4356-bff5-6cf707be3571",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_t.jpg",
    "overlays": [
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_6C080681_62A7_FC4C_41B7_25B8782E0E0A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 23.11,
        "yaw": -81.5,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 180,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1, this.camera_71A2C3AF_62AE_3453_41D3_86EFAE0376FA); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "roll": 0,
        "yaw": -81.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 23.11,
        "image": {
         "levels": [
          {
           "height": 462,
           "width": 418,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 9.73
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_6DD8DDED_62A6_2FD7_41D3_60BEACDE7B08",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.07,
        "yaw": -79.25,
        "image": {
         "levels": [
          {
           "height": 25,
           "width": 16,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.29
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -79.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.07,
        "image": {
         "levels": [
          {
           "height": 600,
           "width": 380,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.29
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_6D01AB14_62AA_F474_41D5_275E964F126F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.08,
        "yaw": -81.5,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 120,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 14.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -81.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.08,
        "image": {
         "levels": [
          {
           "height": 219,
           "width": 241,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 14.64
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_724414EF_62DE_1DD4_41D4_5196AF07EA16",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 34.25,
        "yaw": 88.67,
        "image": {
         "levels": [
          {
           "height": 155,
           "width": 200,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 31.43
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_7271E3B0_62DE_144C_41C8_235CAEEF0C8B, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "yaw": 88.67,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 34.25,
        "image": {
         "levels": [
          {
           "height": 556,
           "width": 717,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 31.43
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_73818053_62DE_14F3_41C5_909577657F49",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.32,
        "yaw": 98.7,
        "image": {
         "levels": [
          {
           "height": 33,
           "width": 16,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 26.93
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 98.7,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.32,
        "image": {
         "levels": [
          {
           "height": 468,
           "width": 226,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 26.93
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_7255D5E1_62DA_1FCC_41D5_3CA667D9A2C9",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 30.57,
        "yaw": 10.63,
        "image": {
         "levels": [
          {
           "height": 168,
           "width": 200,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.1
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_706E34CD_62FA_3DD4_41D7_BB37F777DE55, {'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'borderColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconHeight':20,'paddingLeft':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconWidth':20,'paddingTop':5,'pressedIconHeight':20,'pressedIconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','rollOverIconWidth':20}) } else { this.showPopupMedia(this.window_71A8974F_62FA_3CD4_41C3_83AC416D62F1, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6, this.PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920, '70%', '70%', true, true); this.PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920.set('selectedIndex', 0); ; this.viewer_uid77BE5F0F_62DA_EC54_41D3_C8FD45CC96A0VideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "roll": 0,
        "yaw": 10.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 30.57,
        "image": {
         "levels": [
          {
           "height": 470,
           "width": 559,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 16.1
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_7388A433_62E6_1C4C_41D6_11D4305E5E1A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.55,
        "yaw": 9.62,
        "image": {
         "levels": [
          {
           "height": 109,
           "width": 139,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 20.78
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_71B1825E_62EA_14F4_41D5_681DDF7A36F6, {'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'borderColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','paddingBottom':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconHeight':20,'paddingLeft':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconWidth':20,'paddingTop':5,'pressedIconHeight':20,'pressedIconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','rollOverIconWidth':20}) } else { this.showPopupMedia(this.window_71AE74D8_62EA_1DFC_41D5_D259173FFD74, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6, this.PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14, '95%', '95%', true, true); this.PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14.set('selectedIndex', 0); ; this.viewer_uid77BC8F23_62DA_EC53_41C0_327CF21974BBVideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 9.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.55,
        "image": {
         "levels": [
          {
           "height": 219,
           "width": 278,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 20.78
       }
      ]
     },
     {
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_7265F778_62E6_1CBD_41D1_68F78F5BE1EE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 34.36,
        "yaw": 18.63,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 18.63,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 34.36,
        "image": {
         "levels": [
          {
           "height": 592,
           "width": 614,
           "url": "media/panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.76
       }
      ]
     },
     {
      "rotationX": 0,
      "popupMaxWidth": "70%",
      "yaw": 10.63,
      "showEasing": "cubic_in",
      "class": "PopupPanoramaOverlay",
      "hfov": 29.51,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "video": {
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_71A6D651_62FA_1CCC_41D1_136C749EC9A6.mp4",
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "popup_706E34CD_62FA_3DD4_41D7_BB37F777DE55",
      "loop": false,
      "hideDuration": 500,
      "popupMaxHeight": "70%",
      "showDuration": 500,
      "rotationY": 0,
      "pitch": 16.1
     },
     {
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "yaw": 9.62,
      "showEasing": "cubic_in",
      "class": "PopupPanoramaOverlay",
      "hfov": 14.55,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "video": {
       "height": 720,
       "width": 1280,
       "mp4Url": "media/video_71A6D651_62FA_1CCC_41D1_136C749EC9A6.mp4",
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "popup_71B1825E_62EA_14F4_41D5_681DDF7A36F6",
      "loop": false,
      "hideDuration": 500,
      "popupMaxHeight": "95%",
      "showDuration": 500,
      "rotationY": 0,
      "pitch": 20.78
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ],
  "partial": false,
  "hfovMin": 106,
  "vfov": 180
 },
 {
  "buttonZoomOut": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "buttonPlayRight": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 38,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonMoveDown": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonPlayLeft": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 38,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonRestart": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 38,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonZoomIn": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonMoveRight": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "preloadEnabled": false,
  "buttonMoveUp": {
   "borderRadius": 0,
   "minWidth": 0,
   "width": 30,
   "mode": "push",
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "height": 30,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "paddingRight": 0,
   "shadow": false,
   "class": "IconButton",
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "minHeight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  }
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -12.39,
     "path": "shortest",
     "targetYaw": -178.77,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 16.28,
     "path": "shortest",
     "targetYaw": -112.42,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 24.06,
     "path": "shortest",
     "targetYaw": -37.47,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 26.52,
     "path": "shortest",
     "targetYaw": 45.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_6D2102B4_62A6_15B4_41CB_9D7C2DAAA7D6, null, false); this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_camera.get('initialSequence').pause()"
    },
    {
     "targetPitch": 10.14,
     "path": "shortest",
     "targetYaw": 98.5,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -12.39,
     "path": "shortest",
     "targetYaw": 137,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -48.84,
     "path": "shortest",
     "targetYaw": 112.42,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_71A6D651_62FA_1CCC_41D1_136C749EC9A6_t.jpg",
  "video": {
   "height": 720,
   "width": 1280,
   "mp4Url": "media/video_71A6D651_62FA_1CCC_41D1_136C749EC9A6.mp4",
   "class": "VideoResource"
  },
  "label": "bigtree",
  "width": 1280,
  "id": "video_71A6D651_62FA_1CCC_41D1_136C749EC9A6",
  "loop": false,
  "height": 720,
  "scaleMode": "fit_inside"
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "class": "VideoPlayer"
 },
 {
  "items": [
   {
    "camera": "this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_camera",
    "media": "this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_camera",
    "media": "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_camera",
    "media": "this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
    "media": "this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "camera": "this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343_camera",
    "media": "this.panorama_687114CA_625E_3B3A_41B6_BAEBA29CC343",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "camera": "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1_camera",
    "media": "this.panorama_6841D22D_625E_7F7F_41C3_F344B4C011C1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "camera": "this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6_camera",
    "media": "this.panorama_681D822E_625E_1F7D_41A2_0E0B18C7C4A6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 0)",
    "media": "this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 3, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6)"
   }
  ],
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid77BE5F0F_62DA_EC54_41D3_C8FD45CC96A0VideoPlayer)",
    "media": "this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6",
    "class": "VideoPlayListItem",
    "player": {
     "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "viewerArea": {
      "borderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "transitionMode": "blending",
      "progressLeft": 10,
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "progressRight": 10,
      "playbackBarLeft": 0,
      "shadow": false,
      "toolTipPaddingLeft": 6,
      "class": "ViewerArea",
      "progressOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeight": 20,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "borderSize": 0,
      "progressBorderSize": 2,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#AAAAAA",
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingRight": 6,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "width": "100%",
      "playbackBarBottom": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressHeight": 20,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBorderRadius": 4,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarRight": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "height": "100%",
      "paddingRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid718522DB_62AE_35FC_41D7_815AD14654A1",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 50,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowColor": "#000000",
      "progressBarBorderRadius": 4,
      "toolTipShadowBlurRadius": 3,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadHeight": 30,
      "playbackBarBorderRadius": 4,
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid77BE5F0F_62DA_EC54_41D3_C8FD45CC96A0VideoPlayer",
     "displayPlaybackBar": true,
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid77BE5F0F_62DA_EC54_41D3_C8FD45CC96A0VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920, 0, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6)"
   }
  ],
  "id": "PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid77BC8F23_62DA_EC53_41C0_327CF21974BBVideoPlayer)",
    "media": "this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6",
    "class": "VideoPlayListItem",
    "player": {
     "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "viewerArea": {
      "borderRadius": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "transitionMode": "blending",
      "progressLeft": 10,
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderSize": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "progressRight": 10,
      "playbackBarLeft": 0,
      "shadow": false,
      "toolTipPaddingLeft": 6,
      "class": "ViewerArea",
      "progressOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeight": 20,
      "paddingLeft": 0,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "borderSize": 0,
      "progressBorderSize": 2,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#AAAAAA",
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "progressBarBackgroundColorDirection": "vertical",
      "minWidth": 100,
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingRight": 6,
      "playbackBarBorderSize": 2,
      "toolTipBorderColor": "#767676",
      "width": "100%",
      "playbackBarBottom": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressHeight": 20,
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipShadowSpread": 0,
      "playbackBarHeadBorderRadius": 0,
      "progressBorderRadius": 4,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarRight": 0,
      "progressBorderColor": "#AAAAAA",
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "height": "100%",
      "paddingRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid718562DC_62AE_35F4_41D3_462EEFBA58C2",
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "minHeight": 50,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowColor": "#000000",
      "progressBarBorderRadius": 4,
      "toolTipShadowBlurRadius": 3,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarHeadHeight": 30,
      "playbackBarBorderRadius": 4,
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid77BC8F23_62DA_EC53_41C0_327CF21974BBVideoPlayer",
     "displayPlaybackBar": true,
     "class": "VideoPlayer"
    },
    "start": "this.viewer_uid77BC8F23_62DA_EC53_41C0_327CF21974BBVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14, 0, this.video_71A6D651_62FA_1CCC_41D1_136C749EC9A6)"
   }
  ],
  "id": "PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14",
  "class": "PlayList"
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "headerBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "title": "Big Tree ",
  "titleFontColor": "#FFFFFF",
  "shadow": true,
  "bodyBorderSize": 0,
  "shadowBlurRadius": 6,
  "titleFontStyle": "normal",
  "class": "Window",
  "headerPaddingLeft": 10,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   0.51,
   1
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 11,
  "shadowColor": "#000000",
  "headerPaddingRight": 10,
  "veilColorDirection": "horizontal",
  "borderSize": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "children": [
   {
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 0,
    "width": "100%",
    "height": "46%",
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "HTMLText",
    "paddingBottom": 10,
    "paddingRight": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This tree is a must-see! believed to be about 400 to 500 years old, although oral history dates it older, it measures about 70 meters high and is very wide.Located at Aprokum aboutase 18km from Oda, this \u2018giant\u2019 of a tree is touted to be the largest in West Africa and as usual, it comes with the usual myths of healing the sick, helping infertile women to conceive, and delivering prosperty.Be sure to make prior by clicking here or by making direct arrangements from Oda town before getting there. The place is sometimes weedy and inaccessible.How to get thereJoin a trotro from Oda to Swedru and hire a taxi to the town, Aprokumase. Alternatively, From Winneba, take minibus to Swedru and another to Aprokumase.</SPAN></DIV></div>",
    "paddingLeft": 10,
    "id": "htmlText_uid71B212BE_62AE_35B4_41CB_5D68E9E547C0",
    "minHeight": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "shadow": false,
    "borderRadius": 0,
    "class": "Image",
    "paddingBottom": 0,
    "minWidth": 0,
    "paddingLeft": 0,
    "id": "image_uid71B212BE_62AE_35B4_41CB_5D68E9E547C0_1",
    "paddingRight": 0,
    "minHeight": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "width": "100%",
    "height": "53%",
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "scaleMode": "fit_inside",
    "url": "media/photo_72B4D810_62DA_144D_41D1_C23DE0EA02A7.jpg"
   }
  ],
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "contentOpaque": false,
  "minWidth": 20,
  "bodyPaddingBottom": 5,
  "gap": 10,
  "height": 500,
  "width": 400,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "overflow": "scroll",
  "horizontalAlign": "center",
  "headerBackgroundColor": [
   "#006600",
   "#009933",
   "#00CC00",
   "#33FF00"
  ],
  "headerBorderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "shadowSpread": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "scrollBarMargin": 2,
  "bodyPaddingLeft": 5,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "close": "this.camera_71924396_62AE_3475_41D4_18470DCC71AC.get('initialSequence').play()",
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "bodyPaddingRight": 5,
  "headerBackgroundOpacity": 0.86,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "id": "window_6D2102B4_62A6_15B4_41CB_9D7C2DAAA7D6",
  "minHeight": 20,
  "closeButtonBackgroundColor": [],
  "bodyBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "scrollBarWidth": 10,
  "bodyBackgroundOpacity": 1,
  "headerVerticalAlign": "middle",
  "footerHeight": 5,
  "closeButtonIconWidth": 12,
  "titleFontWeight": "normal",
  "paddingTop": 0,
  "closeButtonIconHeight": 12,
  "headerPaddingBottom": 10,
  "closeButtonIconLineWidth": 2,
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "modal": true,
  "headerBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "title": "The Big Tree",
  "titleFontColor": "#FFFFFF",
  "shadow": true,
  "bodyBorderSize": 0,
  "shadowBlurRadius": 6,
  "titleFontStyle": "normal",
  "class": "Window",
  "headerPaddingLeft": 10,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "closeButtonBackgroundColorRatios": [],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 11,
  "shadowColor": "#000000",
  "headerPaddingRight": 10,
  "veilColorDirection": "horizontal",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "borderSize": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonIconColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "children": [
   {
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "minWidth": 0,
    "width": "100%",
    "height": "45%",
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "HTMLText",
    "paddingBottom": 10,
    "paddingRight": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This tree is a must-see! believed to be about 400 to 500 years old, although oral history dates it older, it measures about 70 meters high and is very wide.Located at Aprokum aboutase 18km from Oda, this \u2018giant\u2019 of a tree is touted to be the largest in West Africa and as usual, it comes with the usual myths of healing the sick, helping infertile women to conceive, and delivering prosperty.Be sure to make prior by clicking here or by making direct arrangements from Oda town before getting there. The place is sometimes weedy and inaccessible.How to get thereJoin a trotro from Oda to Swedru and hire a taxi to the town, Aprokumase. Alternatively, From Winneba, take minibus to Swedru and another to Aprokumase.</SPAN></DIV></div>",
    "paddingLeft": 10,
    "id": "htmlText_uid71FAB2D4_62AE_35F4_41D5_4A0FD449D113",
    "minHeight": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "scrollBarOpacity": 0.5
   },
   {
    "shadow": false,
    "borderRadius": 0,
    "class": "Image",
    "paddingBottom": 0,
    "minWidth": 0,
    "paddingLeft": 0,
    "id": "image_uid71FAB2D4_62AE_35F4_41D5_4A0FD449D113_1",
    "paddingRight": 0,
    "minHeight": 0,
    "borderSize": 0,
    "horizontalAlign": "center",
    "paddingTop": 0,
    "width": "100%",
    "height": "54%",
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "scaleMode": "fit_inside",
    "url": "media/photo_72B4D810_62DA_144D_41D1_C23DE0EA02A7.jpg"
   }
  ],
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "contentOpaque": false,
  "minWidth": 20,
  "bodyPaddingBottom": 5,
  "gap": 10,
  "height": 500,
  "width": 400,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "overflow": "scroll",
  "horizontalAlign": "center",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#006600",
   "#00CC33"
  ],
  "headerBorderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "shadowSpread": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "scrollBarMargin": 2,
  "bodyPaddingLeft": 5,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "bodyPaddingRight": 5,
  "headerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "id": "window_7271E3B0_62DE_144C_41C8_235CAEEF0C8B",
  "minHeight": 20,
  "closeButtonBackgroundColor": [],
  "bodyBorderColor": "#000000",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "scrollBarWidth": 10,
  "bodyBackgroundOpacity": 1,
  "headerVerticalAlign": "middle",
  "footerHeight": 5,
  "closeButtonIconWidth": 12,
  "titleFontWeight": "normal",
  "paddingTop": 0,
  "closeButtonIconHeight": 12,
  "headerPaddingBottom": 10,
  "closeButtonIconLineWidth": 2,
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "closeButtonPressedBorderSize": 0,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonRollOverBorderSize": 0,
  "modal": true,
  "closeButtonRollOverIconLineWidth": 5,
  "layout": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingTop": 5,
  "closeButtonPaddingTop": 5,
  "shadow": true,
  "shadowBlurRadius": 6,
  "class": "Window",
  "closeButtonBorderSize": 0,
  "headerPaddingLeft": 10,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "shadowColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "children": [
   "this.viewer_uid718522DB_62AE_35FC_41D7_815AD14654A1"
  ],
  "closeButtonPaddingRight": 5,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "contentOpaque": false,
  "minWidth": 20,
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "gap": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "overflow": "scroll",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "shadowSpread": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "close": "this.PlayList_77B5BF87_62DA_EC54_41C2_B70C0F779920.set('selectedIndex', -1);",
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_71A8974F_62FA_3CD4_41C3_83AC416D62F1",
  "closeButtonBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "scrollBarWidth": 10,
  "bodyBackgroundOpacity": 0,
  "headerVerticalAlign": "middle",
  "closeButtonRollOverBorderColor": "#000000",
  "footerHeight": 5,
  "closeButtonIconWidth": 20,
  "paddingTop": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "footerBackgroundOpacity": 0,
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 "this.popup_706E34CD_62FA_3DD4_41D7_BB37F777DE55",
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "closeButtonPressedIconColor": "#888888",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "closeButtonPressedBorderSize": 0,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonRollOverBorderSize": 0,
  "modal": true,
  "closeButtonRollOverIconLineWidth": 5,
  "layout": "vertical",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingTop": 5,
  "closeButtonPaddingTop": 5,
  "shadow": true,
  "shadowBlurRadius": 6,
  "class": "Window",
  "closeButtonBorderSize": 0,
  "headerPaddingLeft": 10,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingLeft": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "shadowColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonIconColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "children": [
   "this.viewer_uid718562DC_62AE_35F4_41D3_462EEFBA58C2"
  ],
  "closeButtonPaddingRight": 5,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "contentOpaque": false,
  "minWidth": 20,
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "gap": 10,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "overflow": "scroll",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "shadowSpread": 1,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "bodyPaddingLeft": 0,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "titleFontSize": 14,
  "titlePaddingLeft": 5,
  "close": "this.PlayList_77AA5F87_62DA_EC54_41B8_08F40D4DCD14.set('selectedIndex', -1);",
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "bodyPaddingRight": 0,
  "headerBackgroundOpacity": 0,
  "titlePaddingBottom": 5,
  "paddingBottom": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_71AE74D8_62EA_1DFC_41D5_D259173FFD74",
  "closeButtonBorderColor": "#000000",
  "minHeight": 20,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "scrollBarWidth": 10,
  "bodyBackgroundOpacity": 0,
  "headerVerticalAlign": "middle",
  "closeButtonRollOverBorderColor": "#000000",
  "footerHeight": 5,
  "closeButtonIconWidth": 20,
  "paddingTop": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "footerBackgroundOpacity": 0,
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 "this.popup_71B1825E_62EA_14F4_41D5_681DDF7A36F6",
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.49,
   "pitch": 0
  },
  "id": "camera_718E4369_62AE_34DF_41B0_E765684AD48E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.36,
   "pitch": 0
  },
  "id": "camera_718AD380_62AE_344D_41C0_F03DB0306210",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 0,
     "path": "shortest",
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 9.82,
     "easing": "cubic_in_out",
     "yawSpeed": 18.73
    },
    {
     "targetPitch": -12.39,
     "path": "shortest",
     "targetYaw": -178.77,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 16.28,
     "path": "shortest",
     "targetYaw": -112.42,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 24.06,
     "path": "shortest",
     "targetYaw": -37.47,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 26.52,
     "path": "shortest",
     "targetYaw": 45.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_6D2102B4_62A6_15B4_41CB_9D7C2DAAA7D6, null, false); this.camera_71924396_62AE_3475_41D4_18470DCC71AC.get('initialSequence').pause()"
    },
    {
     "targetPitch": 10.14,
     "path": "shortest",
     "targetYaw": 98.5,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -12.39,
     "path": "shortest",
     "targetYaw": 137,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -48.84,
     "path": "shortest",
     "targetYaw": 112.42,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 98.5,
   "pitch": 0
  },
  "id": "camera_71924396_62AE_3475_41D4_18470DCC71AC",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.86,
   "pitch": 0
  },
  "id": "camera_71A2C3AF_62AE_3453_41D3_86EFAE0376FA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "duration": 5000,
  "class": "Photo",
  "thumbnailUrl": "media/photo_72B4D810_62DA_144D_41D1_C23DE0EA02A7_t.jpg",
  "label": "bigtree",
  "width": 1032,
  "id": "photo_72B4D810_62DA_144D_41D1_C23DE0EA02A7",
  "height": 581,
  "image": {
   "levels": [
    {
     "url": "media/photo_72B4D810_62DA_144D_41D1_C23DE0EA02A7.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  }
 },
 "this.audio_717387FF_62EA_7BB4_41CD_621E22D472E9",
 "this.audio_7020212F_62EA_1453_41D8_980E0576AEDA",
 "this.audio_707A0319_62EA_747C_41A3_5274789513D2"
], "children": [
 {
  "borderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipShadowOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "toolTipBackgroundColor": "#F6F6F6",
  "transitionMode": "blending",
  "progressLeft": 10,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "right": 0,
  "toolTipPaddingBottom": 4,
  "progressRight": 10,
  "playbackBarLeft": 0,
  "shadow": false,
  "toolTipPaddingLeft": 6,
  "class": "ViewerArea",
  "progressOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeight": 20,
  "paddingLeft": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "borderSize": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarOpacity": 1,
  "progressBottom": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "playbackBarBottom": 10,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarRight": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBorderRadius": 4,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderColor": "#AAAAAA",
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "top": 77,
  "playbackBarHeadShadowVerticalLength": 0,
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontStyle": "normal",
  "bottom": 92,
  "id": "MainViewer",
  "minHeight": 50,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 4,
  "toolTipFontSize": 12,
  "toolTipOpacity": 1,
  "paddingTop": 0,
  "playbackBarHeadHeight": 30,
  "left": 0
 },
 {
  "borderRadius": 5,
  "selectedItemLabelFontWeight": "bold",
  "verticalAlign": "top",
  "itemBorderRadius": 0,
  "maxHeight": 800,
  "itemBackgroundOpacity": 0,
  "minWidth": 0,
  "itemLabelPosition": "bottom",
  "itemThumbnailOpacity": 1,
  "itemLabelGap": 5,
  "backgroundColor": [
   "#000000"
  ],
  "itemOpacity": 1,
  "gap": 10,
  "itemLabelFontSize": 14,
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadow": true,
  "itemLabelFontStyle": "normal",
  "itemMode": "normal",
  "horizontalAlign": "left",
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailShadowOpacity": 0.8,
  "itemLabelFontWeight": "normal",
  "itemVerticalAlign": "middle",
  "itemThumbnailShadowBlurRadius": 4,
  "itemLabelFontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingTop": 3,
  "scrollBarMargin": 2,
  "itemPaddingRight": 3,
  "paddingRight": 20,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingLeft": 3,
  "shadow": false,
  "itemThumbnailWidth": 100,
  "itemBackgroundColorRatios": [],
  "top": 84,
  "class": "ThumbnailList",
  "paddingBottom": 10,
  "bottom": 100,
  "itemThumbnailScaleMode": "fit_outside",
  "maxWidth": 800,
  "itemThumbnailShadowVerticalLength": 3,
  "paddingLeft": 20,
  "itemBackgroundColor": [],
  "id": "thumbnaillist5245",
  "itemThumbnailShadowColor": "#000000",
  "minHeight": 0,
  "layout": "vertical",
  "borderSize": 0,
  "itemHorizontalAlign": "center",
  "scrollBarWidth": 10,
  "itemPaddingBottom": 3,
  "itemLabelTextDecoration": "none",
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailHeight": 75,
  "scrollBarColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadowSpread": 1,
  "paddingTop": 10,
  "right": 9,
  "backgroundOpacity": 0.2,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 0,
  "verticalAlign": "middle",
  "minWidth": 30,
  "fontSize": 40,
  "width": 890,
  "height": 49,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "text": "The Big Tree Virtual Tour",
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "paddingRight": 0,
  "fontWeight": "bold",
  "shadow": false,
  "top": 7,
  "class": "Label",
  "paddingBottom": 0,
  "fontColor": "#666666",
  "paddingLeft": 0,
  "id": "label4056",
  "minHeight": 16,
  "borderSize": 0,
  "paddingTop": 0,
  "left": 103,
  "backgroundOpacity": 0
 },
 {
  "borderRadius": 0,
  "children": [
   {
    "borderRadius": 0,
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "borderRadius": 0,
      "minWidth": 0,
      "width": 38,
      "mode": "toggle",
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "height": 38,
      "paddingRight": 0,
      "shadow": false,
      "class": "IconButton",
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingLeft": 0,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "minHeight": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "paddingTop": 0,
      "verticalAlign": "middle",
      "backgroundOpacity": 0
     },
     {
      "borderRadius": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "borderRadius": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "minWidth": 20,
        "width": 47,
        "contentOpaque": false,
        "gap": 10,
        "layout": "vertical",
        "overflow": "hidden",
        "scrollBarVisible": "rollOver",
        "backgroundColorDirection": "vertical",
        "horizontalAlign": "center",
        "height": "100%",
        "scrollBarMargin": 2,
        "shadow": false,
        "class": "Container",
        "paddingBottom": 0,
        "paddingRight": 0,
        "paddingLeft": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "minHeight": 20,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "paddingTop": 0,
        "backgroundColorRatios": [
         0
        ],
        "backgroundOpacity": 1,
        "scrollBarOpacity": 0.5
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 20,
      "width": 133,
      "contentOpaque": false,
      "gap": 5,
      "layout": "horizontal",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "backgroundColorDirection": "vertical",
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "minHeight": 20,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5
     },
     {
      "borderRadius": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minWidth": 20,
      "width": 85,
      "contentOpaque": false,
      "gap": 10,
      "layout": "horizontal",
      "overflow": "hidden",
      "scrollBarVisible": "rollOver",
      "backgroundColorDirection": "vertical",
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarMargin": 2,
      "shadow": false,
      "class": "Container",
      "paddingBottom": 0,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "minHeight": 20,
      "borderSize": 0,
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "backgroundOpacity": 1,
      "scrollBarOpacity": 0.5
     }
    ],
    "verticalAlign": "middle",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "minWidth": 468,
    "width": 468,
    "contentOpaque": false,
    "gap": 10,
    "layout": "horizontal",
    "overflow": "hidden",
    "scrollBarVisible": "rollOver",
    "backgroundColorDirection": "vertical",
    "horizontalAlign": "center",
    "height": "93.478%",
    "scrollBarMargin": 2,
    "shadow": false,
    "class": "Container",
    "paddingBottom": 0,
    "paddingRight": 0,
    "paddingLeft": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "minHeight": 20,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "paddingTop": 0,
    "backgroundColorRatios": [
     0
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5
   }
  ],
  "verticalAlign": "middle",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "minWidth": 1,
  "contentOpaque": false,
  "gap": 6,
  "height": 92,
  "layout": "horizontal",
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "backgroundColorDirection": "vertical",
  "horizontalAlign": "center",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "bottom": "0%",
  "minHeight": 1,
  "borderSize": 0,
  "scrollBarWidth": 10,
  "paddingTop": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "left": "0%",
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingRight": 0,
  "shadow": false,
  "top": 0,
  "class": "UIComponent",
  "paddingBottom": 0,
  "visible": false,
  "paddingLeft": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "backgroundOpacity": 0.55,
  "left": 0,
  "right": 0
 },
 {
  "borderRadius": 0,
  "backgroundColor": [],
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "paddingRight": 0,
  "shadow": false,
  "top": 0,
  "class": "ZoomImage",
  "paddingBottom": 0,
  "visible": false,
  "paddingLeft": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "minHeight": 0,
  "borderSize": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "backgroundOpacity": 1,
  "left": 0,
  "right": 0
 },
 {
  "borderRadius": 0,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minWidth": 0,
  "verticalAlign": "middle",
  "fontSize": 12,
  "iconBeforeLabel": true,
  "gap": 5,
  "mode": "push",
  "layout": "horizontal",
  "label": "",
  "iconColor": "#000000",
  "horizontalAlign": "center",
  "iconHeight": 20,
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "iconLineWidth": 5,
  "textDecoration": "none",
  "paddingRight": 5,
  "iconWidth": 20,
  "fontWeight": "normal",
  "shadow": false,
  "top": 10,
  "class": "CloseButton",
  "cursor": "hand",
  "paddingBottom": 5,
  "visible": false,
  "shadowBlurRadius": 6,
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "paddingLeft": 5,
  "id": "closeButtonPopupPanorama",
  "rollOverIconColor": "#666666",
  "minHeight": 0,
  "borderSize": 0,
  "pressedIconColor": "#888888",
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 5,
  "backgroundOpacity": 0.3,
  "right": 10
 }
], 
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } }
 },
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "scrollBarMargin": 2,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "width": "100%",
 "shadow": false,
 "class": "Player",
 "paddingBottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
})