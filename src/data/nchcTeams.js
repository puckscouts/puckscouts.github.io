const nchcTeams = {
    "arizona-state": {
        name: "Arizona State",
        logo: require('../assets/images/TeamLogos/NCHC/ASU.png'),
        record: { W: 13, L: 23, T: 0 },
        roster: [
          { name: "Cade Alami", number: 13, position: "D", year: "Sr", height: "6-7", weight: 197, dob: "3/13/2001", hometown: "Bedford, N.Y.", last_team: "Arizona State (Independents)" },
          { name: "Anthony Dowd", number: 9, position: "D", year: "Fr", height: "5-7", weight: 152, dob: "4/25/2003", hometown: "Point Pleasant Beach, N.J.", last_team: "Chicago (USHL)" },
          { name: "Tim Lovell", number: 27, position: "D", year: "Sr", height: "5-8", weight: 150, dob: "2/8/2002", hometown: "Hingham, Mass.", last_team: "Arizona State (D-I Ind.)" },
          { name: "Ty Murchison", number: 5, position: "D", year: "Jr", height: "6-2", weight: 190, dob: "2/2/2003", hometown: "Corona, Calif.", last_team: "USA U-18 Team (NTDP)", nhlDraft: "2021-PHI-5" },
          { name: "Tucker Ness", number: 10, position: "D", year: "So", height: "6-3", weight: 219, dob: "11/25/2002", hometown: "Plymouth, Minn.", last_team: "Waterloo (USHL)" },
          { name: "Josh Niedermayer", number: 24, position: "D", year: "Fr", height: "6-0", weight: 205, dob: "2/20/2004", hometown: "Newport Beach, Calif.", last_team: "Penticton (BCHL)" },
          { name: "Ethan Szmagaj", number: 16, position: "D", year: "Jr", height: "6-0", weight: 194, dob: "9/18/2001", hometown: "Canton, Mich.", last_team: "Waterloo (USHL)" },
          { name: "Brandon Tabakin", number: 2, position: "D", year: "Gr", height: "5-10", weight: 170, dob: "5/21/2000", hometown: "Woodbury, N.Y.", last_team: "Yale (ECAC)" },
          { name: "Tony Achille", number: 89, position: "F", year: "Fr", height: "5-11", weight: 181, dob: "1/8/2002", hometown: "Hingham, Mass.", last_team: "Maine (NAHL)" },
          { name: "Ryan Alexander", number: 53, position: "F", year: "So", height: "5-10", weight: 178, dob: "6/17/2002", hometown: "Toronto, Ont.", last_team: "Fargo (USHL)" },
          { name: "Brian Chambers", number: 26, position: "F", year: "Gr", height: "6-1", weight: 181, dob: "6/24/1998", hometown: "Weymouth, Mass.", last_team: "Mass.-Lowell (HEA)" },
          { name: "Benji Eckerle", number: 11, position: "F", year: "Sr", height: "5-9", weight: 175, dob: "9/24/1999", hometown: "Northville, Mich.", last_team: "Tri City (USHL)" },
          { name: "Cole Gordon", number: 29, position: "F", year: "Fr", height: "6-1", weight: 202, dob: "7/17/2003", hometown: "Dallas, Texas", last_team: "Dubuque (USHL)" },
          { name: "Tyler Gratton", number: 59, position: "F", year: "Gr", height: "6-2", weight: 190, dob: "8/6/1999", hometown: "Pottstown, Pa.", last_team: "Penn State (B10)" },
          { name: "Cole Helm", number: 43, position: "F", year: "Fr", height: "5-11", weight: 195, dob: "7/17/2003", hometown: "Dallas, Texas", last_team: "Dubuque (USHL)" },
          { name: "David Hymovitch", number: 18, position: "F", year: "Fr", height: "5-11", weight: 170, dob: "8/14/2003", hometown: "Phoenix, Ariz.", last_team: "Muskegon" },
          { name: "Ty Jackson", number: 14, position: "F", year: "Sr", height: "5-8", weight: 161, dob: "9/6/2001", hometown: "Oakville, Ont.", last_team: "Dubuque (USHL)" },
          { name: "Dylan Jackson", number: 15, position: "F", year: "Sr", height: "5-10", weight: 165, dob: "9/6/2001", hometown: "Oakville, Ont.", last_team: "Dubuque (USHL)" },
          { name: "Matthew Kopperud", number: 28, position: "F", year: "Sr", height: "5-11", weight: 170, dob: "8/4/1999", hometown: "Denver, Colo.", last_team: "Dubuque (USHL)" },
          { name: "Jackson Niedermayer", number: 20, position: "F", year: "Jr", height: "6-0", weight: 200, dob: "3/11/2001", hometown: "Newport Beach, Calif.", last_team: "Arizona State (D-I Ind.)" },
          { name: "Ryan O'Reilly", number: 39, position: "F", year: "Sr", height: "6-3", weight: 205, dob: "3/21/2000", hometown: "Southlake, Texas", last_team: "Arizona State (D-I Ind.)", nhlDraft: "2018-DET-4" },
          { name: "Matthew Romer", number: 17, position: "F", year: "Fr", height: "5-11", weight: 180, dob: "9/1/2002", hometown: "Chicago, Ill.", last_team: "Omaha (USHL)" },
          { name: "Charlie Schoen", number: 82, position: "F", year: "So", height: "5-10", weight: 160, dob: "6/2/2001", hometown: "Andover, Minn.", last_team: "Sioux City (USHL)" },
          { name: "Lukas Sillinger", number: 61, position: "F", year: "Sr", height: "5-11", weight: 162, dob: "9/14/2000", hometown: "Regina, Sask.", last_team: "Penticton (BCHL)" },
          { name: "Kyle Smolen", number: 25, position: "F", year: "Fr", height: "5-11", weight: 165, dob: "6/18/2002", hometown: "Crystal Lake, Ill.", last_team: "Fargo (USHL)" },
          { name: "Alex Young", number: 21, position: "F", year: "Sr", height: "5-11", weight: 185, dob: "3/22/2001", hometown: "Calgary, Alb.", last_team: "Colgate (ECAC)", nhlDraft: "2020-SJS-7" },
          { name: "Chase Hamm", number: 1, position: "G", year: "Fr", height: "5-9", weight: 168, dob: "3/11/2002", hometown: "Salt Lake City, Utah", last_team: "Penticton (BCHL)" },
          { name: "Gibson Homer", number: 31, position: "G", year: "So", height: "6-5", weight: 209, dob: "12/29/2003", hometown: "Grand Rapids, Mich.", last_team: "Chicago (USHL)" },
          { name: "T.J. Semptimphelter", number: 35, position: "G", year: "Jr", height: "6-1", weight: 190, dob: "5/9/2002", hometown: "Marlton, N.J.", last_team: "Arizona State (Independents)" }
        ]
      },







      "colorado-college": {
        name: "Colorado College",
        logo: require('../assets/images/TeamLogos/NCHC/ColoradoCollege.png'),
        record: { W: 11, L: 22, T: 3 },
        roster: [
          { name: "Nicklas Andrews", number: 37, position: "D", year: "Sr", height: "5-10", weight: 192, dob: "7/6/2001", hometown: "Canton, Mich.", last_team: "Colorado College (NCHC)" },
          { name: "Max Burkholder", number: 4, position: "D", year: "Fr", height: "5-8", weight: 176, dob: "8/8/2003", hometown: "Chaska, Minn.", last_team: "Dubuque (USHL)" },
          { name: "Nikolai Charchenko", number: 22, position: "D", year: "So", height: "6-2", weight: 209, dob: "6/3/2001", hometown: "Victoria, Minn.", last_team: "Minot (NAHL)" },
          { name: "Tyler Dunbar", number: 21, position: "D", year: "Fr", height: "6-1", weight: 190, dob: "12/18/2003", hometown: "Sault Ste. Marie, Mich.", last_team: "Lincoln (USHL)" },
          { name: "Antonio Fernandez", number: 15, position: "D", year: "Fr", height: "5-9", weight: 181, dob: "10/11/2003", hometown: "San Jose, Calif.", last_team: "Colorado College (NCHC)" },
          { name: "Chase Foley", number: 7, position: "D", year: "Sr", height: "5-10", weight: 168, dob: "2/17/2000", hometown: "Mendota Heights, Minn.", last_team: "Colorado College (NCHC)" },
          { name: "Connor Mayer", number: 18, position: "D", year: "Gr", height: "5-11", weight: 177, dob: "6/13/1999", hometown: "Champlin, Minn.", last_team: "Central Illinois (USHL)" },
          { name: "Jack Millar", number: 5, position: "D", year: "Sr", height: "6-5", weight: 211, dob: "11/30/2000", hometown: "Westminster, Colo.", last_team: "Cedar Rapids (USHL)" },
          { name: "Ethan Straky", number: 23, position: "D", year: "So", height: "5-11", weight: 179, dob: "4/18/2003", hometown: "Walnut Creek, Calif.", last_team: "Green Bay (USHL)" },
          { name: "Ryan Beck", number: 8, position: "F", year: "So", height: "5-9", weight: 185, dob: "8/25/2002", hometown: "Linden, Mich.", last_team: "Dubuque (USHL)" },
          { name: "Ray Christy", number: 11, position: "F", year: "Sr", height: "5-10", weight: 165, dob: "9/15/1999", hometown: "St. Paul, Minn.", last_team: "Colorado College (NCHC)" },
          { name: "Tyler Coffey", number: 17, position: "F", year: "Sr", height: "5-10", weight: 179, dob: "5/19/2000", hometown: "Hamilton, N.J.", last_team: "Sioux Falls (USHL)" },
          { name: "Stanley Cooley", number: 27, position: "F", year: "Jr", height: "5-11", weight: 194, dob: "5/27/2002", hometown: "Ottawa, Ont.", last_team: "Lincoln (USHL)" },
          { name: "Noah Laba", number: 26, position: "F", year: "So", height: "6-1", weight: 181, dob: "8/4/2003", hometown: "Northville, Mich.", last_team: "Lincoln (USHL)", nhlDraft: "2022-NYR-4" },
          { name: "Bret Link", number: 10, position: "F", year: "Fr", height: "6-2", weight: 187, dob: "4/9/2002", hometown: "Anchorage, Alaska", last_team: "Fargo (USHL)" },
          { name: "Tommy Middleton", number: 12, position: "F", year: "Jr", height: "5-11", weight: 176, dob: "6/19/2000", hometown: "Midland, Mich.", last_team: "Janesville (NAHL)" },
          { name: "Drew Montgomery", number: 29, position: "F", year: "Fr", height: "5-11", weight: 170, dob: "3/27/2003", hometown: "Grand Forks, N.D.", last_team: "Omaha (USHL)" },
          { name: "Noah Serdachny", number: 9, position: "F", year: "So", height: "6-1", weight: 174, dob: "3/9/2003", hometown: "Edmonton, Alb.", last_team: "Colorado College (NCHC)" },
          { name: "Riley Stuart", number: 25, position: "F", year: "Fr", height: "6-2", weight: 201, dob: "1/17/2002", hometown: "Phoenix, Ariz.", last_team: "Dubuque (USHL)" },
          { name: "Klavs Veinbergs", number: 24, position: "F", year: "Fr", height: "6-3", weight: 198, dob: "3/27/2003", hometown: "Riga, Latvia", last_team: "Lincoln (USHL)", nhlDraft: "2022-TBL-7" },
          { name: "Gleb Veremyev", number: 28, position: "F", year: "So", height: "6-4", weight: 201, dob: "6/28/2003", hometown: "Sayreville, N.J.", last_team: "Lincoln (USHL)" },
          { name: "Danny Weight", number: 39, position: "F", year: "Sr", height: "5-11", weight: 178, dob: "5/1/2001", hometown: "Lattingtown, N.Y.", last_team: "Boston College (HEA)" },
          { name: "Evan Werner", number: 19, position: "F", year: "Fr", height: "5-8", weight: 165, dob: "2/13/2003", hometown: "Flower Mound, Texas", last_team: "Tri-City (USHL)" },
          { name: "Logan Will", number: 20, position: "F", year: "Sr", height: "5-11", weight: 186, dob: "6/14/2000", hometown: "Ames, Iowa", last_team: "Omaha (USHL)" },
          { name: "Zaccharya Wisdom", number: 2, position: "F", year: "Fr", height: "6-0", weight: 174, dob: "4/21/2004", hometown: "Toronto, Ont.", last_team: "Cedar Rapids (USHL)", nhlDraft: "2023-SEA-7" },
          { name: "Jake Begley", number: 1, position: "G", year: "Sr", height: "6-1", weight: 158, dob: "3/18/1999", hometown: "Mahtomedi, Minn.", last_team: "Brockville (CCHL)" },
          { name: "Kaidan Mbereko", number: 30, position: "G", year: "So", height: "5-11", weight: 190, dob: "7/28/2003", hometown: "West Bloomfield, Mich.", last_team: "Lincoln (USHL)" },
          { name: "Henry Wilder", number: 31, position: "G", year: "Gr", height: "6-0", weight: 185, dob: "3/19/2001", hometown: "Needham, Mass.", last_team: "Boston College (HEA)" }
        ]
      },
      






      "denver": {
        name: "Denver",
        logo: require('../assets/images/TeamLogos/NCHC/Denver.png'),
        record: { W: 22, L: 10, T: 6 },
        roster: [
          { name: "Kent Anderson", number: 21, position: "D", year: "So", height: "6-3", weight: 205, dob: "11/13/2003", hometown: "Calgary, Alb.", last_team: "Green Bay (USHL)" },
          { name: "Cale Ashcroft", number: 3, position: "D", year: "Fr", height: "5-11", weight: 190, dob: "8/5/2004", hometown: "St. Albert, Alb.", last_team: "Tri-City (USHL)" },
          { name: "Sean Behrens", number: 2, position: "D", year: "Jr", height: "5-10", weight: 190, dob: "3/31/2003", hometown: "Barrington, Ill.", last_team: "US Under-18 Team (NTDP)", nhlDraft: "2021-COL-2" },
          { name: "Garrett Brown", number: 5, position: "D", year: "Fr", height: "6-3", weight: 200, dob: "4/4/2004", hometown: "San Jose, Calif.", last_team: "Waterloo (USHL)", nhlDraft: "2022-WPG-4" },
          { name: "Boston Buckberger", number: 9, position: "D", year: "Fr", height: "5-11", weight: 180, dob: "6/1/2003", hometown: "Saskatoon, Sask.", last_team: "Lincoln (USHL)" },
          { name: "Shai Buium", number: 8, position: "D", year: "Jr", height: "6-4", weight: 210, dob: "3/26/2003", hometown: "San Diego, Calif.", last_team: "Sioux City (USHL)", nhlDraft: "2021-DET-2" },
          { name: "Zeev Buium", number: 28, position: "D", year: "Fr", height: "6-2", weight: 180, dob: "12/7/2005", hometown: "San Diego, Calif.", last_team: "US Under-18 Team (NTDP)", nhlDraft: "2024-MIN-1" },
          { name: "Lucas Olvestad", number: 11, position: "D", year: "So", height: "6-1", weight: 185, dob: "3/19/2002", hometown: "Tampa, Fla.", last_team: "Dubuque (USHL)" },
          { name: "Tristan Broz", number: 16, position: "F", year: "Jr", height: "6-0", weight: 190, dob: "10/10/2002", hometown: "Bloomington, Minn.", last_team: "Minnesota (Big Ten)", nhlDraft: "2021-PIT-2" },
          { name: "Connor Caponi", number: 22, position: "F", year: "Sr", height: "5-9", weight: 185, dob: "3/20/2000", hometown: "Nashville, Tenn.", last_team: "Waterloo (USHL)" },
          { name: "Kieran Cebrian", number: 24, position: "F", year: "Fr", height: "6-2", weight: 195, dob: "3/31/2003", hometown: "Denver, Colo.", last_team: "Tri-City (USHL)" },
          { name: "Jack Devine", number: 4, position: "F", year: "Jr", height: "5-11", weight: 180, dob: "10/2/2003", hometown: "Glencoe, Ill.", last_team: "US Under-18 Team (NTDP)", nhlDraft: "2022-FLA-7" },
          { name: "Sam Harris", number: 12, position: "F", year: "Fr", height: "6-1", weight: 190, dob: "10/14/2003", hometown: "San Diego, Calif.", last_team: "Sioux Falls (USHL)", nhlDraft: "2023-MTL-5" },
          { name: "Carter King", number: 15, position: "F", year: "Jr", height: "5-11", weight: 195, dob: "8/30/2001", hometown: "Calgary, Alb.", last_team: "Surrey (BCHL)" },
          { name: "Peter LaJoy", number: 17, position: "F", year: "Fr", height: "5-7", weight: 165, dob: "2/27/2002", hometown: "Evergreen, Colo.", last_team: "Danbury (NAHL)" },
          { name: "Tristan Lemyre", number: 29, position: "F", year: "So", height: "5-9", weight: 170, dob: "1/15/2001", hometown: "Mirabel, Que.", last_team: "Denver (NCHC)" },
          { name: "Rieger Lorenz", number: 14, position: "F", year: "So", height: "6-3", weight: 205, dob: "3/30/2004", hometown: "Calgary, Alb.", last_team: "Okotoks (AJHL)", nhlDraft: "2022-MIN-2" },
          { name: "Miko Matikka", number: 10, position: "F", year: "Fr", height: "6-4", weight: 200, dob: "10/26/2003", hometown: "Helsinki, Finland", last_team: "Waterloo (USHL)", nhlDraft: "2022-ARI-3" },
          { name: "Massimo Rizzo", number: 13, position: "F", year: "Jr", height: "5-11", weight: 185, dob: "6/13/2001", hometown: "Burnaby, B.C.", last_team: "Chilliwack (BCHL)", nhlDraft: "2019-CAR-7" },
          { name: "Aidan Thompson", number: 7, position: "F", year: "So", height: "5-11", weight: 175, dob: "2/18/2002", hometown: "Fort Collins, Colo.", last_team: "Lincoln (USHL)", nhlDraft: "2022-CHI-3" },
          { name: "McKade Webster", number: 6, position: "F", year: "Sr", height: "5-11", weight: 190, dob: "7/28/2000", hometown: "St. Louis, Mo.", last_team: "Green Bay (USHL)", nhlDraft: "2019-TBL-7" },
          { name: "Alex Weiermair", number: 39, position: "F", year: "Fr", height: "6-1", weight: 190, dob: "5/10/2005", hometown: "Los Angeles, Calif.", last_team: "US Under-18 Team (NTDP)" },
          { name: "Jared Wright", number: 18, position: "F", year: "So", height: "6-3", weight: 195, dob: "11/22/2002", hometown: "Burnsville, Minn.", last_team: "Omaha (USHL)", nhlDraft: "2022-LAK-6" },
          { name: "Jack Caruso", number: 31, position: "G", year: "Sr", height: "5-10", weight: 190, dob: "6/7/1999", hometown: "St. Louis, Mo.", last_team: "Fairbanks (NAHL)" },
          { name: "Matt Davis", number: 35, position: "G", year: "Jr", height: "6-1", weight: 195, dob: "6/16/2001", hometown: "Calgary, Alb.", last_team: "Green Bay (USHL)" },
          { name: "Paxton Geisel", number: 30, position: "G", year: "Fr", height: "6-1", weight: 190, dob: "1/18/2004", hometown: "Estevan, Sask.", last_team: "Muskegon (USHL)" },
          { name: "Freddie Halyk", number: 1, position: "G", year: "Fr", height: "6-5", weight: 210, dob: "8/27/2003", hometown: "Cochrane, Alb.", last_team: "Camrose (AJHL)" }
        ]
      },
      






      "miami": {
        name: "Miami",
        logo: require('../assets/images/TeamLogos/NCHC/Miami.png'),
        record: { W: 8, L: 24, T: 4 },
        roster: [
          { name: "Jack Clement", number: 5, position: "D", year: "Gr", height: "6-4", weight: 200, dob: "6/9/1999" },
          { name: "Spencer Cox", number: 2, position: "D", year: "Jr", height: "6-0", weight: 185, dob: "2/7/2001" },
          { name: "Zane Demsey", number: 10, position: "D", year: "So", height: "6-2", weight: 190, dob: "11/4/2001" },
          { name: "Robby Drazner", number: 7, position: "D", year: "Sr", height: "6-1", weight: 195, dob: "2/13/2000" },
          { name: "Michael Feenstra", number: 4, position: "D", year: "So", height: "6-3", weight: 195, dob: "4/3/2001" },
          { name: "Axel Kumlin", number: 3, position: "D", year: "So", height: "6-1", weight: 195, dob: "2/23/2002" },
          { name: "Dylan Moulton", number: 27, position: "D", year: "Sr", height: "6-2", weight: 207, dob: "4/24/2001" },
          { name: "Hampus Rydqvist", number: 16, position: "D", year: "Sr", height: "5-10", weight: 185, dob: "3/12/1999" },
          { name: "Rihards Simanovičs", number: 19, position: "D", year: "Fr", height: "6-3", weight: 205, dob: "10/7/2003" },
          { name: "Tanyon Bajzer", number: 28, position: "F", year: "Fr", height: "6-1", weight: 180, dob: "8/25/2002" },
          { name: "Matthew Barbolini", number: 29, position: "F", year: "Sr", height: "6-2", weight: 205, dob: "6/1/2000" },
          { name: "Frankie Carogioiello", number: 18, position: "F", year: "So", height: "5-10", weight: 173, dob: "6/21/2002" },
          { name: "Thomas Daskas", number: 14, position: "F", year: "Sr", height: "6-2", weight: 200, dob: "9/3/1999" },
          { name: "Max Dukovac", number: 13, position: "F", year: "So", height: "6-2", weight: 182, dob: "2/19/2002" },
          { name: "PJ Fletcher", number: 8, position: "F", year: "Sr", height: "6-2", weight: 185, dob: "7/12/2001" },
          { name: "William Hallén", number: 11, position: "F", year: "So", height: "6-1", weight: 187, dob: "4/15/2002" },
          { name: "Teddy Lagerbäck", number: 34, position: "F", year: "Jr", height: "6-1", weight: 190, dob: "8/21/2001" },
          { name: "Blake Mesenburg", number: 26, position: "F", year: "So", height: "5-11", weight: 183, dob: "6/5/2002" },
          { name: "Brayden Morrison", number: 23, position: "F", year: "Sr", height: "5-11", weight: 175, dob: "5/4/2002" },
          { name: "Albin Nilsson", number: 9, position: "F", year: "Gr", height: "6-0", weight: 195, dob: "9/18/1998" },
          { name: "Ryan Sullivan", number: 22, position: "F", year: "Gr", height: "5-11", weight: 190, dob: "3/7/2000" },
          { name: "Artur Turansky", number: 25, position: "F", year: "So", height: "5-11", weight: 176, dob: "7/12/2001" },
          { name: "Raimonds Vitolins", number: 6, position: "F", year: "Jr", height: "6-1", weight: 180, dob: "1/12/2002" },
          { name: "John Waldron", number: 17, position: "F", year: "So", height: "6-1", weight: 185, dob: "11/13/2002" },
          { name: "Bruno Bruveris", number: 30, position: "G", year: "Fr", height: "6-0", weight: 173, dob: "3/9/2002" },
          { name: "Carter McPhail", number: 33, position: "G", year: "Sr", height: "5-11", weight: 178, dob: "12/4/1998" },
          { name: "Logan Neaton", number: 31, position: "G", year: "Gr", height: "6-4", weight: 200, dob: "4/7/1999", nhlDraft: "2019-WPG-5" }
        ]
      },

      

      "minnesota-duluth": {
        name: "Minnesota-Duluth",
        logo: require('../assets/images/TeamLogos/NCHC/Duluth.png'),
        record: { W: 16, L: 20, T: 1 },
        roster: [
          { name: "Luke Bast", number: 38, position: "D", year: "Sr", height: "5-10", weight: 178, dob: "11/20/2000" },
          { name: "Riley Bodnarchuk", number: 19, position: "D", year: "So", height: "6-4", weight: 205, dob: "6/1/2001" },
          { name: "Aiden Dubinsky", number: 28, position: "D", year: "So", height: "6-0", weight: 180, dob: "4/28/2004" },
          { name: "Will Francis", number: 23, position: "D", year: "Jr", height: "6-5", weight: 215, dob: "11/16/2000", nhlDraft: "2019-ANA-6" },
          { name: "Owen Gallatin", number: 20, position: "D", year: "Jr", height: "5-8", weight: 167, dob: "6/17/2002" },
          { name: "Darian Gotz", number: 2, position: "D", year: "Sr", height: "5-10", weight: 185, dob: "10/19/2000" },
          { name: "Joey Pierce", number: 18, position: "D", year: "So", height: "6-0", weight: 195, dob: "10/2/2002" },
          { name: "Aaron Pionk", number: 8, position: "D", year: "Fr", height: "6-1", weight: 175, dob: "1/16/2003", nhlDraft: "2023-MIN-5" },
          { name: "Kyle Bettens", number: 24, position: "F", year: "So", height: "6-3", weight: 215, dob: "7/4/2001" },
          { name: "Blake Biondi", number: 27, position: "F", year: "Sr", height: "6-1", weight: 198, dob: "4/24/2002", nhlDraft: "2020-MTL-4" },
          { name: "Braden Fischer", number: 21, position: "F", year: "Fr", height: "6-0", weight: 185, dob: "10/2/2002" },
          { name: "Dominic James", number: 17, position: "F", year: "Jr", height: "6-0", weight: 190, dob: "7/3/2002", nhlDraft: "2022-CHI-6" },
          { name: "Luke Johnson", number: 37, position: "F", year: "So", height: "5-10", weight: 177, dob: "10/15/2001" },
          { name: "Kyler Kleven", number: 22, position: "F", year: "Jr", height: "5-11", weight: 172, dob: "10/12/2000" },
          { name: "Luke Loheit", number: 16, position: "F", year: "Gr", height: "6-1", weight: 195, dob: "7/26/2000", nhlDraft: "2018-OTT-7" },
          { name: "Carter Loney", number: 33, position: "F", year: "Jr", height: "5-10", weight: 167, dob: "8/2/2002" },
          { name: "Connor McMenamin", number: 39, position: "F", year: "Gr", height: "5-11", weight: 195, dob: "2/25/1999" },
          { name: "Anthony Menghini", number: 26, position: "F", year: "Fr", height: "5-10", weight: 187, dob: "12/3/2002" },
          { name: "Quinn Olson", number: 15, position: "F", year: "Gr", height: "6-0", weight: 180, dob: "5/9/2001", nhlDraft: "2019-BOS-3" },
          { name: "Matthew Perkins", number: 34, position: "F", year: "Fr", height: "5-11", weight: 163, dob: "1/21/2004", nhlDraft: "2023-VAN-4" },
          { name: "Jack Smith", number: 12, position: "F", year: "So", height: "6-0", weight: 190, dob: "7/6/2002" },
          { name: "Cole Spicer", number: 11, position: "F", year: "So", height: "5-10", weight: 178, dob: "6/13/2004", nhlDraft: "2022-BOS-4" },
          { name: "Ben Steeves", number: 6, position: "F", year: "So", height: "5-8", weight: 165, dob: "5/10/2002" },
          { name: "Zach Sandy", number: 31, position: "G", year: "So", height: "6-0", weight: 175, dob: "12/5/2002" },
          { name: "Zach Stejskal", number: 35, position: "G", year: "Sr", height: "6-5", weight: 217, dob: "12/20/1999" },
          { name: "Matthew Thiessen", number: 36, position: "G", year: "Gr", height: "6-2", weight: 215, dob: "6/9/2000", nhlDraft: "2018-VAN-7" }
        ]
      },
      



      "north-dakota": {
        name: "North Dakota",
        logo: require('../assets/images/TeamLogos/NCHC/NorthDakota.png'),
        record: { W: 18, L: 15, T: 6 },
        roster: [
          { name: "Nate Benoit", number: 15, position: "D", year: "Fr", height: "6-0", weight: 183, dob: "11/26/2002", nhlDraft: "2021-MIN-6" },
          { name: "Logan Britt", number: 6, position: "D", year: "Gr", height: "6-2", weight: 185, dob: "2/10/1999" },
          { name: "Tanner Komzak", number: 10, position: "D", year: "Fr", height: "6-4", weight: 207, dob: "6/30/2002" },
          { name: "Jake Livanavage", number: 4, position: "D", year: "Fr", height: "5-10", weight: 183, dob: "5/6/2004" },
          { name: "Keaton Pehrson", number: 20, position: "D", year: "Gr", height: "6-2", weight: 206, dob: "12/10/1998" },
          { name: "Garrett Pyke", number: 7, position: "D", year: "Sr", height: "6-0", weight: 190, dob: "8/1/1999" },
          { name: "Abram Wiebe", number: 25, position: "D", year: "Fr", height: "6-2", weight: 200, dob: "8/28/2003", nhlDraft: "2022-VGK-7" },
          { name: "Bennett Zmolek", number: 2, position: "D", year: "Jr", height: "6-2", weight: 193, dob: "4/17/2002" },
          { name: "Carson Albrecht", number: 13, position: "F", year: "Gr", height: "5-10", weight: 190, dob: "5/23/1998" },
          { name: "Cameron Berg", number: 14, position: "F", year: "Jr", height: "5-11", weight: 200, dob: "1/29/2002", nhlDraft: "2021-NYI-4" },
          { name: "Jackson Blake", number: 9, position: "F", year: "So", height: "5-11", weight: 173, dob: "8/3/2003", nhlDraft: "2021-CAR-4" },
          { name: "Michael Emerson", number: 24, position: "F", year: "Fr", height: "6-1", weight: 190, dob: "12/26/2003", nhlDraft: "2023-CAR-6" },
          { name: "Riese Gaber", number: 17, position: "F", year: "Sr", height: "5-8", weight: 170, dob: "10/10/1999" },
          { name: "Louis Jamernik V", number: 27, position: "F", year: "Sr", height: "5-11", weight: 203, dob: "2/22/2000" },
          { name: "Dylan James", number: 26, position: "F", year: "So", height: "6-0", weight: 178, dob: "10/12/2003", nhlDraft: "2022-DET-2" },
          { name: "Hunter Johannes", number: 28, position: "F", year: "Gr", height: "6-3", weight: 217, dob: "7/24/1998" },
          { name: "Jackson Kunz", number: 29, position: "F", year: "Jr", height: "6-3", weight: 224, dob: "8/13/2002", nhlDraft: "2020-VAN-4" },
          { name: "Owen McLaughlin", number: 22, position: "F", year: "So", height: "6-0", weight: 172, dob: "3/25/2003", nhlDraft: "2021-PHI-7" },
          { name: "Dane Montgomery", number: 5, position: "F", year: "Jr", height: "5-10", weight: 169, dob: "1/7/2002" },
          { name: "Griffin Ness", number: 11, position: "F", year: "Sr", height: "6-0", weight: 184, dob: "12/10/1999" },
          { name: "Jayden Perron", number: 18, position: "F", year: "Fr", height: "5-9", weight: 160, dob: "1/11/2005", nhlDraft: "2023-CAR-3" },
          { name: "Jake Schmaltz", number: 8, position: "F", year: "Jr", height: "6-2", weight: 186, dob: "4/24/2001", nhlDraft: "2019-BOS-7" },
          { name: "Ben Strinden", number: 21, position: "F", year: "So", height: "6-1", weight: 201, dob: "6/4/2002", nhlDraft: "2022-NSH-7" },
          { name: "Hobie Hedquist", number: 30, position: "G", year: "Fr", height: "6-2", weight: 191, dob: "2/14/2003" },
          { name: "Kaleb Johnson", number: 1, position: "G", year: "So", height: "6-0", weight: 181, dob: "1/7/2001" },
          { name: "Ludvig Persson", number: 32, position: "G", year: "Sr", height: "6-0", weight: 181, dob: "10/6/1999" }
        ]
      },
      



      "omaha": {
        name: "Omaha",
        logo: require('../assets/images/TeamLogos/NCHC/Omaha.png'),
        record: { W: 17, L: 18, T: 2 },
        roster: [
          { name: "Noah Ellis", number: 15, position: "D", year: "So", height: "6-2", weight: 192, dob: "2/1/2002", nhlDraft: "2020-VGK-6" },
          { name: "Jacob Guevin", number: 10, position: "D", year: "So", height: "5-11", weight: 182, dob: "1/17/2003" },
          { name: "Nolan Krenzen", number: 12, position: "D", year: "Sr", height: "5-9", weight: 180, dob: "7/13/2001" },
          { name: "Joaquim Lemay", number: 2, position: "D", year: "So", height: "6-1", weight: 172, dob: "7/28/2002", nhlDraft: "2021-WSH-4" },
          { name: "Griffin Ludtke", number: 7, position: "D", year: "So", height: "5-10", weight: 171, dob: "2/1/2003" },
          { name: "Victor Mancini", number: 23, position: "D", year: "Jr", height: "6-4", weight: 215, dob: "5/26/2002", nhlDraft: "2022-NYR-5" },
          { name: "Kirby Proctor", number: 3, position: "D", year: "Gr", height: "6-3", weight: 197, dob: "4/20/2001" },
          { name: "Dominic Vidoli", number: 9, position: "D", year: "Gr", height: "6-0", weight: 190, dob: "6/23/1999" },
          { name: "Michael Abgrall", number: 18, position: "F", year: "So", height: "5-10", weight: 170, dob: "10/25/2003" },
          { name: "Brock Bremer", number: 26, position: "F", year: "Sr", height: "5-5", weight: 140, dob: "8/26/1999" },
          { name: "Ray Fust", number: 8, position: "F", year: "So", height: "6-3", weight: 205, dob: "10/23/2002" },
          { name: "Jimmy Glynn", number: 22, position: "F", year: "Sr", height: "5-10", weight: 180, dob: "2/24/2000" },
          { name: "Jesse Lansdell", number: 14, position: "F", year: "Gr", height: "5-11", weight: 185, dob: "8/5/1998" },
          { name: "Tanner Ludtke", number: 71, position: "F", year: "Fr", height: "6-0", weight: 180, dob: "11/27/2004", nhlDraft: "2023-ARI-3" },
          { name: "Charlie Lurie", number: 24, position: "F", year: "Fr", height: "5-11", weight: 187, dob: "3/11/2003" },
          { name: "Matt Miller", number: 27, position: "F", year: "Sr", height: "6-2", weight: 194, dob: "9/4/1999" },
          { name: "Cam Mitchell", number: 16, position: "F", year: "So", height: "5-9", weight: 170, dob: "3/9/2001" },
          { name: "Ty Mueller", number: 19, position: "F", year: "Jr", height: "5-11", weight: 200, dob: "2/26/2003", nhlDraft: "2023-VAN-4" },
          { name: "Jack Randl", number: 28, position: "F", year: "Gr", height: "5-10", weight: 175, dob: "5/7/2000" },
          { name: "Tyler Rollwagen", number: 21, position: "F", year: "So", height: "5-11", weight: 181, dob: "3/20/2001" },
          { name: "Jacob Slipec", number: 13, position: "F", year: "So", height: "5-11", weight: 180, dob: "12/5/2001" },
          { name: "Nolan Sullivan", number: 11, position: "F", year: "Gr", height: "5-11", weight: 203, dob: "5/26/1999" },
          { name: "Zach Urdahl", number: 6, position: "F", year: "Jr", height: "6-1", weight: 195, dob: "10/13/2001" },
          { name: "Will Craig", number: 1, position: "G", year: "Fr", height: "6-2", weight: 229, dob: "5/16/2002" },
          { name: "Seth Eisele", number: 32, position: "G", year: "Gr", height: "6-5", weight: 195, dob: "10/30/1998" },
          { name: "Simon Latkoczy", number: 30, position: "G", year: "So", height: "5-11", weight: 175, dob: "6/1/2002" }
        ]
      },
      




      "st.-cloud-state": {
        name: "St. Cloud State",
        logo: require('../assets/images/TeamLogos/NCHC/StCloud.png'),
        record: { W: 18, L: 19, T: 2 },
        roster: [
          { name: "Dylan Anhorn", number: 4, position: "D", year: "Gr", height: "6-0", weight: 185, dob: "1/21/1999" },
          { name: "Warren Clark", number: 5, position: "D", year: "Fr", height: "6-3", weight: 195, dob: "8/31/2004", nhlDraft: "2023-TBL-6" },
          { name: "Tynan Ewart", number: 8, position: "D", year: "Fr", height: "6-2", weight: 160, dob: "2/26/2002" },
          { name: "Karl Falk", number: 2, position: "D", year: "Sr", height: "6-3", weight: 205, dob: "1/20/2000" },
          { name: "Josh Luedtke", number: 21, position: "D", year: "Jr", height: "5-9", weight: 175, dob: "9/29/2000" },
          { name: "Jack Peart", number: 23, position: "D", year: "Jr", height: "5-11", weight: 175, dob: "5/15/2003", nhlDraft: "2021-MIN-2" },
          { name: "Mason Reiners", number: 6, position: "D", year: "So", height: "6-1", weight: 195, dob: "5/3/2001" },
          { name: "Kaleb Tiessen", number: 27, position: "D", year: "Fr", height: "6-5", weight: 210, dob: "6/3/2002" },
          { name: "Cooper Wylie", number: 26, position: "D", year: "So", height: "6-1", weight: 190, dob: "10/26/2001" },
          { name: "Grant Ahcan", number: 11, position: "F", year: "So", height: "5-10", weight: 160, dob: "5/18/2002" },
          { name: "Ethan AuCoin", number: 17, position: "F", year: "So", height: "6-1", weight: 170, dob: "8/10/2002" },
          { name: "Tyson Gross", number: 13, position: "F", year: "Fr", height: "6-3", weight: 180, dob: "9/23/2002" },
          { name: "Barrett Hall", number: 15, position: "F", year: "Fr", height: "6-0", weight: 170, dob: "12/29/2003", nhlDraft: "2022-SEA-6" },
          { name: "Adam Ingram", number: 34, position: "F", year: "So", height: "6-1", weight: 175, dob: "10/14/2003", nhlDraft: "2022-NSH-3" },
          { name: "Kyler Kupka", number: 10, position: "F", year: "Gr", height: "6-0", weight: 185, dob: "5/11/1999" },
          { name: "Veeti Miettinen", number: 29, position: "F", year: "Sr", height: "5-9", weight: 160, dob: "9/20/2001", nhlDraft: "2020-TOR-6" },
          { name: "Verner Miettinen", number: 19, position: "F", year: "Fr", height: "5-11", weight: 165, dob: "4/7/2003" },
          { name: "Joey Molenaar", number: 22, position: "F", year: "Sr", height: "6-1", weight: 175, dob: "10/16/1999" },
          { name: "Zach Okabe", number: 14, position: "F", year: "Gr", height: "5-9", weight: 170, dob: "1/4/2001" },
          { name: "Nick Portz", number: 18, position: "F", year: "Sr", height: "5-11", weight: 174, dob: "5/15/2000" },
          { name: "Jack Reimann", number: 7, position: "F", year: "Fr", height: "6-0", weight: 190, dob: "10/10/2002" },
          { name: "Jack Rogers", number: 20, position: "F", year: "So", height: "6-1", weight: 190, dob: "9/23/2002" },
          { name: "Ryan Rosborough", number: 12, position: "F", year: "Jr", height: "6-3", weight: 190, dob: "5/24/2000" },
          { name: "Mason Salquist", number: 16, position: "F", year: "Jr", height: "5-8", weight: 165, dob: "3/21/2000" },
          { name: "Dominic Basse", number: 31, position: "G", year: "Sr", height: "6-6", weight: 185, dob: "4/22/2001", nhlDraft: "2019-CHI-6" },
          { name: "James Gray", number: 1, position: "G", year: "Fr", height: "6-2", weight: 190, dob: "5/24/2002" },
          { name: "Isak Posch", number: 30, position: "G", year: "Fr", height: "6-3", weight: 210, dob: "1/31/2002" }
        ]
      },
      




      "western-michigan": {
        name: "Western Michigan",
        logo: require('../assets/images/TeamLogos/NCHC/Western.png'),
        record: { W: 15, L: 20, T: 1 },
        roster: [
          { name: "Jacob Bauer", number: 2, position: "D", year: "Sr", height: "6-3", weight: 202, dob: "2/25/2002" },
          { name: "Carter Berger", number: 23, position: "D", year: "Gr", height: "6-0", weight: 185, dob: "9/17/1999", nhlDraft: "2019-FLA-4" },
          { name: "Cole Crusberg-Roseen", number: 3, position: "D", year: "Fr", height: "5-11", weight: 184, dob: "4/14/2002" },
          { name: "Cedric Fiedler", number: 17, position: "D", year: "Sr", height: "6-3", weight: 204, dob: "4/20/2001" },
          { name: "Zak Galambos", number: 4, position: "D", year: "Gr", height: "6-2", weight: 190, dob: "5/27/1997" },
          { name: "Daniel Hilsendager", number: 15, position: "D", year: "Sr", height: "6-1", weight: 200, dob: "3/30/2000" },
          { name: "Jacob Napier", number: 6, position: "D", year: "Fr", height: "6-2", weight: 190, dob: "3/31/2003" },
          { name: "Samuel Sjolund", number: 33, position: "D", year: "So", height: "6-1", weight: 175, dob: "5/19/2001" },
          { name: "Trevor Bishop", number: 22, position: "F", year: "Sr", height: "6-0", weight: 185, dob: "1/23/1999" },
          { name: "Alex Bump", number: 20, position: "F", year: "Fr", height: "6-0", weight: 194, dob: "11/20/2003", nhlDraft: "2022-PHI-5" },
          { name: "Cole Burtch", number: 27, position: "F", year: "Fr", height: "5-10", weight: 170, dob: "1/11/2001" },
          { name: "Joe Cassetti", number: 8, position: "F", year: "Gr", height: "6-4", weight: 205, dob: "2/28/1999" },
          { name: "Sam Colangelo", number: 12, position: "F", year: "Gr", height: "6-3", weight: 208, dob: "12/26/2001", nhlDraft: "2020-ANA-2" },
          { name: "Matteo Costantini", number: 25, position: "F", year: "Sr", height: "6-1", weight: 192, dob: "8/16/2002", nhlDraft: "2020-BUF-5" },
          { name: "Luke Grainger", number: 9, position: "F", year: "Sr", height: "5-10", weight: 180, dob: "9/3/1999" },
          { name: "Chad Hillebrand", number: 10, position: "F", year: "Sr", height: "6-4", weight: 200, dob: "1/22/1999" },
          { name: "Cam Knuble", number: 19, position: "F", year: "Sr", height: "6-0", weight: 200, dob: "7/23/2000" },
          { name: "Hugh Larkin", number: 28, position: "F", year: "Sr", height: "6-2", weight: 205, dob: "3/27/1999" },
          { name: "Oliver MacDonald", number: 13, position: "F", year: "Sr", height: "5-10", weight: 185, dob: "11/7/2000" },
          { name: "Owen Michaels", number: 34, position: "F", year: "Fr", height: "6-1", weight: 190, dob: "5/1/2002" },
          { name: "Ethan Phillips", number: 29, position: "F", year: "Gr", height: "5-9", weight: 155, dob: "5/7/2001", nhlDraft: "2019-DET-4" },
          { name: "Wyatt Schingoethe", number: 18, position: "F", year: "Jr", height: "5-11", weight: 180, dob: "8/3/2002", nhlDraft: "2020-TOR-7" },
          { name: "Ean Somoza", number: 26, position: "F", year: "Fr", height: "6-3", weight: 195, dob: "2/8/2003" },
          { name: "Garrett Szydlowski", number: 24, position: "F", year: "Fr", height: "5-10", weight: 180, dob: "6/12/2002" },
          { name: "Tim Washe", number: 16, position: "F", year: "Sr", height: "6-3", weight: 210, dob: "8/25/2001" },
          { name: "Dylan Wendt", number: 37, position: "F", year: "Jr", height: "6-1", weight: 185, dob: "1/9/2001" },
          { name: "Ethan Wolthers", number: 11, position: "F", year: "So", height: "5-8", weight: 155, dob: "7/19/2001" },
          { name: "Kirk Laursen", number: 1, position: "G", year: "So", height: "6-3", weight: 185, dob: "1/2/2000" },
          { name: "Cameron Rowe", number: 31, position: "G", year: "Sr", height: "6-3", weight: 210, dob: "6/1/2001" },
          { name: "Dawson Smith", number: 30, position: "G", year: "Fr", height: "6-4", weight: 195, dob: "2/17/2003" }
        ]
      },
      
};

  
export default nchcTeams;