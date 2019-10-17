import React from 'react';

const MainContext = React.createContext({
  title: '',
  onSubmit: () => {}
});

export default MainContext;