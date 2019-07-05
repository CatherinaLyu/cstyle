import React from 'react';

export default class Input extends React.Component {
  static defaultProps = {
    prefixCls: 'ant-input',
    type: 'text',
    disabled: false,
  };

  index() {
    return HTMLInputElement;
  }

  focus() {
    this.input().focus();
  }

  blur() {
    this.input().blur();
  }

  render() {
    const { props } = this;
    if (!('prefix' in props || 'suffix' in props)) {
      return children;
    }

    const prefix = props.prefix ? (
      <span className={`${props.prefixCls}-prefix`}>
        {props.prefix}
      </span>
    ) : null;

    const suffix = props.suffix ? (
      <span className={`${props.prefixCls}-suffix`}>
        {props.suffix}
      </span>
    ) : null;

    const affixWrapperCls = classNames(props.className, `${props.prefixCls}-affix-wrapper`, {
      [`${props.prefixCls}-affix-wrapper-sm`]: props.size === 'small',
      [`${props.prefixCls}-affix-wrapper-lg`]: props.size === 'large',
    });
    return (
      <span
        className={affixWrapperCls}
        style={props.style}
      >
        {prefix}
        {React.cloneElement(children, { style: null, className: this.getInputClassName() })}
        {suffix}
      </span>
    );
    return (
      <span
        className=""
        style={props.style}
      >
        {prefix}
        <input
          className=""
          style=""
        />
        {suffix}
      </span>)
  };
}