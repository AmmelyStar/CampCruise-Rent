import {
  Title,
  List,
  Item,
  ButtonText,
  Buttonstyled,
  FirstStyledsvg,
} from './Aside.styled';
import svg from '../../img/icons.svg';

const Aside = () => {
  return (
    <>
      <Title>Vehicle type</Title>
      <List>
        <Item>
          <Buttonstyled>
            <FirstStyledsvg>
              <use href={`${svg}#icon-van3`}></use>
            </FirstStyledsvg>
            <ButtonText>Van</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <FirstStyledsvg>
              <use href={`${svg}#icon-van1`}></use>
            </FirstStyledsvg>
            <ButtonText>Fully Integrated</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <FirstStyledsvg>
              <use href={`${svg}#icon-van2`}></use>
            </FirstStyledsvg>
            <ButtonText>Alcove</ButtonText>
          </Buttonstyled>
        </Item>
      </List>
    </>
  );
};

export default Aside;
