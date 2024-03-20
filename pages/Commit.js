import React from 'react';
import styles from '../styles/Commits.module.css'; // 引入CSS样式文件

// 单个评论组件
function Comment({ author, date, content }) {
  return (
    <div className={styles.comment}>
      <div className={styles.author}>{author}</div>
      <div className={styles.date}>{date}</div>
      <div style={{clear:"both"}}></div>
      <div className={styles.content}>{content.split('\n').map((line, index) => <div key={index}>{line}</div>)}</div>
      <br></br>
    </div>
  );
}

// 评论区组件，呈现多个评论
class CommentSection extends React.Component {
  render() {
    const {date, comments } = this.props;
    return (
      <div className={styles.commentSection}>
        <h2>{date}</h2>
        
        {
        Array.isArray(comments)?
        (comments.map((comment, index) => (
          <Comment
            key={index}
            author={comment.author}
            date={comment.date}
            content={comment.content}
          />
        ))):null}
      </div>
    );
  }
}

export default CommentSection;