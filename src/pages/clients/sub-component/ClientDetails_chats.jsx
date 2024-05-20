import React from 'react';
import DataTable from 'react-data-table-component';
// import { Link, Navigate, useNavigate } from "react-router-dom";

const columns = [
  {
    name: 'DATE',
    selector: row => row.date,
    sortable: true,
    grow:1,
  },
  {
    name: 'DETAIL',
    selector: row => row.detail,
    sortable: true,
    grow:1,
  },
  {
    name: 'STARTED BY',
    selector: row => row.startedby,
    sortable: true,
    grow:1,
  },
  {
    name: '	LAST REPLY BY',
    selector: row => row.lastreplyby,
    sortable: true,
    grow:1,
  },
  {
    name: ' ATTACHMENTS	',
    selector: row => row.attchments,
    sortable: true,
    grow:0.5,
  },

];

const data = [
  { id: 1, date: '12/22/24 10:15am', detail: 'Request for W-2 Form....', startedby: 'Anjana', lastreplyby:"Client", ATTACHMENTS:"yes" },
  { id: 2, date: '12/22/24 10:15am', detail: 'Request for W-2 Form....', startedby: 'Anjana', lastreplyby:"Client", ATTACHMENTS:"yes" },
  { id: 3, date: '12/22/24 10:15am', detail: 'Request for W-2 Form....', startedby: 'Anjana', lastreplyby:"Client", ATTACHMENTS:"yes" },
  { id: 4, date: '12/22/24 10:15am', detail: 'Request for W-2 Form....', startedby: 'Anjana', lastreplyby:"Client", ATTACHMENTS:"yes" },

  
];

const ChatsDataTableComponent = () => {
  return (
    <>
    <div id="DataTables_Table_0_filter" className="dataTables_filter text-end mb-2">
                  <label>Search:<input type="search" className="ms-2" placeholder="" aria-controls="DataTables_Table_0" /></label>
                </div>
      <div class=" mt-4 client-view-table list-table">
        <div class="card-body">
        <DataTable
        
                columns={columns}
                data={data}
                striped="true"
                pagination
                className='table  table-sm table-striped'
            />
        

        </div>

</div>


    </>
  );
};

export default ChatsDataTableComponent;
