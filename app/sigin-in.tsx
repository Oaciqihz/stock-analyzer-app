import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

import { useSession } from '../components/ctx';
import { ThemedText } from '@/components/ThemedText';
import { useForm } from 'react-hook-form';
import Form from '@/components/form';
import { siginInConfig } from '@/configs/form/sigin-in';
import { ThemedView } from '@/components/ThemedView';

export default function SignIn() {
  const { signIn } = useSession();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // 模拟表单提交
    console.log('Submitted Data:', data);
    // setSubmittedData(data);
    // TODO: setToken
    // signIn({})
  };

  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <ThemedText
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </ThemedText> */}
      {/* siginInConfig */}
        <Form 
          formList={siginInConfig}
          control={control}
          errors={errors}
        />
        {/* <button onClick={}>提交</button> */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        {/* <Button>提交</Button> */}
    </ThemedView>
  );
}
