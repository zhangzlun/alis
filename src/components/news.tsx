import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { INewsReducer } from '~/reducer/newsReducer';


export const News: FunctionComponent<INewsReducer> = ({ newsList = [] }) => {
  console.log(newsList);
  return (
    <div>
      {newsList.map((data) => (
        <FGR>
          <span>{data.date}</span>
          <span>{data.cate}</span>
          <span>{data.ttl}</span>
        </FGR>
      ))}
    </div>
  );
};

const FGR = styled.div`
  margin: 20px;
`;

const mapStateToProps = (state): INewsReducer => state.news;

export default connect(mapStateToProps)(News);
