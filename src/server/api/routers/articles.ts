import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure,  } from "~/server/api/trpc";
import type { User } from "@clerk/nextjs/server";
import type { Article } from "@prisma/client";
import { api } from "~/utils/api";


export const articleRouter = createTRPCRouter({
    create: protectedProcedure
    .input(
        z.object({ name: z.string(), url: z.string(), imageUrl: z.number(), collection: z.array(z.string()) }))
})