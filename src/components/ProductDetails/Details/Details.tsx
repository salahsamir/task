import React, { Fragment } from 'react';

interface IDetailItemProps {
  label: string;
  value: string;
}

const DetailItem = ({ label, value }: IDetailItemProps) => (
  <div className='grid grid-cols-2  gap-4 my-4'>
    <h3 className="text-lg font-semibold text-slate-600">{label}:</h3>
    <h3 className="text-lg text-slate-600 ">{value}</h3>
  </div>
);

interface IProps {
  data: {
    processor: { name: string };
    resolution: { resolution: string; size: string };
    color: string;
    hard_drive: { capacity: string; type: string };
    ram_type: { capacity: string; type: string };
    battery_capacity: { manufacturer: string; capacity: string; type: string };
  };
}

const Details = ({ data }: IProps) => {
  if (!data) {
    return <div>No data available</div>;
  }
 console.log(data);
 
  return (
    <Fragment>
      <h2 className="text-2xl">Product Details</h2>
      <div className='m-4'>
        <DetailItem
          label="Processor"
          value={data.processor?.name}
        />
        <DetailItem
          label="Resolution"
          value={`${data?.resolution?.resolution} ${data?.resolution?.size}`}
        />
        <DetailItem
          label="Color"
          value={data?.color}
        />
        <DetailItem
          label="Hard drive"
          value={`${data?.hard_drive?.capacity} ${data?.hard_drive?.type}`}
        />
        <DetailItem
          label="Ram type"
          value={`${data?.ram_type?.capacity} ${data?.ram_type?.type}`}
        />
        <DetailItem
          label="Battery Capacity"
          value={`${data?.battery_capacity?.manufacturer} ${data?.battery_capacity?.capacity} ${data?.battery_capacity?.type}`}
        />
      </div>
    </Fragment>
  );
}

export default Details;
