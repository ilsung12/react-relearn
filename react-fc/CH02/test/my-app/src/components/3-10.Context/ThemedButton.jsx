// import React, { Component } from 'react';
// import { ThemeContext } from './ThemeContext';

// class ThemedButton extends Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;

//     return (
//   <button
//     {...props}
//     onClick={props.changeTheme}
//     style={{ backgroundColor: theme.background, color: theme.foreground }}
//   >
//     button
//   </button>
//     );
//   }
// }

// ThemedButton.contextType = ThemeContext;

// export default ThemedButton;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedButton(props) {
  const theme = useContext(ThemeContext); // 이부분에서 공통된 Context를 가져온다.

  return (
    <button
      {...props}
      onClick={props.changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      button
    </button>
  );
}
