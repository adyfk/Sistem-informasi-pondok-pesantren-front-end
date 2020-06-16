import React, { useContext } from "react";
import { Nav } from "shards-react";

// import Notifications from "./Notifications";
import UserActions from "./UserActions";
import { CtxUserProfile } from "../../../../layouts/Default/hooks/useAction";

export default () => {
  const { profile } = useContext(CtxUserProfile);
  return (
    <Nav navbar className="border-left flex-row">
      {/* <Notifications /> */}
      <UserActions profile={profile} />
    </Nav>
  );
};
