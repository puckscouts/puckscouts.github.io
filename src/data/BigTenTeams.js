const bigTenTeams = {
    michigan: {
      name: "Michigan",
      logo: require('../assets/images/TeamLogos/BigTen/Michigan.png'),
      record: { W: 23, L: 15, T: 3 },
      roster: [
        { name: "Andrew Albano", number: 29, position: "G", year: "Gr", height: "6-0", weight: 175, dob: "11/9/1998" },
        { name: "Jake Barczewski", number: 30, position: "G", year: "Gr", height: "6-1", weight: 175, dob: "1/7/1999" },
        { name: "Noah West", number: 31, position: "G", year: "Sr", height: "6-2", weight: 185, dob: "11/25/2000" },
        { name: "Gavin Brindley", number: 4, position: "F", year: "So", height: "5-9", weight: 170, dob: "10/5/2004", nhlDraft: "2023-CBJ-2" },
        { name: "Kienan Draper", number: 33, position: "F", year: "So", height: "6-2", weight: 205, dob: "2/19/2002" },
        { name: "Dylan Duke", number: 25, position: "F", year: "Jr", height: "5-10", weight: 181, dob: "3/4/2003", nhlDraft: "2021-TBL-4" },
        { name: "Josh Eernisse", number: 6, position: "F", year: "Fr", height: "6-2", weight: 205, dob: "12/31/2001" },
        { name: "Mark Estapa", number: 94, position: "F", year: "Jr", height: "6-2", weight: 197, dob: "1/13/2002" },
        { name: "Jackson Hallum", number: 21, position: "F", year: "So", height: "6-0", weight: 183, dob: "9/8/2002", nhlDraft: "2020-VGK-3" },
        { name: "T.J. Hughes", number: 13, position: "F", year: "So", height: "6-0", weight: 185, dob: "11/9/2001" },
        { name: "Philippe Lapointe", number: 22, position: "F", year: "Sr", height: "5-11", weight: 185, dob: "2/29/2000" },
        { name: "Rutger McGroarty", number: 2, position: "F", year: "So", height: "6-1", weight: 200, dob: "3/30/2004", nhlDraft: "2022-WPG-1" },
        { name: "Nick Moldenhauer", number: 9, position: "F", year: "Fr", height: "5-10", weight: 170, dob: "5/25/2004", nhlDraft: "2022-TOR-3" },
        { name: "Frank Nazar III", number: 91, position: "F", year: "So", height: "5-10", weight: 175, dob: "1/14/2004", nhlDraft: "2022-CHI-1" },
        { name: "Chase Pletzke", number: 23, position: "F", year: "Gr", height: "5-11", weight: 175, dob: "4/10/2000" },
        { name: "Tanner Rowe", number: 20, position: "F", year: "Fr", height: "6-1", weight: 179, dob: "8/26/2002" },
        { name: "Garrett Schifsky", number: 17, position: "F", year: "Fr", height: "5-9", weight: 174, dob: "4/8/2003" },
        { name: "Seamus Casey", number: 26, position: "D", year: "So", height: "5-10", weight: 178, dob: "1/8/2004", nhlDraft: "2022-NJD-2" },
        { name: "Tyler Duke", number: 5, position: "D", year: "Jr", height: "5-9", weight: 180, dob: "7/19/2004" },
        { name: "Ethan Edwards", number: 73, position: "D", year: "Jr", height: "5-11", weight: 185, dob: "6/6/2002", nhlDraft: "2020-NJD-4" },
        { name: "Luca Fantilli", number: 63, position: "D", year: "So", height: "6-0", weight: 183, dob: "12/30/2002" },
        { name: "Steven Holtz", number: 24, position: "D", year: "Sr", height: "6-4", weight: 200, dob: "4/2/1999" },
        { name: "Brendan Miles", number: 12, position: "D", year: "So", height: "6-1", weight: 175, dob: "12/12/2001" },
        { name: "Josh Orrico", number: 68, position: "D", year: "Fr", height: "5-9", weight: 165, dob: "6/15/2003" },
        { name: "Jacob Truscott", number: 15, position: "D", year: "Sr", height: "6-1", weight: 193, dob: "4/12/2002", nhlDraft: "2020-VAN-5" },
        { name: "Marshall Warren", number: 77, position: "D", year: "Gr", height: "5-11", weight: 180, dob: "4/20/2001", nhlDraft: "2019-MIN-6" }
      ]
    },

    "michigan-state": {
        name: "Michigan State",
        logo: require('../assets/images/TeamLogos/BigTen/MSU.png'),
        record: { W: 25, L: 10, T: 3 },
        roster: [
          { name: "Trey Augustine", number: 1, position: "G", year: "Fr", height: "6-1", weight: 179, dob: "2/23/2005", nhlDraft: "2023-DET-2" },
          { name: "Luca Di Pasquo", number: 31, position: "G", year: "Fr", height: "6-0", weight: 201, dob: "9/24/2003" },
          { name: "Jon Mor", number: 30, position: "G", year: "Sr", height: "6-2", weight: 200, dob: "7/20/2000" },
          { name: "Owen Baker", number: 16, position: "F", year: "Fr", height: "5-10", weight: 185, dob: "1/29/2004" },
          { name: "Gavin Best", number: 27, position: "F", year: "So", height: "6-2", weight: 187, dob: "8/24/2001" },
          { name: "Jeremy Davidson", number: 11, position: "F", year: "Sr", height: "5-10", weight: 170, dob: "2/28/2000" },
          { name: "Karsen Dorwart", number: 28, position: "F", year: "So", height: "6-1", weight: 191, dob: "9/17/2002" },
          { name: "Isaac Howard", number: 22, position: "F", year: "Jr", height: "5-11", weight: 190, dob: "3/30/2004", nhlDraft: "2022-TBL-1" },
          { name: "Griffin Jurecki", number: 12, position: "F", year: "Fr", height: "5-10", weight: 182, dob: "5/3/2003" },
          { name: "Tanner Kelly", number: 26, position: "F", year: "Jr", height: "5-10", weight: 165, dob: "5/11/2002" },
          { name: "Joey Larson", number: 18, position: "F", year: "So", height: "6-1", weight: 194, dob: "3/27/2001" },
          { name: "Reed Lebster", number: 23, position: "F", year: "Gr", height: "6-0", weight: 188, dob: "3/4/1999" },
          { name: "Tommi Männistö", number: 10, position: "F", year: "Fr", height: "6-0", weight: 185, dob: "2/7/2004" },
          { name: "Nicolas Muller", number: 19, position: "F", year: "Gr", height: "6-0", weight: 188, dob: "6/21/1999" },
          { name: "Gavin O'Connell", number: 29, position: "F", year: "Fr", height: "6-0", weight: 181, dob: "2/19/2004" },
          { name: "Daniel Russell", number: 20, position: "F", year: "So", height: "5-9", weight: 153, dob: "11/16/2001" },
          { name: "Red Savage", number: 21, position: "F", year: "Jr", height: "5-11", weight: 185, dob: "5/15/2003", nhlDraft: "2021-DET-4" },
          { name: "Tiernan Shoudy", number: 13, position: "F", year: "So", height: "5-9", weight: 180, dob: "3/15/2002" },
          { name: "Matt Basgall", number: 9, position: "D", year: "So", height: "5-9", weight: 190, dob: "8/16/2002" },
          { name: "James Crossman", number: 24, position: "D", year: "Sr", height: "6-3", weight: 200, dob: "11/23/1998" },
          { name: "Patrick Geary", number: 2, position: "D", year: "Fr", height: "6-1", weight: 185, dob: "2/18/2004", nhlDraft: "2024-BUF-6" },
          { name: "David Gucciardi", number: 7, position: "D", year: "Jr", height: "6-1", weight: 190, dob: "10/9/2002", nhlDraft: "2022-WSH-7" },
          { name: "Viktor Hurtig", number: 3, position: "D", year: "So", height: "6-6", weight: 191, dob: "4/28/2002" },
          { name: "Artyom Levshunov", number: 5, position: "D", year: "Fr", height: "6-2", weight: 198, dob: "10/28/2005", nhlDraft: "2024-CHI-1" },
          { name: "Nash Nienhuis", number: 4, position: "D", year: "Sr", height: "5-10", weight: 185, dob: "12/5/1999" },
          { name: "Austin Oravetz", number: 6, position: "D", year: "Fr", height: "5-9", weight: 192, dob: "9/26/2003" },
          { name: "Maxim Štrbák", number: 8, position: "D", year: "Fr", height: "6-2", weight: 205, dob: "4/13/2005", nhlDraft: "2023-BUF-2" }
        ]
      },





      minnesota: {
        name: "Minnesota",
        logo: require('../assets/images/TeamLogos/BigTen/Minnesota.png'),
        record: { W: 23, L: 11, T: 5 },
        roster: [
            { name: "Nathan Airey", number: 29, position: "G", year: "Fr", height: "6-3", weight: 190, dob: "4/24/2003" },
            { name: "Matt Bryant", number: 35, position: "G", year: "So", height: "6-1", weight: 170, dob: "4/15/2003" },
            { name: "Justen Close", number: 1, position: "G", year: "Gr", height: "5-10", weight: 175, dob: "5/20/1998" },
            { name: "Zach Wiese", number: 30, position: "G", year: "So", height: "5-10", weight: 210, dob: "1/2/2002" },
            { name: "Axel Begley", number: 33, position: "D", year: "Fr", height: "6-2", weight: 200, dob: "12/16/2003" },
            { name: "Ryan Chesley", number: 71, position: "D", year: "So", height: "6-0", weight: 200, dob: "2/27/2004", nhlDraft: "2022-WSH-2" },
            { name: "Carl Fish", number: 26, position: "D", year: "Sr", height: "6-3", weight: 210, dob: "11/9/1999" },
            { name: "Mike Koster", number: 4, position: "D", year: "Sr", height: "5-10", weight: 180, dob: "4/13/2001", nhlDraft: "2019-TOR-5" },
            { name: "Luke Mittelstadt", number: 20, position: "D", year: "So", height: "5-11", weight: 175, dob: "1/22/2003", nhlDraft: "2023-MTL-7" },
            { name: "Sam Rinzel", number: 5, position: "D", year: "Fr", height: "6-4", weight: 185, dob: "6/25/2004", nhlDraft: "2022-CHI-1" },
            { name: "Max Rud", number: 15, position: "D", year: "Fr", height: "6-3", weight: 185, dob: "9/17/2003" },
            { name: "Cal Thomas", number: 6, position: "D", year: "So", height: "6-0", weight: 185, dob: "5/8/2003", nhlDraft: "2021-ARI-6" },
            { name: "Bryce Brodzinski", number: 22, position: "F", year: "Gr", height: "6-0", weight: 205, dob: "8/9/2000", nhlDraft: "2019-PHI-7" },
            { name: "Jimmy Clark", number: 23, position: "F", year: "Fr", height: "6-0", weight: 180, dob: "9/24/2004", nhlDraft: "2023-MIN-7" },
            { name: "Aaron Huglen", number: 7, position: "F", year: "Jr", height: "6-0", weight: 170, dob: "3/6/2001", nhlDraft: "2019-BUF-4" },
            { name: "Connor Kurth", number: 10, position: "F", year: "So", height: "6-0", weight: 210, dob: "7/30/2003", nhlDraft: "2022-TBL-6" },
            { name: "Brody Lamb", number: 17, position: "F", year: "So", height: "6-1", weight: 175, dob: "8/30/2003", nhlDraft: "2021-NYR-4" },
            { name: "Nick Michel", number: 9, position: "F", year: "Gr", height: "5-11", weight: 180, dob: "3/16/1999" },
            { name: "John Mittelstadt", number: 19, position: "F", year: "So", height: "5-9", weight: 175, dob: "10/1/2001" },
            { name: "Oliver Moore", number: 11, position: "F", year: "Fr", height: "5-11", weight: 190, dob: "1/22/2005", nhlDraft: "2023-CHI-1" },
            { name: "Jaxon Nelson", number: 24, position: "F", year: "Gr", height: "6-4", weight: 225, dob: "3/30/2000" },
            { name: "Mason Nevers", number: 18, position: "F", year: "Sr", height: "5-11", weight: 175, dob: "4/3/2001" },
            { name: "Garrett Pinoniemi", number: 13, position: "F", year: "So", height: "6-0", weight: 170, dob: "7/15/2001" },
            { name: "Rhett Pitlick", number: 77, position: "F", year: "Jr", height: "5-10", weight: 165, dob: "2/7/2001", nhlDraft: "2019-MTL-5" },
            { name: "Jimmy Snuggerud", number: 81, position: "F", year: "So", height: "6-1", weight: 185, dob: "6/1/2004", nhlDraft: "2022-STL-1" },
            { name: "Charlie Strobel", number: 27, position: "F", year: "So", height: "6-1", weight: 190, dob: "7/9/2001" }
        ]
    },





    "notre-dame": {
        name: "Notre Dame",
        logo: require('../assets/images/TeamLogos/BigTen/NotreDame.png'),
        record: { W: 15, L: 19, T: 2 },
        roster: [
            { name: "Ryan Bischel", number: 30, position: "G", year: "Gr", height: "6-1", weight: 187, dob: "7/5/1999" },
            { name: "Josh Graziano", number: 33, position: "G", year: "Sr", height: "6-3", weight: 202, dob: "3/22/2000" },
            { name: "Brayden Napoli", number: 34, position: "G", year: "Sr", height: "6-0", weight: 170, dob: "6/19/2002" },
            { name: "Jack Williams", number: 29, position: "G", year: "So", height: "6-3", weight: 187, dob: "6/21/2001" },
            { name: "Drew Bavaro", number: 24, position: "D", year: "Jr", height: "6-3", weight: 185, dob: "6/10/2000" },
            { name: "Jake Boltmann", number: 6, position: "D", year: "Jr", height: "6-1", weight: 192, dob: "10/19/2001", nhlDraft: "2020-CGY-3" },
            { name: "Paul Fischer", number: 16, position: "D", year: "Fr", height: "6-0", weight: 183, dob: "1/30/2005", nhlDraft: "2023-STL-5" },
            { name: "Ryan Helliwell", number: 17, position: "D", year: "Jr", height: "6-0", weight: 192, dob: "8/5/2002" },
            { name: "Michael Mastrodomenico", number: 4, position: "D", year: "So", height: "6-0", weight: 205, dob: "4/19/2004" },
            { name: "Henry Nelson", number: 12, position: "D", year: "Fr", height: "6-1", weight: 174, dob: "3/25/2003" },
            { name: "Zach Plucinski", number: 26, position: "D", year: "Sr", height: "6-1", weight: 200, dob: "7/26/2000" },
            { name: "Ryan Siedem", number: 2, position: "D", year: "Gr", height: "6-2", weight: 192, dob: "2/25/2001" },
            { name: "Hunter Weiss", number: 3, position: "D", year: "Jr", height: "6-3", weight: 213, dob: "3/29/2001" },
            { name: "Brennan Ali", number: 13, position: "F", year: "Fr", height: "6-0", weight: 194, dob: "2/9/2004", nhlDraft: "2022-DET-7" },
            { name: "Brady Bjork", number: 23, position: "F", year: "Sr", height: "6-1", weight: 177, dob: "5/17/1999" },
            { name: "Tyler Carpenter", number: 28, position: "F", year: "Jr", height: "5-11", weight: 185, dob: "8/27/2000" },
            { name: "Jayden Davis", number: 15, position: "F", year: "Fr", height: "5-11", weight: 185, dob: "3/2/2003" },
            { name: "Maddox Fleming", number: 14, position: "F", year: "Fr", height: "6-1", weight: 194, dob: "2/13/2004" },
            { name: "Justin Janicke", number: 8, position: "F", year: "Jr", height: "6-0", weight: 184, dob: "6/30/2003", nhlDraft: "2021-SEA-7" },
            { name: "Trevor Janicke", number: 27, position: "F", year: "Gr", height: "5-10", weight: 195, dob: "12/25/2000", nhlDraft: "2019-ANA-5" },
            { name: "Niko Jovanovic", number: 20, position: "F", year: "So", height: "6-4", weight: 216, dob: "6/13/2002" },
            { name: "Cole Knuble", number: 22, position: "F", year: "Fr", height: "5-11", weight: 185, dob: "7/1/2004", nhlDraft: "2023-PHL-4" },
            { name: "Patrick Moynihan", number: 18, position: "F", year: "Fr", height: "5-11", weight: 186, dob: "1/23/2001", nhlDraft: "2019-NJD-6" },
            { name: "Danny Nelson", number: 11, position: "F", year: "Fr", height: "6-3", weight: 203, dob: "8/3/2005", nhlDraft: "2023-NYI-2" },
            { name: "Grant Silianoff", number: 9, position: "F", year: "Sr", height: "5-11", weight: 170, dob: "1/4/2001" },
            { name: "Landon Slaggert", number: 19, position: "F", year: "Sr", height: "6-0", weight: 190, dob: "6/25/2002", nhlDraft: "2020-CHI-3" },
            { name: "Carter Slaggert", number: 25, position: "F", year: "Fr", height: "5-9", weight: 172, dob: "3/4/2005" },
            { name: "Hunter Strand", number: 10, position: "F", year: "Jr", height: "5-11", weight: 187, dob: "11/13/2002" },
            { name: "Fin Williams", number: 21, position: "F", year: "So", height: "6-1", weight: 186, dob: "4/21/2003" }
        ]
    },




    "ohio-state": {
        name: "Ohio State",
        logo: require('../assets/images/TeamLogos/BigTen/OSU.png'),
        record: { W: 14, L: 20, T: 4 },
        roster: [
            { name: "Kristoffer Eberly", number: 60, position: "G", year: "Fr", height: "6-4", weight: 208, dob: "12/10/2002" },
            { name: "Reilly Herbst", number: 34, position: "G", year: "Jr", height: "6-0", weight: 185, dob: "2/17/2000" },
            { name: "Logan Terness", number: 1, position: "G", year: "Sr", height: "6-0", weight: 175, dob: "9/18/2002" },
            { name: "Scooter Brickey", number: 8, position: "D", year: "Gr", height: "6-4", weight: 215, dob: "5/27/1999" },
            { name: "Damien Carfagna", number: 93, position: "D", year: "So", height: "6-0", weight: 185, dob: "12/12/2002" },
            { name: "Brent Johnson", number: 7, position: "D", year: "Jr", height: "6-0", weight: 185, dob: "3/20/2003", nhlDraft: "2021-WSH-3" },
            { name: "Mason Klee", number: 6, position: "D", year: "Gr", height: "6-2", weight: 195, dob: "10/4/1999" },
            { name: "John Larkin", number: 4, position: "D", year: "So", height: "6-2", weight: 190, dob: "1/26/2001" },
            { name: "Nathan McBrayer", number: 2, position: "D", year: "Fr", height: "6-0", weight: 195, dob: "5/11/2004" },
            { name: "William Smith", number: 28, position: "D", year: "Fr", height: "6-1", weight: 195, dob: "3/29/2003" },
            { name: "Theo Wallberg", number: 44, position: "D", year: "Fr", height: "6-5", weight: 203, dob: "12/4/2003" },
            { name: "Caden Brown", number: 12, position: "F", year: "Jr", height: "5-11", weight: 185, dob: "6/22/2003" },
            { name: "Davis Burnside", number: 23, position: "F", year: "So", height: "6-0", weight: 176, dob: "9/22/2003" },
            { name: "Matt Cassidy", number: 20, position: "F", year: "Gr", height: "6-0", weight: 187, dob: "7/31/1999" },
            { name: "Sam Deckhut", number: 25, position: "F", year: "Fr", height: "5-11", weight: 195, dob: "4/2/2002" },
            { name: "Joe Dunlap", number: 21, position: "F", year: "Sr", height: "6-0", weight: 185, dob: "11/30/1999" },
            { name: "Jake Dunlap", number: 91, position: "F", year: "So", height: "5-9", weight: 175, dob: "12/5/2001" },
            { name: "Michael Gildon", number: 18, position: "F", year: "Sr", height: "6-2", weight: 196, dob: "6/21/2001" },
            { name: "Ryan Gordon", number: 29, position: "F", year: "Fr", height: "6-0", weight: 185, dob: "5/5/2002" },
            { name: "Patrick Guzzo", number: 71, position: "F", year: "Sr", height: "6-3", weight: 198, dob: "11/27/2001" },
            { name: "Stephen Halliday", number: 19, position: "F", year: "So", height: "6-4", weight: 210, dob: "7/2/2002", nhlDraft: "2022-OTT-4" },
            { name: "Riley Hughes", number: 9, position: "F", year: "Gr", height: "6-2", weight: 200, dob: "6/27/2000", nhlDraft: "2018-NYR-7" },
            { name: "Dalton Messina", number: 14, position: "F", year: "Gr", height: "5-11", weight: 195, dob: "3/29/1998" },
            { name: "Max Montes", number: 16, position: "F", year: "Fr", height: "5-8", weight: 165, dob: "9/1/2003" },
            { name: "Cam Thiesing", number: 15, position: "F", year: "Jr", height: "6-0", weight: 184, dob: "3/26/2001" },
            { name: "Thomas Weis", number: 10, position: "F", year: "Fr", height: "5-10", weight: 180, dob: "2/8/2002" }
        ]
    },




    "penn-state": {
        name: "Penn State",
        logo: require('../assets/images/TeamLogos/BigTen/PSU.png'),
        record: { W: 15, L: 18, T: 3 },
        roster: [
            { name: "Doug Dorr", number: 30, position: "G", year: "Sr", height: "6-4", weight: 200, dob: "5/7/1999" },
            { name: "Noah Grannan", number: 33, position: "G", year: "So", height: "6-2", weight: 190, dob: "4/27/2002" },
            { name: "Liam Soulière", number: 31, position: "G", year: "Sr", height: "5-11", weight: 180, dob: "3/16/1999" },
            { name: "Casey Aman", number: 3, position: "D", year: "Fr", height: "6-0", weight: 185, dob: "1/15/2003" },
            { name: "Christian Berger", number: 5, position: "D", year: "Sr", height: "6-0", weight: 182, dob: "5/22/2000" },
            { name: "Jarod Crespo", number: 24, position: "D", year: "So", height: "6-0", weight: 190, dob: "4/30/2002" },
            { name: "Jimmy Dowd, Jr.", number: 6, position: "D", year: "Sr", height: "5-9", weight: 165, dob: "7/19/2000" },
            { name: "Dylan Gratton", number: 25, position: "D", year: "So", height: "6-0", weight: 180, dob: "2/25/2003" },
            { name: "Simon Mack", number: 4, position: "D", year: "Jr", height: "5-10", weight: 180, dob: "3/29/2001" },
            { name: "Tanner Palocsik", number: 22, position: "D", year: "Gr", height: "5-11", weight: 190, dob: "5/26/1999" },
            { name: "Carter Schade", number: 2, position: "D", year: "So", height: "5-11", weight: 185, dob: "3/7/2003" },
            { name: "Jacques Bouquot", number: 27, position: "F", year: "Gr", height: "6-1", weight: 185, dob: "2/10/2000" },
            { name: "Matt DiMarsico", number: 14, position: "F", year: "Fr", height: "6-0", weight: 180, dob: "1/7/2004" },
            { name: "Dane Dowiak", number: 19, position: "F", year: "Fr", height: "5-10", weight: 180, dob: "3/27/2002" },
            { name: "Carson Dyck", number: 7, position: "F", year: "Jr", height: "6-0", weight: 180, dob: "6/7/2001" },
            { name: "Danny Dzhaniyev", number: 13, position: "F", year: "Jr", height: "5-4", weight: 145, dob: "9/15/2002" },
            { name: "Aiden Fink", number: 18, position: "F", year: "Fr", height: "5-10", weight: 160, dob: "11/24/2004", nhlDraft: "2023-NSH-7" },
            { name: "Ryan Kirwan", number: 11, position: "F", year: "Jr", height: "6-2", weight: 195, dob: "2/27/2002" },
            { name: "Xander Lamppa", number: 9, position: "F", year: "Sr", height: "6-1", weight: 205, dob: "4/30/2000" },
            { name: "Reese Laubach", number: 29, position: "F", year: "Fr", height: "6-0", weight: 170, dob: "11/20/2003", nhlDraft: "2022-SJS-7" },
            { name: "Dylan Lugris", number: 16, position: "F", year: "Jr", height: "6-2", weight: 185, dob: "6/23/2001" },
            { name: "Chase McLane", number: 17, position: "F", year: "Sr", height: "6-2", weight: 185, dob: "4/22/2000", nhlDraft: "2020-NSH-7" },
            { name: "Tyler Paquette", number: 23, position: "F", year: "Sr", height: "6-3", weight: 200, dob: "3/18/2001" },
            { name: "Christian Sarlo", number: 15, position: "F", year: "Sr", height: "6-0", weight: 190, dob: "6/29/2001" },
            { name: "Ben Schoen", number: 12, position: "F", year: "Jr", height: "5-8", weight: 150, dob: "5/18/2002" },
            { name: "Alex Servagno", number: 8, position: "F", year: "So", height: "5-9", weight: 170, dob: "6/16/2002" }
        ]
    },
    

    "wisconsin": {
        name: "Wisconsin",
        logo: require('../assets/images/TeamLogos/BigTen/Wisconsin.png'),
        record: { W: 26, L: 12, T: 2 },
        roster: [
            { name: "Ben Garrity", number: 33, position: "G", year: "Sr", height: "6-2", weight: 193, dob: "1/20/2000" },
            { name: "William Gramme", number: 34, position: "G", year: "Fr", height: "6-4", weight: 201, dob: "5/24/2002" },
            { name: "Kyle McClellan", number: 31, position: "G", year: "Sr", height: "6-1", weight: 185, dob: "3/18/1999" },
            { name: "Brady Cleveland", number: 6, position: "D", year: "Fr", height: "6-5", weight: 211, dob: "4/1/2005", nhlDraft: "2023-DET-2" },
            { name: "Ben Dexheimer", number: 4, position: "D", year: "So", height: "5-9", weight: 172, dob: "6/21/2002" },
            { name: "Tyson Jugnauth", number: 27, position: "D", year: "So", height: "6-0", weight: 162, dob: "4/17/2004", nhlDraft: "2022-SEA-4" },
            { name: "Anthony Kehrer", number: 24, position: "D", year: "Sr", height: "5-11", weight: 210, dob: "3/4/2002" },
            { name: "Daniel Laatsch", number: 2, position: "D", year: "Jr", height: "6-5", weight: 190, dob: "2/13/2002", nhlDraft: "2021-PIT-7" },
            { name: "Luke LaMaster", number: 26, position: "D", year: "Sr", height: "6-0", weight: 197, dob: "10/17/1999" },
            { name: "Joe Palodichuk", number: 14, position: "D", year: "Fr", height: "6-0", weight: 171, dob: "2/26/2003" },
            { name: "Zach Schulz", number: 5, position: "D", year: "Fr", height: "6-1", weight: 185, dob: "6/14/2005", nhlDraft: "2023-NYI-6" },
            { name: "Mike Vorlicky", number: 7, position: "D", year: "Gr", height: "6-1", weight: 203, dob: "7/17/2000" },
            { name: "Carson Bantle", number: 21, position: "F", year: "Sr", height: "6-5", weight: 207, dob: "1/22/2002", nhlDraft: "2020-ARI-5" },
            { name: "Mathieu De St. Phalle", number: 12, position: "F", year: "Sr", height: "5-9", weight: 170, dob: "3/20/2000" },
            { name: "Tyson Dyck", number: 16, position: "F", year: "Jr", height: "6-10", weight: 170, dob: "2/6/2004", nhlDraft: "2022-OTT-7" },
            { name: "Quinn Finley", number: 19, position: "F", year: "Fr", height: "6-0", weight: 179, dob: "8/8/2004", nhlDraft: "2022-NYI-3" },
            { name: "Christian Fitzgerald", number: 13, position: "F", year: "Jr", height: "6-0", weight: 178, dob: "5/31/2002" },
            { name: "Jack Horbach", number: 22, position: "F", year: "So", height: "5-11", weight: 176, dob: "5/4/2002" },
            { name: "Owen Lindmark", number: 18, position: "F", year: "Gr", height: "6-0", weight: 195, dob: "5/17/2001", nhlDraft: "2019-FLA-5" },
            { name: "Cruz Lucius", number: 51, position: "F", year: "So", height: "6-0", weight: 178, dob: "4/5/2004", nhlDraft: "2022-CAR-4" },
            { name: "Owen Mehlenbacher", number: 17, position: "F", year: "Fr", height: "6-2", weight: 189, dob: "1/26/2004", nhlDraft: "2022-DET-7" },
            { name: "Sawyer Scholl", number: 23, position: "F", year: "Fr", height: "6-2", weight: 190, dob: "2/14/2002" },
            { name: "David Silye", number: 15, position: "F", year: "Gr", height: "5-11", weight: 187, dob: "3/2/1999" },
            { name: "Sam Stange", number: 3, position: "F", year: "Sr", height: "6-1", weight: 200, dob: "4/20/2001", nhlDraft: "2020-DET-4" },
            { name: "Charlie Stramel", number: 9, position: "F", year: "So", height: "6-3", weight: 215, dob: "10/15/2004", nhlDraft: "2023-MIN-1" },
            { name: "Simon Tassy", number: 11, position: "F", year: "Jr", height: "6-2", weight: 190, dob: "3/21/2001" },
            { name: "William Whitelaw", number: 8, position: "F", year: "Fr", height: "5-9", weight: 173, dob: "2/5/2005", nhlDraft: "2023-CBJ-3" }
        ]
    }
    
    // Add other Big Ten teams here in a similar format
  };
  
  export default bigTenTeams;
