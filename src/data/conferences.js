// CONFERENCE IMPORTS
import atlanticLogo from '../assets/images/ConferenceLogos/Atlantic.png';
import bigTenLogo from '../assets/images/ConferenceLogos/BigTen.png';
import cchaLogo from '../assets/images/ConferenceLogos/CCHA.png';
import ecacLogo from '../assets/images/ConferenceLogos/ECAC.png';
import hockeyEastLogo from '../assets/images/ConferenceLogos/HEA.png';
import nchcLogo from '../assets/images/ConferenceLogos/NCHC.png';

// ATLANTIC IMPORTS
import aicLogo from '../assets/images/TeamLogos/Atlantic/AIC.png';
import airForceLogo from '../assets/images/TeamLogos/Atlantic/AirForce.png';
import armyLogo from '../assets/images/TeamLogos/Atlantic/Army.png';
import bentleyLogo from '../assets/images/TeamLogos/Atlantic/Bentley.png';
import canisiusLogo from '../assets/images/TeamLogos/Atlantic/Canisius.png';
import holyCrossLogo from '../assets/images/TeamLogos/Atlantic/HolyCross.png';
import mercyhurstLogo from '../assets/images/TeamLogos/Atlantic/Mercyhurst.png';
import niagaraLogo from '../assets/images/TeamLogos/Atlantic/Niagara.png';
import ritLogo from '../assets/images/TeamLogos/Atlantic/RIT.png';
import robertMorrisLogo from '../assets/images/TeamLogos/Atlantic/RobertMorris.png';
import sacredHeartLogo from '../assets/images/TeamLogos/Atlantic/SacredHeart.png';

// BIG TEN IMPORTS
import michiganLogo from '../assets/images/TeamLogos/BigTen/Michigan.png';
import minnesotaLogo from '../assets/images/TeamLogos/BigTen/Minnesota.png';
import msuLogo from '../assets/images/TeamLogos/BigTen/MSU.png';
import notreDameLogo from '../assets/images/TeamLogos/BigTen/NotreDame.png';
import osuLogo from '../assets/images/TeamLogos/BigTen/OSU.png';
import psuLogo from '../assets/images/TeamLogos/BigTen/PSU.png';
import wisconsinLogo from '../assets/images/TeamLogos/BigTen/Wisconsin.png';

// CCHA IMPORTS
import augustanaLogo from '../assets/images/TeamLogos/CCHA/Augustana.png';
import bemidjiLogo from '../assets/images/TeamLogos/CCHA/Bemidji.png';
import bgsuLogo from '../assets/images/TeamLogos/CCHA/BGSU.png';
import ferrisLogo from '../assets/images/TeamLogos/CCHA/Ferris.png';
import lssuLogo from '../assets/images/TeamLogos/CCHA/LSSU.png';
import mankatoLogo from '../assets/images/TeamLogos/CCHA/Mankato.png';
import michiganTechLogo from '../assets/images/TeamLogos/CCHA/MichiganTech.png';
import nmuLogo from '../assets/images/TeamLogos/CCHA/NMU.png';
import stThomasLogo from '../assets/images/TeamLogos/CCHA/StThomas.png';

// ECAC IMPORTS
import brownLogo from '../assets/images/TeamLogos/ECAC/Brown.png';
import clarksonLogo from '../assets/images/TeamLogos/ECAC/Clarkson.png';
import colgateLogo from '../assets/images/TeamLogos/ECAC/Colgate.png';
import cornellLogo from '../assets/images/TeamLogos/ECAC/Cornell.png';
import dartmouthLogo from '../assets/images/TeamLogos/ECAC/Dartmouth.png';
import harvardLogo from '../assets/images/TeamLogos/ECAC/Harvard.png';
import princetonLogo from '../assets/images/TeamLogos/ECAC/Princeton.png';
import quinnipiacLogo from '../assets/images/TeamLogos/ECAC/Quinnipiac.png';
import rpiLogo from '../assets/images/TeamLogos/ECAC/RPI.png';
import stLawrenceLogo from '../assets/images/TeamLogos/ECAC/StLawrence.png';
import unionLogo from '../assets/images/TeamLogos/ECAC/Union.png';
import yaleLogo from '../assets/images/TeamLogos/ECAC/Yale.png';

