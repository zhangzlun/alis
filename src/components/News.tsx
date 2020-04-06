import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { INewsReducer } from '~/reducer/newsReducer';

export const News: FunctionComponent<INewsReducer> = ({ newsList = [] }) => <div />;

const mapStateToProps = (state): INewsReducer => state.news;

export default connect(mapStateToProps)(News);
