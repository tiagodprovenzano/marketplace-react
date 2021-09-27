import TextInputView from "./text-input.view"

type Props = {
    type: React.HTMLInputTypeAttribute;
    text: string;
    onChangeText: (text: string) => void;
    placeholder?: string
}

export const TextInput: React.FC<Props> = (props) => {
    const {type, text, onChangeText, placeholder} = props

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const newText = e.target.value
        onChangeText(newText)
    }

    return<TextInputView placeholder={placeholder} type={type} text={text} onChange={onChange}/>
}