import "./App.css";
import FComment from "./FComment";
import Comment from "./Comment";

function App() {
  return (
    <div className="ui component">
      <FComment
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
      />

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
    </div>
  );
}
export default App;
