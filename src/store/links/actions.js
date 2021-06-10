import { SET_LINKS, SET_LINKS_LOADING } from './types';

export const saveLinksAction = links => ({ type: SET_LINKS, payload: links });

export const linksLoadingAction = isLoading => ({ type: SET_LINKS_LOADING, payload: isLoading });
