// import React from 'react';
// import DataTable from 'react-data-table-component';
// // import { Link, Navigate, useNavigate } from "react-router-dom";

// const columns = [
//   {
//     name: 'CORPORATION NAME',
//     selector: row => row.name,
//     sortable: true,
//   },
//   {
//     name: 'TYPE OF BUSINESS',
//     selector: row => row.typeofbusiness,
//     sortable: true,
//   },
//   {
//     name: 'PARTNERS',
//     selector: row => row.partners,
//     sortable: true,
//   },
//   {
//     name: '	EIN',
//     selector: row => row.ein,
//     sortable: true,
//   },
//   {
//     name: '',
//     cell: row => <button  onClick={() => alert(`Clicked ${row.name}`)}>Detail</button>,
//     ignoreRowClick: true,
//     allowOverflow: true,
//     button: true,
//   },
//   {
//     name: 'Actions',
//     cell: row => <button onClick={() => alert(`Clicked ${row.name}`)}>Add task</button>,
//     ignoreRowClick: true,
//     allowOverflow: true,
//     button: true,
//   },

// ];

// const data = [
//   { id: 1, name: 'John Doe', typeofbusiness: 'LLC - S Corp', partners: 'john@example.com', ein:27-1924358 },
//   { id: 2, name: 'John Doe', typeofbusiness: 'LLC - S Corp', partners: 'john@example.com', ein:27-1924358 },
//   { id: 3, name: 'John Doe', typeofbusiness: 'LLC - S Corp', partners: 'john@example.com', ein:27-1924358 },
//   { id: 4, name: 'John Doe', typeofbusiness: 'LLC - S Corp', partners: 'john@example.com', ein:27-1924358 },
  
// ];

// const DataTableComponent = () => {
//   return (
//     <>      {/* <h1>User Information</h1> */}
//       <DataTable
//         title="User Data"
//         columns={columns}
//         data={data}
//         pagination
//         className='table  table-sm table-striped'
//       />
//     </>
//   );
// };

// export default DataTableComponent;
