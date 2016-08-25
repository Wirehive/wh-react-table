/*! index.js | © 2016 Wirehive Ltd, License: MIT */

import React from 'react';

export default class Table extends React.Component {

  static propTypes = {
    fields: React.PropTypes.array.isRequired,
    children: React.PropTypes.node.isRequired,
    data: React.PropTypes.object.isRequired,
    filter: React.PropTypes.func.isRequired
  }

  componentWillMount() {
    this.setState({
      sort: i => this.props.fields[0][1](i),
      dir: 1,
      filter: ''
    });
  }

  render() {
    return <table className="table">
      <thead>
        <tr>
          <td colSpan={this.props.fields.length}>
            <input value={this.state.filter} onChange={e => this.setState({filter: e.target.value})} />
          </td>
        </tr>
        <tr style={{cursor: 'ns-resize'}}>
          {this.props.fields.map(item => <th onClick={() => this.setState({sort: item[1], dir: this.state.sort != item[1] ? 1 : -this.state.dir})} key={item[0]}>{item[0]}</th>)}
        </tr>
      </thead>
      <tbody>
        {this.props.data.filter(
          item => this.props.filter(item, this.state.filter)
        ).sort(
          (a, b) => (+(this.state.sort(a) > this.state.sort(b)) || +(this.state.sort(a) === this.state.sort(b)) - 1) * this.state.dir
        ).map(
          item => React.cloneElement(this.props.children, { key: this.props.fields[0][1](item), item: item })
        ).valueSeq()}
      </tbody>
    </table>;
  }
}
