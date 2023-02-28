import React, { useCallback } from "react";
import { useFilteredContacts } from "../../helpers";
import Styles from "./TabBar.module.scss";

interface ITabsListItemComponentProps {
  item: string;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

function TabsListItemComponent(props: ITabsListItemComponentProps) {
  const { item, selectedTab, setSelectedTab } = props;

  const {list} = useFilteredContacts([])

  function onClickTab() {
    setSelectedTab(item);
  }

  const count = list(item).length

  const IS_SELECTED = selectedTab === item;
  const HAS_CONTENT = count > 0;

  // another way to handle following is to use styled components

  const getClassName = useCallback(() => {
    if (!HAS_CONTENT && IS_SELECTED) {
      return `${Styles["tabBarItem__nocontent"]} ${Styles["tabBarItem__selected"]}`;
    }
    if (!HAS_CONTENT) {
      return Styles["tabBarItem__nocontent"];
    }
    if (IS_SELECTED) {
      return Styles["tabBarItem__selected"];
    }
  }, [IS_SELECTED, HAS_CONTENT]);

  return (
    <div
      className={`${Styles["tabBarItem"]} ${getClassName()}`}
      onClick={onClickTab}
      data-testid={"tabBarItem"}
    >
      <span>{item}</span>
      <span>{count}</span>
    </div>
  );
}

export default React.memo(TabsListItemComponent);
