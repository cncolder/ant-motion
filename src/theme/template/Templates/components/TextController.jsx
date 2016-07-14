import React, { PropTypes } from 'react';
// import Animate from 'rc-animate';
import { Input, Button, Icon } from 'antd';
import './text.less';

import { getURLData } from '../utils';

class TextController extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {};
    this.config = {};
    [
      'getTextContent',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  clickMake = () => {
    const currentConfig = this.config;
    const urlConfig = this.props.config || {};
    const keyConfig = urlConfig[this.props.childKey] || {};
    if (Object.keys(currentConfig).length === 0) {
      return;
    }

    Object.keys(currentConfig).forEach(key => {
      const item = currentConfig[key];
      if (typeof item !== 'object') {
        keyConfig[key] = item;
        return
      }
      keyConfig[key] = keyConfig[key] || {};
      Object.keys(item).forEach(_key => {
        const _item = item[_key];
        keyConfig[key][_key] = _item;
      })
    });

    const url = decodeURIComponent(location.hash || '').replace('#', '');
    const configUrlStr = getURLData('c');
    const reg = new RegExp(`(^|&)c=${configUrlStr}`, 'i');
    const otherUrl = url.replace(reg, '')//url.replace(/(&c={).*?(&|.*)/, '');
    urlConfig[this.props.childKey] = keyConfig;
    const configString = JSON.stringify(urlConfig);
    location.hash = `#${encodeURIComponent(otherUrl)}${encodeURIComponent(`&c=${configString}`)}`;
    this.config = {};
  };

  changeValue = (key, childKey, e) => {
    const value = e.target.value;
    this.config[key] = this.config[key] || {};
    if (childKey) {
      this.config[key][childKey] = value;
    } else {
      this.config[key] = value
    }
  };

  getTextContent(data, i) {
    let type;
    let child;
    if (typeof data.value === 'object') {
      const table = Object.keys(data.value).map((key, ii) => {
        const _data = data.value[key];
        type = key === 'content' ? 'textarea' : 'text';
        const changeValue = this.changeValue.bind(this, data.key, key);
        return (<li key={ii}>
          <p>{_data.name}
            {_data.size ? <span className="size">尺寸参考:{_data.size}</span> : null}
            {key.match(/(img|logo)/i) ?
            <a href="http://site.alipay.net/xingmin.zhu/toast/"
              target="_blank" className="upload"
            >
              上传图片
            </a> : null}
          </p>
          <div>
            <Input type={type}
              defaultValue={_data.value}
              onChange={changeValue}
            />
          </div>
        </li>);
      });

      child = (<div className="data-table" key="0">
        <ul>
          {table}
        </ul>
      </div>);
    } else {
      const changeValue = this.changeValue.bind(this, data.key, null);
      child = (<div key="0">
        <Input type="text"
          defaultValue={data.value}
          onChange={changeValue}
        />
      </div>);
    }
    return (<li key={i}>
      <h4>
        {data.name}
      </h4>
      <div className="data-table-mask">
        {child}
      </div>
    </li>);
  }

  render() {
    const textContent = this.props.data.map(this.getTextContent);
    return (
      <div className="tool-data-panel">
        <h3><Icon type="copy" />内容编辑</h3>
        <ul>
          {textContent}
        </ul>
        <Button type="primary" size="small"
          onClick={this.clickMake}
        >
          保存
        </Button>
      </div>
    );
  }
}

TextController.propTypes = {
  className: PropTypes.string,
  childKey: PropTypes.string,
  config: PropTypes.object,
};

TextController.defaultProps = {
  className: 'tool-data-panel',
};

export default TextController;
