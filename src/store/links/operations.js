import { getLinks } from '../../http/linksAPI';
import { linksLoadingAction, saveLinksAction } from './actions';

export const getLinksOperation = () => dispatch => {
  getLinks().then(res => {
    dispatch(saveLinksAction(res.data));
    dispatch(linksLoadingAction(false));
  });
};
