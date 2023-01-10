import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 50vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px auto;
`;

export const ProductCard = styled.div`
  margin: 3rem 1rem;
  line-height: 2;
  width: 300px;

  @media screen and (min-width: 1300px){
    width: 350px;
 }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #ef9933;

  @media screen and (max-width: 300px){
    min-width: 230px;
    height:250px ;
 }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 4rem);
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #d30016;
  color: #fff;
  transition: 0.2 ease-out;
  
  &:hover {
    background: #ef9933;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;