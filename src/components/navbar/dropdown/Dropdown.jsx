import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ open, setOpen }) => {
  return (
    <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
      {/*  <DropdownItem text={"Speakers"} parentid={"speakers"} setOpen={setOpen} /> */}
      <DropdownItem text={"Mentors"} parentid="judges" setOpen={setOpen} />
      <DropdownItem
        text={"Testimonials"}
        parentid="testimonials"
        setOpen={setOpen}
      />
      <DropdownItem text={"FAQ"} parentid="faq" setOpen={setOpen} />
      <DropdownItem text={"Team"} parentid="team" setOpen={setOpen} />
    </div>
  );
};

function DropdownItem(props) {
  const navigate = useNavigate();
  let element;

  const gotoId = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    } else {
      window.location.href = "#" + id;
    }
  };

  return (
    <p
      className="dropdown_texts"
      onClick={() => {
        gotoId(props.parentid);
        props.setOpen(false);
      }}
    >
      {props.text}
    </p>
  );
}

export default Dropdown;
