import React from "react";
import { IUser } from "../../dataTypes";
import Style from "./Contacts.module.scss";

interface IContactsListItemComponentProps {
  user: IUser;
  expandedCard: string;
  setExpandedCard: (card: string) => void;
}

function ContactsListItemComponent(props: IContactsListItemComponentProps) {
  const { user, expandedCard, setExpandedCard } = props;

  const IS_EXPANDED = expandedCard === user.id.value;

  function handleExpandation() {
    if (IS_EXPANDED) {
      setExpandedCard("");
      return;
    }
    setExpandedCard(user.id.value);
  }

  return (
    <div className={Style.contactsListItem} onClick={handleExpandation} data-testid={"contactListItem"}>
      <span>
        {user.name.last} {user.name.first}
      </span>
      {IS_EXPANDED && (
        <div className={Style.detailsCard} data-testid={"detailsCard"}>
          <div>
            <span onClick={handleExpandation}>X</span>
            <img
              src={user.picture.medium}
              alt={"avatar"}
              loading={"lazy"}
              height="pixels"
            />
          </div>
          <div>
            <h4>
              {user.name.first} {user.name.last}
            </h4>
            <div className={Style.detailsCardSubContainer}>
              <div className={Style.titles}>
                <span>e-mail</span>
                <span>phone</span>
                <span>street</span>
                <span>city</span>
                <span>state</span>
                <span>postcode</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
                <span>{user.location.street.name}</span>
                <span>{user.location.city}</span>
                <span>{user.location.state}</span>
                <span>{user.location.postcode}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(ContactsListItemComponent);
