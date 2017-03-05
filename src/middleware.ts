import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { clearPurchase, requestPurchase } from "actions/purchase";
import { IState } from "reducers";

var timeoutId: number;

const autoLogout: Middleware = ({dispatch, getState}: MiddlewareAPI<IState>) =>
    (next: Dispatch<IState>) => (action: any): any => {

    const result = next(action);
    window.clearTimeout(timeoutId);
    let state = getState();

    timeoutId = window.setTimeout( () => {
        if (state.purchase.state === 'ONGOING') {
            // Following could be uncommented when applying Pending
            // transactions
            /*if (state.account.id) {
                if (state.products.products.length > 0) {
                    // Send a pending transaction to the server
                    dispatch(requestPurchase());
                } else {

                }
            } else {
                // Wipe the purchase view
                dispatch(clearPurchase());
            }*/

            // Wipe the purchase view
            dispatch(clearPurchase());
        }
    }, 30000);

    return result;
};

export default autoLogout;
