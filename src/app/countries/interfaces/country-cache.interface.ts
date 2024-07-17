import { Country } from "./country.interface";
import { Region } from "./region.interface";

export interface CacheStorage {
  allCountries?: Country[],
  byRegion?: RegionData,
}


export interface RegionData {
  region: string;
  tabIndex: number;
  countries: Country[];
}
