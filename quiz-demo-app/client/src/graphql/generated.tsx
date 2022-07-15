import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Module = {
  description: Scalars['String'];
  id: Scalars['ID'];
  screenSize?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ModuleInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  questions: Array<QuestionInput>;
  title: Scalars['String'];
};

export type ModuleListItem = Module & {
  __typename?: 'ModuleListItem';
  description: Scalars['String'];
  id: Scalars['ID'];
  questionsTotal?: Maybe<Scalars['Int']>;
  screenSize?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  userInfo?: Maybe<UserInfo>;
};

export type ModuleProfile = Module & {
  __typename?: 'ModuleProfile';
  description: Scalars['String'];
  id: Scalars['ID'];
  questions: Array<Question>;
  screenSize?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteModule?: Maybe<RecordId>;
  saveModule: RecordId;
};


export type MutationDeleteModuleArgs = {
  id: Scalars['ID'];
};


export type MutationSaveModuleArgs = {
  params: ModuleInput;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  isAnswer: Scalars['Boolean'];
  title: Scalars['String'];
};

export type OptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  isAnswer: Scalars['Boolean'];
  title: Scalars['String'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  module: ModuleProfile;
  modules?: Maybe<Array<ModuleListItem>>;
  userInfo: UserInfo;
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
};


export type QueryModulesArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  multipleChoice?: Maybe<Scalars['Boolean']>;
  options: Array<Option>;
  title: Scalars['String'];
};

export type QuestionInput = {
  id?: InputMaybe<Scalars['ID']>;
  multipleChoice?: InputMaybe<Scalars['Boolean']>;
  options: Array<OptionInput>;
  title: Scalars['String'];
};

export type RecordId = {
  __typename?: 'RecordID';
  id: Scalars['ID'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
};

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', userInfo: { __typename?: 'UserInfo', id: string, firstName: string, lastName: string, fullName: string, email: string, pictureUrl?: string | null } };

export type GetModulesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
}>;


export type GetModulesQuery = { __typename?: 'Query', modules?: Array<{ __typename?: 'ModuleListItem', id: string, title: string, description: string, questionsTotal?: number | null, userInfo?: { __typename?: 'UserInfo', fullName: string, pictureUrl?: string | null } | null }> | null };

export type GetModuleByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetModuleByIdQuery = { __typename?: 'Query', module: { __typename?: 'ModuleProfile', id: string, title: string, description: string, questions: Array<{ __typename?: 'Question', id: string, title: string, multipleChoice?: boolean | null, options: Array<{ __typename?: 'Option', id: string, title: string, isAnswer: boolean }> }> } };

export type SaveModuleMutationVariables = Exact<{
  params: ModuleInput;
}>;


export type SaveModuleMutation = { __typename?: 'Mutation', results: { __typename?: 'RecordID', id: string } };

export type DeleteModuleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteModuleMutation = { __typename?: 'Mutation', results?: { __typename?: 'RecordID', id: string } | null };


export const GetUserInfoDocument = gql`
    query GetUserInfo {
  userInfo {
    id
    firstName
    lastName
    fullName
    email
    pictureUrl
  }
}
    `;

