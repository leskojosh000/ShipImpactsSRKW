var config = {
    style: 'mapbox://styles/leskojosh000/ckn8btwzd0fi917pbyegtzqdx',
    accessToken: 'pk.eyJ1IjoibGVza29qb3NoMDAwIiwiYSI6ImNrbHJtajBhdjAyYXkyb3B3azhieHh2cWwifQ.dq8eXoO7STFEo7-JD2xUgQ',
    showMarkers: false,
    markerColor: false,
    theme: 'dark',
    use3dTerrain: false,
    title: 'How and Where Boats Impact the Southern Resident Killer Whales',
    subtitle: 'Scroll to explore the multitude of impacts boats have as they voyage through SRKW habitats',
    byline: 'By Joshua Lesko',
    footer: 'Link to next chapter?',
    chapters: [
        {
            id: 'Chapter1-Overview',
            alignment: 'left',
            hidden: false,
            title: 'Disturbances to the Southern Resident Killer Whales from Vessel Presence and Noise',
            image: 'https://s24990.pcdn.co/wp-content/uploads/2017/01/orca1.jpg',
            description: 'The core and critical habitats of the Southern Resident Killer Whales (SRKW) where they feed, mate, survive and thrive are found throughout the Central Salish Sea, precisely around the San Juan and Gulf Islands, into the Central Puget Sound and in winter and spring migrating as far north as Haida Gwaii and southwards towards Monterey Bay (M., 2020). A major driver of the decline in SRKW populations is the increase in traffic of commercial vessels and recreational boats through the orca’s habitats that have a multitude of harmful impacts. Including the release of sounds that mask orca whales’ bioacoustics, chemical contamination of the ocean, and collisions with pods. Scroll through this map to discover how whale watching, cruise ships, and cargo vessels individually and cumulatively impact the SKRW as these boats voyage through their territory.',
            location: {
                center: [-123.0249, 48.7852],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Chapter2-WW',
            alignment: 'full',
            hidden: false,
            title: 'Whale Watching',
            image: 'http://www.andreaengland.net/uploads/8/2/1/0/82109294/vancouver-orca-pod-andrea-england-4_orig.jpg',
            description: 'The concept of whale watching provides an interesting lens to view the relationship between orcas and boats as the whole point is to get scientists and tourists within viewing distance of the whales. Every year, at least 13 million people go whale watching, making the industry worth upwards of $2.1 billion according to the International Fund for Animal Welfare (Marine, 2011). While it is great that an increasing number of people desire to see these magnificent animals in their natural habitat, this influx has imposed some noticeable stresses for the SRKW. The increased boat traffic, even of the smaller Zodiac vessel type common with whale watching companies, impairs their ability to feed, rest and rear their young. It was found that the noise from whale watching boats in the Central Salish Sea masked the range of the SRKW’s echolocation clicks by up to 34% or almost 90 meters (Port, 2017) . Since whale watchers are trying to get as close to the orca’s as possible, there have been several collisions with whales that can be disastrous for everyone involved.  Be Whale Wise has released a set of regulations with specific distances for viewing killer whales. In both Canada and the United States vessels are required to maintain 100 meters distance from all marine animals and 200 meters away from orca’s, with a speed under 7 knots while within 1,000 meters of orca’s which would be much of the SRKW critical habitat. However, even with these rules in place, it is extremely difficult to manage the ocean and most of the whale watching goes untracked and unnoticed. Using several different whale watching companies, the departure ports were identified with the small boat symbol, small blue squares were placed in sites where whales had been spotted, and larger red squares to visualize the range of the whale watching boats.',
            location: {
                center: [-123.0249, 48.7852],
                zoom: 8,
                pitch: 45,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'Chapter3-CruiseShips',
            alignment: 'left',
            hidden: false,
            title: 'Cruise Ships',
            image: 'https://www.motherjones.com/wp-content/uploads/shutterstock_82734199.jpg?w=990',
            description: 'Since the Central Salish Sea is such a beautiful passage and harbors some of North America’s largest ports it is an extremely popular destination for cruise ships. In 2019 more than one million passengers on 288 cruise ships visited Vancouver (Crawford). Other popular cruise ports can be found Victoria and Nanaimo, British Columbia as well as in Seattle, Port Angeles, Port Townsend, and Anacortes in the Puget Sound off Washington State. These cruises will take passengers as far north as Juneau, Alaska and to the south well beyond the SRKW range of Monterey, California. Studies have found that many cruise ships rely upon “open-loop scrubbers” to adhere to international sulphur-limits that may actually be unintentionally harming the SRKW and other whales. Open-loop scrubbers operate by pumping a mix of water and contaminants into the ocean that contain carcinogenic substances and heavy metals that can cause cancer and other health issues in orcas. WWF found that nearly 35 million tonnes of scrubber wastewater was emitted off the coast of British Columbia, 90% of this discharge coming from cruise ships (Crawford, 2019).',
            location: {
                center: [-123.0249, 48.7852],
                zoom: 4.5,
                pitch: 20,
                bearing: 15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'chapter4-cargoships',
            alignment: 'left',
            hidden: false,
            title: 'Cargo Vessels',
            image: 'https://nxm3s2s7mdp1kt8af1gr4vc8-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/14705036_web1_Tanker_121218_med.jpg',
            description: 'The Salish Sea is host to the most traveled shipping routes in the world, with around 11,000 large vessels traveling through the passage each year (Georgia, 2016). Increased ship traffic will most certainly cause more acoustic disturbances from the frequency of their engines, propellers, and the speed they travel. Killer whale’s rely upon echolocation to hunt, navigate and communicate with one and other, so any underwater noise disturbance notably impairs SKRW and other whale’s ability to perform basic life activities. It has been found that time for the SRKW to feed was cut by about 20-30% of each whale day (5 hours) due to behavioral response and click masking (Port, 2017). There are also major concerns considering the influx in oil being transported by cargo ship, which greatly increases the probability of vessel incidents including oil spills. Finally, while collisions between ships and orcas are rare, they will most certainly increase in frequency as more vessels pass through their critical habitats.',
            location: {
                center: [-123.0249, 48.7852],
                zoom: 7.5,
                pitch: 60,
                bearing: -90
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
    ]
};
