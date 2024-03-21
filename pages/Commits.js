import React, { useState } from 'react';
import CommentSection from './Commit'
import styles from '../styles/Commits.module.css'; // 引入CSS样式文件

class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: '',
      };
    }
    render() {
      console.log("Component re-rendered");
      const comments = [
        { author: 'Alice', date: '2024-03-14', content: '今天登了孩子微信看看娃儿平时跟谁聊天看到的是你们这帮群友，我就放心了孩子这辈子算是完了' },
        { author: '十二', date: '2024-03-15', content: `群内地下恋鉴别指南：
        1、曾经两个人都活跃，突然在群里少说话
        2、但只要一人在群内出现后，另一人会很快出现
        3、涉及到出行话题时，不会问对方准备去哪，只会说自己也想去，因为私聊已经知道行程
        4、一人被其他异性缠上时，另一人会发表一些吸引注意的字词或表情包暗示自己看着
        5、群内有好几对地下恋，但今天肯德基疯狂星期四；v我50直接告诉你，我知道的信息多` }
        ,
        { author: '十二', date: '2024-03-14', content: `这个群，现在由我管理。目的是把你们训练成一个个社会高薪人士，从本周起，已经开始执行军事化管理。
        现在我命令你们，现在立即给我v50以测试忠诚度，我升你为士兵长，不关今天是肯德基疯狂星期四的事` },
        { author: '十二', date: '2024-03-14', content: `是的，分手了
        今天是3月14日，我和那个人最终和平分手，其实从朋友到恋人我们发生了挺多事情，能走到一起也是很不容易。我能为他做的最后一件事竟然是走出他的人生。我一点都不后悔，更谢谢他教会我成长。 我也不知道是谁写的这段话，就复制过来了。今天也是个特别的日子，群里有人能请我吃肯德基的疯狂星期四吗，如果可以我想吃两份，这样的话你一份我也一份，好吗。` },
        { author: '十二', date: '2024-03-15', content: `你生多大的气也只敢拉黑不敢删除 因为你舍不得那聊天记录` },
        { author: '朴昌浩', date: '2024-03-19', content: `我是在裙里看到你的头像非常阳光，所以想跟你交个朋友，觉得你应该是个十分正能量的女士，希望你不会介意` },
        { author: '只和有病的聊', date: '2024-03-20', content: `是谁发明的早上好？早上好，你打出这三个字你不心虚吗？你面对你自己你能说出这句话吗？你真的好吗？你真的想起床吗？早上到底是谁在好？ ` },
        { author: '卧槽尼玛都风了', date: '2024-03-21', content: `从加你微信的那天起，我就开始关注你了，经常看你朋友圈，不善言辞的我不敢和你聊天，怕打扰你但是我很确信，这是喜欢，这条消息设置了仅你可见。我想和你一起过周末，你要同意就拍一拍我，再v我 50，请我吃肯德基疯狂星期四。` },
      ];
      const categorizedComments = comments.reduce((acc, comment) => {
        const date = comment.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(comment);
        return acc;
      }, {});

      if(this.state.activeTab===''){
        this.state.activeTab = Object.keys(categorizedComments)[0] || '';
      }

      return (
          <div>
            <h1>群友趣谈</h1>
            <div className={styles.tabs}>
              {Object.keys(categorizedComments).map(date => (
                <div
                  key={date}
                  onClick={() => {this.setState({ activeTab: date })
                }}
                  className={this.state.activeTab === date ? `${styles.activediv}` : `${styles.inactivediv}`}
                >
                  {date}
                </div>
              ))}
            </div>
            <div className={styles.tabContent}>
              {Object.entries(categorizedComments).map(([date, comments]) => (
                <div key={date} className={this.state.activeTab === date ? `${styles.inactivecontent}` : `${styles.activecontent}`}>
                  <CommentSection date={date} comments={comments} />
                </div>
              ))}
            </div>
          </div>
      );
    }
  }

  export default Comments;
