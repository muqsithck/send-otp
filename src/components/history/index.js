import React from "react";
import { useSelector } from "react-redux";

export default function Index() {
  const globalSate = useSelector(({ contact }) => contact);
  return (
    <div>
      {globalSate.history.length > 0 ? (
        <ul>
          {globalSate.history.map(item => {
            return <li>{item.sureName}</li>;
          })}
        </ul>
      ) : (
        <div>noting...</div>
      )}
    </div>
  );
}
