import {
  ADD_TO_CART_TYPE,
  REMOVE_FROM_CART_TYPE,
  addToCart,
  removeFromCart,
} from "./";

describe("Reducer Actions", () => {
  test("addToCart()", () => {
    const payload = { id: 1, name: "some data" };
    const action = addToCart(payload);

    expect(action.type).toEqual(ADD_TO_CART_TYPE);
    expect(action.payload).toEqual(payload);
  });

  test("removeFromCart()", () => {
    const payload = { id: 1, name: "some data" };
    const action = removeFromCart(payload);

    expect(action.type).toEqual(REMOVE_FROM_CART_TYPE);
    expect(action.payload).toEqual(payload);
  });
});
