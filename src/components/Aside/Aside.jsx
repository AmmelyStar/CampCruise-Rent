import {
  AsideContainer,
  FormLocation,
  TitlePage,
  TitleList,
  Button,
  FormFilter,
  CheckboxWrap,
  FormFilterRadio,
  RadioWrap,
  BtnVisibl,
  TabDesk,
  Select,
} from './Aside.styled';
import svg from '../../img/icons.svg';
import React, { useState } from 'react';
// import down from '../../img/down.svg'





const Aside = ({ cities, onCityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    const handleCityChange = e => {
      const city = e.target.value;
      setSelectedCity(city);
      onCityChange(city);
  };
  

  return (
    <>
      <AsideContainer>
        <FormLocation>
          <label>Location</label>
            <Select onChange={handleCityChange} value={selectedCity}>
              <option value="">All cities</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          <svg>
            <use href={`${svg}#icon-map-pin`}></use>
          </svg>
        </FormLocation>

        <BtnVisibl onClick={toggleVisibility}>
          <TitlePage>Filters</TitlePage>
          {/* <img
            src={down}
            alt=""
            width={22}
            className={isVisible ? 'rotated' : ''}
          /> */}
        </BtnVisibl>
        {isVisible && (
          <>
            <TitleList>Vehicle equipment</TitleList>
            <FormFilter>
              <label>
                <input type="checkbox" name="answer" value="AC" />
                <CheckboxWrap>
                  <svg>
                    <use href={`${svg}#icon-ac`} />
                  </svg>
                  <span>AC</span>
                </CheckboxWrap>
              </label>
              <label>
                <input type="checkbox" name="answer" value="automatic" />
                <CheckboxWrap>
                  <svg>
                    <use href={`${svg}#icon-transm`} />
                  </svg>
                  <span>Automatic</span>
                </CheckboxWrap>
              </label>
              <label>
                <input type="checkbox" name="answer" value="kitchen" />
                <CheckboxWrap>
                  <svg>
                    <use href={`${svg}#icon-kitchen`} />
                  </svg>
                  <span>Kitchen</span>
                </CheckboxWrap>
              </label>
              <label>
                <input type="checkbox" name="answer" value="tv" />
                <CheckboxWrap>
                  <svg>
                    <use href={`${svg}#icon-tv`} />
                  </svg>
                  <span>TV</span>
                </CheckboxWrap>
              </label>
              <label>
                <input type="checkbox" name="answer" value="shower" />
                <CheckboxWrap>
                  <svg>
                    <use href={`${svg}#icon-shower`} />
                  </svg>
                  <span>Shower/WC</span>
                </CheckboxWrap>
              </label>
            </FormFilter>

            <TitleList>Vehicle type</TitleList>

            <FormFilterRadio>
              <label>
                <input type="radio" name="type" value="van" />
                <RadioWrap>
                  <svg>
                    <use href={`${svg}#icon-camper`} />
                  </svg>
                  <span>Van</span>
                </RadioWrap>
              </label>
              <label>
                <input type="radio" name="type" value="FullyIntegrated" />
                <RadioWrap>
                  <svg>
                    <use href={`${svg}#icon-camper2`} />
                  </svg>
                  <span>Fully Integrated</span>
                </RadioWrap>
              </label>
              <label>
                <input type="radio" name="type" value="alcove" />
                <RadioWrap>
                  <svg>
                    <use href={`${svg}#icon-camper3`} />
                  </svg>
                  <span>Alcove</span>
                </RadioWrap>
              </label>
            </FormFilterRadio>
            <Button>Search</Button>
          </>
        )}

        <TabDesk>
          <TitlePage>Filters</TitlePage>
          <TitleList>Vehicle equipment</TitleList>
          <FormFilter>
            <label>
              <input type="checkbox" name="answer" value="AC" />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#icon-ac`} />
                </svg>
                <span>AC</span>
              </CheckboxWrap>
            </label>
            <label>
              <input type="checkbox" name="answer" value="automatic" />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#icon-transm`} />
                </svg>
                <span>Automatic</span>
              </CheckboxWrap>
            </label>
            <label>
              <input type="checkbox" name="answer" value="kitchen" />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#icon-kitchen`} />
                </svg>
                <span>Kitchen</span>
              </CheckboxWrap>
            </label>
            <label>
              <input type="checkbox" name="answer" value="tv" />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#icon-tv`} />
                </svg>
                <span>TV</span>
              </CheckboxWrap>
            </label>
            <label>
              <input type="checkbox" name="answer" value="shower" />
              <CheckboxWrap>
                <svg>
                  <use href={`${svg}#icon-shower`} />
                </svg>
                <span>Shower/WC</span>
              </CheckboxWrap>
            </label>
          </FormFilter>

          <TitleList>Vehicle type</TitleList>

          <FormFilterRadio>
            <label>
              <input type="radio" name="type" value="van" />
              <RadioWrap>
                <svg>
                  <use href={`${svg}#icon-camper`} />
                </svg>
                <span>Van</span>
              </RadioWrap>
            </label>
            <label>
              <input type="radio" name="type" value="FullyIntegrated" />
              <RadioWrap>
                <svg>
                  <use href={`${svg}#icon-camper2`} />
                </svg>
                <span>Fully Integrated</span>
              </RadioWrap>
            </label>
            <label>
              <input type="radio" name="type" value="alcove" />
              <RadioWrap>
                <svg>
                  <use href={`${svg}#icon-camper3`} />
                </svg>
                <span>Alcove</span>
              </RadioWrap>
            </label>
          </FormFilterRadio>
          <Button>Search</Button>
        </TabDesk>
      </AsideContainer>
    </>
  );
};

export default Aside;
