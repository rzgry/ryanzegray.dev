import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.secondaryDark};
  color: ${({ theme }) => theme.primaryLight};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  padding: 6px 8px;
  margin-right: 4px;
`;

const Tags = ({ tags }) => (
  <TagWrapper>
    {tags.map(tag => (
      <Tag>{tag}</Tag>
    ))}
  </TagWrapper>
);

export default Tags;
