let CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>We created a React div component! WOO!</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
})

let CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Yeaaaah I am a CommentList.
      </div>
    )
  }
})

let CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        I am a CommentForm!
      </div>
    )
  }
})

ReactDOM.render(
  <CommentBox />, document.getElementById('content')
)
// let CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         We created a React div component! WOO!
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );
//*Special Note*: React variables are capitalized (like a lot of other libraries / frameworks) while html elements start with lowercase letters