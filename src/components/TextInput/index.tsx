import TextInputView from "./text-input.view"

type Props = {
    type: React.HTMLInputTypeAttribute;
    text: string;
    onChangeText: (text: string) => void
}

export const TextInput: React.FC<Props> = (props) => {
    const {type, text, onChangeText} = props

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newText = e.target.value
        onChangeText(newText)
    }

    return<TextInputView type={type} text={text} onChange={onChange}/>
}