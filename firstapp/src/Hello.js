import "./Hello.css";
const Hello = () => {
  const btn = "My name is button";
  const age = 22;

  return (
    <div>
      <h1 className="hello-header">This is my Homepage</h1>
      <button sytle={{ backgroundColor: "red" }}>Click me! </button>
      <p>
        {btn}. I am {age} ago!
      </p>
    </div>
  );
};
// const runner = () => {
//   return (
//     <div>
//       <h2> Learning react </h2>
//     </div>
//   );
// };
export default Hello;
