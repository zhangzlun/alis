export interface INewsData {
  cate: string;
  date: string;
  ttl: string;
}

export interface INewsReducer {
  newsList: Array<INewsData>;
}

export const newsDefaultData: INewsReducer = {
  newsList: [
    {
      cate: 'お知らせ',
      date: '2019年10月10日',
      ttl: '新入社員向けITエンジニア研修開始（第一期 JavaWeb編）',
    },
    {
      cate: 'お知らせ',
      date: '2019年10月01日',
      ttl: '新入社員向け日本語教育開始（第一期）',
    },
    {
      cate: 'お知らせ',
      date: '2019年10月01日',
      ttl: '会社設立懇親会を開催',
    },
    {
      cate: 'お知らせ',
      date: '2019年08月08日',
      ttl: '株式会社往来情報サービス本社を設立',
    },
  ],
};
