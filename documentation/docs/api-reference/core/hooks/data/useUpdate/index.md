---
title: useUpdate
siderbar_label: useUpdate
source: packages/core/src/hooks/data/useUpdate.ts
---

`useUpdate` is used when you want to update a record. It is an extended version of TanStack Query's [`useMutation`](https://tanstack.com/query/v4/docs/react/reference/useMutation) that supports all of its features and adds some more.

It uses the `update` method as the **mutation function** from the [`dataProvider`](/docs/api-reference/core/providers/data-provider/) which is passed to `<Refine>`.

## Basic Usage

The `useUpdate` hook returns many useful properties and methods. One of them is the `mutate` method which expects `values`, `resource`, and `id` as parameters. These parameters will be passed to the `update` method from the `dataProvider` as parameters.

```tsx
import { useUpdate } from "@refinedev/core";

const { mutate } = useUpdate();

mutate({
    resource: "products",
    values: {
        name: "New Product",
        material: "Wood",
    },
    id: 1,
});
```

## Realtime Updates

:::caution
This feature is only available if you use a [Live Provider](/docs/api-reference/core/providers/live-provider).
:::

When the `useUpdate` mutation runs successfully, it will call the `publish` method from `liveProvider` with some parameters such as `channel`, `type` etc. It is useful when you want to publish the changes to the subscribers on the client side.

