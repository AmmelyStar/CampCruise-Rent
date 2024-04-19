/* eslint-disable no-unused-vars */
import React from 'react';

import kitchen from '../../img/svg/Vector.svg'
import ac from '../../img/svg/ac.svg';
import petrol from '../../img/svg/Petrol.svg';
import beds from '../../img/svg/beds.svg';
import air  from '../../img/svg/air.svg';
import cd from '../../img/svg/cd.svg';
import radio from '../../img/svg/radio.svg';
import hob from '../../img/svg/hob.svg';
import adults from '../../img/svg/adults.svg';
import automatic from '../../img/svg/automatic.svg';



import {
  Automatic,
  Adults,
  Hob,
  Radio,
  CD,
  AirConditioner,
  Beds,
  Kitchen,
  Petrol,
  AC,
} from './Features.styled';


const Features = () => {
  
  return (
    <>
      <Adults>
        <img src={adults} alt="adults" />
        adults
      </Adults>
      <Automatic>
        <img src={automatic} alt="automatic" />
        Automatic
      </Automatic>
      <AC>
        <img src={ac} alt="ac" />
        AC
      </AC>
      <Petrol>
        <img src={petrol} alt="petrol" />
        Petrol
      </Petrol>
      <Kitchen>
        <img src={kitchen} alt="kitchen" />
        kitchen
      </Kitchen>
      <Beds>
        <img src={beds} alt="beds" />
        beds
      </Beds>
      <AirConditioner>
        <img src={air} alt="air" />
        air conditioner
      </AirConditioner>
      <CD>
        <img src={cd} alt="cd" />
        CD
      </CD>
      <Radio>
        <img src={radio} alt="radio" />
        Radio
      </Radio>
      <Hob>
        <img src={hob} alt="hob" />
        hob
      </Hob>
    </>
  );
};

export default Features;
