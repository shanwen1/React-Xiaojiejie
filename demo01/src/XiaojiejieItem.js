import React, { Component } from "react";
import propTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}为你作-{this.props.content}
      </li>
    );
  }

  handleClick() {
    //this.props.list=[] 这样的写法是错误的，react是单向数据流，不能从子组件去改变父组件的值
    this.props.deleteItem(this.props.index);
  }
}

XiaojiejieItem.propTypes = {
  avname: propTypes.string.isRequired,
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func,
};

XiaojiejieItem.defaultProps = {
  avname: "松岛枫",
};

export default XiaojiejieItem;
