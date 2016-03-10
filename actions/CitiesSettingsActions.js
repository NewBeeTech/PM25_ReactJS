export const SET_PREFERED_CITY = 'SET_PREFERED_CITY';

export function setPreferedCity(CityName:string) {
  return {
    type: SET_PREFERED_CITY,
    cityName: CityName,
  };
};
