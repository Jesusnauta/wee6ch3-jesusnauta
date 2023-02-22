import { PhoneStructure } from "../models/models";
import * as ac from "./phone.action.creator";

const initialState: PhoneStructure[] = [];

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);

  builder.addCase(ac.updateCreator, (state, { payload }) =>
    state.map((item) => (item.phone === payload.phone ? payload : item))
  );

  builder.addDefaultCase((state) => state);
});
function createReducer(
  initialState: PhoneStructure[],
  arg1: (builder: any) => void
) {
  throw new Error("Function not implemented.");
}
