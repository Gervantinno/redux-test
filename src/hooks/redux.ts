import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { DispatchType, StoreType } from "../redux/store";
import { RootStateType } from "../redux/reducers";

export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