> For more information, refer to the [`liveProvider` documentation&#8594](/docs/api-reference/core/providers/live-provider)

## Invalidating Queries

When the `useUpdate` mutation runs successfully, it will invalidate the following queries from the current `resource`: `"list"`, `"many"`, and `"detail"` by default. Which means that, if you use `useList`, `useMany`, or `useOne` hooks on the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing the [`invalidates`](#invalidates) prop.

> For more information, refer to the [query invalidation documentation&#8594](https://tanstack.com/query/v4/docs/react/guides/query-invalidation)

## Audit Logs

:::caution
This feature is only available if you use a [Audit Log Provider](/docs/api-reference/core/providers/audit-log-provider/).
:::

When the `useUpdate` mutation runs successfully, it will call the `log` method from `auditLogProvider` with some parameters such as `resource`, `action`, `data`, `previousData` etc. It is useful when you want to log the changes to the database.

> For more information, refer to the [`auditLogProvider` documentation&#8594](/docs/api-reference/core/providers/audit-log-provider/)

## Properties

### `mutationOptions`

`mutationOptions` is used to pass options to the `useMutation` hook. It is useful when you want to pass additional options to the `useMutation` hook.

```tsx
useUpdate({
    mutationOptions: {
        retry: 3,
    },
});
```

:::tip

`mutationOptions` does not support `onSuccess` and `onError` props because they override the default `onSuccess` and `onError` functions. If you want to use these props, you can pass them to mutate functions like this:

```tsx
const { mutate } = useUpdate();

mutate(
    {
        resource: "products",
        values: {
            name: "New Product",
            material: "Wood",
        },
        id: 1,
    },
    {
        onError: (error, variables, context) => {
            // An error occurred!
        },
        onSuccess: (data, variables, context) => {
            // Let's celebrate!
        },
    },
);
```

:::
[Refer to the `useMutation` documentation for more information &#8594](https://tanstack.com/query/v4/docs/react/reference/useMutation)

## Mutation Parameters

### `resource` <PropTag required />

This parameter will be passed to the `update` method from the `dataProvider` as a parameter. It is usually used as an API endpoint path but it all depends on how you handle the `resource` in the `update` method.

```tsx
const { mutate } = useUpdate();

mutate({
    resource: "categories",
});
```

> For more information, refer to the [creating a data provider tutorial &#8594](/docs/tutorial/understanding-dataprovider/create-dataprovider/)

### `id` <PropTag required />

This prop will be passed to the `update` method from the `dataProvider` as a parameter. It is used to determine which record to update.

```tsx
const { mutate } = useUpdate();

mutate({
    id: 123,
});
```

### `values` <PropTag required />

This prop will be passed to the `update` method from the `dataProvider` as a parameter. It is usually used as the data to be updated and contains the data that will be sent to the server.

```tsx
const { mutate } = useUpdate();

mutate({
    values: {
        name: "New Category",
        description: "New Category Description",
    },
});
```

### `mutationMode`

Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: `pessimistic`, `optimistic`, and `undoable`. The default mode is `pessimistic`.
Each mode corresponds to a different type of user experience.

```tsx
const { mutate } = useUpdate();

mutate({
    mutationMode: "undoable",
});
```

> For more information, refer to the [mutation mode documentation &#8594](/docs/advanced-tutorials/mutation-mode)

### `undoableTimeout`

When `mutationMode` is set to `undoable`, `undoableTimeout` is used to determine the duration to wait before executing the mutation. The default value is `5000` milliseconds.

```tsx
const { mutate } = useUpdate();

mutate({
    mutationMode: "undoable",
    undoableTimeout: 10000,
});
```

### `onCancel`

When `mutationMode` is set to `undoable`, `onCancel` is used to determine what to do when the user cancels the mutation.

```tsx
const { mutate } = useUpdate();

mutate({
    mutationMode: "undoable",
    onCancel: (cancelMutation) => {
        cancelMutation();
        // you can do something else here
    },
});
```

### `successNotification`

:::caution
[`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.
:::

This prop allows you to customize the success notification that shows up when the data is fetched successfully and `useUpdate` can calls `open` function from `NotificationProvider`:

```tsx
const { mutate } = useUpdate();

mutate({
    successNotification: (data, values, resource) => {
        return {
            message: `${data.title} Successfully fetched.`,
            description: "Success with no errors",
            type: "success",
        };
    },
});
```

### `errorNotification`

:::caution
[`NotificationProvider`](/docs/api-reference/core/providers/notification-provider/) is required for this prop to work.
:::

This prop allows you to customize the error notification that shows up when the data fetching fails and the `useUpdate` calls the `open` function from `NotificationProvider`:

```tsx
const { mutate } = useUpdate();

mutate({
    errorNotification: (data, values, resource) => {
        return {
            message: `Something went wrong when getting ${data.id}`,
            description: "Error",
            type: "error",
        };
    },
});
```

### `meta`

`meta` is a special property that can be used to pass additional information to data provider methods for the following purposes:

-   Customizing the data provider methods for specific use cases.
-   Generating GraphQL queries using plain JavaScript Objects (JSON).

In the following example, we pass the `headers` property in the `meta` object to the `update` method. You can pass any properties to specifically handle the data provider methods with similar logic.

```tsx
const { mutate } = useUpdate();

mutate({
    // highlight-start
    meta: {
        headers: { "x-meta-data": "true" },
    },
    // highlight-end
});

const myDataProvider = {
    //...
    update: async ({
        resource,
        id,
        variables,
        // highlight-next-line
        meta,
    }) => {
        // highlight-next-line
        const headers = meta?.headers ?? {};
        const url = `${apiUrl}/${resource}/${id}`;

        //...
        //...

        // highlight-next-line
        const { data } = await httpClient.patch(url, variables, { headers });

        return {
            data,
        };
    },
    //...
};
```

[Refer to the `meta` section of the General Concepts documentation for more information &#8594](/docs/api-reference/general-concepts/#meta)

### `dataProviderName`

This prop allows you to specify which `dataProvider` if you have more than one. Just pass it like in the example:

```tsx
const { mutate } = useUpdate();

mutate({
    dataProviderName: "second-data-provider",
});
```

### `invalidates`

`invalidates` is used to specify which queries should be invalidated after the mutation is completed.

By default, it invalidates the following queries from the current `resource`: `"list"`, `"many"` and `"detail"`. That means, if you use `useList`, `useMany`, or `useOne` hooks on the same page, they will refetch the data after the mutation is completed.

```tsx
const { mutate } = useUpdate();

mutate({
    invalidates: ["list", "many", "detail"],
});
```

## Return Values

Returns an object with TanStack Query's `useMutation` return values.

> For more information, refer to the [`useMutation` documentation &#8594](https://tanstack.com/query/v4/docs/react/reference/useMutation)

## API

### Mutation Parameters

| Property                                                                                            | Description                                                                                        | Type                                                                                     | Default                                                      |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| <div className="required-block"><div>resource</div> <div className=" required">Required</div></div> | Resource name for API data interactions                                                            | `string`                                                                                 |                                                              |
| id <div className=" required">Required</div>                                                        | id for mutation function                                                                           | [`BaseKey`](/api-reference/core/interfaces.md#basekey)                                   |                                                              |
| values <div className=" required">Required</div>                                                    | Values for mutation function                                                                       | `TVariables`                                                                             | {}                                                           |
| mutationMode                                                                                        | [Determines when mutations are executed](/advanced-tutorials/mutation-mode.md)                     | ` "pessimistic` \| `"optimistic` \| `"undoable"`                                         | `"pessimistic"`\*                                            |
| undoableTimeout                                                                                     | Duration to wait before executing the mutation when `mutationMode = "undoable"`                    | `number`                                                                                 | `5000ms`\*                                                   |
| onCancel                                                                                            | Callback that runs when undo button is clicked on `mutationMode = "undoable"`                      | `(cancelMutation: () => void) => void`                                                   |                                                              |
| successNotification                                                                                 | Successful Mutation notification                                                                   | [`SuccessErrorNotification`](/api-reference/core/interfaces.md#successerrornotification) | "Successfully updated `resource`"                            |
| errorNotification                                                                                   | Unsuccessful Mutation notification                                                                 | [`SuccessErrorNotification`](/api-reference/core/interfaces.md#successerrornotification) | "Error when updating `resource` (status code: `statusCode`)" |
| meta                                                                                                | Meta data query for `dataProvider`                                                                 | [`MetaDataQuery`](/api-reference/core/interfaces.md#metadataquery)                       | {}                                                           |
| dataProviderName                                                                                    | If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use. | `string`                                                                                 | `default`                                                    |
| invalidates                                                                                         | You can use it to manage the invalidations that will occur at the end of the mutation.             | `all`, `resourceAll`, `list`, `many`, `detail`, `false`                                  | `["list", "many", "detail"]`                                 |

:::note
These props have default values in `RefineContext` and can also be set on [`<Refine>`](/api-reference/core/components/refine-config.md) component. `useUpdate` will use what's passed to `<Refine>` as default, but a local value will override it.
:::

<br/>

### Type Parameters

| Property   | Desription                                                                                        | Type                                                         | Default                                                      |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| TData      | Result data of the mutation. Extends [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) | [`BaseRecord`](/api-reference/core/interfaces.md#baserecord) |
| TError     | Custom error object that extends [`HttpError`](/api-reference/core/interfaces.md#httperror)       | [`HttpError`](/api-reference/core/interfaces.md#httperror)   | [`HttpError`](/api-reference/core/interfaces.md#httperror)   |
| TVariables | Values for mutation function                                                                      | `{}`                                                         | `{}`                                                         |

### Return value

| Description                                | Type                                                                                                                                                                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Result of the TanStack Query's useMutation | [`UseMutationResult<`<br/>`{ data: TData },`<br/>`TError,`<br/>` { resource:string; id: BaseKey; values: TVariables; },`<br/>` UpdateContext>`](https://tanstack.com/query/v4/docs/react/reference/useMutation)\* |

> `*` `UpdateContext` is an internal type.
