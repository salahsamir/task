

export interface IData{
  
        data: {
          id: number;
          name: string;
          processor: { name: string };
          resolution: { resolution: string; size: string };
          color: string;
          hard_drive: { capacity: string; type: string };
          ram_type: { capacity: string; type: string };
          battery_capacity: { manufacturer: string; capacity: string; type: string };
        };
 
     
      };
