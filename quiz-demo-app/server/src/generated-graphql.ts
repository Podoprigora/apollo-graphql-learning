import { GraphQLResolveInfo } from 'graphql';
import { User } from './models';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  page?: InputMaybe<Scalars['Int']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Module: ResolversTypes['ModuleListItem'] | ResolversTypes['ModuleProfile'];
  ModuleInput: ModuleInput;
  ModuleListItem: ResolverTypeWrapper<Omit<ModuleListItem, 'userInfo'> & { userInfo?: Maybe<ResolversTypes['UserInfo']> }>;
  ModuleProfile: ResolverTypeWrapper<ModuleProfile>;
  Mutation: ResolverTypeWrapper<{}>;
  Option: ResolverTypeWrapper<Option>;
  OptionInput: OptionInput;
  PaginationInput: PaginationInput;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionInput: QuestionInput;
  RecordID: ResolverTypeWrapper<RecordId>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UserInfo: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Module: ResolversParentTypes['ModuleListItem'] | ResolversParentTypes['ModuleProfile'];
  ModuleInput: ModuleInput;
  ModuleListItem: Omit<ModuleListItem, 'userInfo'> & { userInfo?: Maybe<ResolversParentTypes['UserInfo']> };
  ModuleProfile: ModuleProfile;
  Mutation: {};
  Option: Option;
  OptionInput: OptionInput;
  PaginationInput: PaginationInput;
  Query: {};
  Question: Question;
  QuestionInput: QuestionInput;
  RecordID: RecordId;
  String: Scalars['String'];
  UserInfo: User;
};

export type ModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Module'] = ResolversParentTypes['Module']> = {
  __resolveType: TypeResolveFn<'ModuleListItem' | 'ModuleProfile', ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  screenSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ModuleListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModuleListItem'] = ResolversParentTypes['ModuleListItem']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  questionsTotal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  screenSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userInfo?: Resolver<Maybe<ResolversTypes['UserInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModuleProfile'] = ResolversParentTypes['ModuleProfile']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  screenSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  deleteModule?: Resolver<Maybe<ResolversTypes['RecordID']>, ParentType, ContextType, RequireFields<MutationDeleteModuleArgs, 'id'>>;
  saveModule?: Resolver<ResolversTypes['RecordID'], ParentType, ContextType, RequireFields<MutationSaveModuleArgs, 'params'>>;
};

export type OptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAnswer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  module?: Resolver<ResolversTypes['ModuleProfile'], ParentType, ContextType, RequireFields<QueryModuleArgs, 'id'>>;
  modules?: Resolver<Maybe<Array<ResolversTypes['ModuleListItem']>>, ParentType, ContextType, Partial<QueryModulesArgs>>;
  userInfo?: Resolver<ResolversTypes['UserInfo'], ParentType, ContextType>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  multipleChoice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['Option']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecordIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecordID'] = ResolversParentTypes['RecordID']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pictureUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Module?: ModuleResolvers<ContextType>;
  ModuleListItem?: ModuleListItemResolvers<ContextType>;
  ModuleProfile?: ModuleProfileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  RecordID?: RecordIdResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
};

