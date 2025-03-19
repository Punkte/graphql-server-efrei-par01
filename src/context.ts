import { GhibliAPI } from "./datasources/GhibliAPI.js"
import { TrackAPI } from "./datasources/TrackAPI.js"

export type DataSourceContext = {
  dataSources: {
    trackApi: TrackAPI;
    ghibliApi: GhibliAPI;
  }
}