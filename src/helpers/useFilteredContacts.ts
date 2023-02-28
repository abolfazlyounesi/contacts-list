import { useCallback } from "react";
import { shallowEqual } from "react-redux";
import { IUser } from "../dataTypes";
import { useAppSelector } from "../redux/hooks";

export default function useFilteredContacts(dependencies: any[]) {
  const contactsData = useAppSelector(
    (state) => state.contacts.entities,
    shallowEqual
  );
  
  const list = useCallback((text: string) => {
    return Object.values(contactsData).filter(
      (i) => i?.name.last.charAt(0).toLowerCase() === text
    ) as IUser[];
  // eslint-disable-next-line
  }, [contactsData, ...dependencies]);

  return {
    list
  }
}