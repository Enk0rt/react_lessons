import {store} from "../store/store.ts";
import {useDispatch} from "react-redux";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
