import { createAction } from "@reduxjs/toolkit";
import { PhoneStructure } from "../models/models";
import { phonesActions } from "./phone.actions.type";

export const updateCreator = createAction<PhoneStructure>(phonesActions.update);

export function loadCreator(
  loadCreator: any,
  arg1: (_state: any, { payload }: { payload: any }) => any
) {
  throw new Error("Function not implemented.");
}
