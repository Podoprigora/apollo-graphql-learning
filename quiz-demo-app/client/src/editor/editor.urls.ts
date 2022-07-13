export const editorBaseUrl = '/editor';
export const getEditorModuleListUrl = () => editorBaseUrl;
export const getEditorModuleUrl = (id: string | number) => `${editorBaseUrl}/${id}`;
export const getEditorCreateModuleUrl = () => `${editorBaseUrl}/new`;
