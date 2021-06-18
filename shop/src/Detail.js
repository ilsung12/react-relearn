import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

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

  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Box>
            <Title1>Detail</Title1>
          </Box>

          {alert === true ? (
            <div className="my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다.</p>
            </div>
          ) : null}

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
