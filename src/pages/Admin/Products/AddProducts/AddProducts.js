import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ButtonBlock from '../../../../components/Forms/ButtonBlock/ButtonBlock';
import schema from '../schema';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { getCategoriesSelector } from '../../../../store/catalog/selectors';
import { getBrandsSelector } from '../../../../store/brands/selectors';
import { getBrandsOperation } from '../../../../store/brands/operations';
import { getColorsSelector } from '../../../../store/colors/selectors';
import Button from '../../../../components/Button/Button';
import styles from './AddProducts.module.scss';

const AddProducts = () => {
  const [messageServer, setmessageServer] = useState(null);
  const dispatch = useDispatch();
  const categoriesList = useSelector(getCategoriesSelector);
  const brandsList = useSelector(getBrandsSelector);
  const colorsList = useSelector(getColorsSelector);
  const [characteristicsList, setCharacteristicsList] = useState([]);

  const initialCharacteristics = [];

  for (let i = 0; i < 30; i++) {
    initialCharacteristics.push({ characteristic: '', name: '', value: '' });
  }

  useEffect(() => {
    dispatch(getBrandsOperation());
  }, []);

  const addCharacteristic = () => {
    setCharacteristicsList([...characteristicsList, { characteristic: '', name: '', value: '', number: Date.now() }]);
  };

  const removeCharacteristic = number => {
    setCharacteristicsList(characteristicsList.filter(i => i.number !== number));
  };

  return (
    <>
      <Formik
        initialValues={{
          categories: 'all',
          brand: 'acer',
          name: '',
          currentPrice: 0,
          previousPrice: 0,
          imageUrls: [],
          quantity: 0,
          color: 'Silver',
          productUrl: '',
          superPrise: 'no',
          isNew: 'no',
          isHit: 'no',
          description: '',
          characteristics: [...initialCharacteristics],
        }}
        enableReinitialize
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          const { characteristics } = values;
          const characteristicsFilter = characteristics.filter(c => c.characteristic !== '');

          console.log(characteristicsFilter);
          setmessageServer('hello');
          setSubmitting(false);
        }}
      >
        <div className='page_form'>
          <Form>
            <MySelect label='Категория' name='categories' tabIndex='0'>
              {categoriesList.map(categorie => {
                return (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.name}
                  </option>
                );
              })}
            </MySelect>
            <MySelect label='Бренд' name='brand' tabIndex='0'>
              {brandsList.map(brand => {
                return (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                );
              })}
            </MySelect>
            <MyTextInput
              label='Название товара'
              name='name'
              type='text'
              placeholder='Samsung watch 35 mm'
              tabIndex='0'
            />
            <MyTextInput label='Текущая цена, грн.' name='currentPrice' type='number' placeholder='5400' tabIndex='0' />
            <MyTextInput
              label='Предыдущая цена, грн.'
              name='previousPrice'
              type='number'
              placeholder='7400'
              tabIndex='0'
            />
            <MyTextInput label='Картинки' name='imageUrls' type='text' placeholder='Картинки товара' tabIndex='0' />
            <MyTextInput label='Количество' name='quantity' type='number' placeholder='30' tabIndex='0' />
            <MySelect label='Цвет' name='color' tabIndex='0'>
              {colorsList.map(color => {
                return (
                  <option className={styles.colorCont} key={color.name} value={color.name}>
                    {color.name}
                  </option>
                );
              })}
            </MySelect>
            <MyTextInput
              label='Ссылка на продукт'
              name='productUrl'
              type='text'
              placeholder='samsung_watch_35_mm_black'
              tabIndex='0'
            />
            <MySelect label='Супер цена' name='superPrise' tabIndex='0'>
              <option value='no'>Нет</option>
              <option value='yes'>Да</option>
            </MySelect>
            <MySelect label='Новинка' name='isNew' tabIndex='0'>
              <option value='no'>Нет</option>
              <option value='yes'>Да</option>
            </MySelect>
            <MySelect label='Хит' name='isHit' tabIndex='0'>
              <option value='no'>Нет</option>
              <option value='yes'>Да</option>
            </MySelect>
            <div className={styles.textareaContainer}>
              <label className={styles.label}>Описание в html</label>
              <Field
                as='textarea'
                className={styles.textarea}
                name='description'
                placeholder='<h3>Описание <span>Samsung Galaxy Watch 3 45мм, Black (SM-R840NZKASEK)</span></h3>
                <div><div><h4>Смарт-часы Samsung Galaxy Watch 3</h4><h4>Изящный дизайн</h4>'
                rows={10}
              />
              <div className={styles.errorMessage}>
                <ErrorMessage
                  name='description'
                  render={msg => {
                    return <div>{msg}</div>;
                  }}
                />
              </div>
            </div>

            {characteristicsList.map((c, i) => {
              return (
                <div key={c.number}>
                  <hr />
                  <MyTextInput
                    list='characteristics'
                    label='Характеристика'
                    name={`characteristics[${i}].characteristic`}
                    type='text'
                    placeholder='type'
                    tabIndex='0'
                  />
                  <datalist id='characteristics'>
                    <option value='type'>Тип</option>
                    <option value='features'>Особенности</option>
                    <option value='compatibleOS'>Совместимые ОС</option>
                    <option value='matrixType'>Тип матрицы</option>
                    <option value='displayResolution'>Разрешение дисплея</option>
                    <option value='OS'>Операционная система</option>
                    <option value='CPU'>Процессор</option>
                    <option value='memory'>Встроенная память</option>
                    <option value='RAM'>Оперативная память</option>
                    <option value='bodyMaterial'>Материал корпуса</option>
                    <option value='strapMaterial'>Материал ремешка</option>
                    <option value='displayDiagonal'>Диагональ дисплея</option>
                    <option value='wirelessCapabilities'>Другие беспроводные возможности</option>
                    <option value='additionalCharacteristics'>Дополнительные характеристики</option>
                    <option value='chargingType'>Тип зарядки</option>
                    <option value='battery'>Емкость аккумулятора</option>
                    <option value='sizes'>Размеры, мм</option>
                    <option value='weight'>Вес</option>
                    <option value='sensors'>Датчики</option>
                    <option value='year'>Год</option>
                  </datalist>
                  <MyTextInput
                    list='name'
                    label='Название'
                    name={`characteristics[${i}].name`}
                    type='text'
                    placeholder='Особенности'
                    tabIndex='0'
                  />
                  <datalist id='name'>
                    <option>Тип</option>
                    <option>Особенности</option>
                    <option>Совместимые ОС</option>
                    <option>Тип матрицы</option>
                    <option>Разрешение дисплея</option>
                    <option>Операционная система</option>
                    <option>Процессор</option>
                    <option>Встроенная память</option>
                    <option>Оперативная память</option>
                    <option>Материал корпуса</option>
                    <option>Материал ремешка</option>
                    <option>Диагональ дисплея</option>
                    <option>Другие беспроводные возможности</option>
                    <option>Дополнительные характеристики</option>
                    <option>Тип зарядки</option>
                    <option>Емкость аккумулятора</option>
                    <option>Размеры, мм</option>
                    <option>Вес</option>
                    <option>Датчики</option>
                    <option>Год</option>
                  </datalist>
                  <MyTextInput
                    label='Значение'
                    name={`characteristics[${i}].value`}
                    type='text'
                    placeholder='Умные часы'
                    tabIndex='0'
                  />
                  <div className={styles.button}>
                    <Button onClick={() => removeCharacteristic(c.number)} title='Удалить' />
                  </div>
                </div>
              );
            })}
            <div className={styles.button}>
              <Button variant='outline' onClick={addCharacteristic} title='Добавить новое свойство' />
            </div>

            <ButtonBlock buttonTitle='Сохранить' messageServer={messageServer} />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default AddProducts;
