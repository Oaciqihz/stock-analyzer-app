
export const siginInConfig: Type.Form[] = [
    {
        name: 'username',
        label: 'Username',
        type: 'input',
        placeholder: 'Enter your username',
        rule: { required: "You must enter your Username" }
    },
    {
        name: 'password',
        label: 'Password',
        type: 'input',
        placeholder: 'Enter your password',
        rule: { required: "You must enter your Password" }
    }
]