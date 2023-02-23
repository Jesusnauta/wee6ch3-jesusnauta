/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store";

export function Actions() {
  const numbers = useSelector((state: RootState) => state.phone);
  return (
    <div className="actions">
      <span className="number">{numbers}</span>
      <a href="#" className="call">
        Call
      </a>

      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
}
