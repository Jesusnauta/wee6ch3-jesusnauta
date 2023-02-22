import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store";

export function Display() {
  const phone = useSelector((state: RootState) => state.phone);

  return <span className="phone">{phone}</span>;
}
