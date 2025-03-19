import { PrismaClient } from "@prisma/client";
import { GhibliAPI } from "./datasources/GhibliAPI.js"
import { TrackAPI } from "./datasources/TrackAPI.js"
import { AuthenticatedUser } from "./modules/auth.js";

export type DataSourceContext = {
  dataSources: {
    trackApi: TrackAPI;
    ghibliApi: GhibliAPI;
    db: PrismaClient;
  },
  user: AuthenticatedUser | null
}