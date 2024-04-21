import {
  Title,
  List,
  Item,
  ButtonText,
  Buttonstyled,
  FirstStyledsvg,
} from './Details.styled';
import svg from '../../img/svg/ac.svg';
import svg1 from '../../img/svg/automatic.svg';
import svg2 from '../../img/svg/Vector.svg';

const Details = () => {
  return (
    <>
      <Title>Vehicle equipment</Title>
      <List>
        <Item>
          <Buttonstyled>
            <FirstStyledsvg>
              <img src={svg} alt="" />
            </FirstStyledsvg>
            <ButtonText>AC</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <img src={svg1} alt="" />
            <ButtonText>Automatic</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <img src={svg2} alt="" />
            <ButtonText>Kitchen</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <img src={svg} alt="" />
            <ButtonText>TV</ButtonText>
          </Buttonstyled>
        </Item>
        <Item>
          <Buttonstyled>
            <img src={svg} alt="" />
            <ButtonText>Shower/WC</ButtonText>
          </Buttonstyled>
        </Item>
      </List>
    </>
  );
};

export default Details;
