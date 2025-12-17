import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  margin: 0px 13px 73px;
  padding: 5px;
  width: 200px;
  height: 370px;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #efefefaa;
    border-radius: 7px;
  }
`;

export const ProductImage = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 7px;
  background-color: #efefefaa;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Сохраняет пропорции и подгоняет изображение в блок */
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 100%;
  flex: 1;
`;

export const ProductTitle = styled.p`
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-weight: bold;
  margin-top: auto;
`;
