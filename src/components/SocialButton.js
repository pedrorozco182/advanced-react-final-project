import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@chakra-ui/react";

export const SocialButton = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <IconButton
        variant="plain"
        rounded="full"
        aria-label="social link button"
      >
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </a>
  );
};
