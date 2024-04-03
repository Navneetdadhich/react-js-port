import styled from 'styled-components';
import { BASE_URL, Button, Container } from '../../App';

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
                <Container>
                    <FoodCards>
        {data?.map((food) => (
            <FoodCard
             key = {food.name}> 
           <div className='foodImage'>
            <img src={BASE_URL + food.image} />
           </div>
           <div className='foodInfo'>
                <h3>{food.name}</h3>
                <p>{food.text}</p>
                <Button> {food.price} </Button>
           </div>
            </FoodCard>))
        }
                    </FoodCards>
                </Container>    
   </FoodCardContainer>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
background-image: url(images/bg.jpg);
      min-height: calc(100vh - 180px);
      width: 1280px;
      background-size: cover;
`;

const FoodCards = styled.section`
    display: flex;
    flex-wrap: wrap;
    /* margin: 0 auto; */
    padding-top: 20px;
    column-gap: 20px;
    row-gap: 32px;
`;

const FoodCard = styled.div`
   display: flex;
   background-color: #49464642;
   width: 350px;
   height: 190px;
   border-radius: 10px;
   margin-top: 20px;
   background-blend-mode: overlay, normal;
   backdrop-filter: blur(7.5px);
   border: 1px solid #91918d;
   margin: auto;
   box-sizing: border-box;
   padding: 8px;
   /* position: absolute; */
   height: 150px;

   h3{
    padding-bottom: 5px;
    font-size: 12px;
   }
   p{
    font-size: 9px;
   }
   .foodInfo{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: end;
   }
`;