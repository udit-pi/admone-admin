import React from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from "../../components/layout/Layout";





const clients = [
  { id: 1, name: "ZAMINDAR LLC", type: "LLC - S Corp", partners: "3 Owners", ein: "27-1924358" },
  { id: 2, name: "ZWA LLC", type: "Limited Liability Company (LLC)", partners: "3 Owners", ein: "85-3873440" },
  { id: 3, name: "ZUSA VENTURE LLC", type: "Limited Liability Company (LLC)", partners: "6 Owners", ein: "81-4962633" },
  { id: 4, name: "ZURAIN FORTUNE LLC", type: "LLC - S Corp", partners: "1 Owner", ein: "85-4092338" },
  { id: 5, name: "ZULAG PROPERTIES LLC", type: "Limited Liability Company (LLC)", partners: "3 Owners", ein: "47-1869877" },
  { id: 6, name: "ZSM ONE LLC", type: "LLC - S Corp", partners: "4 Owners", ein: "47-1279501" },
  { id: 7, name: "ZSM ENTERPRISE INC", type: "Corporation - S corp", partners: "3 Owners", ein: "27-3674345" },
  { id: 8, name: "ZSI ENTERPRISES INC", type: "Corporation - S corp", partners: "1 Owner", ein: "27-3039848" },
  { id: 9, name: "ZRZS LLC", type: "Limited Liability Company (LLC)", partners: "4 Owners", ein: "27-4829784" },
  { id: 10, name: "ZPSALES INC", type: "Corporation - S corp", partners: "3 Owners", ein: "83-2748162" },
  { id: 11, name: "ZOYA STORES LLC", type: "LLC - S Corp", partners: "1 Owner", ein: "83-1884758" },
  { id: 12, name: "ZOEB BUSINESS LLC", type: "Limited Liability Company (LLC)", partners: "2 Owners", ein: "86-1416964" },
  { id: 13, name: "ZN BUSINESS INC", type: "Corporation - S corp", partners: "1 Owner", ein: "47-4135887" },
  { id: 14, name: "ZMK VENTURES LLC", type: "LLC - S Corp", partners: "1 Owner", ein: "85-4072606" },
  { id: 15, name: "ZKRA VENTURES INC", type: "Corporation (C corp)", partners: "1 Owner", ein: "85-4207461" },
  { id: 16, name: "ZIYAN C-STORE INC", type: "Corporation - S corp", partners: "4 Owners", ein: "45-4954165" },
  { id: 17, name: "ZIYA C-STORE INC", type: "Corporation - S corp", partners: "5 Owners", ein: "27-2818620" },
  { id: 18, name: "ZITAH SERVICES LLC", type: "LLC - C Corp", partners: "", ein: "30-0997510" },
  { id: 19, name: "ZION STORE LLC", type: "Corporation - S corp", partners: "1 Owner", ein: "87-2179063" },
  { id: 20, name: "ZIM BUSINESS LLC", type: "Limited Liability Company (LLC)", partners: "2 Owners", ein: "92-2087821" },
  { id: 21, name: "ZILLYAZ INVESTMENT LLC", type: "Limited Liability Company (LLC)", partners: "4 Owners", ein: "87-3618427" },
  { id: 22, name: "ZEUS BUSINESS INC", type: "Corporation - S corp", partners: "1 Owner", ein: "45-5257911" },
  { id: 23, name: "ZEBA & ASSOCIATES INC", type: "Corporation - S corp", partners: "1 Owner", ein: "82-3954462" },
  { id: 24, name: "ZCK LLC", type: "LLC - S Corp", partners: "", ein: "85-1051966" },
  { id: 25, name: "ZAYAAN PROPERTY INC", type: "Corporation - S corp", partners: "1 Owner", ein: "81-3918920" }
];








const Clients = () => {



  const navigate = useNavigate();

  const DetailsPage = () => {
  
    navigate("/clientdetailsinfo");
  
  }
  
  return (

<Layout>
    
 
<div className="container-fluid  mt-4">


<div className="page-title py-2">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-12">
          <div className="d-flex align-items-end">
            <h1 className="mb-0">Clients</h1>
          </div>
        </div>
        <div className="col-md-9 col-sm-12 text-end">
          <div className="d-flex flex-grow-1 justify-content-md-end justify-content-sm-start align-items-center toolbar">
            <div className="input-group input-group-sm mb-3" style={{ width: 'auto' }}>
              <input
                autoComplete="off"
                type="text"
                id="search_clients"
                // onKeyUp={searchClients}
                className="form-control"
                style={{ borderColor: '#1E468E' }}
                placeholder="Search by Name, EIN, City"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="card mt-4 client-view-table list-table">
        <div className="card-body">
          <div className="table-info mb-4 d-flex justify-content-between align-items-center">
            <small className="text-muted">Showing Records 1 to 25 of 1413</small>
          </div>
          <table className="table table-sm table-striped" style={{width:"100%"}}>
            <thead>
              <tr>
                <th className="no-sort no-search counter" width="2%">#</th>
                <th width="25%">Corporation Name</th>
                <th width="22%">Type of Business</th>
                <th width="15%"># Partners</th>
                <th width="11%">EIN</th>
                <th width="20%" className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.id}>
                  <td>{index + 1}</td>
                  <td>{client.name}</td>
                  <td>{client.type}</td>
                  <td>{client.partners}</td>
                  <td>{client.ein}</td>
                  <td className="text-end">
                    <a  className="btn btn-outline-primary btn-xxs me-2" onClick={DetailsPage}  >Details</a>
                    <button data-client={client.id} className="btn btn-primary btn-xxs"  >Add Tasks</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </Layout>
        

  );
}

export default Clients