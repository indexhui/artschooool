import { Icon } from '@chakra-ui/icons';

export const SquareIcon = props => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 3H3V21H21V3Z" stroke="black" />
      </svg>
    </Icon>
  );
};
