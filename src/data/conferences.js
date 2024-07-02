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
        { name: "Air Force", logo: airForceLogo },
        { name: "AIC", logo: aicLogo },
        { name: "Army West Point", logo: armyLogo },
        { name: "Bentley", logo: bentleyLogo },
        { name: "Canisius", logo: canisiusLogo },
        { name: "Holy Cross", logo: holyCrossLogo },
        { name: "Mercyhurst", logo: mercyhurstLogo },
        { name: "Niagara", logo: niagaraLogo },
        { name: "Robert Morris", logo: robertMorrisLogo },
        { name: "RIT", logo: ritLogo },
        { name: "Sacred Heart", logo: sacredHeartLogo }
      ],
    },
    {
      name: "Big Ten",
      logo: bigTenLogo,
      teams: [
        { name: "Michigan", logo: michiganLogo },
        { name: "Michigan State", logo: msuLogo },
        { name: "Minnesota", logo: minnesotaLogo },
        { name: "Notre Dame", logo: notreDameLogo },
        { name: "Ohio State", logo: osuLogo },
        { name: "Penn State", logo: psuLogo },
        { name: "Wisconsin", logo: wisconsinLogo }
      ],
    },
    {
      name: "CCHA",
      logo: cchaLogo,
      teams: [
        { name: "Augustana", logo: augustanaLogo },
        { name: "Bemidji State", logo: bemidjiLogo },
        { name: "Bowling Green", logo: bgsuLogo },
        { name: "Ferris State", logo: ferrisLogo },
        { name: "Lake Superior State", logo: lssuLogo },
        { name: "Michigan Tech", logo: michiganTechLogo },
        { name: "Minnesota State", logo: mankatoLogo },
        { name: "Northern Michigan", logo: nmuLogo },
        { name: "St. Thomas", logo: stThomasLogo }
      ],
    },
    {
      name: "ECAC",
      logo: ecacLogo,
      teams: [
        { name: "Brown", logo: brownLogo },
        { name: "Clarkson", logo: clarksonLogo },
        { name: "Colgate", logo: colgateLogo },
        { name: "Cornell", logo: cornellLogo },
        { name: "Dartmouth", logo: dartmouthLogo },
        { name: "Harvard", logo: harvardLogo },
        { name: "Princeton", logo: princetonLogo },
        { name: "Quinnipiac", logo: quinnipiacLogo },
        { name: "Rensselaer", logo: rpiLogo },
        { name: "St. Lawrence", logo: stLawrenceLogo },
        { name: "Union", logo: unionLogo },
        { name: "Yale", logo: yaleLogo }
      ],
    },
    {
      name: "Hockey East",
      logo: hockeyEastLogo,
      teams: [
        { name: "Boston College", logo: bcLogo },
        { name: "Boston University", logo: buLogo },
        { name: "UConn", logo: uConnLogo },
        { name: "Maine", logo: maineLogo },
        { name: "Massachusetts", logo: uMassLogo },
        { name: "UMass Lowell", logo: uMassLowellLogo },
        { name: "Merrimack", logo: merrimackLogo },
        { name: "New Hampshire", logo: unhLogo },
        { name: "Northeastern", logo: northeasternLogo },
        { name: "Providence", logo: providenceLogo },
        { name: "Vermont", logo: vermontLogo }
      ],
    },
    {
      name: "NCHC",
      logo: nchcLogo,
      teams: [
        { name: "Arizona State", logo: asuLogo },
        { name: "Colorado College", logo: coloradoLogo },
        { name: "Denver", logo: denverLogo },
        { name: "Miami", logo: miamiLogo },
        { name: "Minnesota Duluth", logo: duluthLogo },
        { name: "North Dakota", logo: nodakLogo },
        { name: "Omaha", logo: omahaLogo },
        { name: "St. Cloud State", logo: stCloudLogo },
        { name: "Western Michigan", logo: westernLogo }
      ],
    },
    {
      name: "Independents",
      logo: null,
      teams: [
        { name: "Alaska", logo: alaskaLogo },
        { name: "Alaska Anchorage", logo: anchorageLogo },
        { name: "Lindenwood", logo: lindenwoodLogo },
        { name: "Long Island University", logo: liuLogo },
        { name: "Stonehill", logo: stonehillLogo }
      ],
    }
  ];
  
  export default conferences;
  