export type RenderFn<T = undefined, K = Record<string, any> | undefined> = (
  _: {
    data: T;
    className?: string;
  } & K,
) => JSX.Element;


export type RenderFnWithoutData<K = Record<string, any> | undefined> = (
  _: {
    className?: string;
  } & K,
) => JSX.Element;

  const tocRender: RenderFn<{
    items: string[]
  }> = ({
    data, className
  }) => {
  
    return (
      <>
        { JSON.stringify(data) }
        { className}
      </>
    )
  }

  export default tocRender