import {
  Title,
  List,
  Item,
  ButtonText,
  Btn,

} from './Aside.styled';
import svg1 from '../../img/svg/1.svg';
import svg2 from '../../img/svg/2.png';
import svg3 from '../../img/svg/3.png';

const Aside = () => {
  return (
    <>
      <Title>Vehicle type</Title>
      <List>
        <Item>
          <Btn>
  
              <img src={svg1} alt="heart" />
   
            <ButtonText>Van</ButtonText>
          </Btn>
        </Item>
        <Item>
          <Btn>
     
              <img src={svg2} alt="heart" />
      
            <ButtonText>Fully Integrated</ButtonText>
          </Btn>
        </Item>
        <Item>
          <Btn>
     
              <img src={svg3} alt="heart" />
     
            <ButtonText>Alcove</ButtonText>
          </Btn>
        </Item>
      </List>
    </>
  );
};

export default Aside;
