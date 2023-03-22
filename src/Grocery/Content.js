import React from "react";
import Item from "./Item";

const Content = (
  { groceries, changeCheck, deleteGrocery }
) => {

  return (
    <div className="contentArea">
      <ul>
        {
          groceries.map((item) => (
            <Item key={item} item={item} changeCheck={changeCheck}
              deleteGrocery={deleteGrocery} />
          ))
        }
      </ul>
    </div>

  );
};

export default Content;
