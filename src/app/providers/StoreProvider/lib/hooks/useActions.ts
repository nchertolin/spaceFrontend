import { bindActionCreators } from '@reduxjs/toolkit';
import { userActions } from '@/entities/User';
import { useAppDispatch } from './redux.ts';

const actions = { ...userActions };

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions, dispatch);
};
