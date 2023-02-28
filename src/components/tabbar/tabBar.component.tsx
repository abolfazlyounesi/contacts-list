import React from "react";
import TabsListItemComponent from "./tabs-listitem.component";
import Styles from "./TabBar.module.scss";

const TABS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface ITabBarComponentProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export default function TabBarComponent(props: ITabBarComponentProps) {
  const { selectedTab, setSelectedTab } = props;

  return (
    <div className={Styles.tabBarContainer}>
      {TABS.map((tab, index) => (
        <TabsListItemComponent
          item={tab}
          key={tab}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      ))}
    </div>
  );
}
