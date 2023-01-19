import React from 'react'
import {Icon, IconBarContainer,IconTile,IconText} from "./IconBar.styles"

const IconBar = () => {
  return (
    <IconBarContainer>
        <IconText>
            Experience With:
        </IconText>
        <IconTile>
            <Icon alt="HTML LOGO"/>
        </IconTile>
        <IconTile>
            <Icon alt="CSS LOGO"/>
        </IconTile>
        <IconTile>
            <Icon alt="JS LOGO"/>
        </IconTile>
        {/* <IconTile>
            <Icon alt="REACT LOGO"/>
        </IconTile>
        <IconTile>
            <Icon alt="NodeJS LOGO"/>
        </IconTile>
        <IconTile>
            <Icon alt="MongoDB LOGO"/>
        </IconTile> */}
    </IconBarContainer>
  )
}

export default IconBar