import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { articleRouter } from '~/server/api/routers/articles'
import { collectionRouter } from '~/server/api/routers/collections'
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  article: articleRouter,
  collection: collectionRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
