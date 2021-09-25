import React from 'react'

type Props = {
    onClick: React.MouseEventHandler<HTMLDivElement>
    label: string
}

const ButtonView: React.FC<Props> = (props) => (
    <div onClick={props.onClick}>
        <div>{props.label}</div>
    </div>
)

export default ButtonView;