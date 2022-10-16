// this just return back an object
// so now we dont have to type the name of the keys which can lead to human error
// we use it anywhere we need to dispatch
export const createAction = (type, payload) => ({ type, payload });
