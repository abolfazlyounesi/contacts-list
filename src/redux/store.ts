import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// this function is been used for testing purposes and simulates the store
export const getRootStateMock = (): RootState => ({
  contacts: {
    entities: {
      "18725291": {
        cell: "(06) 50401117",
        dob: {
          age: 41,
          date: "1981-07-12T20:14:31.659Z",
        },
        email: "hermien.vlaar@example.com",
        gender: "female",
        id: {
          name: "BSN",
          value: "18725291",
        },
        location: {
          city: "Dedgum",
          coordinates: {
            latitude: "33.9775",
            longitude: "151.3886",
          },
          country: "Netherlands",
          postcode: "3505 IB",
          state: "Zeeland",
          street: {
            name: "Curtis",
            number: 3433,
          },
          timezone: {
            description: "Azores, Cape Verde Islands",
            offset: "-1:00",
          },
        },
        login: {
          md5: "8c4756234736871b434579f13edbc129",
          password: "101010",
          salt: "cRGinovb",
          sha1: "58624bb06b2b06a4b7c12452cd0cbd8289fef9ab",
          sha256:
            "bccca576aa35ae7553206f47f8769e919a0e6d0a46a5f0e3e62144dce4346d3c",
          username: "silverkoala917",
          uuid: "5eb6542d-70b8-4233-900c-7ea5524e2b7a",
        },
        name: {
          first: "Abolfzl",
          last: "Abolfazl",
          title: "Mr",
        },
        nat: "NL",
        phone: "(012) 9174637",
        picture: {
          large: "https://randomuser.me/api/portraits/women/32.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
        },
        registered: {
          age: 13,
          date: "2009-03-08T08:11:18.401Z",
        },
      },
    },
    ids: [],
    loading: false,
    error: "",
  },
});
