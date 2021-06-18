import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
  padding-top: 30px;
`;

let Title1 = styled.h4`
  font-size: 28px;
  color: #fa7b81;
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let findProduct = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Box>
            <Title1>Detail</Title1>
          </Box>
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (findProduct.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
