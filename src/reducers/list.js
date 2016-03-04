import { List } from 'immutable';

const initialList = List();
export function list(state = initialList, action) {
    let type = action.type;
    switch (type) {
        default:
            return state;
    }
}
