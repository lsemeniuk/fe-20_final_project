import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MySelect from '../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../components/Forms/MyTextInput/MyTextInput';
import { getPostCity, getPostRegion, getPostDepartment } from '../../../http/newPostAPI';
import { deliveryMethodAction } from '../../../store/cart/actions';
import { deliveryMethodSelector } from '../../../store/cart/selectors';

const DeliveryDataInputs = () => {
  const [regions, setRegions] = useState([]);
  const [isRegionSelected, setIsRegionSelected] = useState(false);
  const [cities, setCities] = useState([]);
  const [department, setDepartment] = useState([]);
  const dispatch = useDispatch();
  const deliveryMethod = useSelector(deliveryMethodSelector);

  useEffect(() => {
    getPostRegion().then(res => {
      setRegions(res.data);
    });
  }, []);

  const getCities = region => {
    setIsRegionSelected(true);

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

  const getDepartment = city => {
    if (city !== '') {
      const citieRef = cities.filter(c => {
        if (c.DescriptionRu === city) {
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

  const citiesOptions = cities.length ? (
    cities.map(city => {
      return (
        <option key={city.DescriptionRu} value={city.DescriptionRu}>
          {city.DescriptionRu}
        </option>
      );
    })
  ) : (
    <option disabled>Данные по области не получены</option>
  );

  const departmentOptions = department.map(dep => {
    return (
      <option key={dep.DescriptionRu} value={dep.DescriptionRu}>
        {dep.DescriptionRu}
      </option>
    );
  });

  return (
    <div>
      <MySelect
        label='Область'
        name='region'
        onClick={e => {
          getCities(e.target.value);
        }}
        tabIndex='0'
      >
        <option hidden value=''>
          Выберите область доставки
        </option>
        {regionOptions}
      </MySelect>

      <MySelect
        disabled={!isRegionSelected}
        label='Город'
        name='city'
        onClick={e => {
          getDepartment(e.target.value);
        }}
        tabIndex='0'
      >
        <option hidden value=''>
          Выберите город доставки
        </option>
        {citiesOptions}
      </MySelect>

      <MySelect
        label='Способ доставки'
        name='delivery'
        onClick={e => {
          dispatch(deliveryMethodAction(e.target.value));
        }}
        tabIndex='0'
      >
        <option hidden value=''>
          Выберите способ доставки
        </option>
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
    </div>
  );
};

export default DeliveryDataInputs;
