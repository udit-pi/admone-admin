import React from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';


const customStyles = {

	cells: {
		style: {
			

		},
	},
};


  
const Clients = () => {


  const navigate = useNavigate();

  const DetailsPage = () => {
  
    navigate("/clientdetailsinfo");
  
  }



  const columns = [

  
    {
      name: 'CORPORATION NAME',
      selector: row => row.name,
      sortable: true,
      grow:3,
    },
    {
      name: 'TYPE OF BUSINESS',
      selector: row => row.typeofbusiness,
      sortable: true,
      grow:3,
    },
    {
      name: 'PARTNERS',
      selector: row => row.partners,
      sortable: true,
      grow:2,
    },
    {
      name: '	EIN',
      selector: row => row.ein,
      sortable: true,
      grow:2,
    },
    {
      name: '',
      cell: row => <button className="btn btn-outline-primary btn-xxs me-2 " onClick={DetailsPage}>Detail</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '80px',
  
   
    },
    {
      name: 'Actions',
      cell: row => <button  className="btn btn-primary btn-xxs" onClick={() => alert(`Clicked ${row.name}`)}>Add task</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
     
      width: '80px', 
   
    },
  
  ];
  const data = [
    { id: 1, name: 'ZAMINDAR LLC', typeofbusiness: 'LLC - S Corp', partners: '3 Owners', ein:27-1924358 },
    { id: 2, name: 'ZWA LLC', typeofbusiness: 'Limited Liability Company (LLC)', partners: '3 Owners', ein:85-3873440 },
    { id: 3, name: 'ZUSA VENTURE LLC', typeofbusiness: '	Limited Liability Company (LLC)', partners: '6 Owners', ein:81-4962633 },
    { id: 4, name: 'ZURAIN FORTUNE LLC', typeofbusiness: '	LLC - S Corp', partners: '1 Owners', ein:85-4092338 },
    { id: 5, name: 'ZULAG PROPERTIES LLC', typeofbusiness: 'Limited Liability Company (LLC)', partners: '3 Owners', ein:47-1869877 },
    
  ];

  return (



    <div className='client-wrapper container-fluid '>     

     <div className="page-title py-2 mb-3    ">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12">
                        <div className="d-flex align-items-end">
                            <h1 className="mb-0">Clients</h1>
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12 text-end">
                        <div className="d-flex flex-grow-1 justify-content-md-end justify-content-sm-start align-items-center toolbar gap-2">




                          
                            <div className="input-group input-group-sm mb-3" style={{ width: 'auto' }}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="search_clients"
                                    // onKeyUp={}
                                    className="form-control"
                                    style={{ borderColor: '#1E468E' }}
                                    placeholder="Search by Name, EIN, City"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                />
                            </div>
                            <button className='btn btn-primary mb-3'>Add Client</button>
                        </div>                    
                    </div>                               
                </div>

     </div>

<div class="card mt-4 client-view-table list-table">


        <div class="card-body">


        <div class="table-info mb-4 d-flex justify-content-between align-items-center">
            <small class="text-muted">Showing Records 1 to 25 of 1413</small>
            
            </div>
        <DataTable
        
                columns={columns}
                data={data}
                striped="true"
                pagination
                className='table  table-sm table-striped'
            />
        

        </div>

</div>
    
      

    
    </div>
  )
}

export default Clients