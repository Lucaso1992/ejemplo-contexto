import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [condition, setCondition] = useState(true)
  const [information, setInformation] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  
  const store = {condition, information}
  const actions = {setCondition, getContacts};

  useEffect(() => {
    getFetchProfileInfo()
  }, [loggedIn])

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;

