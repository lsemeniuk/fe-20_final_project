import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { changeStatusOrders } from '../../../../../http/ordersAPI';
import Icons from '../../../../../components/Icons/Icons';
import styles from './Status.module.scss';

const Status = ({ status, id }) => {
  const [isChangeStatus, setisChangeStatus] = useState(false);
  const [statusChangeble, setStatusChangeble] = useState(status);

  let statusElement = statusChangeble;

  if (statusChangeble === 'specified') {
    statusElement = <div style={{ color: '#FF0000' }}>Уточняется</div>;
  } else if (statusChangeble === 'processed') {
    statusElement = <div style={{ color: '#FF8C00' }}>Обрабатывается</div>;
  } else if (statusChangeble === 'send') {
    statusElement = <div style={{ color: '#0000FF' }}>Отправлен</div>;
  } else if (statusChangeble === 'completed') {
    statusElement = <div style={{ color: '#008000' }}>Выполнен</div>;
  }
  const changeStatus = stat => {
    changeStatusOrders(id, { status: stat }).then(res => {
      setisChangeStatus(false);
      setStatusChangeble(res.data.order.status);
      return res;
    });
  };

  const changeStatusElement = (
    <div>
      <select onChange={e => changeStatus(e.target.value)} defaultValue={statusChangeble} className={styles.select}>
        <option value='specified'>Уточняется</option>
        <option value='processed'>Обрабатывается</option>
        <option value='send'>Отправлен</option>
        <option value='completed'>Выполнен</option>
      </select>
    </div>
  );

  return (
    <div className={styles.status}>
      {isChangeStatus ? (
        <>{changeStatusElement}</>
      ) : (
        <>
          <Icons
            className={styles.iconChange}
            type='change'
            color='#999999'
            width={25}
            height={25}
            onClick={() => setisChangeStatus(true)}
          />
          <div className={styles.statusText}>{statusElement}</div>
        </>
      )}
    </div>
  );
};

Status.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};

Status.defaultProps = {
  status: 'Неоприделён',
};

export default Status;
