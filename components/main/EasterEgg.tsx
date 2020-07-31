import React, {Component} from 'react';
import { Text } from '../Themed';
import { Container, Header, Content, Accordion } from "native-base";
import { YellowBox } from 'react-native'

const dataArray = [
  {
  "type": "Hidden Mickey",
  content: "As you soar above London in a pirate ship, keep your eyes peeled for Mickey's silhouette in the clock face of Big Ben.",
  title: "Peter Pan's Flight",
  "park": "Fantasyland",
  "lat-lon": "33.813125, -117.918858",
  "source": "https://live.staticflickr.com/7914/31485224807_16a8af900b_b.jpg"
},
{
  "type": "Ride tidbit",
  content: "Watch the window above Snow White's Scary Adventures. A life-sized Evil Queen character pops out from behind the drapes every few minutes.",
  title: "Upper floor of Snow White's Scary Adventures",
  "park": "Fantasyland",
  "lat-lon": "33.813113, -117.919174",
  "source": "https://www.ocregister.com/wp-content/uploads/migration/nz2/nz211l-b88580754z.120151208113212000g5pdg4bt.10.jpg?w=1024&h=670"
},
{
  "type": "History",
  content: "Jingles! One of the horses on the carousel is walt's favorite and is co-owned by Julie Andrews and the author of Mary Poppins. It is the official lead horse and decorated with jingle bells",
  title: "King Arthur's Carousel",
  "park": "Fantasyland",
  "lat-lon": "33.813399, -117.918934",
  "source": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcollinsrace1.wordpress.com%2F2015%2F11%2F06%2Friding-on-jingles-the-carrousel-horse%2F&psig=AOvVaw05WF3N9CSfk4Oox43VvNAy&ust=1596167739882000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMC2oK2K9OoCFQAAAAAdAAAAABAD"
},
{
  "type": "Location",
  content: "Look for the door of club 33 near New Orleans Square. This new entrance was only recently designated, after the 2014 expansion and remodel (the old entrance is right by the Blue Bayou restaurant entrance)",
  title: "Across from the La Mascarade d'Orleans shop",
  "park": "New Orleans square",
  "lat-lon": "33.8111217,-117.92099309999999",
  "source": "https://www.disneyfoodblog.com/wp-content/uploads/2014/07/Door-Entryway.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Indiana Jones Rope",
  "type": "Ride tidbit",
  content: "In the queue there is a rope hanging down next to the sign \"Caution Do Not Pull Rope!\".... pull it and listen closely to the well! You may hear the explorer in the well take a small tumble.",
  title: "Indiana Jones Adventure",
  "park": "Adventureland",
  "lat-lon": "33.811299, -117.920540",
  "source": "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.dolewhipaday.com%2F2019%2F08%2Funusual-interactive-spots-at-disneyland.html&psig=AOvVaw16JIP8EE76MmvQo5m3JVgA&ust=1596173602745000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCS7peg9OoCFQAAAAAdAAAAABAJ"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Walt and Roy Disney Initials",
  "type": "Ride tidbit",
  content: "Glance up at the balcony railing above the Pirates of the Caribbean ride, and you'll be greeted by two familiar initials: WD and RD for Walt and Roy Disney!",
  title: "Pirates of the Caribbean",
  "park": "New Orleans Square",
  "lat-lon": "33.811237, -117.920816",
  "source": "https://live.staticflickr.com/7695/17192470008_3cffa9f91e_b.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Walt's Apartment",
  "type": "History",
  content: "The light in the apartment above the Disneyland fire department is always on in honor of Walt. He and his family used to stay in that apartment when they came to the park",
  title: "Above the Fire Department on Main Street",
  "park": "Main Street",
  "lat-lon": "33.810468, -117.919440",
  "source": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwdwnt.com%2F2020%2F04%2Fphoto-lamp-remains-lit-in-walt-disneys-apartment-at-disneyland-during-extended-park-closure%2F&psig=AOvVaw3SyASNA-F93IWO8d_TA8Yb&ust=1596173673060000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODZgrqg9OoCFQAAAAAdAAAAABAD"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "The Lilly Belle Car",
  "type": "History",
  content: "There is a car that is sometimes attached to the train that goes around the park - it is specially decorated and dedicated to Walt's wife",
  title: "Disneyland Railroad",
  "park": "Disneyland Railroad",
  "lat-lon": "33.809991, -117.918980",
  "source": "https://nitrocdn.com/CGnKbhuuipXdbzRvhmDbleaJVpbdNXiM/assets/static/optimized/rev-e524a02/wp-content/uploads/lilybelle.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Morse Code of Walt Disney's Opening Day Speech",
  "type": "History",
  content: "Listen carefully as you wait at the Disneyland Railroad Station in New Orleans Square. The Morse code coming from the station's telegraph relays the first few sentences of Walt Disney's opening-day speech at Disneyland on July 17, 1955: \"To all who come to Disneyland, welcome. Here, age relives fond memories of the past, and here, youth may savor the challenge and promise of the future.\"",
  title: "Disneyland Railroad, New Orleans Square",
  "park": "New Orleans Square",
  "lat-lon": "33.811223, -117.921889",
  "source": "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2015/07/bdjaskoh456123.png"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Real Skull",
  "type": "Ride tidbit",
  content: "One of the skulls on the Pirates of the Caribbean ride is real! It is on the headboard of the bed, and looks different than the other props",
  title: "Pirates of the Caribbean",
  "park": "New Orleans Square",
  "lat-lon": "33.811237, -117.920816",
  "source": ""
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Adventureland Little Treehouse",
  "type": "Location",
  content: "Hidden in the tree trunk just outside of the Indiana Jones Adventure in Adventureland there is a teeny-tiny little house meant for a teeny-tiny little man. The home belong to the leprechaun Patrick Begorra, who was the subject of a Disney Little Golden Books published in 1955. According to the story, the leprechaun lived in the roots of a tree before Disneyland was created, and became the first \"resident\" of the theme park.",
  title: "Indiana Jones Adventure",
  "park": "Adventureland",
  "lat-lon": "33.811299, -117.920540",
  "source": "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2015/10/houhou7638111.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Tomorrowland plants",
  "type": "Location tidbit",
  content: "All of the plants in Tomorrowland are edible (though we don't recommend eating them!) as the designers were hopeful for an ecologically astute future where humanity utilizes its resources",
  title: "Tomorrowland",
  "park": "Tomorrowland",
  "lat-lon": "33.812275, -117.918103",
  "source": "https://1.bp.blogspot.com/_cWp5u94NsJI/TPv1aa--J0I/AAAAAAAAAGc/npbLzaZ9ymI/s1600/IMG_1815.JPG"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Soarin' Over California/the World",
  "type": "Hidden Mickey X2",
  content: "Make sure to look at the formation of the fireworks near the end of the ride! They make take on a familiar shape ;).  And, if it's the California version, take a close look at the golf ball that comes at you!",
  title: "Soarin Over California",
  "park": "California Adventure Park",
  "lat-lon": "33.808238, -117.920009",
  "source": "https://img.geocaching.com/waymarking/display/ebf28b85-f773-4275-b20f-86c3b02a8227.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Matterhorn Yeti",
  "type": "Ride tidbit",
  content: "The yeti in the matterhorn ride has a name! Say hi to Harold!",
  title: "Matterhorn Bobsleds",
  "park": "Between Tomorrowland/Fantasyland",
  "lat-lon": "33.813085, -117.917820",
  "source": "https://vignette.wikia.nocookie.net/villains/images/8/80/Matterhorn-first-look-yeti.jpg/revision/latest?cb=20171110020905"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "It's a Small World Characters",
  "type": "Ride tidbit",
  content: "As you go through the ride, keep an eye out for some of your faves! Peter Pan, Lilo & Stitch, Aladdin, Ariel... who else can you spot?",
  title: "It's a Small World",
  "park": "Fantasyland",
  "lat-lon": "33.814608, -117.917847",
  "source": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisneyparks.disney.go.com%2Fblog%2F2018%2F11%2Flook-closer-its-a-small-world-holiday-at-disneyland-park%2F&psig=AOvVaw2vjKyzbWdmvb_Rf0RhAzoy&ust=1596174259415000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi0vc-i9OoCFQAAAAAdAAAAABAJ"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Walt's Bench",
  "type": "History",
  content: "This isn't just any bench—it's the Griffith Park bench where Walt Disney dreamed up the idea of Walt Disney as he watched his daughters play.",
  title: "In the foyer of Great Moments with Mr. Lincoln",
  "park": "Main Street",
  "lat-lon": "33.810247, -117.918495\n",
  "source": "https://blog-cdn.touringplans.com/blog/wp-content/uploads/2019/06/IMG_8312-e1560599331847-700x525.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Cheshire Cat",
  "type": "Location tidbit",
  content: "As you're trying on a new hat, look closely in the mirror at The Mad Hatter's shop—you may just see a smiley feline friend!",
  title: "The Mad Hatter (shop)",
  "park": "Fantasyland",
  "lat-lon": "33.813441, -117.918568",
  "source": "https://live.staticflickr.com/6196/6075821990_ef265ebfdd_b.jpg"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Evil Queen's Apple",
  "type": "Ride tidbit",
  content: "Outside the ride, you'll find a brass book and apple. Touch the apple to hear the Evil Queen's chilling laugh!",
  title: "Snow White's Scary Adventures",
  "park": "Fantasyland",
  "lat-lon": "33.813113, -117.919174",
  "source": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripsavvy.com%2Fsnow-whites-scary-adventures-4090483&psig=AOvVaw0LtiZWTn79gD5XemlnnSPd&ust=1596174940712000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJi2qJel9OoCFQAAAAAdAAAAABAK"
},
{
  "A list of Hidden Mickeys, location-based trivia, and other fun sites throughout Disneyland.": "Haunted Mansion Dinner Plates",
  "type": "Hidden Mickey",
  content: "Look closely as you pass above the dining room scene on The Haunted Mansion. The formation of the plates may look familiar!",
  title: "The Haunted Mansion",
  "park": "New Orleans Square",
  "lat-lon": "33.811745, -117.922195\n",
  "source": "https://www.mainstinsider.com/wp-content/uploads/2013/12/hidden-mickey-on-haunted-mansion-holiday.jpg"
}
];

export default function EasterEgg() {
  return (
    <Container>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0}/>
      </Content>
    </Container>
  );
}

// export default function EasterEgg() {
//   return (
//     <Text>Easter Egg</Text>
//   )
// }


//suppress warning so we don't look bad during the demo...
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
