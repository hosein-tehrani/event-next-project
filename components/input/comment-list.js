import classes from "./comment-list.module.css";

function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p className="center">there is no Comments for this Event.</p>;
  } else {
    return (
      <ul className={classes.comments}>
        {comments.length !== 0 &&
          comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.text}</p>
              <div>
                By <address>{comment.name}</address>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}

export default CommentList;
