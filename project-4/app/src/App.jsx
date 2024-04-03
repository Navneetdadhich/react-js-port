import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import SearchResult from "./components/SearchResult/SearchResult";



export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("All");

    useEffect(() => {
      const FetchFoodData = async () => {
        setLoading(true);
        try {
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
        setData(json);
        setLoading(false);
        setFilteredData(json);
      }
       catch (error) {
        setError("error occured");
      }
      
    };
    FetchFoodData();
    }, []);
    
    const searchFood = (e) => {
      const searchValue = e.target.value;
      
      if(searchValue == ""){
        setFilteredData(null);
      }

      const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filter);
      setFilteredData(filter);
    };

    const filterFood = (type) => {
        if(type == "all"){
          setFilteredData(data);
          setSelectedBtn("All");
          return;
        }

        const filterffood = data?.filter((food) => 
        food.type.toLowerCase().includes(type.toLowerCase())
        );
        setFilteredData(filterffood);
        setSelectedBtn(type);
    };

 

  // FetchFoodData();
  if(error) return <div> {error} </div>;
  if(loading) return <div> loading.....</div>;

  return <>
            <Container>
                 <TopContainer>
                    <div >
                    <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <div className="search-input">
                      <input onChange={searchFood} placeholder="Search Item"
                      />
                    </div>
                 </TopContainer>

                 <FilterContainer>
                  <Button
                  onClick = { () => filterFood("all") }
                  >All</Button>
                  <Button
                  onClick = { () => filterFood("dinner") }
                  >Dinner</Button>
                  <Button
                  onClick = { () => filterFood("lunch") }
                  >Lunch</Button>
                  <Button
                  onClick = { () => filterFood("breakfast") }
                  >Breakfast</Button>
                 </FilterContainer>

               </Container>  
               <SearchResult data ={filteredData}/>
          </> 
};

export const Container = styled.div`
  
  background-color: #323334;
  height: 120px;
  width: 1280px;
  /* margin: auto; */
 
`;

const TopContainer = styled.div`

  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
  margin-top: 50px;
  max-width: 1280px;

 
 
  .search-input input{
    background-color: transparent;
    border: 1px solid lightcoral;
    border-radius: 5px ;
    color: white;
    padding: 5px;
    height: 30px;
    width: auto;
  }

`;

const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 1280px;
  /* margin: 0 150px; */
`;

export const Button = styled.button`
background-color: #f57272;
color: white;
padding: 5px;
border: none;
width: 80px;
margin: 10px;
border-radius: 5px;
cursor: pointer;
&:hover{
  background-color: #d54141;
}
`;



export default App;
