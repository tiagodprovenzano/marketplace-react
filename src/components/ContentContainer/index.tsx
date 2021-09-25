import React from 'react'
import ContentContainerView from './content-container.view'

type Props = {
    
}

export const ContentContainer:React.FC<Props> = (props) => {
    return (
        <ContentContainerView>
            {props.children}
        </ContentContainerView>
    )
}
