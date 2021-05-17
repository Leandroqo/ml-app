const useRouter = jest.spyOn(require("next/router"), "useRouter");

export function mockNextUseRouter(pathname: string, query = {}) {
  useRouter.mockImplementation(() => ({
    route: '',
    basePath: '',
    pathname,
    query,
    asPath: '',
    push: async () => true,
    replace: async () => true,
    reload: () => null,
    back: () => null,
    prefetch: async () => undefined,
    beforePopState: () => null,
    isFallback: false,
    events: {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  }));
}