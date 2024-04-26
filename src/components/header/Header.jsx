import React, { useState } from "react";
import logo from "../../assets/header/Logotype.png";
import search from "../../assets/header/W.png";
import { useDispatch } from "react-redux";
import { actions } from "./../../actions";

export default function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState();
  const [isVisibe, setIsVisible] = useState(false);

  function handelClick(e) {
    const value = e.currentTarget.innerHTML;
    console.log(value);
    dispatch({ type: actions.FILTER_BY_CATEGORY, payload: value });
  }
  function setInputVisible(e) {
    console.log(e.target.parentElement.parentElement.children[0].value);
    if(!isVisibe){
        e.target.parentElement.parentElement.children[0].value =''
    }

    setIsVisible(!isVisibe);
  }

  function handelSubmit(e) {
    e.preventDefault();
    let value = e.target[0].value;
    dispatch({ type: actions.FILTER_BY_INPUT_VALUE, payload: value });
  }

  function handlFocus(e) {
    return (e.target.value = "");
  }

  return (
    <div className="navbar">
      <div className="navbar_top_section">
        <div onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`burger_menu ${isOpen ? "span_visible" : "span_hidden"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo_section">
          <img src={logo} alt="logo" />
        </div>
        <div className="serch">
          <form action="submit" onSubmit={(e) => handelSubmit(e)}>
            <input
              type="text"
              className={`input_search ${!isVisibe ? "hidden" : "visible"}`}
              onFocus={(e) => handlFocus(e)}
            />
            <button
              className="search_btn"
              type="submit"
              onClick={setInputVisible}
            >
              <img src={search} alt="search" className="searchmg" />
            </button>
          </form>
        </div>
      </div>
      <div className={`filter_side ${isOpen ? "active" : " "}`}>
        <ul className="navbar_list">
          <il className="list_item">
            <h4>Demos</h4>
          </il>
          <il className="list_item">
            <h4>Post</h4>
            <ul>
              <li>Post Header</li>
              <li>Post Layout</li>
              <li>Share Buttons</li>
              <li>Gallery Post</li>
              <li>Video Post</li>
            </ul>
          </il>
          <il className="list_item">
            <h4>Features</h4>
          </il>
          <il className="list_item">
            <h4>Categories</h4>
            <ul>
              <li value="all" onClick={(e) => handelClick(e)}>
                All
              </li>
              <li value="Lifestyle" onClick={(e) => handelClick(e)}>
                Lifestyle
              </li>
              <li value="Events" onClick={(e) => handelClick(e)}>
                Events
              </li>
              <li value="Travel" onClick={(e) => handelClick(e)}>
                Travel
              </li>
              <li value="Music" onClick={(e) => handelClick(e)}>
                Music
              </li>
            </ul>
          </il>
          <li className="list_item">
            <h4>Shop</h4>
          </li>
          <li className="list_item">
            <h4>Buy Now</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
