import { Dispatch, SetStateAction, createContext, useState, useEffect } from "react";

interface IAppChild {
  children: React.ReactNode;
}

interface IAppContext {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  isLogin: boolean;
}

export const appContext = createContext({} as IAppContext);

const AppContextProvider: React.FC<IAppChild> = ({ children }) => {
  const [mode, setMode] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(() => {
    // مقدار اولیه را از localStorage دریافت کن
    return sessionStorage.getItem("condition") === "true";
  });

  useEffect(() => {
    // هر وقت isLogin تغییر کرد، مقدار جدید را ذخیره کن
    localStorage.setItem("condition", isLogin.toString());
  }, [isLogin]);

  return (
    <appContext.Provider value={{ mode, setMode, isLogin, setIsLogin }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;