import React, { useEffect, useState } from 'react';
import MySelect from '../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import { getPostCity, getPostRegion, getPostDepartment } from '../../../http/newPostAPI';

const DeliveryDataInputs = () => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [department, setDepartment] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState('postDelivery');

  useEffect(() => {
    getPostRegion().then(res => {
      setRegions(res.data);
    });
  }, []);

  const getCities = region => {
    if (region !== '') {
      const regionRef = regions.filter(r => {
        if (r.DescriptionRu === region) {
          return r.Ref;
        }
        return null;
      })[0].Ref;

      getPostCity(regionRef).then(res => {
        setCities(res.data);
      });
    }
  };

  const getDepartment = citie => {
    if (citie !== '') {
      const citieRef = cities.filter(c => {
        if (c.DescriptionRu === citie) {
          return c.Ref;
        }
        return null;
      })[0].Ref;

      getPostDepartment(citieRef).then(res => {
        setDepartment(res.data);
      });
    }
  };

  const regionOptions = regions.map(reg => {
    return (
      <option key={reg.DescriptionRu} value={reg.DescriptionRu}>
        {reg.DescriptionRu}
      </option>
    );
  });

  const citieOptions = cities.map(cit => {
    return (
      <option key={cit.DescriptionRu} value={cit.DescriptionRu}>
        {cit.DescriptionRu}
      </option>
    );
  });

  const departmentOptions = department.map(dep => {
    return (
      <option key={dep.DescriptionRu} value={dep.DescriptionRu}>
        {dep.DescriptionRu}
      </option>
    );
  });

  return (
    <div>
      <h3 className='checkout__title'>Доставка</h3>

      <MySelect
        label='Область'
        name='region'
        onClick={e => {
          getCities(e.target.value);
        }}
        tabIndex='0'
      >
        <option value=''>Выберите область доставки</option>
        {regionOptions}
      </MySelect>

      <MySelect
        label='Город'
        name='city'
        onClick={e => {
          getDepartment(e.target.value);
        }}
        tabIndex='0'
      >
        <option value=''>Выберите город доставки</option>
        {citieOptions}
      </MySelect>

      <MySelect
        label='Способ доставки'
        name='delivery'
        onClick={e => {
          setDeliveryMethod(e.target.value);
        }}
        tabIndex='0'
      >
        <option value=''>Выберите способ доставки</option>
        <option value='Самовывоз из магазина'>Самовывоз из магазина</option>
        <option value='Новой почтой'>Новой почтой</option>
        <option value='Курьером по Киеву'>Курьером по Киеву</option>
      </MySelect>

      {deliveryMethod === 'Новой почтой' && (
        <MySelect label='Выберите адрес' name='address' tabIndex='0'>
          <option>Выберите адрес</option>
          {departmentOptions}
        </MySelect>
      )}
      {deliveryMethod === 'Курьером по Киеву' && (
        <MyTextInput label='Адрес' name='address' type='text' placeholder='Введите адрес доставки' tabIndex='-1' />
      )}
      <hr />
    </div>
  );
};

export default DeliveryDataInputs;
