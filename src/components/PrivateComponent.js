import { Outlet } from "@mui/icons-material";
import React from "react";
import Navbar from "./Navbar";

export default function PrivateComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
