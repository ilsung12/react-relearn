import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return (
    <div>
      {props.name}
      <br />
      <br />
      {props.age}
      <br />
      <br />
      {props.cus}
    </div>
  );
}

PropComponent.defaultProps = {
  // props 값을 넣어주지 않았음에도 default 값이 전해졌다.
  name: "han",
  age: 7,
  cus: 1,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired, // 값이 사라졌다
  // 위에 있는 것 모두 `isRequired`와 연결하여 prop가 제공되지 않았을 때
  // 경고가 보이도록 할 수 있습니다.
  // requiredFunc: PropTypes.func.isRequired,
  // 모든 데이터 타입이 가능한 필수값
  // requiredAny: PropTypes.any.isRequired,
  cus: function (props, propName, componentName) {
    if (!/2/.test(props[propName])) {
      return new Error( // 에러내용 커스텀
        "Invalid prop `" +
          propName +
          "(" +
          props[propName] +
          ")" +
          componentName +
          "`. Validation Crazy."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
