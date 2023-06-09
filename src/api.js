// Base Url
const base_url = `https://api.rawg.io/api/games?key=4e58d66d42074002851711fc6e726c05`;

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// current /day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Api
const apiKey = `4e58d66d42074002851711fc6e726c05`;
const MODIFY_API = `https://api.rawg.io/api/games/`;
const MODIFY_API2 = `https://api.rawg.io/api/games`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

// details game
export const gameDetailsURL = (game_id) =>
  `${MODIFY_API}${game_id}.json?&key=${apiKey}`;
export const gameScreenshotsURL = (game_id) =>
  `${MODIFY_API}${game_id}/screenshots?&key=${apiKey}`;
export const searchGameURL = (game_name) =>
  `${MODIFY_API2}?search=${game_name}&page_size=9.json?&key=${apiKey}`;
