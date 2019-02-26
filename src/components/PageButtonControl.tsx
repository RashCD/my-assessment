import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { Form, Grid, Pagination, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const PageContainer = styled('div')`
  display: flex;
  justify-content: center;
  height: 30px;
`;

interface IProps {
  containerStyle?: object;
  totalCount?: number;
  onClick?: () => void;
  onPageChange?: any;
  size?: string;
  currentIndex: number;
}

export default class PageButtonControl extends Component<IProps, {}> {
  render() {
    const {
      containerStyle,
      totalCount,
      onPageChange,
      currentIndex,
    } = this.props;
    const showEllipsis = true;
    const showFirstAndLastNav = true;
    const showPreviousAndNextNav = true;

    return (
      <PageContainer style={containerStyle}>
        <Pagination
          activePage={currentIndex}
          boundaryRange={1}
          onPageChange={onPageChange}
          size="mini"
          siblingRange={3}
          totalPages={totalCount || 0}
          // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
          ellipsisItem={showEllipsis ? undefined : null}
          firstItem={showFirstAndLastNav ? undefined : null}
          lastItem={showFirstAndLastNav ? undefined : null}
          prevItem={showPreviousAndNextNav ? undefined : null}
          nextItem={showPreviousAndNextNav ? undefined : null}
        />
      </PageContainer>
    );
  }
}
