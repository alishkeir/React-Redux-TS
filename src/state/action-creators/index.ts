import { BankAction } from './../actions/index';
import { Dispatch } from 'react';
import { ActionType } from './../action-types/index';

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount,
        });
    };
};

export const withrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount,
        });
    };
};

export const bankruptMoney = () => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        });
    };
};
