import { Spinner } from "../../utils/types/Spinner";

const initialState: Spinner = {
  isLoading: false,
};
const spinner = (state = initialState, action: any = {}): any => {
  switch (action.type) {
    default:
      return state;
  }
};
export default spinner;
