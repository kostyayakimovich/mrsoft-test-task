import React, { useCallback } from "react";
import "./style.scss";

const Header = ({ isRegister, setIsRegister }) => {
  const handleChangeRegister = useCallback(() => {
    setIsRegister(!isRegister);
  }, [isRegister, setIsRegister]);
  return (
    <>
      <header className="header">
        <h1 className="logo" >Yakimovich Konstantsin</h1>
        <div className="checkbox_block">
          <h3 className="description_checkbox">чувствительность регистра</h3>
          <div className="checkbox">
            <input type="checkbox" id="cb1" onChange={handleChangeRegister} />
            <label htmlFor="cb1"><div className="tick"></div></label>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;