import "./App.css";
import FComment from "./FComment";
import Comment from "./Comment";

const comments = [
  {
    author: "Thor1",
    content: "this is content 6",
    timeAgo: "Today is 0:39 pm",
  },

  {
    author: "Thor7",
    content: "this is content 7",
    timeAgo: "Today is 7:39 pm",
  },
  {
    author: "Thor8",
    content: "this is content 8",
    timeAgo: "Today is 2:39 pm",
  },
  {
    author: "Thor9",
    content: "this is content 9",
    timeAgo: "Today is 1:39 pm",
  },
];

function App() {
  const fcomment = comments.map((item) => {
    return (
      <FComment
        author={item.author}
        content={item.content}
        timeAgo={item.timeAgo}
      />
    );
  });
  return (
    <div className="ui component">
      {fcomment}
      {/* <FComment
        author="Thor"
        content="I am GOD."
        timeAgo="Today is at 6:00 pm"
      />
      <FComment
        author="Spider man"
        content="I am a spider."
        timeAgo="Today is at 0:00 pm"
      />
      <FComment
        author="Worvlin"
        content="I am a worlf."
        timeAgo="Today is at 2:00 pm"
      /> */}

      <hr />
      <Comment
        author="Worvlin"
        content="I am a worlf."
        timeAgo="Today is at 2:00 pm"
      />

      <Comment
        author="Ant man"
        content="I am a Ant."
        timeAgo="Today is at 0:00 pm"
      />

      <Comment
        author="Ant man"
        content="I am a Ant."
        timeAgo="Today is at 0:00 pm"
      />
    </div>
  );
}
export default App;
