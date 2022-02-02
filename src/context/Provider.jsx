import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContex';

export default function Provider({ children }) {
  const [page, setPage] = useState('');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    page,
    setPage,
  };

  return (
    <AppContext.Provider value={contextValue}>{ children }</AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
