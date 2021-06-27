import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
// import { addImages } from '../../../../http/productAPI';
import styles from './AddImageForm.module.scss';

const AddImageForm = () => {
  const [messageServer, setMessageServer] = useState(null);
  const [affiliation, setAfiliation] = useState('products');
  const [product, setProduct] = useState('');
  const [size, setSize] = useState('large');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const addImage = () => {
    const formData = new FormData();
    formData.append('affiliation', affiliation);
    formData.append('product', product);
    formData.append('name', name);
    formData.append('size', size);
    formData.append('img', file);
    // addImages(formData).then(res => {
    //   if (res.status === 200) {
    //     setMessageServer('Картинку успешно добавлено!');
    //   }
    // });
    axios.post('http://localhost:5000/api/images', formData).then(res => {
      if (res.status === 200) {
        setMessageServer('Картинку успешно добавлено!');
      }
    });
  };

  return (
    <div className='page_form'>
      <form>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.label}>Принадлежность</label>
            <select
              className={styles.textInput}
              type='text'
              placeholder='products'
              tabIndex='0'
              onChange={e => setAfiliation(e.target.value)}
            >
              <option defaultValue value='products'>
                Товары
              </option>
              <option value='sliders'>Слайдер</option>
              <option value='brands'>Бренды</option>
              <option value='catalog'>Каталог</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.label}>Название товара</label>
            <input
              className={styles.textInput}
              type='text'
              placeholder='samsung_watch_35'
              tabIndex='0'
              onChange={e => setProduct(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.label}>Размер</label>
            <select
              className={styles.textInput}
              type='text'
              placeholder='large'
              tabIndex='0'
              onChange={e => setSize(e.target.value)}
            >
              <option defaultValue value='large'>
                Большой
              </option>
              <option value='small'>Маленький</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.label}>Название картинки</label>
            <input
              className={styles.textInput}
              type='text'
              placeholder='samsung_watch_35_1_large'
              tabIndex='0'
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.label}>Файл</label>
            <input type='file' placeholder='Добавьте файл' tabIndex='0' onChange={selectFile} />
          </div>
        </div>

        <div className={styles.buttonCont}>
          <div className={styles.widthCont}>
            <Button
              type='submit'
              title='Сохранить'
              onClick={e => {
                e.preventDefault();
                addImage();
              }}
            />
            <div className={styles.messageServer}>{messageServer}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddImageForm;