/**
 * __useGetUserInfoQueryGenerated__
 *
 * To run a query within a React component, call `useGetUserInfoQueryGenerated` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQueryGenerated` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQueryGenerated({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQueryGenerated(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQueryGenerated(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryGeneratedHookResult = ReturnType<typeof useGetUserInfoQueryGenerated>;
export type GetUserInfoLazyQueryGeneratedHookResult = ReturnType<typeof useGetUserInfoLazyQueryGenerated>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetModulesDocument = gql`
    query GetModules($pagination: PaginationInput) {
  modules(pagination: $pagination) {
    id
    title
    description
    questionsTotal
    userInfo {
      fullName
      pictureUrl
    }
  }
}
    `;

/**
 * __useGetModulesQueryGenerated__
 *
 * To run a query within a React component, call `useGetModulesQueryGenerated` and pass it any options that fit your needs.
 * When your component renders, `useGetModulesQueryGenerated` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModulesQueryGenerated({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetModulesQueryGenerated(baseOptions?: Apollo.QueryHookOptions<GetModulesQuery, GetModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModulesQuery, GetModulesQueryVariables>(GetModulesDocument, options);
      }
export function useGetModulesLazyQueryGenerated(baseOptions?: Apollo.LazyQueryHookOptions<GetModulesQuery, GetModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModulesQuery, GetModulesQueryVariables>(GetModulesDocument, options);
        }
export type GetModulesQueryGeneratedHookResult = ReturnType<typeof useGetModulesQueryGenerated>;
export type GetModulesLazyQueryGeneratedHookResult = ReturnType<typeof useGetModulesLazyQueryGenerated>;
export type GetModulesQueryResult = Apollo.QueryResult<GetModulesQuery, GetModulesQueryVariables>;
export const GetModuleByIdDocument = gql`
    query GetModuleById($id: ID!) {
  module(id: $id) {
    id
    title
    description
    questions {
      id
      title
      multipleChoice
      options {
        id
        title
        isAnswer
      }
    }
  }
}
    `;

/**
 * __useGetModuleByIdQueryGenerated__
 *
 * To run a query within a React component, call `useGetModuleByIdQueryGenerated` and pass it any options that fit your needs.
 * When your component renders, `useGetModuleByIdQueryGenerated` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModuleByIdQueryGenerated({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetModuleByIdQueryGenerated(baseOptions: Apollo.QueryHookOptions<GetModuleByIdQuery, GetModuleByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModuleByIdQuery, GetModuleByIdQueryVariables>(GetModuleByIdDocument, options);
      }
export function useGetModuleByIdLazyQueryGenerated(baseOptions?: Apollo.LazyQueryHookOptions<GetModuleByIdQuery, GetModuleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModuleByIdQuery, GetModuleByIdQueryVariables>(GetModuleByIdDocument, options);
        }
export type GetModuleByIdQueryGeneratedHookResult = ReturnType<typeof useGetModuleByIdQueryGenerated>;
export type GetModuleByIdLazyQueryGeneratedHookResult = ReturnType<typeof useGetModuleByIdLazyQueryGenerated>;
export type GetModuleByIdQueryResult = Apollo.QueryResult<GetModuleByIdQuery, GetModuleByIdQueryVariables>;
export const SaveModuleDocument = gql`
    mutation SaveModule($params: ModuleInput!) {
  results: saveModule(params: $params) {
    id
  }
}
    `;
export type SaveModuleMutationFn = Apollo.MutationFunction<SaveModuleMutation, SaveModuleMutationVariables>;

/**
 * __useSaveModuleMutationGenerated__
 *
 * To run a mutation, you first call `useSaveModuleMutationGenerated` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveModuleMutationGenerated` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveModuleMutationGenerated, { data, loading, error }] = useSaveModuleMutationGenerated({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSaveModuleMutationGenerated(baseOptions?: Apollo.MutationHookOptions<SaveModuleMutation, SaveModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveModuleMutation, SaveModuleMutationVariables>(SaveModuleDocument, options);
      }
export type SaveModuleMutationGeneratedHookResult = ReturnType<typeof useSaveModuleMutationGenerated>;
export type SaveModuleMutationResult = Apollo.MutationResult<SaveModuleMutation>;
export type SaveModuleMutationOptions = Apollo.BaseMutationOptions<SaveModuleMutation, SaveModuleMutationVariables>;
export const DeleteModuleDocument = gql`
    mutation DeleteModule($id: ID!) {
  results: deleteModule(id: $id) {
    id
  }
}
    `;
export type DeleteModuleMutationFn = Apollo.MutationFunction<DeleteModuleMutation, DeleteModuleMutationVariables>;

/**
 * __useDeleteModuleMutationGenerated__
 *
 * To run a mutation, you first call `useDeleteModuleMutationGenerated` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteModuleMutationGenerated` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteModuleMutationGenerated, { data, loading, error }] = useDeleteModuleMutationGenerated({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteModuleMutationGenerated(baseOptions?: Apollo.MutationHookOptions<DeleteModuleMutation, DeleteModuleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteModuleMutation, DeleteModuleMutationVariables>(DeleteModuleDocument, options);
      }
export type DeleteModuleMutationGeneratedHookResult = ReturnType<typeof useDeleteModuleMutationGenerated>;
export type DeleteModuleMutationResult = Apollo.MutationResult<DeleteModuleMutation>;
export type DeleteModuleMutationOptions = Apollo.BaseMutationOptions<DeleteModuleMutation, DeleteModuleMutationVariables>;