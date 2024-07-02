import bigTenTeams from './BigTenTeams';
import atlanticTeams from './AtlanticTeams';
import cchaTeams from './cchaTeams';
import ecacTeams from './ecacTeams';
import heaTeams from './heaTeams';
import nchcTeams from './nchcTeams';
import independentTeams from './independentTeams';
// Import other conferences here

const teams = {
  ...bigTenTeams,
  ...atlanticTeams,
  ...cchaTeams,
  ...ecacTeams,
  ...heaTeams,
  ...nchcTeams,
  ...independentTeams,
  // Add other conferences here
};

export default teams;
