import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// themes를 포함한 Context -> React.createContext로 생성했음.
export const ThemeContext = React.createContext(
  themes.dark // 기본값 (Provider로 선언되지 않았을 떄 쓰인다.)
);
