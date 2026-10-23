export interface ListResponse {
  results: ListItem[];
}

export interface ListItem {
  name: string;
  url: string;
}