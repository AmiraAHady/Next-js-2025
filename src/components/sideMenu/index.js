import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <div>
      <nav class="nav flex-column">
        <Link class="nav-link"  href="/about">
          About
        </Link>
        <Link class="nav-link" href="/about/mision">
          Mision
        </Link>
        <Link class="nav-link" href="/about/vision">
          Vision
        </Link>
       
       
      </nav>
    </div>
  );
};

export default SideMenu;
