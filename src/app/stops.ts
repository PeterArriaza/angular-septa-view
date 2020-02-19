const data =
  " ,Cynwyd,Bala,Wynnefield Avenue,30th Street Station,Suburban Station,Jefferson Station,Temple University,North Broad,Wayne Junction,Newark,Churchman's Crossing,Wilmington,Claymont,Marcus Hook,Highland Avenue,Chester,Eddystone,Crum Lynne,Ridley Park,Prospect Park - Moore,Norwood,Glenolden,Folcroft,Sharon Hill,Curtis Park,Darby,Allegheny,East Falls,Wissahickon,Manayunk,Ivy Ridge,Miquon,Spring Mill,Conshohocken,Norristown T.C.,Main Street,Norristown - Elm Street,Elwyn,Media,Moylan-Rose Valley,Wallingford,Swarthmore,Morton-Rutledge,Secane,Primos,Clifton-Aldan,Gladstone,Lansdowne,Fernwood-Yeadon,Angora,49th Street,Noble,Rydal,Meadowbrook,Bethayres,Philmont,Forest Hills,Somerton,Trevose,Neshaminy,Langhorne,Woodbourne,Yardley,West Trenton,Airport Terminal E F,Airport Terminal C D,Airport Terminal B,Airport Terminal A,Eastwick,University City,Fern Rock T C,Melrose Park,Elkins Park,Jenkintown Wyncote,Glenside,Ardsley,Roslyn,Crestmont,Willow Grove,Hatboro,Warminster,Thorndale,Downingtown,Whitford,Exton,Malvern,Paoli,Daylesford,Berwyn,Devon,Strafford,Wayne,St. Davids,Radnor,Villanova,Rosemont,Bryn Mawr,Haverford,Ardmore,Wynnewood,Narberth,Merion,Overbrook,North Hills,Oreland,Fort Washington,Ambler,Penllyn,Gwynedd Valley,North Wales,Pennbrook,Lansdale,Fortuna,Colmar,Link Belt,Chalfont,New Britain,Delaware Valley College,Doylestown,9TH Street Lansdale,Trenton,Levittown-Tullytown,Bristol,Croydon,Eddington,Cornwells Heights,Torresdale,Holmesburg Jct,Tacony,Bridesburg,North Philadelphia Amtrak,Wister,Germantown,Washington Lane,Stenton,Sedgwick,Mount Airy,Wyndmoor,Gravers,Chestnut Hill East,Chestnut Hill West,Highland,St. Martins,Allen Lane,Carpenter,Upsal,Tulpehocken,Chelten Avenue,Queen Lane,North Philadelphia,Olney,Lawndale,Cheltenham,Ryers,Fox Chase";

const stops = data.split(",");
const sortedStops = stops.sort();
let stopList = [];

sortedStops.map((stop, index) => {
  stopList[index] = stop;
});

export const stopData = stopList;