// HEA IMPORTS
import bcLogo from '../assets/images/TeamLogos/HEA/BC.png';
import buLogo from '../assets/images/TeamLogos/HEA/BU.png';
import maineLogo from '../assets/images/TeamLogos/HEA/Maine.png';
import merrimackLogo from '../assets/images/TeamLogos/HEA/Merrimack.png';
import northeasternLogo from '../assets/images/TeamLogos/HEA/Northeastern.png';
import providenceLogo from '../assets/images/TeamLogos/HEA/Providence.png';
import uConnLogo from '../assets/images/TeamLogos/HEA/UConn.png';
import uMassLogo from '../assets/images/TeamLogos/HEA/UMass.png';
import uMassLowellLogo from '../assets/images/TeamLogos/HEA/UMassLowell.png';
import unhLogo from '../assets/images/TeamLogos/HEA/UNH.png';
import vermontLogo from '../assets/images/TeamLogos/HEA/Vermont.png';

// NCHC IMPORTS
import asuLogo from '../assets/images/TeamLogos/NCHC/ASU.png';
import coloradoLogo from '../assets/images/TeamLogos/NCHC/ColoradoCollege.png';
import denverLogo from '../assets/images/TeamLogos/NCHC/Denver.png';
import duluthLogo from '../assets/images/TeamLogos/NCHC/Duluth.png';
import miamiLogo from '../assets/images/TeamLogos/NCHC/Miami.png';
import nodakLogo from '../assets/images/TeamLogos/NCHC/NorthDakota.png';
import omahaLogo from '../assets/images/TeamLogos/NCHC/Omaha.png';
import stCloudLogo from '../assets/images/TeamLogos/NCHC/StCloud.png';
import westernLogo from '../assets/images/TeamLogos/NCHC/Western.png';

// INDEPENDENT IMPORTS
import alaskaLogo from '../assets/images/TeamLogos/Independent/Alaska.png';
import anchorageLogo from '../assets/images/TeamLogos/Independent/AlaskaAnchorage.png';
import lindenwoodLogo from '../assets/images/TeamLogos/Independent/Lindenwood.png';
import liuLogo from '../assets/images/TeamLogos/Independent/LIU.png';
import stonehillLogo from '../assets/images/TeamLogos/Independent/Stonehill.png';





