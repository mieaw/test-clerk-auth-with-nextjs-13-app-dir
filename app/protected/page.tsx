import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

const ProtectedPage = (props: Props) => {
  return (
    <div>
      protected:
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;
