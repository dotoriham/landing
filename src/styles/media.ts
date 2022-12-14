export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  wide: mediaQuery(1720),
  desktop: mediaQuery(1220),
  tablet: mediaQuery(1068),
  mobile: mediaQuery(550),
  custom: mediaQuery,
};

export default media;
