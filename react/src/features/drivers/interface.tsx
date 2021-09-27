export interface MapState {
  root: {
    map: {
      location: string;
      longitude: number;
      latitude: number;
      count: number;
      zoom: number;
      modal: Boolean;
      loading: Boolean;
      theme: string;
      data: {
        drivers: any;
        pickETA: number;
      };
    };
  };
}
