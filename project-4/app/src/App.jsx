import styled from "styled-components";


const Container = styled.div`
  
  background-color: #323334;
  height: 120px;
  /* margin: auto; */
 
`

const TopContainer = styled.div`
  
  /* background-color: aliceblue; */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1280px;
 
  .search-input input{
    /* background-color: aliceblue; */
    border: none;
    height: 30px;
    width: auto;
  }

`

const App = () => {
  return <>
            <Container>
                 <TopContainer>
                    <div >
                    <img src="/images/logo.svg" alt="logo" />
                    </div>
                    <div className="search-input">
                      <input 
                      placeholder="Search Item"
                      />
                    </div>
                 </TopContainer>
               </Container>  
          </> 
};

export default App;
