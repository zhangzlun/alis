import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { INewsReducer } from '~/reducer/newsReducer';

export const News: FunctionComponent<INewsReducer> = ({ newsList = [] }) => {
  return (
    <div>
      {newsList.map((data) => (
        <FGR>
          <Data>{data.date}</Data>
          <Cate>{data.cate}</Cate>
          <TTl>{data.ttl}</TTl>
        </FGR>
      ))}
    </div>
  );
};

const FGR = styled.div`
  margin: 20px;
  & * {
    font-size: 12px;
  }
`;

const Cate = styled.span`
  background: #cdcdcd;
  border-radius: 5px;
  padding: 0.2rem;
`;

const Data = styled.span`
  border-radius: 5px;
  padding: 0.2rem;
`;

const TTl = styled.span`
  border-radius: 5px;
  padding: 0.2rem;
`;

const mapStateToProps = (state): INewsReducer => state.news;

export default connect(mapStateToProps)(News);
