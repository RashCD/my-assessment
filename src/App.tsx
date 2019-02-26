import { takeRight, throttle } from 'lodash';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import api from './api';
import './App.css';
import PageButtonControl from './components/PageButtonControl';
import Search from './components/Search';
import SearchResults from './components/SearchResults';

const BoxShadow = styled('div')`
  box-shadow: 1px 2px 10px grey;
`;

const Container = styled(BoxShadow)`
  margin: 5% 0 5% 0;
  border-style: solid;
  border-width: 1px;
  border-radius: 7px;
  display: inline-block;
  width: 100%;
  overflow: auto;
  padding: 3%;
`;

const Title = styled('div')`
  margin-top: 3rem;
  font-size: 3rem;
  font-weight: 600;
`;

const TextBold = styled('p')`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
`;

interface IState {
  incomplete_results: boolean;
  items: IResultItems[];
  total_count: number;
  currentIndex: number;
  searchQuery: string;
}

interface IResultItems {
  id: number;
  stargazers_count: number;
  description: string;
  language: string;
  full_name: string;
  created_at: string;
}

class App extends Component<{}, IState> {
  delayCallback: any;
  constructor(props: any) {
    super(props);

    this.state = {
      incomplete_results: false,
      items: [],
      total_count: 0,
      currentIndex: 1,
      searchQuery: '' || 'react',
    };

    this.delayCallback = throttle(this.setDelayState, 1000);
  }

  public componentDidMount() {
    this.fetchApi();
  }

  fetchApi = () => {
    const { currentIndex, searchQuery } = this.state;
    fetch(api.search(searchQuery, currentIndex * 10))
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          incomplete_results: data.incomplete_results,
          items: takeRight(data.items, 10),
          total_count: data.total_count,
        });
      });
  };

  handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.charCode === 13) {
      this.fetchApi();
    }
  };

  setDelayState = (value: string) => {
    return this.setState({ searchQuery: value });
  };

  handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.delayCallback(value);
  };

  handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { activePage }: any,
  ) => {
    this.setState({ currentIndex: activePage }, this.fetchApi);
  };

  public render() {
    const { items, total_count, currentIndex } = this.state;
    let totalCount;
    if (total_count && total_count < 1000) {
      totalCount = Math.round(total_count / 10);
    } else if (total_count && total_count > 1000) {
      totalCount = Math.round(1000 / 10);
    } else {
      totalCount = total_count > 0 ? Math.round(total_count / 10) : 0;
    }
    return (
      <Fragment>
        <Title> Github Search </Title>
        <Container>
          <Search
            label="Keyword"
            onChange={this.handleChangeText}
            onKeyDown={this.handleEnterKey}
          />
          <TextBold>1000 repository results</TextBold>
          {items.map(
            ({
              id,
              full_name,
              stargazers_count,
              language,
              description,
              created_at,
            }) => {
              return (
                <SearchResults
                  key={id}
                  star={stargazers_count}
                  language={language}
                  title={full_name}
                  subtitle={description}
                  date={created_at}
                />
              );
            },
          )}
          <PageButtonControl
            totalCount={totalCount}
            onPageChange={this.handlePageChange}
            currentIndex={currentIndex}
          />
        </Container>
      </Fragment>
    );
  }
}

export default App;
