import * as Yup from 'yup';

export interface EditorModuleFormValues {
  title: string;
  description: string;
  questions: {
    title: string;
    multipleChoice: boolean;
    options: {
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
export const newOptionPlaceholderData =
  initialValues['questions'][0]['options'][0];

export const validationSchema: Yup.SchemaOf<EditorModuleFormValues> =
  Yup.object({
    title: Yup.string().required('This field is required'),
    description: Yup.string().required('This field is required'),
    questions: Yup.array()
      .of(
        Yup.object({
          title: Yup.string().required('This field is requried'),
          multipleChoice: Yup.boolean().defined(),
          options: Yup.array()
            .of(
              Yup.object({
                title: Yup.string().required('This field is required'),
                isAnswer: Yup.boolean().defined(),
              })
            )
            .min(2, 'Must have minimum of 2 options'),
        })
      )
      .min(1, 'Must have questions'),
  });
