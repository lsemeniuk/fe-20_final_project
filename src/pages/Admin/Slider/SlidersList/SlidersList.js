import React, { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader';
import { getSlides } from '../../../../http/slidesAPI';
import SlidrsItem from '../SlidersItem/SlidersItem';

const SlidersList = () => {
  const [sliders, setSliders] = useState([]);
  const [slidersLoading, setSlidersLoading] = useState(true);
  const [refreshSliders, setRefreshSliders] = useState(true);

  useEffect(() => {
    setSlidersLoading(true);
    getSlides().then(res => {
      setSliders(res.data);
      setRefreshSliders(false);
      setSlidersLoading(false);
    });
  }, [refreshSliders]);

  if (slidersLoading) {
    return <Loader />;
  }

  const slidersList = sliders.map(slider => {
    return (
      <li key={slider.name} style={{ padding: '10px' }}>
        <SlidrsItem slider={slider} />
      </li>
    );
  });

  return (
    <div>
      <ul>{slidersList}</ul>
    </div>
  );
};

export default SlidersList;
