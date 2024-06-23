import { Outlet } from "@mui/icons-material";
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

export default function PrivateComponent() {
  return (
    <div>
     <Outlet/>
    </div>
  );
}
