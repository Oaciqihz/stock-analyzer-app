

declare namespace Type {

    type FormType = 'input' | 'select' | 'checkbox' | 'radio' | 'textarea';

    interface Form {
        name: string;
        label: string;
        type: FormType;
        placeholder?: string;
        options?: {
            label: string;
            value: string;
        }[];
        rule?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
    }
}