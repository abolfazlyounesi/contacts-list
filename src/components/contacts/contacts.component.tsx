import React from "react";
import { IUser } from "../../dataTypes";
import ContactsListItemComponent from "./contacts-listitem.component";
import Style from "./Contacts.module.scss";

interface IContactsComponentProps {
  data: IUser[];
  expandedCard: string;
  setExpandedCard: (card: string) => void;
}

export default function ContactsComponent(props: IContactsComponentProps) {
  const { data, expandedCard, setExpandedCard } = props;
  return (
    <div className={Style.contactsItemContainer}>
      {data.map((user) => (
        <ContactsListItemComponent
          user={user}
          key={user.id.value}
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
        />
      ))}
    </div>
  );
}
