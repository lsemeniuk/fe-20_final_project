import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { confirmRegistration } from '../../http/customersAPI';
import { saveModalAuthRegAction } from '../../store/modal/actions';
import { popupOpenOperation } from '../../store/modal/operations';
import { INDEX_ROUTE } from '../../utils/consts';

const ConfirmRegistration = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    confirmRegistration(token).then(res => {
      dispatch(
        popupOpenOperation('Ваша email успешно подтверждён!', false, () => {
          history.push(INDEX_ROUTE);
        })
      );
      dispatch(saveModalAuthRegAction(true));
      return res.data.message;
    });
  }, []);

  return null;
};

export default ConfirmRegistration;
