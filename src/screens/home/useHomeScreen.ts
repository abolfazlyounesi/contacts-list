import { useEffect, useState } from "react";
import { useFilteredContacts } from "../../helpers";
import { useAppDispatch } from "../../redux/hooks";
import { getContacts } from "../../redux/slices/contacts";

export function useHomeScreen() {
  const [selectedTab, setSelectedTab] = useState("a");
  const [expandedCard, setExpandedCard] = useState("");

  const dispatch = useAppDispatch();

  const {list} = useFilteredContacts([selectedTab])

  const data = list(selectedTab)

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return {
    selectedTab,
    setSelectedTab,
    data,
    expandedCard,
    setExpandedCard,
  };
}
