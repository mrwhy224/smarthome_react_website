import styled from 'styled-components';
  

export const ProductCard = styled.div`
  margin:20px 0;
  width:30%;
  height:500px;
  background:#292e41;
  display:flex;
  flex-direction:row-reverse;
  border-radius:5px;
`;
export const ProductImage = styled.div`
    width:50%;
    background-image: radial-gradient(#40bbe6,#0289b8);
    height:100%;
    border-radius:5px 50% 50% 5px;
    display:flex;
    align-items: center;
`;
export const ProductImg = styled.img`
  width:120%;
`;
export const ProductInfo = styled.div`
  width:50%;
`;