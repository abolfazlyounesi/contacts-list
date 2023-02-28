import React from "react";
import { ContactsComponent } from "../../components/contacts";
import { TabBarComponent } from "../../components/tabbar";
import Styles from "./Home.module.scss";
import { useHomeScreen } from "./useHomeScreen";

function HomeScreen() {
  const { data, selectedTab, setSelectedTab, expandedCard, setExpandedCard } =
    useHomeScreen();

  return (
    <div className={Styles.container}>
      <TabBarComponent
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <ContactsComponent
        data={data}
        expandedCard={expandedCard}
        setExpandedCard={setExpandedCard}
      />
    </div>
  );
}

export default HomeScreen;
