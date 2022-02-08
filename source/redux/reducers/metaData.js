import {
  FETCH_FILTEREDCAR,
  FETCH_MAKES,
  FETCH_MODALS,
  FETCH_VERSIONS,
  RESET_CARS,
} from '../ActionTypes';
import Car1 from '../../assets/svgs/car1.svg';
import Car2 from '../../assets/svgs/car2.svg';
import Car3 from '../../assets/svgs/car3.svg';

const initState = {
  makes: [],
  modals: [],

  filteredCars: [],
};

export default (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case FETCH_MAKES:
      return {...state, makes: payload};
    case FETCH_MODALS:
      return {...state, modals: payload};
    case FETCH_VERSIONS:
      return {...state, versions: payload};
    case FETCH_FILTEREDCAR: {
      return {...state, filteredCars: payload};
    }
    case RESET_CARS: {
      return {
        ...state,
        filteredCars: [],
      };
    }

    default:
      return state;
  }
};
