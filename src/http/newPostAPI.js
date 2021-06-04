import axios from 'axios';

const $postHost = axios.create({
  baseURL: 'https://api.novaposhta.ua/v2.0/json/',
});

export const getPostRegion = async () => {
  const values = { modelName: 'Address', calledMethod: 'getAreas' };

  const res = await $postHost.post('', values).catch(err => {
    throw err.response;
  });
  return res.data;
};

export const getPostCity = async value => {
  const values = {
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: { AreaRef: value },
  };

  const res = await $postHost.post('', values).catch(err => {
    throw err.response;
  });
  return res.data;
};

export const getPostDepartment = async value => {
  const values = {
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: { CityRef: value },
  };

  const res = await $postHost.post('', values).catch(err => {
    throw err.response;
  });
  return res.data;
};
