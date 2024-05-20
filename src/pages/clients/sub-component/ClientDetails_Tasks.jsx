import React from 'react';
import DataTable from 'react-data-table-component';
// import { Link, Navigate, useNavigate } from "react-router-dom";

const columns = [
  {
    name: 'TASK NAME',
    selector: row => row.taskname,
    sortable: true,
  },
  {
    name: 'DUE DATE',
    selector: row => row.duedate,
    sortable: true,
  },
  {
    name: 'STATUS',
    selector: row => row.status,
    sortable: true,
  },
  {
    name: '	ASSIGNEE',
    selector: row => row.assignee,
    sortable: true,
  },
  {
    name: '	TIME LEFT',
    selector: row => row.timeleft,
    sortable: true,
  },

];

const data = [
    
  { id: 1, taskname: 'Bank Statement & Download', duedate: '01/10/24', status: 'in-progrecc', assignee:'Noureen Lalani',  },
 
  
];

const TaskDataTableComponent = () => {
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

export default TaskDataTableComponent;
