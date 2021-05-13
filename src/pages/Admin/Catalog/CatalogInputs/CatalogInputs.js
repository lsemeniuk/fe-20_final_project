import React from 'react';
import { useSelector } from 'react-redux';
import MySelect from '../../../../components/Forms/MySelect/MySelect';
import MyTextInput from '../../../../components/Forms/MyTextInput/MyTextInput';
import { getCategoriesSelector } from '../../../../store/catalog/selectors';

const CatalogInputs = () => {
  const categories = useSelector(getCategoriesSelector);
  return (
    <>
      <MyTextInput label='ID категории' name='id' type='text' placeholder='введите ID категории' tabIndex='0' />
      <MyTextInput label='Название' name='name' type='text' placeholder='Название категории' tabIndex='0' />
      <MySelect label='Родит. категория' name='parentId' tabIndex='0'>
        <option value='null'>Без родительськой категории</option>
        {categories.map(categorie => {
          return (
            <option key={categorie.id} value={categorie.id}>
              {categorie.name} ({categorie.level})
            </option>
          );
        })}
      </MySelect>
      <MyTextInput label='URL картинки' name='imageUrl' type='text' placeholder='URL картинки' tabIndex='0' />
      <MyTextInput label='Описание' name='description' type='text' placeholder='Описание категории' tabIndex='0' />
      <MyTextInput label='Уровень' name='level' type='number' placeholder='Уровень вложенности' tabIndex='0' />
    </>
  );
};

export default CatalogInputs;