const conferences = [
  {
      name: "Atlantic Hockey",
      logo: atlanticLogo,
      teams: [
          { name: "Air Force", logo: airForceLogo, record: { W: 18, L: 19, T: 1 } },
          { name: "AIC", logo: aicLogo, record: { W: 20, L: 16, T: 4 } },
          { name: "Army West Point", logo: armyLogo, record: { W: 10, L: 23, T: 2 } },
          { name: "Bentley", logo: bentleyLogo, record: { W: 16, L: 17, T: 2 } },
          { name: "Canisius", logo: canisiusLogo, record: { W: 12, L: 21, T: 4 } },
          { name: "Holy Cross", logo: holyCrossLogo, record: { W: 21, L: 14, T: 4 } },
          { name: "Mercyhurst", logo: mercyhurstLogo, record: { W: 9, L: 22, T: 4 } },
          { name: "Niagara", logo: niagaraLogo, record: { W: 18, L: 18, T: 3 } },
          { name: "Robert Morris", logo: robertMorrisLogo, record: { W: 11, L: 25, T: 3 } },
          { name: "RIT", logo: ritLogo, record: { W: 27, L: 11, T: 2 } },
          { name: "Sacred Heart", logo: sacredHeartLogo, record: { W: 14, L: 19, T: 3 } }
      ],
  },
  {
      name: "Big Ten",
      logo: bigTenLogo,
      teams: [
          { name: "Michigan", logo: michiganLogo, record: { W: 23, L: 15, T: 3 } },
          { name: "Michigan State", logo: msuLogo, record: { W: 25, L: 10, T: 3 } },
          { name: "Minnesota", logo: minnesotaLogo, record: { W: 23, L: 11, T: 5 } },
          { name: "Notre Dame", logo: notreDameLogo, record: { W: 15, L: 19, T: 2 } },
          { name: "Ohio State", logo: osuLogo, record: { W: 14, L: 20, T: 4 } },
          { name: "Penn State", logo: psuLogo, record: { W: 15, L: 18, T: 3 } },
          { name: "Wisconsin", logo: wisconsinLogo, record: { W: 26, L: 12, T: 2 } }
      ],
  },
  {
      name: "CCHA",
      logo: cchaLogo,
      teams: [
          { name: "Augustana", logo: augustanaLogo, record: { W: 12, L: 18, T: 4 } },
          { name: "Bemidji State", logo: bemidjiLogo, record: { W: 20, L: 16, T: 2 } },
          { name: "Bowling Green", logo: bgsuLogo, record: { W: 13, L: 22, T: 1 } },
          { name: "Ferris State", logo: ferrisLogo, record: { W: 10, L: 24, T: 2 } },
          { name: "Lake Superior State", logo: lssuLogo, record: { W: 17, L: 20, T: 1 } },
          { name: "Michigan Tech", logo: michiganTechLogo, record: { W: 19, L: 15, T: 6 } },
          { name: "Minnesota State", logo: mankatoLogo, record: { W: 18, L: 15, T: 4 } },
          { name: "Northern Michigan", logo: nmuLogo, record: { W: 12, L: 16, T: 6 } },
          { name: "St. Thomas", logo: stThomasLogo, record: { W: 15, L: 20, T: 2 } }
      ],
  },
  {
      name: "ECAC",
      logo: ecacLogo,
      teams: [
          { name: "Brown", logo: brownLogo, record: { W: 8, L: 19, T: 3 } },
          { name: "Clarkson", logo: clarksonLogo, record: { W: 18, L: 16, T: 1 } },
          { name: "Colgate", logo: colgateLogo, record: { W: 16, L: 16, T: 4 } },
          { name: "Cornell", logo: cornellLogo, record: { W: 22, L: 7, T: 6 } },
          { name: "Dartmouth", logo: dartmouthLogo, record: { W: 13, L: 10, T: 9 } },
          { name: "Harvard", logo: harvardLogo, record: { W: 7, L: 19, T: 6 } },
          { name: "Princeton", logo: princetonLogo, record: { W: 10, L: 16, T: 4 } },
          { name: "Quinnipiac", logo: quinnipiacLogo, record: { W: 27, L: 10, T: 2 } },
          { name: "Rensselaer", logo: rpiLogo, record: { W: 10, L: 23, T: 4 } },
          { name: "St. Lawrence", logo: stLawrenceLogo, record: { W: 14, L: 19, T: 6 } },
          { name: "Union", logo: unionLogo, record: { W: 16, L: 18, T: 3 } },
          { name: "Yale", logo: yaleLogo, record: { W: 10, L: 18, T: 2 } }
      ],
  },
  {
      name: "Hockey East",
      logo: hockeyEastLogo,
      teams: [
          { name: "Boston College", logo: bcLogo, record: { W: 34, L: 6, T: 1 } },
          { name: "Boston University", logo: buLogo, record: { W: 28, L: 10, T: 2 } },
          { name: "UConn", logo: uConnLogo, record: { W: 15, L: 19, T: 2 } },
          { name: "Maine", logo: maineLogo, record: { W: 23, L: 12, T: 2 } },
          { name: "Massachusetts", logo: uMassLogo, record: { W: 20, L: 14, T: 3 } },
          { name: "UMass Lowell", logo: uMassLowellLogo, record: { W: 8, L: 24, T: 4 } },
          { name: "Merrimack", logo: merrimackLogo, record: { W: 13, L: 21, T: 1 } },
          { name: "New Hampshire", logo: unhLogo, record: { W: 20, L: 15, T: 1 } },
          { name: "Northeastern", logo: northeasternLogo, record: { W: 17, L: 16, T: 3 } },
          { name: "Providence", logo: providenceLogo, record: { W: 18, L: 13, T: 4 } },
          { name: "Vermont", logo: vermontLogo, record: { W: 13, L: 19, T: 3 } }
      ],
  },
  {
      name: "NCHC",
      logo: nchcLogo,
      teams: [
          { name: "Arizona State", logo: asuLogo, record: { W: 24, L: 8, T: 6 } },
          { name: "Colorado College", logo: coloradoLogo, record: { W: 21, L: 13, T: 3 } },
          { name: "Denver", logo: denverLogo, record: { W: 32, L: 9, T: 3 } },
          { name: "Miami", logo: miamiLogo, record: { W: 7, L: 26, T: 3 } },
          { name: "Minnesota Duluth", logo: duluthLogo, record: { W: 12, L: 20, T: 5 } },
          { name: "North Dakota", logo: nodakLogo, record: { W: 26, L: 12, T: 2 } },
          { name: "Omaha", logo: omahaLogo, record: { W: 23, L: 13, T: 4 } },
          { name: "St. Cloud State", logo: stCloudLogo, record: { W: 17, L: 16, T: 5 } },
          { name: "Western Michigan", logo: westernLogo, record: { W: 21, L: 16, T: 1 } }
      ],
  },
  {
      name: "Independents",
      logo: null,
      teams: [
          { name: "Alaska", logo: alaskaLogo, record: { W: 17, L: 14, T: 3 } },
          { name: "Alaska Anchorage", logo: anchorageLogo, record: { W: 15, L: 17, T: 2 } },
          { name: "Lindenwood", logo: lindenwoodLogo, record: { W: 6, L: 18, T: 4 } },
          { name: "Long Island", logo: liuLogo, record: { W: 16, L: 20, T: 1 } },
          { name: "Stonehill", logo: stonehillLogo, record: { W: 2, L: 34, T: 0 } }
      ],
  }
];

export default conferences;
