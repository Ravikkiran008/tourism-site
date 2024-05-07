import { Experience } from "../experience/experience.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor() { }

  addExperience(newData: Experience) {
    this.experiences.push(newData);
  }

  country = [{
    "Name": "India",
    "Image": "../../assets/twolinedescription/india1.jpg",
    "description": "Experience the vibrant colors and diverse cultures of India, a land of remarkable history and breathtaking landscapes. From the majestic Himalayas in the north to the serene backwaters in the south, every corner tells a unique story.",
  },
  {
    "Name": "UAE",
    "Image": "../../assets/twolinedescription/UAE1.jpg",
    "description": "Unveil the allure of UAE, a blend of timeless traditions and futuristic marvels. From the towering skyscrapers of Dubai to the rich heritage of Abu Dhabi, UAE offers a captivating fusion of old and new.",
  },
  {
    "Name": "USA",
    "Image": "../../assets/twolinedescription/usa3.jpg",
    "description": "Discover the USA, a land of diversity and opportunity, where iconic cityscapes blend with awe-inspiring natural wonders. From the bustling streets of New York City to the majestic Grand Canyon, the USA offers an unforgettable journey for every traveler.",
  },
  {
    "Name": "Egypt",
    "Image": "../../assets/twolinedescription/egypt1.jpg",
    "description": "Journey through Egypt, the cradle of civilization, where ancient pyramids meet bustling markets. From the enigmatic Sphinx of Giza to the stunning beaches of the Red Sea, Egypt is a treasure trove of history and culture.",
  },
  {
    "Name": "Brazil",
    "Image": "../../assets/twolinedescription/brazil1.jpg",
    "description": "Immerse yourself in Brazil, a land of vibrant cultures and natural beauty. From the lively rhythms of Rio de Janeiro to the breathtaking Amazon Rainforest, Brazil offers a kaleidoscope of experiences for every traveler.",
  },
  {
    "Name": "France",
    "Image": "../../assets/twolinedescription/france2.jpeg",
    "description": "Explore France, the epitome of romance, art, and gastronomy. From the charming streets of Paris to the picturesque vineyards of Bordeaux, France offers a journey of discovery and indulgence.",
  },
  ];



  destinations_array = [
    {
      "id": 1,
      "Destination": "Eiffel Tower",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/eiffel-tower.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Novotel": 8000,
        "Pullman Paris": 5000,
        "Cler Hotel": 10000
      },
      "link": "https://www.youtube.com/embed/RmnRF_lNDbA?si=s2XXbLD5yZLRCGnv",

      "info": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.Locally nicknamed La dame de fer (French for Iron Lady), it was constructed as the centerpiece of the 1889 World's Fair, and to crown the centennial anniversary of the French Revolution. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world.The tower received 5,889,000 visitors in 2022.The Eiffel Tower is the most visited monument with an entrance fee in the world:6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ('Paris, Banks of the Seine') in 1991."

    },
    {
      "id": 2,
      "Destination": "MUSEE D'ORSAY",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/MUSEEDORSAY.jpg",
      "category": "Historical",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Hotel D'osray": 9000,
        "Hotel Saint": 5000,
        "Mayfair Paris": 10000
      },
      "link": "https://www.youtube.com/embed/OWiMWXJZ79U?si=iddgVwqjMcpecvgL%22",
      "info": "The Musée dOrsay is a renowned museum located in Paris, France, on the Left Bank of the Seine1. It is housed in the former Gare d'Orsay, a Beaux-Arts railway station built between 1898 and 1900.The museum holds mainly French art dating from 1848 to 1914, including paintings, sculptures, furniture, and photography1. It houses the largest collection of Impressionist and post-Impressionist masterpieces in the world, by painters including Berthe Morisot, Claude Monet, Édouard Manet, Degas, Renoir, Cézanne, Seurat, Sisley, Gauguin, and van Gogh. Many of these works were held at the Galerie nationale du Jeu de Paume prior to the museum’s opening in 1986.The museum had 3.2 million visitors in 2022, making it the second-most-visited art museum in France, after the Louvre. It offers various exhibitions and events throughout the year."

    },
    {
      "id": 3,
      "Destination": "SAINTE-CHAPELLE",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/SAINTE_CHAPELLE.jpg",
      "category": "Architecture",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Novotel Paris": 8000,
        "Hotel central Saint": 5000,
        "Albe Hotel": 10000
      },
      "link": "https://www.youtube.com/embed/vigjJih8Pn4?si=jDG5E4Aq-j8U5Kvc",
      "info": "The Sainte-Chapelle is a royal chapel in the Gothic style, within the medieval Palais de la Cité, the residence of the Kings of France until the 14th century, on the Île de la Cité in the River Seine in Paris, France.Construction began sometime after 1238 and the chapel was consecrated on 26 April 1248.The Sainte-Chapelle is considered among the highest achievements of the Rayonnant period of Gothic architecture. It was commissioned by King Louis IX of France to house his collection of Passion relics, including Christ's Crown of Thorns – one of the most important relics in medieval Christendom. This was later held in the nearby Notre-Dame Cathedral until the 2019 fire, which it survived.It has one of the most extensive 13th-century stained glass collections anywhere in the world.The chapel is now operated as a museum by the French Centre of National Monuments, along with the nearby Conciergerie, the other remaining vestige of the original palace."

    },
    {
      "id": 4,
      "Destination": "LUXEMBOURG GARDENS",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/LUXEMBOURGGARDENS.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Hotel Cluny Sorbonne": 10000,
        "Hotel Perreyve": 8000,
        "Hotel des Bains": 7500
      },
      "link": "https://www.youtube.com/embed/-90Bp_dJ_Nk?si=PkEHlnfvMZrpXzPs",
      "info": "The Jardin du Luxembourg known in English as the Luxembourg Garden, colloquially referred to as the Jardin du Sénat (Senate Garden), is located in the 6th arrondissement of Paris, France. The creation of the garden began in 1612 when Marie de' Medici, the widow of King Henry IV, constructed the Luxembourg Palace as her new residence. The garden today is owned by the French Senate, which meets in the Palace. It covers 23 hectares (56.8 acres) and is known for its lawns, tree-lined promenades, tennis courts, flowerbeds, model sailboats on its octagonal Grand Bassin, as well as picturesque Medici Fountain, built in 1620.The name Luxembourg comes from the Latin Mons Lucotitius, the name of the hill where the garden is located."

    },
    {
      "id": 5,
      "Destination": "LOUVRE MUSEUM",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/LOUVREMUSEUM.jpg",
      "category": "Historical",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Novotel Paris": 7500,
        "Tonic Hotel": 5000,
        "Hotel du Danube": 8500
      },
      "link": "https://www.youtube.com/embed/MufP60vnLnU?si=zJsPnEtSq2F6NCVy",
      "info": "The Louvre ,or the Louvre Museum, is a national art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II.The museum opened on 10 August 1793 with an exhibition of 537 paintings, the majority of the works being royal and confiscated church property. Because of structural problems with the building, the museum was closed from 1796 until 1801. The collection was increased under Napoleon and the museum was renamed Musée Napoléon, but after Napoleon's abdication, many works seized by his armies were returned to their original owners. The collection was further increased during the reigns of Louis XVIII and Charles X, and during the Second French Empire the museum gained 20,000 pieces. Holdings have grown steadily through donations and bequests since the Third Republic. The collection is divided among eight curatorial departments: Egyptian Antiquities; Near Eastern Antiquities; Greek, Etruscan, and Roman Antiquities; Islamic Art; Sculpture; Decorative Arts; Paintings; Prints and Drawings."

    },
    {
      "id": 6,
      "Destination": "ARC DE TRIOMPHE",
      "Country": "France",
      "Destination_Image": "../../assets/images/FRANCE/ARC_DE_TRIOMPHE.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Hotel De Paris": 10000,
        "Hotel Set Cyr": 5000,
        "Hotel Arc De Triomphe": 7500
      },
      "link": "https://www.youtube-nocookie.com/embed/ELsS7XN4750?si=XPfn1ydCzE09xPza",
      "info": "The Arc de Triomphe de l'Étoile[a] is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile—the étoile or 'star' of the juncture formed by its twelve radiating avenues. The location of the arc and the plaza is shared between three arrondissements, 16th (south and west), 17th (north), and 8th (east). The Arc de Triomphe honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I.Paris's Arc de Triomphe was the tallest triumphal arch until the completion of the Monumento a la Revolución in Mexico City in 1938, which is 67 m (220 ft) high. The Arch of Triumph in Pyongyang, completed in 1982, is modeled on the Arc de Triomphe and is slightly taller at 60 m (197 ft). The Grande Arche in La Défense near Paris is 110 metres high, and, if considered to be a triumphal arch, is the world's tallest."

    },
    {
      "id": 7,
      "Destination": "YELLOW STONE PARK",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/yellow stone national park.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Yellowstone Village Inn": 10000,
        "Spring Hill By Marriott": 12000,
        "Old Faithful Inn": 8000
      },
      "link": "https://www.youtube-nocookie.com/embed/RCYSEDqPv4o?si=_yaEjMknC68-vHtw",
      "info": "Yellowstone National Park is a national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was established by the 42nd U.S. Congress with the Yellowstone National Park Protection Act and signed into law by President Ulysses S. Grant on March 1, 1872.[6][7][8][9] Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world.[10] The park is known for its wildlife and its many geothermal features, especially the Old Faithful geyser, one of its most popular.[11] While it represents many types of biomes, the subalpine forest is the most abundant. It is part of the South Central Rockies forests ecoregion."

    },
    {
      "id": 8,
      "Destination": "GRAND CANYON",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/GRAND CANYON.jpg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Grand Canyon Inn": 10000,
        "Yavapai Lodge": 15000,
        "Grand Canyon Plaza": 30000
      },
      "link": "https://www.youtube-nocookie.com/embed/huqJUghX26Y?si=BemaBm9Lek9pvqFB",
      "info": "The Grand Canyon is a UNESCO World Heritage Site located in Arizona, United States, carved by the Colorado River. It's one of the most spectacular examples of erosion anywhere in the world, with a length of 277 miles, a width up to 18 miles, and a depth of over a mile. The canyon exhibits beautiful coloration and fantastic shapes, making it a major natural phenomenon and one of the great tourist attractions in the U.S. The Grand Canyon National Park, designated in 1919, attracts millions of visitors each year. If you're a nature lover or a fan of breathtaking landscapes, the Grand Canyon is a must-visit destination."

    },
    {
      "id": 9,
      "Destination": "STATUE OF LIBERTY",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/STATUE OF LIBERTY.jpg",
      "category": "Historical",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Conrad New York": 15000,
        "Aloft New York": 20000,
        "Holiday Inn NYC": 30000
      },
      "link": "https://www.youtube-nocookie.com/embed/FEqGmv8cN7w?si=f7xQjMd_oVu44fYG",
      "info": "The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue was dedicated on October 28, 1886. The statue is a figure of Libertas, the Roman goddess of liberty. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776, in Roman numerals), the date of the U.S. Declaration of Independence. A broken chain and shackle lie at her feet as she walks forward, commemorating the national abolition of slavery following the American Civil War.[8] After its dedication the statue became an icon of freedom and of the United States, being subsequently seen as a symbol of welcome to immigrants arriving by sea."

    },
    {
      "id": 10,
      "Destination": "WALT DISNEYLAND",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/disney.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "World Swan Reserve": 30000,
        "Courtyard by Marriott": 20000,
        "Springhills suites": 10000
      },
      "link": "https://www.youtube.com/embed/2Cb7s2U93pg?si=DX0lQc2tmzI4Xr3i",
      "info": "Walt Disney World Resort, often referred to as Disneyland Florida, is a world-famous entertainment resort complex located near Orlando, Florida1. Opened on October 1, 1971, the resort is home to four theme parks: Magic Kingdom, Epcot, Disney's Hollywood Studios, and Disney's Animal Kingdom. It also includes two water parks and numerous resorts and restaurants. The resort offers a variety of experiences, from thrilling rides and attractions to character meet-and-greets and spectacular shows. Whether you're a fan of classic Disney characters, love thrilling rides, or enjoy exploring different cultures in Epcot, Walt Disney World Resort has something for everyone."

    },
    {
      "id": 11,
      "Destination": "Millennium Park",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/millenniumpark.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Swissotel Chicago": 25000,
        "Hampton Inn": 20000,
        "Crownoe Plaza": 15000
      },
      "link": "https://www.youtube.com/embed/2Cb7s2U93pg?si=DX0lQc2tmzI4Xr3i",
      "info": "Millennium Park is a public park located in the Loop community area of Chicago, Illinois1. Opened in 2004 to celebrate the third millennium, this 24.5-acre park is a prominent civic center near the city's Lake Michigan shoreline. It features a variety of public art, outdoor spaces, and venues, including the iconic Cloud Gate statue (also known as 'The Bean'), interactive fountains, tranquil gardens, and various other attractions. The park, which is open daily from 6 a.m. to 11 p.m., hosts free events like the annual Summer Music Series and Summer Film Series, and a host of summer festivals. In 2017, Millennium Park was the top tourist destination in Chicago and in the Midwest, with 25 million annual visitors."

    },
    {
      "id": 12,
      "Destination": "Las Vegas Strip",
      "Country": "USA",
      "Destination_Image": "../../assets/images/USA/las vegas strip.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "The Mirage": 15000,
        "Excalibur Hotel": 10000,
        "The Venetian Las Vegas": 30000
      },
      "link": "https://www.youtube.com/embed/_KEb4P3t9Ec?si=NwSB-nR6OB_qehQt",
      "info": "The Las Vegas Strip is a stretch of Las Vegas Boulevard in Clark County, Nevada, that is known for its concentration of resort hotels and casinos. The Strip, as it is known, is about 4.2 mi (6.8 km) long,and is immediately south of the Las Vegas city limits in the unincorporated towns of Paradise and Winchester, but is often referred to simply as 'Las Vegas'. Many of the largest hotel, casino, and resort properties in the world are on the Strip, known for its contemporary architecture, lights, and wide variety of attractions. Its hotels, casinos, restaurants, residential high-rises, entertainment offerings, and skyline have established the Strip as one of the most popular and iconic tourist destinations in the world and is one of the driving forces for Las Vegas's economy.Most of the Strip has been designated as an All-American Road,and the North and South Las Vegas Strip routes are classified as Nevada Scenic Byways and National Scenic Byways."

    },
    {
      "id": 13,
      "Destination": "Taj Mahal",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/taj.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "marriot": 10000,
        "taj": 12000,
        "oberoi": 15000
      },
      "link": "https://www.youtube.com/embed/49HTIoCccDY?si=fbW8tB-dWHDWL5pc",
      "info": "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.The Taj Mahal looms fairytale-like from the banks of the Yamuna River. It's India’s most recognized monument and is also one of the Seven Wonders of the World. The monument dates back to 1632 and is actually a tomb that contains the body of Mumtaz Mahal—the wife of Mughal emperor Shah Jahan. He had it built as an ode to his love for her. It's made out of marble and took 22 years and 20 000 workers to complete. Words cannot do the Taj Mahal justice, its incredible detail simply has to be seen to be appreciated."
    },
    {
      "id": 14,
      "Destination": "Hampi",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/hampi.jpg",
      "category": "Historical",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Saptami Hampi Homestay": 10000,
        "Heritage Resort Hampi": 8000,
        "Kishkinda Heritage Resort": 15000
      },
      "link": "https://www.youtube.com/embed/OKCkLFVl80U?si=bKme_IkQTjvUDTZb",
      "info": " Hampi, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi (City), Ballari district now Vijayanagara district, east-central Karnataka, India.Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra.Hampi continues as a religious centre, with the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city."
    },
    {
      "id": 15,
      "Destination": "India Gate",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/indgate.jpg",
      "category": "Architecture",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Le Meridien New Delhi": 15000,
        "Taj Mahal Hotel New Delhi": 20000,
        "The Imperial": 25000
      },
      "link": "https://www.youtube.com/embed/UrQjCTUbwA4?si=8J22qoz2ih8jxzof",
      "info": "India Gate, situated in the heart of New Delhi, India, is a war memorial dedicated to 70,000 soldiers of the British Indian Army who died in the First World War. Designed by Sir Edwin Lutyens, this 42-meter tall historical structure was completed in 1931 and has since been a quintessential symbol of the city. India Gate was built using sandstone and is often compared to the Arc de Triomphe in Paris. Its walls are inscribed with the names of the soldiers. Beneath the archway, the Amar Jawan Jyoti, an eternal flame, burns in remembrance of the Indian soldiers who lost their lives in the Indo-Pakistan War of 1971. The lush green lawns, children's park, and the nearby Rajpath and Rashtrapati Bhawan add to its grandeur. India Gate is not only a revered site of national importance but also a popular recreational spot for both locals and tourists."
    },
    {
      "id": 16,
      "Destination": "Ajanta Caves",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/ajanta caves.jpg",
      "category": "Historical",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "The Imperia Residency": 10000,
        "Hotel Padmapani Park": 8000,
        "Hotel Ajanta Green": 5000
      },
      "link": "https://www.youtube.com/embed/kgu6vcNLEC0?si=rgbOO_KzdwR_YLb_",
      "info": "The Ajanta Caves are 30 rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Aurangabad district of Maharashtra state in India.Ajanta Caves are a UNESCO World Heritage Site.Universally regarded as masterpieces of Buddhist religious art, the caves include paintings and rock-cut sculptures described as among the finest surviving examples of ancient Indian art, particularly expressive paintings that present emotions through gesture, pose and form.The caves were built in two phases, the first starting around the second century BCE and the second occurring from 400 to 650 CE, according to older accounts, or in a brief period of 460–480 CE according to later scholarship."
    },

    {
      "id": 17,
      "Destination": "Ooty",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/ooty.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Gem Park Ooty": 15000,
        "Hotel Jupiter Tamilnadu": 20000,
        "King's Cliff": 13000
      },
      "link": "https://www.youtube.com/embed/VXxIzYXnmJU?si=dpCuzaKHU-iXWaC-",
      "info": "Ooty, also known as “Queen of Hill Stations,” is a captivating destination nestled in the Nilgiri Hills of Tamil Nadu, India. Its serene beauty, pleasant climate, and diverse attractions make it a favorite among travelers. Here are some must-visit places in Ooty: Avalanche Lake,Ooty Lake,Emerald Lake,Ooty Botanical Gardens,Doddabetta Peak,Rose Garden,Nilgiri Mountain Railway,St. Stephen’s Church,Tea Factory and Tea Museum,Kalhatty Waterfalls."
    },
    {
      "id": 18,
      "Destination": "Ladakh",
      "Country": "India",
      "Destination_Image": "../../assets/images/INDIA/ladaka11.jpg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "mThe Zen Ladakh": 20000,
        "Gomang Boutique Hotel": 10000,
        "The Kaal Hotel, Leh, Ladakh": 8000
      },
      "link": "https://www.youtube.com/embed/C1x1Vix17Y8?si=3XDXfV-NnRSAnCDt",
      "info": "Ladakh, also known as the “Land of High Passes,” is a region located in the northernmost part of India. It was previously part of Jammu and Kashmir but is now a Union Territory. Ladakh is famous for its rugged terrain, stunning natural landscapes, and unique cultural heritage. Here are some of the best places to visit in Ladakh that will leave you spellbound: 1)Pangong Lake 2)Lamayuru  3)Zanskar Valley  4)Kargil 5)Khardung La   6)Magnetic Hill    7)Leh Palace    8)Thiksey Monastery     9)Nubra Valley     10)Alchi Village "
    },
    {
      "id": 19,
      "Destination": "Burj Khalifa",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/burj.jpg",
      "category": "Architecture",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Kempinski Central Avenue": 15000,
        "Swissotel Al Murooj": 20000,
        "Ramada Downtown Dubai": 18000
      },
      "link": "https://www.youtube.com/embed/lflCmjW7RlI?si=z9SL375MYlLqSqx_",
      "info": "The Burj Khalifa (known as the Burj Dubai prior to its inauguration) is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. With two observation decks, a Las Vegas-inspired fountain, nine of the city's best luxury hotels and multiple restaurants, this 21st-century architectural marvel must be your number one place to visit when in Dubai or even the UAE. Also, make sure to book your tickets in advance well to avoid last moment hassles."
    },
    {
      "id": 20,
      "Destination": "MUSEUM OF THE FUTURE",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/museum of future.jpeg",
      "category": "Historical",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Arabian Boutique Hotel": 17000,
        "The Tower Plaza Hotel Dubai": 14000,
        "Jumeirah Emirates Towers": 10000
      },
      "link": "https://www.youtube.com/embed/z8wA9Q1duug?si=CX48jh8ZN9C4zdlW",
      "info": "The Museum of the Future, located in Dubai, UAE, is an architectural marvel that defies convention. Shaped like a torus, its windows form a poetic message about the future, penned by His Highness Sheikh Mohammed bin Rashid Al Maktoum. Unlike traditional museums, this visionary institution looks forward, not backward. It explores artificial intelligence, robotics, and other cutting-edge technologies, envisioning life in 2071. With its unique design, commitment to innovation, and focus on the future, the Museum of the Future stands as a beacon of courage and creativity in a rapidly changing world."
    },
    {
      "id": 21,
      "Destination": "PALM JUMEIRAH",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/palm.jpeg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Andaz by Hyatt": 15000,
        "Hilton Dubai": 12000,
        "Aloft Palm Jumeirah": 13000
      },
      "link": "https://www.youtube.com/embed/uAUzzE06csw?si=TWR2jkxyKwJJJdo8",
      "info": "Palm Jumeirah, an archipelago of artificial islands in Dubai, United Arab Emirates, graces the Persian Gulf. Shaped like a stylized palm tree within a circle, it is part of the larger Palm Islands development, which includes Palm Jebel Ali and Palm Deira. When completed, these islands will extend Dubai’s shoreline by a staggering 520 kilometers (320 miles). The Palm Jumeirah boasts a population of over 25,000 and was meticulously created through land reclamation. Its construction, undertaken by Dutch specialist dredging company Van Oord, spanned six years. The recently opened destinations—The Pointe, Club Vista Mare, and Nakheel Mall—add to its allure. The Palm Jumeirah Monorail connects it to the mainland, making it the Middle East’s first monorail. In recent times, due to reduced human activity during the COVID-19 pandemic, wildlife sightings, including dolphins, have increased around this iconic man-made island."
    },
    {
      "id": 22,
      "Destination": "FERRARI WORLD ABU DHABI",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/ferrariworld.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Novotel Abu Dhabi Gate": 7000,
        "Rixos Marina ": 10000,
        "ERTH Abu Dhabi Hotel": 13000
      },
      "link": "https://www.youtube.com/embed/9N5x5DIxtIY?si=nfR6Hm5Kgg5c3kuh",
      "info": " Ferrari World Abu Dhabi  is a mostly indoors theme park located on Yas Island in Abu Dhabi, United Arab Emirates. It is the world's first Ferrari-themed park and features Formula Rossa, the world's fastest roller coaster.The foundation stone for the park was laid on 3 November 2007. Developed by Aldar Properties and constructed by BESIX Group subsidiary Six Construct, it took three years to develop the park until it was officially opened to the public on 4 November 2010.The most recent roller coaster to open is Mission Ferrari, which opened to the public in January 2023."
    },
    {
      "id": 23,
      "Destination": "SHEIK ZAYAD GRAND MOSQUE",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/grandmosque.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Sheraton Grand Hotel": 10000,
        "Gevora Hotel": 8000,
        "Ascott Park Palace": 15000
      },
      "link": "https://www.youtube.com/embed/iYcnuwMYH3I?si=MkyPmT-ooEU-j8Ax",
      "info": "The Sheikh Zayed Grand Mosque, located in Abu Dhabi, UAE, is a massive architectural masterpiece that seamlessly blends various Islamic architectural schools. With 82 domes, over 1,000 columns, 24-carat gold gilded chandeliers, and the world’s largest hand-knotted carpet, it stands as one of the world’s largest mosques. The mosque’s white marble domes, 107-meter-high minarets, and intricately decorated columns reflect the grandeur of Islamic art and design. Open to non-Muslims, it offers a unique glimpse into the history and beauty of Islamic architecture."
    },
    {
      "id": 24,
      "Destination": "Mleiha Archaeological Centre",
      "Country": "UAE",
      "Destination_Image": "../../assets/images/UAE/mleihaarchcenter.jpg",
      "category": "Architecture",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Beit Al Wali": 15000,
        "Afnan Charming Hotel": 12000,
        "Beit Zaman Hotel": 13000
      },
      "link": "https://www.youtube.com/embed/eZIILBBPT0o?si=D4XsgNnw9Y5tUlb0",
      "info": "Meliha Archaeological Centre is a visitor centre and exhibition based around the history and archaeology of the areas surrounding the village of Mleiha in Sharjah, the United Arab Emirates. Built around a preserved Umm Al Nar era tomb,[1] the centre details the excavations and discoveries made over the past 40 years at Mleiha and surrounding areas (including Al Thuqeibah, Jebel Faya, Al Madam and Jebel Buhais), particularly the important Faya North East find, which provides evidence that 'anatomically modern humans' were in the Mleiha area between 130,000 and 120,000 years ago.[2] These finds point to the spread of humanity from Africa across the Red Sea to the Persian Gulf region, and onward to populate the world through Iran, India, Europe and Asia."
    },
    {
      "id": 25,
      "Destination": "Temple of Karnak",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/temple of karnak.jpg",
      "category": "Historical",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Sofitel Winter Palace Luxor": 25000,
        "Iberotel Luxor": 10000,
        "Paradise house": 20000
      },
      "link": "https://www.youtube.com/embed/CqO4PE4uZhc?si=4aT3ofR2BiZ71Qip",
      "info": "The Karnak Temple Complex, commonly known as Karnak,comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt. Construction at the complex began during the reign of Senusret I (reigned 1971 to 1926 BCE) in the Middle Kingdom (c.2000 to 1700 BCE) and continued into the Ptolemaic Kingdom (305 to 30 BCE), although most of the extant buildings date from the New Kingdom. The area around Karnak was the ancient Egyptian Ipet-isut ('The Most Selected of Places') and the main place of worship of the 18th Dynastic Theban Triad, with the god Amun as its head. It is part of the monumental city of Thebes, and in 1979 it was added to the UNESCO World Heritage List along with the rest of the city.Karnak gets its name from the nearby, and partly surrounded, modern village of El-Karnak, 2.5 kilometres (1.6 miles) north of Luxor."
    },
    {
      "id": 26,
      "Destination": "Great Pyramid of Giza",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/gizapyrimids.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Pyramids Guest House": 10000,
        "Seven Pyramids Inn": 12000,
        " Villa Khufu Pyramids Hotel": 20000
      },
      "link": "https://www.youtube.com/embed/dlj1YUwling?si=1UrcEiwQyfbE49Y_",
      "info": "The Great Pyramid of Giza is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built c. 2600 BC,over a period of about 27 years,the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. It is the most famous monument of the Giza pyramid complex, which is part of the UNESCO World Heritage Site 'Memphis and its Necropolis'.It is situated at the northeastern end of the line of the three main pyramids at Giza.The funerary complex around the pyramid consisted of two mortuary temples connected by a causeway (one close to the pyramid and one near the Nile); tombs for the immediate family and court of Khufu, including three smaller pyramids for Khufu's wives; an even smaller 'satellite pyramid'; and five buried solar barges."
    },
    {
      "id": 27,
      "Destination": "Ras Mohammad Park",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/ras mohammad park.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Monte-Carlo Sharm Resort ": 12000,
        "Regency Plaza Hotels": 15000,
        "Pickalbatros Aqua Blu": 10000
      },
      "link": "https://www.youtube.com/embed/JV6KoKbSNVY?si=opMKFssQtlpUiLsk",
      "info": "Ras Mohammad National Park, located at the southern tip of the Sinai Peninsula in Egypt, is a renowned tourist destination known for its stunning natural beauty and rich biodiversity. The park is home to a vibrant coral reef, one of the most famous dive sites in Egypt, and features diverse ecosystems including mangrove forests, lagoons, seagrass beds, and a variety of fish and bird species. It offers a wide range of activities for visitors, such as snorkeling, diving, and visiting mangroves1. The park’s unique location and its commitment to marine conservation make it a must-visit for nature lovers and adventure seekers."
    },
    {
      "id": 28,
      "Destination": "Museum Of Egyptian Antiquties",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/museum of egyptian antiquities.jpg",
      "category": "Historical",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Madina Hostel": 9000,
        "Heritage Hostel Cairo ": 8000,
        "Hathor House": 10000
      },
      "link": "https://www.youtube.com/embed/SBiFpENm56c?si=u8g-HqrSVyvIKFFC",
      "info": "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum (also called the Cairo Museum), located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world.It houses over 120,000 items, with a representative amount on display. Located in Tahrir Square in a building built in 1901, it is the largest museum in Africa. Among its masterpieces are Pharaoh Tutankhamun's treasure, including its iconic gold burial mask, widely considered one of the best-known works of art in the world and a prominent symbol of ancient Egypt."
    },
    {
      "id": 29,
      "Destination": "Tiran Island",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/tiran-island.jpg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Charmillion Club Aquapark": 10000,
        "Baron Resort Sharm El Sheikh": 12000,
        "Coral Sea Aqua Club Resort": 15000
      },
      "link": "https://www.youtube.com/embed/XAouyQbTHeI?si=D8kkhoZ-Jwqke6BV",
      "info": "Tiran Island, located in the Red Sea and part of Egypt's territory, is a geographical jewel nestled at the mouth of the Gulf of Aqaba, just a stone's throw away from the popular resort town of Sharm El Sheikh1. This uninhabited island is known for its pristine beaches, azure waters, and rich marine life1. It's a popular destination for day trips from Sharm El Sheikh, with tourists flocking to experience the island's unspoiled beauty and to indulge in snorkeling and diving activities. The island's strategic location at the entrance of the Straits of Tiran makes it a crucial point in the control of shipping and trade routes in the region. Its historical significance, particularly during the Suez Crisis and the Six Day War, adds to its allure."
    },
    {
      "id": 30,
      "Destination": "Valley Of Kings",
      "Country": "Egypt",
      "Destination_Image": "../../assets/images/EGYPT/valley of kings.jpg",
      "category": "Historical",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Blue House": 5000,
        "Tiran Island Hotel": 8000,
        "Steigenberger Nile Palace Luxor": 12000
      },
      "link": "https://www.youtube.com/embed/COLb7hx3ius?si=50eIHdQHtLMMFiIo",
      "info": "The Valley of the Kings, a UNESCO World Heritage Site located near Luxor, Egypt, is an iconic archaeological site that served as the royal burial ground for pharaohs, queens, high priests, and nobles of the New Kingdom era. This valley, home to more than 60 exquisitely decorated tombs, offers a unique insight into ancient Egyptian beliefs about the afterlife. Visitors can explore the tombs of famous kings like Tutankhamun, Ramses II, Tuthmosis III, and Seti I, each adorned with intricate reliefs and images. The Valley of the Kings, with its rich history and stunning desert landscape, is a must-visit for anyone interested in ancient history and archaeology."
    },

    {
      "id": 31,
      "Destination": "Christ The Redeemer",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/christredeemer.jpg",
      "category": "Architecture",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Hotel Rio Lancaster": 8000,
        "Pestana Rio Atlantica": 10000,
        "Jw Marriott Rio de Janeiro": 15000
      },
      "link": "https://www.youtube.com/embed/k_615AauSds?si=jzZe2jVHVLoONkn5",
      "info": "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.It is made of reinforced concrete and soapstone.Christ The Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organisers originally accepted the design, it later changed to the statue of today, with the arms spread out wide."
    },
    {
      "id": 32,
      "Destination": "Copacabana Beach",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/Copacabana Beach.jpg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Hotel Atlantico Rio": 7000,
        "Atlantis Copacabana Hotel": 10000,
        "Ipanema Inn Hotel": 13000
      },
      "link": "https://www.youtube.com/embed/iXeDIwOr_yw?si=JvdDzNBOW7Dqo82m%22",
      "info": "Copacabana Beach, located in the vibrant city of Rio de Janeiro, is a world-renowned destination that captivates visitors with its stunning beauty and vibrant beach culture. This iconic landmark, stretching for 2.2 to 3 miles (4 to 5 kilometers), is nestled between Sugarloaf Mountain at one end and Ipanema at the other. It offers a wide range of activities such as beach and water sports, breathtaking photography, exciting seaside activities, and simply unwinding while taking in the soothing seascape. Whether you seek the energy of the crowds or the solitude of the clear waters, Copacabana is a great place to experience the essence of Brazil’s coastal charm1. Its strategic location on the coast of this vibrant city makes it one of the best places to visit in Brazil."
    },
    {
      "id": 33,
      "Destination": "Iguazu Falls",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/iguazufall.jpg",
      "category": "Nature",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Gran Melia Iguazu": 10000,
        "Sanma Hotel": 12000,
        "Tupa Lodge": 13000
      },
      "link": "https://www.youtube.com/embed/kY5G8s99Fl8?si=yn5wSEd4Zl0reMDf",
      "info": "Iguazú Falls or Iguaçu Falls  are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná. Together, they make up the largest waterfall system in the world.[2] The falls divide the river into the upper and lower Iguazu. The Iguazu River rises near the heart of the city of Curitiba. For most of its course, the river flows through Brazil; however, most of the falls are on the Argentine side. Below its confluence with the San Antonio River, the Iguazu River forms the border between Argentina and Brazil."
    },
    {
      "id": 34,
      "Destination": "Parque das Aves",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/parque das aves.jpg",
      "category": "Historical",
      "time_to_visit": "Spring",
      "how_to_reach": "Flight",
      "stays": {
        "Sanma Hotel": 5000,
        "Complexo Eco Cataratas Resort": 10000,
        "Wish Foz do Iguaçu": 15000
      },
      "link": "https://www.youtube.com/embed/x068C4AtDqI?si=-l6HDlLdWNSJ9MVq",
      "info": "Parque das Aves, located in Foz do Iguaçu, Paraná State, Brazil, is the largest bird park in Latin America and an essential tour for visitors. This sanctuary and shelter for birds is home to around 1,500 birds from about 150 different species. Developed along 16 hectares of restored Atlantic Rainforest, the park provides an unforgettable adventure where visitors can have direct contact with vibrant macaws, look into the eyes of a toucan, and even encounter the “most dangerous bird in the world”, the Cassowary. The park also houses the world’s largest nursery for the reproduction of harpies on display. With its commitment to bird recovery and conservation, Parque das Aves offers an immersive connection with the birds and the forests they inhabit, making it a must-visit for nature lovers."
    },
    {
      "id": 35,
      "Destination": "Sugarloaf Mountain",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/sugarloaf-mountaincablecar.jpg",
      "category": "nature",
      "time_to_visit": "Winter",
      "how_to_reach": "Flight",
      "stays": {
        "Sugarloaf Inn": 15000,
        "Sugarloaf Mountain Hotel": 12000,
        "Sugarloaf Valley Escape": 8000
      },
      "link": "https://www.youtube.com/embed/1Yqv6nbWRMw?si=hEp_jUB4_D-V_g4Z",
      "info": "Sugarloaf Mountain  is a peak situated in Rio de Janeiro, Brazil, at the mouth of Guanabara Bay on a peninsula that juts out into the Atlantic Ocean. Rising 396 m (1,299 ft) above the harbor, the peak is named for its resemblance to the traditional shape of concentrated refined loaf sugar. It is known worldwide for its cableway and panoramic views of the city and beyond.The mountain is one of several monolithic granite and quartz mountains that rise straight from the water's edge around Rio de Janeiro. Geologically, it is considered part of a family of steep-sided rock outcroppings known as non-inselberg bornhardts."
    },
    {
      "id": 36,
      "Destination": "Ibirapuera Park",
      "Country": "Brazil",
      "Destination_Image": "../../assets/images/BRAZIL/lago negro.jpg",
      "category": "Nature",
      "time_to_visit": "Summer",
      "how_to_reach": "Flight",
      "stays": {
        "Royal Ibirapuera Park": 12000,
        "Ibirapuera Park House": 8000,
        "GoodStay São Paulo Ibirapuera": 10000
      },
      "link": "https://www.youtube.com/embed/seT-EE14rEI?si=LWTpdSJWrq_QajYm",
      "info": "Ibirapuera Park, located in São Paulo, Brazil, is the largest urban park in South America and a major tourist attraction. This vast green space, nestled amidst the bustling metropolis, offers a tranquil retreat for residents and visitors alike. The park is not just a natural haven, but also a vibrant cultural hub, hosting a range of museums, a music hall, and popular events such as São Paulo Fashion Week. It's home to more than 1,500 birds from about 150 different species. The park's unique blend of nature, culture, and history, coupled with its commitment to conservation, makes it a must-visit destination for any traveler."
    },

  ]

  experiences = [
    new Experience(1, 'John Doe', 'john.doe@example.com', '1234567890', 'Male', 'Visiting the Eiffel Tower was a dream come true. The history and culture of the area were fascinating and the food was delicious.', 4, new Date('2022-01-01')),
    new Experience(1, 'Jane Doe', 'jane.doe@example.com', '1111111111', 'Female', 'The Eiffel Tower was even more beautiful at night. The lights were stunning and the atmosphere was romantic.', 5, new Date('2022-01-15')),

    new Experience(2, 'Jane Smith', 'jane.smith@example.com', '9876543210', 'Female', 'The Musée d\'Orsay was an incredible experience. The art was breathtaking and the building itself was beautiful.', 4, new Date('2022-02-01')),
    new Experience(2, 'Bob Smith', 'bob.smith@example.com', '2222222222', 'Male', 'The Musée d\'Orsay had an impressive collection of Impressionist art. The Monet exhibit was a highlight.', 5, new Date('2022-02-15')),

    new Experience(3, 'Bob Johnson', 'bob.johnson@example.com', '0987654321', 'Male', 'The Sainte-Chapelle was stunning. The stained glass windows were breathtaking and the history was fascinating.', 4, new Date('2022-03-01')),
    new Experience(3, 'Alice Johnson', 'alice.johnson@example.com', '3333333333', 'Female', 'The Sainte-Chapelle was a peaceful oasis in the middle of the city. The architecture was beautiful.', 5, new Date('2022-03-15')),

    new Experience(4, 'Grace Park', 'grace.park@example.com', '6666666666', 'Female', 'The Luxembourg Gardens were beautiful. The flowers were in full bloom and the fountains were relaxing.', 3, new Date('2022-04-01')),
    new Experience(4, 'Michael Park', 'michael.park@example.com', '4444444444', 'Male', 'The Luxembourg Gardens were a great place to people watch. The scenery was beautiful and the atmosphere was lively.', 4, new Date('2022-04-15')),

    new Experience(5, 'Henry Lee', 'henry.lee@example.com', '7777777777', 'Male', 'The Louvre Museum was amazing. The art was incredible and the building was beautiful.', 5, new Date('2022-05-01')),
    new Experience(5, 'Emily Lee', 'emily.lee@example.com', '5555555555', 'Female', 'The Louvre Museum had an impressive collection of ancient artifacts. The Egyptian exhibit was fascinating.', 5, new Date('2022-05-15')),

    new Experience(6, 'Joe Thomas', 'joe.thomas@example.com', '9999999999', 'Male', "A powerful and moving monument to the soldiers who fought and died for France, the Arc de Triomphe is a must-visit.", 4, new Date('2022-06-01')),
    new Experience(6, 'Sarah Thomas', 'sarah.thomas@example.com', '6666666666', 'Female', "The Arc de Triomphe is an iconic symbol of Paris, the view from the top is breathtaking, a must-see.", 5, new Date('2022-06-15')),

    new Experience(7, 'Bella Chen', 'bella.chen@example.com', '22222222', 'Female', "Yellow Stone Park is a natural wonder, the geysers and hot springs are a must-see, a unique experience.", 4, new Date('2022-07-01')),
    new Experience(7, 'David Chen', 'david.chen@example.com', '77777777', 'Male', "A beautiful and vast national park, Yellow Stone Park is a great place to hike, camp, and see wildlife, a must-visit.", 4, new Date('2022-07-15')),

    new Experience(8, 'Lucy Smith', 'lucy.smith@example.com', '44444444', 'Female', "The Grand Canyon is a breathtaking natural wonder, the view from the rim is awe-inspiring, a must-see.", 3, new Date('2022-08-01')),
    new Experience(8, 'Tom Smith', 'tom.smith@example.com', '88888888', 'Male', "A powerful and moving experience, the Grand Canyon is a must-visit, the hike to the bottom is challenging but worth it.", 4, new Date('2022-08-15')),

    new Experience(9, 'Ella Johnson', 'ella.johnson@example.com', '55555555', 'Female', "The Statue of Liberty is an iconic symbol of freedom and democracy, a must-see when visiting New York City.", 3, new Date('2022-09-01')),
    new Experience(9, 'Grace Johnson', 'grace.johnson@example.com', '99999999', 'Female', "A beautiful and impressive monument, the Statue of Liberty is a must-visit, the view of Manhattan from the ferry is amazing.", 5, new Date('2022-09-15')),

    new Experience(10, 'Grace Lee', 'grace.lee@example.com', '77777777', 'Female', "Walt Disneyland is a magical and fun-filled theme park, a must-visit for families and kids of all ages.", 5, new Date('2022-10-01')),
    new Experience(10, 'Daniel Lee', 'daniel.lee@example.com', '00000000', 'Male', "A classic and iconic theme park, Walt Disneyland is a must-visit, the fireworks show is a must-see.", 4, new Date('2022-10-15')),

    new Experience(11, 'Jack Wang', 'jack.wang@example.com', '00000000', 'Male', "Millennium Park is a beautiful and modern urban park, the Cloud Gate sculpture is a must-see, a unique experience.", 4, new Date('2022-11-01')),
    new Experience(11, 'Jessica Wang', 'jessica.wang@example.com', '11111111', 'Female', "A great place to take a stroll, have a picnic, or just enjoy the scenery, Millennium Park is a must-visit in Chicago.", 5, new Date('2022-11-15')),

    new Experience(12, 'Kevin Lee', 'kevin.lee@example.com', '22222222', 'Male', "The Las Vegas Strip is a dazzling and vibrant entertainment district, a must-see when visiting Las Vegas.", 3, new Date('2022-12-01')),
    new Experience(12, 'Jennifer Lee', 'jennifer.lee@example.com', '22222222', 'Female', "A unique and exciting experience, the Las Vegas Strip is a must-visit, the Bellagio fountains are a must-see.", 5, new Date('2022-12-15')),

    new Experience(13, 'Lisa Johnson', 'lisa.johnson@example.com', '55555555', 'Female', "The Taj Mahal is a breathtaking and iconic symbol of India, a must-see when visiting Agra.", 4, new Date('2023-01-01')),
    new Experience(13, 'Michael Johnson', 'michael.johnson@example.com', '33333333', 'Male', "A powerful and moving experience, the Taj Mahal is a must-visit, the sunset view is breathtaking.", 5, new Date('2023-01-15')),

    new Experience(14, 'Mia Kim', 'mia.kim@example.com', '66666666', 'Male', "Hampi is a fascinating and historic city, the ruins of the ancient Vijayanagara Empire are a must-see.", 5, new Date('2023-02-01')),
    new Experience(14, 'Jessica Kim', 'jessica.kim@example.com', '44444444', 'Female', "A unique and fascinating experience, Hampi is a must-visit, the Virupaksha Temple is a must-see.", 3, new Date('2023-02-15')),

    new Experience(15, 'Noah Wang', 'noah.wang@example.com', '88888888', 'Male', "India Gate is a powerful and moving monument to the soldiers who fought and died for India, a must-see when visiting Delhi.", 4, new Date('2023-03-01')),
    new Experience(15, 'Grace Wang', 'grace.wang@example.com', '55555555', 'Female', "A beautiful and impressive monument, India Gate is a must-visit, the surrounding gardens are a great place to relax.", 5, new Date('2023-03-15')),

    new Experience(16, 'Olivia Zhang', 'olivia.zhang@example.com', '99999999', 'Female', "The Ajanta Caves are a breathtaking and ancient collection of Buddhist rock-cut cave monuments, a must-see when visiting Maharashtra.", 5, new Date('2023-04-01')),
    new Experience(16, 'Kevin Zhang', 'kevin.zhang@example.com', '66666666', 'Male', "A unique and fascinating experience, the Ajanta Caves are a must-visit, the intricate carvings and paintings are awe-inspiring.", 4, new Date('2023-04-15')),

    new Experience(17, 'Peter Chen', 'peter.chen@example.com', '00000000', 'Male', "Ooty is a beautiful and peaceful hill station, the tea plantations and scenic views are a must-see.", 5, new Date('2023-05-01')),
    new Experience(17, 'Lucy Chen', 'lucy.chen@example.com', '77777777', 'Female', "A great place to escape the heat and enjoy the cool weather, Ooty is a must-visit, the toy train ride is a must-do.", 4, new Date('2023-05-15')),

    new Experience(18, 'Tim Chen', 'tim.chen@example.com', '44444444', 'Male', "Ladakh is a breathtaking and remote region in the Indian Himalayas, the monasteries and mountain landscapes are a must-see.", 4, new Date('2023-06-01')),
    new Experience(18, 'Jessica Chen', 'jessica.chen@example.com', '88888888', 'Female', "A unique and adventurous experience, Ladakh is a must-visit, the Pangong Lake is a must-see.", 5, new Date('2023-06-15')),

    new Experience(19, 'Vivian Kim', 'vivian.kim@example.com', '55555555', 'Female', "The Burj Khalifa is a breathtaking and iconic symbol of Dubai, a must-see when visiting the United Arab Emirates.", 3, new Date('2023-07-01')),
    new Experience(19, 'Jackson Kim', 'jackson.kim@example.com', '11111111', 'Male', "A unique and exciting experience, the Burj Khalifa is a must-visit, the view from the top is breathtaking.", 5, new Date('2023-07-15')),

    new Experience(20, 'Ella Zhang', 'ella.zhang@example.com', '77777777', 'Female', "The Museum of the Future is a fascinating and innovative museum, the exhibits and interactive displays are a must-see.", 5, new Date('2023-08-01')),
    new Experience(20, 'Alice Zhang', 'alice.zhang@example.com', '99999999', 'Female', "A unique and thought-provoking experience, the Museum of the Future is a must-visit, the architecture is a must-see.", 4, new Date('2023-08-15')),

    new Experience(21, 'Nathan Chen', 'nathan.chen@example.com', '33333333', 'Male', "Palm Jumeirah is a beautiful and artificial island, the beach and luxury resorts are a must-see.", 4, new Date('2023-09-01')),
    new Experience(21, 'David Chen', 'david.chen@example.com', '22222222', 'Male', "A unique and luxurious experience, Palm Jumeirah is a must-visit, the monorail ride is a must-do.", 5, new Date('2023-09-15')),

    new Experience(22, 'Lucas Zhang', 'lucas.zhang@example.com', '66666666', 'Male', "Ferrari World Abu Dhabi is a thrilling and exciting theme park, the roller coasters and Ferrari-themed attractions are a must-see.", 5, new Date('2023-10-01')),
    new Experience(22, 'Lara Zhang', 'lara.zhang@example.com', '77777777', 'Female', "A unique and exciting experience, Ferrari World Abu Dhabi is a must-visit, the Formula Rossa roller coaster is a must-ride.", 3, new Date('2023-10-15')),

    new Experience(23, 'Sheikh Mahmudul Haque', 'skmahmud@example.com', '11111111', 'Male', "The Sheikh Zayad Grand Mosque is a breathtaking and iconic symbol of Abu Dhabi, a must-see when visiting the United Arab Emirates.", 5, new Date('2023-11-01')),
    new Experience(23, 'Fatima Bibi', 'bibifatima@example.com', '88888888', 'Female', "A unique and spiritual experience, the Sheikh Zayad Grand Mosque is a must-visit, the architecture and design are awe-inspiring.", 4, new Date('2023-11-15')),

    new Experience(24, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Mleiha Archaeological Centre is a fascinating and historic site, the ancient tombs and artifacts are a must-see.", 3, new Date('2023-12-01')),
    new Experience(24, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and educational experience, Mleiha Archaeological Centre is a must-visit, the guided tours are a must-do.", 4, new Date('2023-12-15')),

    new Experience(25, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "The Temple of Karnak is a breathtaking and ancient collection of temples and sanctuaries, a must-see when visiting Luxor.", 5, new Date('2023-12-01')),
    new Experience(25, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and fascinating experience, the Temple of Karnak is a must-visit, the Great Hypostyle Hall is a must-see.", 3, new Date('2023-12-15')),

    new Experience(26, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "The Great Pyramid of Giza is a breathtaking and iconic symbol of Egypt, a must-see when visiting Cairo.", 5, new Date('2023-12-01')),
    new Experience(26, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and awe-inspiring experience, the Great Pyramid of Giza is a must-visit, the climb to the top is a must-do.", 3, new Date('2023-12-15')),

    new Experience(27, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Ras Mohammad Park is a beautiful and protected marine park, the coral reefs and marine life are a must-see.", 4, new Date('2023-12-01')),
    new Experience(27, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and exciting experience, Ras Mohammad Park is a must-visit, the snorkeling and diving are a must-do.", 3, new Date('2023-12-15')),

    new Experience(28, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "The Museum Of Egyptian Antiquties is a fascinating and historic museum, the collection of artifacts and mummies are a must-see.", 5, new Date('2023-12-01')),
    new Experience(28, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and educational experience, the Museum Of Egyptian Antiquties is a must-visit, the Royal Mummy Room is a must-see.", 3, new Date('2023-12-15')),

    new Experience(29, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Tiran Island is a beautiful and remote island, the beaches and coral reefs are a must-see.", 3, new Date('2023-12-01')),
    new Experience(29, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and exciting experience, Tiran Island is a must-visit, the snorkeling and diving are a must-do.", 5, new Date('2023-12-15')),

    new Experience(30, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "The Valley Of Kings is a breathtaking and ancient collection of tombs and monuments, a must-see when visiting Luxor.", 5, new Date('2023-12-01')),
    new Experience(30, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and fascinating experience, the Valley Of Kings is a must-visit, the tomb of Tutankhamun is a must-see.", 4, new Date('2023-12-15')),

    new Experience(31, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Christ The Redeemer is a breathtaking and iconic symbol of Rio de Janeiro, a must-see when visiting Brazil.", 3, new Date('2023-12-01')),
    new Experience(31, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and spiritual experience, Christ The Redeemer is a must-visit, the view from the top is breathtaking.", 5, new Date('2023-12-15')),

    new Experience(32, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Copacabana Beach is a beautiful and iconic beach, the sand and surf are a must-see.", 4, new Date('2023-12-01')),
    new Experience(32, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and exciting experience, Copacabana Beach is a must-visit, the nightlife and street performers are a must-see.", 5, new Date('2023-12-15')),

    new Experience(33, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Iguazu Falls is a breathtaking and powerful natural wonder, the waterfalls and surrounding jungle are a must-see.", 5, new Date('2023-12-01')),
    new Experience(33, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and exciting experience, Iguazu Falls is a must-visit, the boat ride to the base of the falls is a must-do.", 4, new Date('2023-12-15')),

    new Experience(34, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Parque das Aves is a fascinating and beautiful bird park, the variety of birds and exhibits are a must-see.", 5, new Date('2023-12-01')),
    new Experience(34, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and educational experience, Parque das Aves is a must-visit, the walk-through aviaries are a must-do.", 3, new Date('2023-12-15')),

    new Experience(35, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Sugarloaf Mountain is a beautiful and iconic mountain, the view from the top is a must-see.", 4, new Date('2023-12-01')),
    new Experience(35, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and exciting experience, Sugarloaf Mountain is a must-visit, the cable car ride to the top is a must-do.", 3, new Date('2023-12-15')),

    new Experience(36, 'Helen Zhang', 'helen.zhang@example.com', '22222222', 'Female', "Ibirapuera Park is a beautiful and historic urban park, the gardens and monuments are a must-see.", 5, new Date('2023-12-01')),
    new Experience(36, 'Jackson Zhang', 'jackson.zhang@example.com', '33333333', 'Male', "A unique and peaceful experience, Ibirapuera Park is a must-visit, the bike ride through the park is a must-do.", 4, new Date('2023-12-15'))

  ]

}



