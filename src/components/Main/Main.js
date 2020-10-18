import React, { useEffect, useState, useCallback } from "react";
import { getDataApi } from "../../services/services";
import { checkRegister } from "./utils";
import "./style.scss";

const Main = ({ isRegister }) => {
  const [title, setTitle] = useState("");
  const [listResult, setResult] = useState([]);
  const [listData, setListData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await getDataApi();
      setListData(data);
    };
    getData();
  }, []);

  const handleChange = useCallback(event => setTitle(event.target.value), []);

  const handleSearchLength = useCallback(
    (inputTitle) => {
      const title = inputTitle.trim();
      if (!isNaN(title) && title !== '') {
        const rightResponse = `Результат для длинны строк больше "${title}"`;
        const wrongResponse = `Поиск для длинны строки "${title}" результатов не дал`;
        const listLengthString = listData.filter(item => item.length > title);
        setResult(listLengthString);
        setMessage(listLengthString.length ? rightResponse : wrongResponse);
        setTitle("");
      } else {
        const failResponse = "Поиск результатов не дал";
        setMessage(failResponse);
        setResult([]);
        setTitle("");
      }
    },
    [listData],
  );

  const handleSearchSubstr = useCallback(
    (inputTitle) => {
      const title = inputTitle.trim();
      if (typeof (title) === "string" && title !== '') {
        const rightResponse = `Строки которые содержат подстроку: "${title}"`;
        const wrongResponse = `Поиск для подстроки "${title}" результатов не дал`;
        const listSubstring = checkRegister(listData, title, isRegister);
        setResult(listSubstring);
        setMessage(listSubstring.length ? rightResponse : wrongResponse);
        setTitle("");
      }
      else {
        const failResponse = "Поиск результатов не дал";
        setMessage(failResponse);
        setResult([]);
        setTitle("");
      }
    },
    [isRegister, listData],
  );

  const handleKeyPress = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        setMessage("");
      }
    },
    [],
  )

  return (
    <>
      { <section className="main-page">
        <div className="main-form">
          <input className="main-input"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={title}
            type="text"
            id="title"
            placeholder="Введите строку либо число"
          ></input>
          <div className="btn-block">
            <button className="btn" onClick={() => handleSearchLength(title)}>
              фильтр по длине слов
            </button>
            <button className="btn" onClick={() => handleSearchSubstr(title)}>
              фильтр по подстроке
            </button>
          </div>
        </div>
        {message && <h3 className="message">
          {message}
        </h3>}
        {listResult.length > 0 && <ul>
          {listResult.map(element => (
            <li className="item-result" key={element}>
              <p>{element}</p>
            </li>
          ))}
        </ul>}
      </section>}
    </>
  );

};
export default Main;