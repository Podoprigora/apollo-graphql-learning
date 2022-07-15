import * as Yup from 'yup';

export interface EditorModuleFormValues {
  id?: string | null;
  title: string;
  description: string;
  questions: {
    id?: string;
    title: string;
    multipleChoice?: boolean | null;
    options: {
      id?: string;
      title: string;
      isAnswer: boolean;
    }[];
  }[];
}

export const initialValues: EditorModuleFormValues = {
  title: '',
  description: '',
  questions: [
    {
      title: '',
      multipleChoice: false,
      options: [
        { title: '', isAnswer: false },
        { title: '', isAnswer: false },
      ],
    },
  ],
};

export const newQuestionPlaceholderData = initialValues['questions'][0];
export const newOptionPlaceholderData = initialValues['questions'][0]['options'][0];

export const validationSchema: Yup.SchemaOf<EditorModuleFormValues> = Yup.object({
  id: Yup.string().optional(),
  title: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
  questions: Yup.array()
    .of(
      Yup.object({
        id: Yup.string().optional(),
        title: Yup.string().required('This field is requried'),
        multipleChoice: Yup.boolean().defined(),
        options: Yup.array()
          .of(
            Yup.object({
              id: Yup.string().optional(),
              title: Yup.string().required('This field is required'),
              isAnswer: Yup.boolean().defined(),
            })
          )
          .min(2, 'Must have minimum of 2 options')
          .test('hasAnswer', 'Must have at least one answer', (values = []) => {
            const hasAnswer = values.some((item) => item.isAnswer === true);

            return hasAnswer;
          }),
      })
    )
    .min(1, 'Must have questions'),
});
