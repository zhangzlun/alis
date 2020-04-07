import styled from 'styled-components';

type styleProps = {
  currently: string;
  self: string;
  zIndex?: string;
};

export const Carousels = styled.div`
  background: ${(props) => props.theme.colors.borderColor};
`;

export const CarouselCards = styled.div`
  position: relative;
  height: 300px;
`;

export const CarouselCardLabels = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CarouselCard = styled.div.attrs({
  zIndex: ({ currently, self, theme }) => (
    currently === self
      ? theme.zIndex.high
      : theme.zIndex.low),
})<styleProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  z-index: ${(props: styleProps) => props.zIndex};
  background: ${({ theme }) => theme.colors.which};
`;

export const CarouselCardLabel = styled.span.attrs({
  fontColor: (props) => (
    props.currently === props.labelName
      ? props.theme.colors.backgroundColor
      : props.theme.colors.which),
  bgColor: (props) => (
    props.currently === props.labelName
      ? props.theme.colors.which
      : props.theme.colors.backgroundColor),
})<{ currently?: string; labelName?: string }>`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 10px 5px 10px;
  font-weight: 600;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.bgColor};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.which};
  }
`;

export default Carousels;
