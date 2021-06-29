import { saveModalPopupAction } from './actions';

export const popupOpenOperation = (message, failed, action) => dispatch => {
  const values = {
    isOpen: true,
    message,
    failed,
    action: () => {
      return null;
    },
  };

  if (action) {
    values.action = action;
  }

  dispatch(saveModalPopupAction(values));
};
