"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40550],{40550:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useList` is a modified version of `react-query`\'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for retrieving items from a `resource` with pagination, sort, and filter configurations.\\n\\nIt uses the `getList` method as the query function from the `dataProvider` which is passed to `<Refine>`.","displayName":"useList","props":{"resource":{"defaultValue":null,"description":"","name":"resource","required":true,"type":{"name":"string"},"tags":{}},"config":{"defaultValue":null,"description":"","name":"config","required":false,"type":{"name":"UseListConfig"},"tags":{}},"queryOptions":{"defaultValue":null,"description":"","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"metaData":{"defaultValue":null,"description":"","name":"metaData","required":false,"type":{"name":"[MetaDataQuery](/docs/api-reference/core/interfaceReferences/#metadataquery)"},"tags":{}},"dataProviderName":{"defaultValue":null,"description":"","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":null,"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | (data, values, resource) => OpenNotificationParams"},"tags":{}},"errorNotification":{"defaultValue":null,"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | (error, values, resource) => OpenNotificationParams"},"tags":{}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/interfaceReferences/#crudsorting)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}}},"generatedAt":1664962269250}')}}]);