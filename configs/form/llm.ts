export const llmConfig: Type.Form[] = [
    {
        name: 'apiKey',
        label: 'Api Key',
        type: 'input',
        placeholder: 'Enter your Api Key',
        rule: { required: "You must enter your Api Key" }
    },
    {
        name: 'apiUrl',
        label: 'Api Url',
        type: 'input',
        placeholder: 'Enter your Api Url',
        rule: { required: "You must enter your Api Url" }
    },
    {
        name: 'model',
        label: 'Model',
        type: 'input',
        placeholder: 'Enter your Model',
        rule: { required: "You must enter your Model" }
    }
]
