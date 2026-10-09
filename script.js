/* =========================================================
   UNESCO HERITAGE EXPLORER
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   HERITAGE DATA
   ========================================================= */

const sites = [

    /* ================= CHINA ================= */

    {
        id: "great-wall-of-china",
        name: "The Great Wall of China",
        country: "China",
        region: "Beijing / Northern China",
        category: "Cultural",
        type: "Architecture",
        year: "1987",
        description:
            "A vast defensive network stretching across northern China, built and rebuilt over centuries.",
        image:
            "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "forbidden-city",
        name: "Imperial Palaces of the Ming and Qing Dynasties",
        country: "China",
        region: "Beijing",
        category: "Cultural",
        type: "Historic Architecture",
        year: "1987",
        description:
            "The magnificent imperial palace complex that served as the political and ceremonial heart of China for centuries.",
        image:
            "https://images.unsplash.com/photo-1775551230279-4bcb2b5b58c2?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "terracotta-army",
        name: "Mausoleum of the First Qin Emperor",
        country: "China",
        region: "Shaanxi",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1987",
        description:
            "The monumental mausoleum complex famous for its thousands of life-size terracotta warriors.",
        image:
            "https://images.unsplash.com/photo-1571862804920-745f79f6693c?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "potala-palace",
        name: "Historic Ensemble of the Potala Palace",
        country: "China",
        region: "Lhasa, Tibet",
        category: "Cultural",
        type: "Historic Architecture",
        year: "1994",
        description:
            "A spectacular palace and monastery complex rising above Lhasa and representing Tibetan architectural traditions.",
        image:
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= INDIA ================= */

    {
        id: "taj-mahal",
        name: "Taj Mahal",
        country: "India",
        region: "Agra, Uttar Pradesh",
        category: "Cultural",
        type: "Architecture",
        year: "1983",
        description:
            "An extraordinary marble mausoleum widely regarded as one of the world's greatest masterpieces of architecture.",
        image:
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "qutb-minar",
        name: "Qutb Minar and its Monuments",
        country: "India",
        region: "Delhi",
        category: "Cultural",
        type: "Historic Architecture",
        year: "1993",
        description:
            "A remarkable complex of monuments representing centuries of Indo-Islamic architectural development.",
        image:
            "https://images.unsplash.com/photo-1694019908804-0cdacbdf3630?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= JAPAN ================= */

    {
        id: "himeji-castle",
        name: "Himeji-jo",
        country: "Japan",
        region: "Himeji",
        category: "Cultural",
        type: "Castle",
        year: "1993",
        description:
            "Japan's finest surviving example of traditional castle architecture, celebrated for its elegant white exterior.",
        image:
            "https://images.unsplash.com/photo-1682917594109-d0125f04e42f?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "historic-kyoto",
        name: "Historic Monuments of Ancient Kyoto",
        country: "Japan",
        region: "Kyoto",
        category: "Cultural",
        type: "Historic City",
        year: "1994",
        description:
            "A collection of temples, shrines, gardens and historic monuments reflecting more than a thousand years of Japanese culture.",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= ITALY ================= */

    {
        id: "historic-centre-rome",
        name: "Historic Centre of Rome",
        country: "Italy",
        region: "Rome",
        category: "Cultural",
        type: "Historic City",
        year: "1980",
        description:
            "An extraordinary urban landscape containing monuments from ancient Rome through the Renaissance and Baroque periods.",
        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "venice",
        name: "Venice and its Lagoon",
        country: "Italy",
        region: "Venice",
        category: "Cultural",
        type: "Historic City",
        year: "1987",
        description:
            "A unique city built across islands in a lagoon, celebrated for its architecture, canals and artistic heritage.",
        image:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= FRANCE ================= */

    {
        id: "palace-versailles",
        name: "Palace and Park of Versailles",
        country: "France",
        region: "Versailles",
        category: "Cultural",
        type: "Palace",
        year: "1979",
        description:
            "A monumental palace and landscaped estate that became a symbol of French royal power and artistic achievement.",
        image:
            "https://images.unsplash.com/photo-1748207306446-3c680aefac08?auto=format&fit=crop&fm=jpg&q=80&w=2000"
    },

    {
        id: "mont-saint-michel",
        name: "Mont-Saint-Michel and its Bay",
        country: "France",
        region: "Normandy",
        category: "Cultural",
        type: "Historic Architecture",
        year: "1979",
        description:
            "A dramatic medieval monastery rising from a rocky island surrounded by the changing tides of its bay.",
        image:
            "https://images.unsplash.com/photo-1531250552633-528fe896fdd4?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= GERMANY ================= */

    {
        id: "cologne-cathedral",
        name: "Cologne Cathedral",
        country: "Germany",
        region: "Cologne",
        category: "Cultural",
        type: "Cathedral",
        year: "1996",
        description:
            "One of Europe's most famous Gothic cathedrals and a masterpiece of medieval architecture.",
        image:
            "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "museum-island",
        name: "Museum Island, Berlin",
        country: "Germany",
        region: "Berlin",
        category: "Cultural",
        type: "Museum Complex",
        year: "1999",
        description:
            "A remarkable group of museums located on an island in the River Spree at the heart of Berlin.",
        image:
            "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= SPAIN ================= */

    {
        id: "alhambra",
        name: "Alhambra, Generalife and Albayzín",
        country: "Spain",
        region: "Granada",
        category: "Cultural",
        type: "Palace Complex",
        year: "1984",
        description:
            "A spectacular complex of palaces, gardens and historic neighborhoods reflecting the legacy of Islamic Spain.",
        image:
            "https://images.unsplash.com/photo-1571862804920-745f79f6693c?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "works-gaudi",
        name: "Works of Antoni Gaudí",
        country: "Spain",
        region: "Barcelona",
        category: "Cultural",
        type: "Architecture",
        year: "1984",
        description:
            "A collection of imaginative architectural works by Antoni Gaudí that transformed Barcelona's urban landscape.",
        image:
            "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1600&q=80&auto=format&fit=crop"
    },


    /* ================= GREECE ================= */

    {
        id: "acropolis",
        name: "Acropolis of Athens",
        country: "Greece",
        region: "Athens",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1987",
        description:
            "The iconic ancient citadel overlooking Athens and one of the greatest symbols of classical civilization.",
        image:
            "https://images.unsplash.com/photo-1571759796533-4aa0e23f040c?auto=format&fit=crop&fm=jpg&q=80&w=1600 "
    },

    {
        id: "delphi",
        name: "Archaeological Site of Delphi",
        country: "Greece",
        region: "Central Greece",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1987",
        description:
            "An ancient sanctuary that was considered the religious center of the Greek world.",
        image:
            "https://images.unsplash.com/photo-1707493145017-1fa260a95e20?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= UNITED KINGDOM ================= */

    {
        id: "stonehenge",
        name: "Stonehenge, Avebury and Associated Sites",
        country: "United Kingdom",
        region: "Wiltshire, England",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1986",
        description:
            "A prehistoric landscape containing some of the world's most famous ancient stone monuments.",
        image:
            "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "tower-of-london",
        name: "Tower of London",
        country: "United Kingdom",
        region: "London, England",
        category: "Cultural",
        type: "Historic Architecture",
        year: "1988",
        description:
            "A historic fortress on the River Thames that has played a major role in England's history.",
        image:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= TURKEY ================= */

    {
        id: "cappadocia",
        name: "Göreme National Park and Rock Sites of Cappadocia",
        country: "Türkiye",
        region: "Cappadocia",
        category: "Mixed",
        type: "Cultural Landscape",
        year: "1985",
        description:
            "A surreal landscape of volcanic rock formations, cave dwellings and ancient churches.",
        image:
            "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "istanbul",
        name: "Historic Areas of Istanbul",
        country: "Türkiye",
        region: "Istanbul",
        category: "Cultural",
        type: "Historic City",
        year: "1985",
        description:
            "A historic crossroads of civilizations containing monumental mosques, palaces and ancient urban structures.",
        image:
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= EGYPT ================= */

    {
        id: "ancient-thebes",
        name: "Ancient Thebes with its Necropolis",
        country: "Egypt",
        region: "Luxor",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1979",
        description:
            "The ancient Egyptian capital of Thebes contains extraordinary temples, tombs and monuments.",
        image:
            "https://images.unsplash.com/photo-1761560573741-7d2093089be5?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "abu-simbel",
        name: "Nubian Monuments from Abu Simbel to Philae",
        country: "Egypt",
        region: "Nubia",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1979",
        description:
            "A remarkable collection of ancient monuments preserved along the Nile through an international conservation effort.",
        image:
            "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= MEXICO ================= */

    {
        id: "chichen-itza",
        name: "Pre-Hispanic City of Chichen-Itza",
        country: "Mexico",
        region: "Yucatán",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1988",
        description:
            "One of the most important Maya archaeological sites, known for its monumental temples and astronomical architecture.",
        image:
            "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "historic-centre-mexico",
        name: "Historic Centre of Mexico City",
        country: "Mexico",
        region: "Mexico City",
        category: "Cultural",
        type: "Historic City",
        year: "1987",
        description:
            "A historic urban center built around the former Aztec capital of Tenochtitlan.",
        image:
            "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= BRAZIL ================= */

    {
        id: "brasilia",
        name: "Brasilia",
        country: "Brazil",
        region: "Brasilia",
        category: "Cultural",
        type: "Modern Architecture",
        year: "1987",
        description:
            "A planned capital city famous for its modernist architecture and urban design.",
        image:
            "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "iguacu",
        name: "Iguaçu National Park",
        country: "Brazil",
        region: "Paraná",
        category: "Natural",
        type: "National Park",
        year: "1986",
        description:
            "A spectacular protected landscape centered around one of the world's great waterfall systems.",
        image:
            "https://images.unsplash.com/photo-1556918936-3e73b945d24f?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= USA ================= */

    {
        id: "grand-canyon",
        name: "Grand Canyon National Park",
        country: "United States",
        region: "Arizona",
        category: "Natural",
        type: "National Park",
        year: "1979",
        description:
            "A vast geological landscape carved by the Colorado River over millions of years.",
        image:
            "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "yellowstone",
        name: "Yellowstone National Park",
        country: "United States",
        region: "Wyoming / Montana / Idaho",
        category: "Natural",
        type: "National Park",
        year: "1978",
        description:
            "The world's first national park, famous for geysers, hot springs, wildlife and dramatic landscapes.",
        image:
            "https://images.unsplash.com/photo-1563642417016-e6b3abadd931?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= CANADA ================= */

    {
        id: "banff",
        name: "Canadian Rocky Mountain Parks",
        country: "Canada",
        region: "Alberta / British Columbia",
        category: "Natural",
        type: "Mountain Landscape",
        year: "1984",
        description:
            "A spectacular mountain landscape of glaciers, lakes, valleys and high peaks.",
        image:
            "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "mistaken-point",
        name: "Mistaken Point",
        country: "Canada",
        region: "Newfoundland",
        category: "Natural",
        type: "Fossil Site",
        year: "2016",
        description:
            "A coastal fossil site preserving evidence of some of the earliest large organisms on Earth.",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= AUSTRALIA ================= */

    {
        id: "great-barrier-reef",
        name: "Great Barrier Reef",
        country: "Australia",
        region: "Queensland",
        category: "Natural",
        type: "Marine Ecosystem",
        year: "1981",
        description:
            "The world's largest coral reef ecosystem, containing extraordinary marine biodiversity.",
        image:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "sydney-opera-house",
        name: "Sydney Opera House",
        country: "Australia",
        region: "Sydney",
        category: "Cultural",
        type: "Modern Architecture",
        year: "2007",
        description:
            "One of the most recognizable buildings of the modern world and an icon of twentieth-century architecture.",
        image:
            "https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= NEW ZEALAND ================= */

    {
        id: "te-wahipounamu",
        name: "Te Wahipounamu",
        country: "New Zealand",
        region: "South Island",
        category: "Natural",
        type: "Natural Landscape",
        year: "1990",
        description:
            "A vast wilderness containing glaciers, mountains, forests and dramatic fjords.",
        image:
            "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "tongariro",
        name: "Tongariro National Park",
        country: "New Zealand",
        region: "North Island",
        category: "Mixed",
        type: "Cultural Landscape",
        year: "1993",
        description:
            "A spectacular volcanic landscape with deep cultural and spiritual significance to the Māori people.",
        image:
            "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= SOUTH AFRICA ================= */

    {
        id: "robben-island",
        name: "Robben Island",
        country: "South Africa",
        region: "Western Cape",
        category: "Cultural",
        type: "Historic Site",
        year: "1999",
        description:
            "A historic island associated with South Africa's struggle against apartheid.",
        image:
            "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "maloti-drakensberg",
        name: "Maloti-Drakensberg Park",
        country: "South Africa",
        region: "KwaZulu-Natal",
        category: "Mixed",
        type: "Mountain Landscape",
        year: "2000",
        description:
            "A spectacular mountain landscape containing exceptional biodiversity and ancient rock art.",
        image:
            "https://images.unsplash.com/photo-1566840021283-e40d9f87fffc?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= PERU ================= */

    {
        id: "machu-picchu",
        name: "Historic Sanctuary of Machu Picchu",
        country: "Peru",
        region: "Cusco",
        category: "Mixed",
        type: "Archaeological Landscape",
        year: "1983",
        description:
            "The famous Inca sanctuary set high in the Andes among spectacular mountains and cloud forests.",
        image:
            "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "nazca-lines",
        name: "Lines and Geoglyphs of Nazca and Palpa",
        country: "Peru",
        region: "Nazca",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1994",
        description:
            "Enormous ancient geoglyphs drawn across the desert landscape by pre-Hispanic cultures.",
        image:
            "https://images.unsplash.com/photo-1703003119370-cf79e6954e21?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },


    /* ================= ARGENTINA ================= */

    {
        id: "iguazu-argentina",
        name: "Iguazu National Park",
        country: "Argentina",
        region: "Misiones",
        category: "Natural",
        type: "National Park",
        year: "1984",
        description:
            "A magnificent subtropical rainforest landscape surrounding the famous Iguazu Falls.",
        image:
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "quebrada-humahuaca",
        name: "Quebrada de Humahuaca",
        country: "Argentina",
        region: "Jujuy",
        category: "Cultural",
        type: "Cultural Landscape",
        year: "2003",
        description:
            "A dramatic Andean valley shaped by thousands of years of human settlement and cultural exchange.",
        image:
            "https://images.unsplash.com/photo-1659618799815-1ae2da74a51a?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= INDONESIA ================= */

    {
        id: "borobudur",
        name: "Borobudur Temple Compounds",
        country: "Indonesia",
        region: "Central Java",
        category: "Cultural",
        type: "Temple",
        year: "1991",
        description:
            "A monumental Buddhist temple complex decorated with thousands of relief panels and sculptures.",
        image:
            "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "komodo",
        name: "Komodo National Park",
        country: "Indonesia",
        region: "Lesser Sunda Islands",
        category: "Natural",
        type: "National Park",
        year: "1991",
        description:
            "A spectacular island ecosystem famous for the Komodo dragon and extraordinary marine biodiversity.",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= CAMBODIA ================= */

    {
        id: "angkor",
        name: "Angkor",
        country: "Cambodia",
        region: "Siem Reap",
        category: "Cultural",
        type: "Temple Complex",
        year: "1992",
        description:
            "The extraordinary remains of the Khmer Empire, including the world-famous Angkor Wat.",
        image:
            "https://images.unsplash.com/photo-1693276206317-a78574082bfc?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "preah-vihear",
        name: "Temple of Preah Vihear",
        country: "Cambodia",
        region: "Dangrek Mountains",
        category: "Cultural",
        type: "Temple",
        year: "2008",
        description:
            "An ancient Khmer temple dramatically positioned on a mountain ridge overlooking Cambodia.",
        image:
            "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= THAILAND ================= */

    {
        id: "ayutthaya",
        name: "Historic City of Ayutthaya",
        country: "Thailand",
        region: "Ayutthaya",
        category: "Cultural",
        type: "Historic City",
        year: "1991",
        description:
            "The ruins of the former Siamese capital, once one of Asia's most important cities.",
        image:
            "https://images.unsplash.com/photo-1680960395754-50ab855f5d9a?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "sukhothai",
        name: "Historic Town of Sukhothai",
        country: "Thailand",
        region: "Sukhothai",
        category: "Cultural",
        type: "Historic City",
        year: "1991",
        description:
            "The ruins of Thailand's first major kingdom, known for elegant temples and distinctive Buddhist art.",
        image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= VIETNAM ================= */

    {
        id: "ha-long-bay",
        name: "Ha Long Bay",
        country: "Vietnam",
        region: "Quang Ninh",
        category: "Natural",
        type: "Marine Landscape",
        year: "1994",
        description:
            "A spectacular seascape of thousands of limestone islands and dramatic karst formations.",
        image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "hoi-an",
        name: "Hoi An Ancient Town",
        country: "Vietnam",
        region: "Quang Nam",
        category: "Cultural",
        type: "Historic Town",
        year: "1999",
        description:
            "A beautifully preserved trading port displaying influences from many Asian cultures.",
        image:
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= PHILIPPINES ================= */

    {
        id: "banaue",
        name: "Rice Terraces of the Philippine Cordilleras",
        country: "Philippines",
        region: "Cordillera",
        category: "Cultural",
        type: "Cultural Landscape",
        year: "1995",
        description:
            "Ancient agricultural terraces carved into mountain slopes and maintained through generations.",
        image:
            "https://images.unsplash.com/photo-1529510021255-4a1179e99095?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: "tubbataha",
        name: "Tubbataha Reefs Natural Park",
        country: "Philippines",
        region: "Palawan",
        category: "Natural",
        type: "Marine Ecosystem",
        year: "1993",
        description:
            "A remote marine sanctuary containing exceptional coral reefs and marine biodiversity.",
        image:
            "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= SRI LANKA ================= */

    {
        id: "sigiriya",
        name: "Ancient City of Sigiriya",
        country: "Sri Lanka",
        region: "Central Province",
        category: "Cultural",
        type: "Archaeological Site",
        year: "1982",
        description:
            "An ancient rock fortress rising dramatically above the surrounding Sri Lankan landscape.",
        image:
            "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=1600&q=80"
    },

    {
        id: "kandy",
        name: "Sacred City of Kandy",
        country: "Sri Lanka",
        region: "Kandy",
        category: "Cultural",
        type: "Historic City",
        year: "1988",
        description:
            "A historic city centered around the Temple of the Sacred Tooth Relic.",
        image:
            "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?w=1600&q=80"
    },


    /* ================= NEPAL ================= */

    {
        id: "kathmandu-valley",
        name: "Kathmandu Valley",
        country: "Nepal",
        region: "Kathmandu",
        category: "Cultural",
        type: "Historic City",
        year: "1979",
        description:
            "A cultural landscape containing historic temples, palaces and traditional urban settlements.",
        image:
            "https://images.unsplash.com/photo-1692170453545-218ae3662f7d?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "sagarmatha",
        name: "Sagarmatha National Park",
        country: "Nepal",
        region: "Khumbu",
        category: "Natural",
        type: "Mountain Landscape",
        year: "1979",
        description:
            "A dramatic Himalayan landscape containing Mount Everest and exceptional mountain ecosystems.",
        image:
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
    },


    /* ================= MYANMAR ================= */

    {
        id: "bagan",
        name: "Bagan",
        country: "Myanmar",
        region: "Mandalay Region",
        category: "Cultural",
        type: "Archaeological Landscape",
        year: "2019",
        description:
            "A remarkable archaeological landscape containing thousands of Buddhist temples, stupas and monuments.",
        image:
            "https://images.unsplash.com/photo-1643443333108-57a9726e147d?auto=format&fit=crop&fm=jpg&q=80&w=2000"
    },

    {
        id: "pyu-ancient-cities",
        name: "Pyu Ancient Cities",
        country: "Myanmar",
        region: "Central Myanmar",
        category: "Cultural",
        type: "Archaeological Site",
        year: "2014",
        description:
            "Ancient urban settlements representing the Pyu civilization and its important role in Southeast Asian history.",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bawbawgyi_Stupa.jpg"
    },


    /* ================= BANGLADESH ================= */

    {
        id: "bagerhat",
        name: "Historic Mosque City of Bagerhat",
        country: "Bangladesh",
        region: "Khulna",
        category: "Cultural",
        type: "Historic City",
        year: "1985",
        description:
            "A remarkable medieval city containing mosques and monuments representing Islamic architecture in Bengal.",
        image:
            "https://images.unsplash.com/photo-1667069254957-bf6961fd3fb5?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    },

    {
        id: "sundarbans",
        name: "The Sundarbans",
        country: "Bangladesh",
        region: "Khulna",
        category: "Natural",
        type: "Mangrove Forest",
        year: "1997",
        description:
            "One of the world's largest mangrove forests and an extraordinary ecosystem supporting diverse wildlife.",
        image:
            "https://images.unsplash.com/photo-1549300461-11c5b94e8855?auto=format&fit=crop&fm=jpg&q=80&w=1600"
    }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const siteGrid =
    document.getElementById("siteGrid");

const searchInput =
    document.getElementById("searchInput");

const headerSearch =
    document.getElementById("headerSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const countryFilter =
    document.getElementById("countryFilter");

const resetBtn =
    document.getElementById("resetBtn");

const resultText =
    document.getElementById("resultText");

const emptyState =
    document.getElementById("emptyState");

const themeBtn =
    document.getElementById("themeBtn");

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const contactForm =
    document.getElementById("contactForm");

const toast =
    document.getElementById("toast");


/* =========================================================
   POPULAR SECTION ELEMENTS
   ========================================================= */

const popularTrack =
    document.getElementById("popularTrack");

const popularPrev =
    document.getElementById("popularPrev");

const popularNext =
    document.getElementById("popularNext");


/* =========================================================
   POPULATE COUNTRY FILTER
   ========================================================= */

function populateCountries() {

    const countries = [
        ...new Set(
            sites.map(site => site.country)
        )
    ].sort();

    countries.forEach(country => {

        const option =
            document.createElement("option");

        option.value = country;

        option.textContent = country;

        countryFilter.appendChild(option);

    });
}


/* =========================================================
   POPULAR 10 PLACES
   ========================================================= */

const popularSiteIds = [

    "great-wall-of-china",
    "taj-mahal",
    "machu-picchu",
    "angkor",
    "bagan",
    "sydney-opera-house",
    "grand-canyon",
    "acropolis",
    "chichen-itza",
    "himeji-castle"

];


function popularCardTemplate(site) {

    const number =
        String(
            popularSiteIds.indexOf(site.id) + 1
        ).padStart(2, "0");


    return `

        <article
            class="popular-card"
            onclick="openSite('${site.id}')"
        >

            <div class="popular-image">

                <img
                    src="${site.image}"
                    alt="${site.name}"
                    loading="lazy"
                >

                <span class="popular-number">
                    ${number}
                </span>

                <span class="popular-category">
                    ${site.category}
                </span>

            </div>


            <div class="popular-card-content">

                <span class="popular-country">
                    ${site.country.toUpperCase()}
                </span>

                <h3>
                    ${site.name}
                </h3>

                <div class="popular-card-bottom">

                    <span>
                        ${site.region}
                    </span>

                    <span class="popular-card-arrow">
                        →
                    </span>

                </div>

            </div>

        </article>

    `;
}


function renderPopularSites() {

    if (!popularTrack) return;


    const popularSites =
        popularSiteIds
            .map(id =>
                sites.find(
                    site => site.id === id
                )
            )
            .filter(Boolean);


    popularTrack.innerHTML =
        popularSites
            .map(site =>
                popularCardTemplate(site)
            )
            .join("");

}


/* =========================================================
   POPULAR SCROLL BUTTONS
   ========================================================= */

if (
    popularPrev &&
    popularNext &&
    popularTrack
) {

    popularPrev.addEventListener(
        "click",
        () => {

            popularTrack.scrollBy({
                left: -420,
                behavior: "smooth"
            });

        }
    );


    popularNext.addEventListener(
        "click",
        () => {

            popularTrack.scrollBy({
                left: 420,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CARD TEMPLATE
   ========================================================= */

function cardTemplate(site) {

    return `

        <article
            class="site-card"
            onclick="openSite('${site.id}')"
        >

            <div class="card-image">

                <img
                    src="${site.image}"
                    alt="${site.name}"
                    loading="lazy"
                >

                <span class="card-category">
                    ${site.category.toUpperCase()}
                </span>

            </div>


            <div class="card-content">

                <div class="card-location">
                    ${site.country.toUpperCase()}
                </div>

                <h3>
                    ${site.name}
                </h3>

                <p>
                    ${site.description}
                </p>


                <div class="card-footer">

                    <span>
                        ${site.region}
                    </span>

                    <span class="card-arrow">
                        →
                    </span>

                </div>

            </div>

        </article>

    `;
}


/* =========================================================
   RENDER SITES
   ========================================================= */

function renderSites(list) {

    siteGrid.innerHTML = "";

    resultText.textContent =
        `${list.length} heritage site${list.length !== 1 ? "s" : ""}`;

    if (list.length === 0) {

        emptyState.classList.add("show");

        return;
    }

    emptyState.classList.remove("show");

    list.forEach(site => {

        siteGrid.insertAdjacentHTML(
            "beforeend",
            cardTemplate(site)
        );

    });
}


/* =========================================================
   FILTER SITES
   ========================================================= */

function filterSites() {

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    const category =
        categoryFilter.value;

    const country =
        countryFilter.value;


    const filtered =
        sites.filter(site => {

            const searchableText = [

                site.name,
                site.country,
                site.region,
                site.category,
                site.type,
                site.description

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                searchableText.includes(search);


            const matchesCategory =
                category === "all" ||
                site.category === category;


            const matchesCountry =
                country === "all" ||
                site.country === country;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesCountry
            );

        });


    renderSites(filtered);
}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetFilters() {

    searchInput.value = "";

    categoryFilter.value = "all";

    countryFilter.value = "all";

    renderSites(sites);

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(page) {

    if (page === "home") {

        history.pushState(
            { page: "home" },
            "",
            window.location.pathname
        );

        showView("homeView");

    }

    else if (page === "about") {

        history.pushState(
            { page: "about" },
            "",
            "#about"
        );

        showView("aboutView");

    }

    else if (page === "contact") {

        history.pushState(
            { page: "contact" },
            "",
            "#contact"
        );

        showView("contactView");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateActiveNav(page);
}


/* =========================================================
   SHOW VIEW
   ========================================================= */

function showView(viewId) {

    document
        .querySelectorAll(".page-view")
        .forEach(view => {

            view.classList.remove("active");

        });


    const selected =
        document.getElementById(viewId);


    if (selected) {

        selected.classList.add("active");

    }
}


/* =========================================================
   ACTIVE NAV
   ========================================================= */

function updateActiveNav(page) {

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.dataset.page === page
            ) {

                link.classList.add("active");

            }

        });

}


/* =========================================================
   OPEN HERITAGE SITE
   ========================================================= */

function openSite(id) {

    const site =
        sites.find(
            item => item.id === id
        );


    if (!site) return;


    renderDetailPage(site);


    history.pushState(
        { site: id },
        "",
        `?site=${encodeURIComponent(id)}`
    );


    showView("detailView");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    updateActiveNav("");

}


/* =========================================================
   DETAIL PAGE
   ========================================================= */

function renderDetailPage(site) {

    const relatedSites =
        sites
            .filter(item =>
                item.country === site.country &&
                item.id !== site.id
            )
            .slice(0, 3);


    const relatedHTML =
        relatedSites.length > 0

            ? relatedSites.map(item => `

                <article
                    class="related-card"
                    onclick="openSite('${item.id}')"
                >

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div>

                        <span>
                            ${item.country.toUpperCase()}
                        </span>

                        <h3>
                            ${item.name}
                        </h3>

                    </div>

                </article>

            `).join("")

            : `
                <p style="color: var(--muted);">
                    Explore more places from around the world.
                </p>
            `;


    document.getElementById(
        "detailContainer"
    ).innerHTML = `

        <div class="detail-page">

            <div class="detail-back">

                <button
                    class="back-btn"
                    onclick="navigate('home')"
                >
                    ← Back to Explorer
                </button>

            </div>


            <div class="detail-hero">

                <img
                    src="${site.image}"
                    alt="${site.name}"
                >


                <div class="detail-hero-content">

                    <span class="detail-category">
                        ${site.category.toUpperCase()}
                    </span>

                    <h1>
                        ${site.name}
                    </h1>

                    <p class="detail-location">
                        ${site.region}, ${site.country}
                    </p>

                </div>

            </div>


            <div class="detail-content">

                <div class="detail-layout">

                    <div class="detail-main">

                        <span class="eyebrow">
                            ABOUT THE SITE
                        </span>

                        <h2>
                            A place of
                            <em style="color: var(--blue);">
                                outstanding value.
                            </em>
                        </h2>

                        <p>
                            ${site.description}
                        </p>

                        <p>
                            This heritage place represents an important
                            part of the world's cultural or natural
                            heritage. Its significance comes from its
                            history, environment, architecture, traditions,
                            or exceptional relationship with the landscape.
                        </p>

                    </div>


                    <aside class="detail-facts">

                        <div class="fact">
                            <span>COUNTRY</span>
                            <strong>${site.country}</strong>
                        </div>

                        <div class="fact">
                            <span>LOCATION</span>
                            <strong>${site.region}</strong>
                        </div>

                        <div class="fact">
                            <span>YEAR INSCRIBED</span>
                            <strong>${site.year}</strong>
                        </div>

                        <div class="fact">
                            <span>CATEGORY</span>
                            <strong>${site.category}</strong>
                        </div>

                        <div class="fact">
                            <span>TYPE</span>
                            <strong>${site.type}</strong>
                        </div>

                    </aside>

                </div>

            </div>


            <section class="related">

                <span class="eyebrow">
                    CONTINUE EXPLORING
                </span>

                <h2>
                    More from ${site.country}.
                </h2>

                <div class="related-grid">
                    ${relatedHTML}
                </div>

            </section>

        </div>

    `;

}


/* =========================================================
   URL ROUTING
   ========================================================= */

function routeFromUrl() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const siteId =
        params.get("site");


    if (siteId) {

        const site =
            sites.find(
                item => item.id === siteId
            );


        if (site) {

            renderDetailPage(site);

            showView("detailView");

            return;
        }

    }


    if (
        window.location.hash === "#about"
    ) {

        showView("aboutView");

        updateActiveNav("about");

        return;
    }


    if (
        window.location.hash === "#contact"
    ) {

        showView("contactView");

        updateActiveNav("contact");

        return;
    }


    showView("homeView");

    updateActiveNav("home");

}


/* =========================================================
   SCROLL TO EXPLORER
   ========================================================= */

function scrollToExplorer() {

    const explorer =
        document.getElementById("explorer");


    if (!explorer) return;


    explorer.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function closeMobileMenu() {

    mobileMenu.classList.remove("open");

}


menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "open"
        );

    }
);


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

searchInput.addEventListener(
    "input",
    filterSites
);


categoryFilter.addEventListener(
    "change",
    filterSites
);


countryFilter.addEventListener(
    "change",
    filterSites
);


resetBtn.addEventListener(
    "click",
    resetFilters
);


/* =========================================================
   HEADER SEARCH
   ========================================================= */

headerSearch.addEventListener(
    "input",
    () => {

        const value =
            headerSearch.value;

        searchInput.value = value;

        filterSites();

    }
);


headerSearch.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            navigate("home");

            setTimeout(
                () => {

                    document
                        .getElementById("explorer")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                },
                100
            );

        }

    }
);


/* =========================================================
   THEME
   ========================================================= */

function applySavedTheme() {

    const savedTheme =
        localStorage.getItem(
            "unesco-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀";

    }

    else {

        themeBtn.textContent = "☾";

    }

}


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark ? "☀" : "☾";


        localStorage.setItem(
            "unesco-theme",
            dark ? "dark" : "light"
        );

    }
);


/* =========================================================
   CONTACT FORM
   ========================================================= */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        showToast(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    }
);


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(
        () => {

            toast.classList.remove("show");

        },
        3500
    );

}


/* =========================================================
   BROWSER BACK / FORWARD
   ========================================================= */

window.addEventListener(
    "popstate",
    routeFromUrl
);


/* =========================================================
   INITIALIZE
   ========================================================= */

populateCountries();

renderPopularSites();

renderSites(sites);

applySavedTheme();

routeFromUrl();