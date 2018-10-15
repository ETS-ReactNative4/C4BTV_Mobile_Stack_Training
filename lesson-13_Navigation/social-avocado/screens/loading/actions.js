import {dataLayer} from '../../data-layer';
import * as Actiontypes from '../../constants/action-types';


export function getCurrentUser() {
    return (dispatch) => {
        firebaseData.getCurrentUser(dispatch);
    };
}

export function loadingFailed(error) {
    return {type: types.LOADING_FAILED, isLoadingComplete: true, error: error};
}

export function loadingCompleted() {
    return {type: types.INIT_COMPLETED, isLoadingComplete: true};
}

export const initialize = () => (dispatch) => firebaseData.initialize(dispatch).then(dispatch({type:actionTypes.INIT_COMPLETED}));
