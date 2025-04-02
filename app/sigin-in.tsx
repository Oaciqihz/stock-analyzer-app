import { Button } from 'react-native';

import { useSession } from '../components/ctx';
import { useForm } from 'react-hook-form';
import Form from '@/components/form';
import { siginInConfig } from '@/configs/form/sigin-in';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function SignIn() {
  const { signIn } = useSession();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    // 模拟表单提交
    // console.log('Submitted Data:', data);
    // TODO: setToken mock token
    
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
    .then(() => {
      signIn("mock-token");
    })
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
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ThemedView>
  );
}
