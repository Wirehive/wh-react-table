'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*! index.js | © 2016 Wirehive Ltd, License: MIT */

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        sort: function sort(i) {
          return _this2.props.fields[0][1](i);
        },
        dir: 1,
        filter: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: this.props.fields.length },
              _react2.default.createElement('input', { value: this.state.filter, onChange: function onChange(e) {
                  return _this3.setState({ filter: e.target.value });
                } })
            )
          ),
          _react2.default.createElement(
            'tr',
            { style: { cursor: 'ns-resize' } },
            this.props.fields.map(function (item) {
              return _react2.default.createElement(
                'th',
                { onClick: function onClick() {
                    return _this3.setState({ sort: item[1], dir: _this3.state.sort != item[1] ? 1 : -_this3.state.dir });
                  }, key: item[0] },
                item[0]
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.props.data.filter(function (item) {
            return _this3.props.filter(item, _this3.state.filter);
          }).sort(function (a, b) {
            return (+(_this3.state.sort(a) > _this3.state.sort(b)) || +(_this3.state.sort(a) === _this3.state.sort(b)) - 1) * _this3.state.dir;
          }).map(function (item) {
            return _react2.default.cloneElement(_this3.props.children, { key: _this3.props.fields[0][1](item), item: item });
          }).valueSeq()
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  fields: _react2.default.PropTypes.array.isRequired,
  children: _react2.default.PropTypes.node.isRequired,
  data: _react2.default.PropTypes.object.isRequired,
  filter: _react2.default.PropTypes.func.isRequired
};
exports.default = Table;