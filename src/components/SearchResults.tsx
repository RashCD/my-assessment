import moment from 'moment';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Line } from '../styles/Common';

const Row = styled('div')`
  display: flex;
  flex: 'row';
  margin-bottom: 10px;
`;

const RepoTitle = styled('div')`
  flex: 3;
  font-size: 1.5rem;
  color: blue;
`;

const LangSection = styled('div')`
  display: flex;
  flex: 'row';
  flex: 1;
  justify-content: space-around;
  align-items: center;

  & > p {
    flex: 1;
    text-align: center;
  }
`;

const Language = styled('p')`
  text-align: start !important;
`;

const Date = styled('p')`
  font-size: 14px;
  color: #60656b;
`;

interface IProps {
  star?: number;
  language?: string;
  title?: string;
  subtitle?: string;
  date?: string;
}

export default class SearchResults extends Component<IProps, {}> {
  public render() {
    const { language, star, title, subtitle, date } = this.props;
    return (
      <Fragment>
        <Line />
        <Row>
          <RepoTitle> {title} </RepoTitle>
          <LangSection>
            <Language> {language} </Language>
            <p> {star} </p>
          </LangSection>
        </Row>
        <p> {subtitle} </p>
        <Date> Updated on {moment(date).format('ddd MMM DD YYYY')} </Date>
      </Fragment>
    );
  }
}
