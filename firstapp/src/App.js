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
        key={item.id}
        author={item.author}
        content={item.content}
        timeAgo={item.timeAgo}
      />
    );
  });
  return (
    <div className="ui component">
      {fcomment}
      <hr />

      {comments.length <= 0 ? (
        <p>No comments</p>
      ) : (
        comments.map((item) => (
          <Comment
            key={item.id}
            author={item.author}
            content={item.content}
            timeAgo={item.timeAgo}
          />
        ))
      )}
      <hr />

      {comments.length >= 0 && <p>Total of comments : {comments.length}</p>}
    </div>
  );
}
export default App;
