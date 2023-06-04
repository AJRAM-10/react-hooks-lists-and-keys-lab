import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const pageLink = links.map((link) => (
    <a key={link} href={`#${link}`}>{link}</a>
  ))

  return <nav>{pageLink}</nav>;
}

export default NavBar;
