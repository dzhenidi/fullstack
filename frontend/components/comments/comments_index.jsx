import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/node_modules/quill/dist/quill.snow.css';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: 'Add a comment...'
    };
    this.showCreateComment = this.showCreateComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }

  showCreateComment(){
    () => this.quill();
  }

  submitComment(){
    const comment = {
      'body': this.state.text,
      'commentable_id': this.props.commentableId,
      'commentable_type': this.props.commentableType
    };
    this.props.createComment(comment);
  }

  quillChange(){
    return (value) => {
      this.setState({text: value});
    };
  }

  quill(){
    return(
      <ReactQuill
        theme="snow"
        value={this.state.text}
        defaultValue="Add a comment..."
        onChange={this.quillChange()}>
        <ReactQuill.Toolbar key="toolbar"
                    ref="toolbar"
                    items={ReactQuill.Toolbar.defaultItems.slice(0, 3)}
                    />
        <div key="editor"
             ref="editor"
             defaultValue="Add a comment..."
             className="quill-contents"
             dangerouslySetInnerHTML={{__html:this.state.text}}/>
      </ReactQuill>
    );
  }


  render(){
    let comments = this.props.comments;
    let commentItems = comments.map( comment => {
      return (
        <article key={comment.id} className="comment-item-container">
          <h2>{comment.author}</h2>
          <div className="comment-body">
            <div dangerouslySetInnerHTML={{__html: comment.body}}/>
          </div>
          <div className="comment nav-history">
            On {comment.createdAt}
          </div>
        </article>
      );
    });


   return (
     <div className="comments-list">
       {commentItems}
       {this.quill()}
       <button
         className="small home-button"
         onClick={this.submitComment}>Add this comment
       </button>


     </div>
   );
 }
}

export default CommentsIndex;
