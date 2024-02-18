export const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      padding: '8px 0',
      fontSize: '18px',
      color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
    }),
  
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#121417',
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: '#ffffff', //фон списку
      // overflowY: 'auto',
      padding: '14px 8px 14px 18px',
      borderRadius: '14px',
      border: '1px solid rgba(18, 20, 23, 0.05)',
      boxShadow: '0px 4px 36px 0px, rgba(0, 0, 0, 0.02)',
    }),
    indicatorSeparator: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'transparent', // колір розділювача
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: '#121417',
      '&:hover': {
        color: '#121417',
      },
    }),
    container: (defaultStyles, state) => ({
      ...defaultStyles,
      color: '#121417',
      backgroundColor: '#F7F7FB',
      borderRadius: '14px',
      outline: 'none',
    }),
    menuList: (base) => ({
      ...base,
      overflowY: 'auto', 
      '&::-webkit-scrollbar': {
        width: '8px', 
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(18, 20, 23, 0.05)', 
        borderRadius: '10px',
      },
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#121417',
      fontSize: '18px',
      lineHeight: '1.11',
      margin: '0',
      padding: '0',
    }),
  };
  
  export const firstSelectStyles = {
    ...customStyles,
    control: (defaultStyles) => ({
      ...defaultStyles,
      cursor: 'pointer',
      background: 'transparent',
      appearance: 'none', 
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      width: '224px',
      height: '48px',
      fontSize: '18px',
      lineHeight: '1.11',
      fontWeight: '500',
    }),
  };
  
