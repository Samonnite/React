import React, { Component } from 'react';
import showdown from 'showdown' //第三方的一个开源markdown库
import Prism from 'prismjs '//第三方的一个开源的代码染色库，非常好用
import './index.css'
import style1 from "raw-loader!./style1.txt" //注意使用raw-loader解析字符串
import style2 from "raw-loader!./style2.txt"
import resume from "raw-loader!./resume.txt"


let interval


const writeChars = (that, nodeName, char) => new Promise((resolve) => {
  setTimeout(() => {
    if (nodeName == 'workArea') {
      const origin = that.state.DOMStyleText + char
      const html = Prism.highlight(origin, Prism.languages.css)
      that.setState({
        styleText: html,
        DOMStyleText: origin
      })
      that.contentNode.scrollTop = that.contentNode.scrollHeight
    } else if (nodeName == 'resume') {
      const originResume = that.state.resumeText + char
      const converter = new showdown.Converter()
      const markdownResume = converter.makeHtml(originResume)
      that.setState({
        resumeText: originResume,
        DOMResumeText: markdownResume
      })
      that.resumeNode.scrollTop = that.resumeNode.scrollHeight
    }
    /* 这里是控制，当遇到中文符号的？，！的时候就延长时间  */
    if (char == "？" || char == "，" || char == "！") {
      interval = 800
    } else {
      interval = 22
    }
    resolve()//一定要写的promise函数，不然无法获得promise结果
  })
})

const writeTo = async (that, nodeName, index, text) => {
  // 一个字一个字的读
  let speed = 1
  let char = text.slice(index, index + speed)
  index += speed
  if (index > text.length) {
    return //如果字打完了，就返回了
  }
  await writeChars(that, nodeName, char)
  await writeTo(that, nodeName, index, text)
}
class App extends Component {
  constructor(...prop) {
    super(...prop)
    this.state = {
      styleText: '',
      DOMStyleText: '',
      resumeText: '',
      DOMResumeText: ''
    }
  }
  componentDidMount() {
    (async (that) => {
      await writeTo(that, 'workArea', 0, style1)
      await writeTo(that, 'resume', 0, resume)
      await writeTo(that, 'workArea', 0, style2)
    })(this)
  }
  render() {
    return (
      <div>
        <div className='workArea' ref={(node) => { this.contentNode = node }}>
          <div dangerouslySetInnerHTML={{ __html: this.state.styleText }}></div>
          <style dangerouslySetInnerHTML={{ __html: this.state.DOMStyleText }}></style>
        </div>
        <div className='resume' dangerouslySetInnerHTML={{ __html: this.state.DOMResumeText }}
          ref={(node) => { this.resumeNode = node }}
        ></div>
        <div id='bot' style={{ padding: '10px', textAlign: 'center', marginTop: '100px', fontSize: '10px', color: 'rgba(150, 150, 150, 0.8)' }}>
          Powered by
        <a href="#">Samonnite</a>
        </div>
      </div>
    );
  }
}

export default App;
