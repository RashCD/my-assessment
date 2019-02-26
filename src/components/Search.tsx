import React, { Component } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import styled from 'styled-components';

interface IProps {
  label?: string;
  style?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContainer = styled.div(({ style }) => ({
  height: 'auto',
  margin: '10px 0 10px 0',
  ...style,
}));

export default class Search extends Component<IProps, {}> {
  public render() {
    const { style, label, onChange, onKeyDown } = this.props;
    return (
      <SearchContainer style={style}>
        <InputGroup>
          <Input
            placeholder={label}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <InputGroupAddon addonType="append">&#8981;</InputGroupAddon>
        </InputGroup>
      </SearchContainer>
    );
  }
}
