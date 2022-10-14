import React from "react";

const Jsx = () => {
  const element = <div id="root">Hello World</div>;
  const Relement = React.createElement("div", { id: "root" }, "Hello World");
  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });
  return (
    <div>
      <div className="heading" id="heading">
        This is Heading
      </div>
    </div>
  );
};
export default Jsx;
