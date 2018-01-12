import React from 'react';
import ReactDom from 'react-dom';
export default class ComponentBodyIndex extends React.Component{
  render() {
    var username="samonnite";
    return (
      <div>
        <h1>body</h1>
        <p>{username="" ? "用户为空" : "用户名：" + username}</p>
      </div>
    );
  }
}