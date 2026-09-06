
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, } from "@chakra-ui/react"

export const SocialButton = ({icon,url}) => {
    
    return (<a href={url}>
                <IconButton variant="plain" rounded="full"  colorPalette={"grey"} aria-label='social link button'>
                    <FontAwesomeIcon icon={icon} />
                </IconButton>
            </a>
       )
}