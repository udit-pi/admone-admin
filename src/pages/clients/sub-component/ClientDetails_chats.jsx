import React from 'react';
import Badge from 'react-bootstrap/Badge';

// import { Link, Navigate, useNavigate } from "react-router-dom";


const ChatsDataTableComponent = () => {
  const data = [
    {
      date: '12/22/24 10:15am',
      detail: 'Request for W-2 Form....',
      startedby: 'Anjana',
      lastreply: 'Client',
      attachments: 'Client',
    },
    {
      taskName: 'Bank Statement & Download',
      dueDate: '02/10/24',
      status: 'In - Progress',
      assignee: 'Noureen Lalani',
      timeLeft: '',
    },
  ];

  return (
    <div className="client_tasks col" style={{ marginTop: '2rem' }}>

      <div className=" mt-4 tasks">
        <div className="card-body">
          <div className="dataTables_wrapper no-footer">
            <div className="dataTables_filter text-end ">
              <label>
                Search:
                <input type="search" placeholder="" aria-controls="DataTables_Table_0" />
              </label>
            </div>
            {/* <Table striped bordered hover size="sm"> */}
              <div className="table w-100 striped bordered hover ">
              <thead className=''>
                <tr style={{ fontSize: '80%' }}>
                  <th className="no-sort no-search" width="5"></th>
                  <th>DATE</th>
                  <th>DETAILS</th>
                  <th>STARTED BY</th>
                  <th>LAST REPLY BY</th>
                  <th>ATTACHMENTS</th>
                </tr>
              </thead>
              <hr />
              <tbody className=''>
                {data.map((task, index) => (
                  <tr
                    key={index}
                    style={{ cursor: 'pointer', opacity: 0.5 }}
                    title="Task Expired"
                  >
                    <td></td>
                    <td>
                      <a href="" onClick={() => alert('Show Task Details')}>
                        {task.date}
                      </a>
                    </td>
                    <td>{task.detail}</td>
                    <td>
                    
                        {task.startedby}
                 
                    </td>
                    <td>{task.lastreply}</td>
                    <td>{task.attachments}</td>
                  </tr>
                ))}
              </tbody>
              </div>
            {/* </Table> */}
            <hr />
            <div className='d-flex justify-content-between'>
              

            <div className="dataTables_info" role="status" aria-live="polite">
              Showing 1 to 2 of 2 entries
            </div>
            <div className="dataTables_paginate paging_simple_numbers">
              <a className="paginate_button previous disabled" tabIndex="-1" id="DataTables_Table_0_previous">
                Previous
              </a>
              <span>
                <a className="paginate_button current" tabIndex="0">
                  1
                </a>
              </span>
              <a className="paginate_button next disabled" tabIndex="-1" id="DataTables_Table_0_next">
                Next
              </a>
            </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsDataTableComponent;
