import atlanticHockey from './stats+rosters/Atlantic_Hockey.json';
import bigTen from './stats+rosters/Big_Ten.json';
import ccha from './stats+rosters/CCHA.json';
import ecacHockey from './stats+rosters/ECAC_Hockey.json';
import hockeyEast from './stats+rosters/Hockey_East.json';
import independent from './stats+rosters/Independent.json';
import nchc from './stats+rosters/NCHC.json';

const teams = {
  ...atlanticHockey,
  ...bigTen,
  ...ccha,
  ...ecacHockey,
  ...hockeyEast,
  ...independent,
  ...nchc,
};

export default teams;
