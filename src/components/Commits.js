import React, { useState } from 'react';
import CommentSection from './Commit'
import styles from '../../styles/Commits.module.css'; // 引入CSS样式文件

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
        { author: '十二', date: '2024-03-14', content: `群内地下恋鉴别指南：
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
        { author: '卧槽尼玛都风了', date: '2024-03-22', content: `各位小三工作者大家好：
        应协会要求需收各街道小区20、21、22、23级保护费。
        相关文件已【更新】，具体注意事项如下文档中所示，请各位负责人认真阅读并仔细填写下发表格，电子表格请于3月22日（本周五）中午12:00前上交至小三协会中心邮箱xiaosan@163.cow
        
        注意：电子版表格上交后，将于核对后向各街道发送【终版文件】，纸质版保护费缴交表请以该【终版】为准。
        收到请回复，谢谢配合` },
        { author: '卧槽尼玛都风了', date: '2024-03-22', content: `我适合被包养的5大理由：
        1.好吃懒做，整个人和努力没有半点关系。
        2.心理脆弱，除了马屁听不得半点批评。
        3.爱打游戏看电视，所以宅在家里也很容易满足，不会出去随意挥霍。
        4.眼界很低，被包养也是买便宜货，不会很快把家产败光。
        5.有钱的时候会很善良。` },
        { author: '十二', date: '2024-03-21', content: `见字如面，一晃又一年，有人再见，有人却再也不见。时常叹息，如果我们感情能像圆周率一样没有尽头就好，可惜风不会言语，无法替我传达对你的思念。我承认对你还没有放下，还在瞒着所有人继续爱你，总想再等等…我也想过我迟迟放不下的原因，可能你的出现真的给了我前所未有的温暖和心动，也或许是当时太依赖你了，所以到最后分开的时候，就像失去精神支柱一样，特别崩溃，以至于到现在，我再也做不回自己。我明白自己也有很多缺点，情商低，不会说话还总是词不达意，总是说话惹你生气，让你难过，也没有给你说过浪漫的话，做过让你感动的事，但是在爱你的时候我能保证我是全心全意的爱你，不参杂任何虚假和权衡利弊，你在我身边我从未羡慕过他人，你在我这里永远是满分，在我的心里永远是最好的，不可替代的，我可能这辈子都忘不掉你了，就连做梦我都想和你在一起，可命运对我真的很不公平，它只允许我喜欢你，却不允许我拥有你，有时经常会想，如果有一天我们见面了，我该和你说什么？是好久不见，还是我想你了，还是我还爱着你？今天是疯狂星期四，v我五十，让我们重新开始好吗？` },
        { author: 'Airis Lin', date: '2024-03-21', content: `疯四疯三天啦` },
        { author: '朴昌浩', date: '2024-03-22', content: `上班就按开关，工作内容简单，月薪几千包餐，手机玩到下班，危险与我无关，喜欢业主小丹` },
        { author: 'AAA~西湖藤椒鱼批发', date: '2024-03-22', content: `妹妹 我一个月生活费1503 愿意给你1314 剩下的188是我的身高 还有的8块是我的腹肌 别问为什么少了7块钱 因为我对你的爱被判无7徒刑` },
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
