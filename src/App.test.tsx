import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { getRootStateMock } from "./redux/store";
import { HomeScreen } from "./screens";
import * as ContactsSlice from "./redux/slices/contacts/contacts.slice";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(getRootStateMock());

const setup = () => {
  const wrapper = render(
    <ReduxProvider store={store}>
      <HomeScreen />
    </ReduxProvider>
  );
  return {
    wrapper,
  };
};

describe("Home screen test", () => {

  it("should show / hide the detail card when clicking on the name", async () => {
    const { wrapper } = setup();

    const contact = wrapper.getByTestId("contactListItem");

    fireEvent.click(contact);

    const detailsCard = wrapper.getByTestId("detailsCard");

    expect(detailsCard).toBeVisible();

    fireEvent.click(contact);

    expect(detailsCard).not.toBeVisible();
  });

  it("should render all the tabs", async () => {
    const { wrapper } = setup();

    const tabs = wrapper.getAllByTestId("tabBarItem");

    expect(Object.values(tabs).length).toBe(26);
  });

  it("should call the the GET api when home screen loads", async () => {
    const getContactsApi = jest.spyOn(ContactsSlice, "getContacts");

    const { wrapper } = setup();

    expect(getContactsApi).toHaveBeenCalledTimes(1);
  });
});
