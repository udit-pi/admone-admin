
import React from 'react'
import { Accordion, Card, Badge, Table } from 'react-bootstrap';
import TaskDataTableComponent from './sub-component/ClientDetails_Tasks';
import ChatsDataTableComponent from './sub-component/ClientDetails_chats';


// import '../../../assets/sass/style.scss'

const Clientdetailsinfo = () => {
  return (
    <div className='container-fluid'>
      {/* <div className="container-fluid"> */}
      <div className="page-title py-2">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-12">
            <div className="d-flex align-items-center">
              <h1 className="mb-0">ZAMINDAR LLC</h1>
              
              <div className='ms-3'>Active</div>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 text-end">
            {/* Add any additional controls here */}
            <button className='btn btn-md btn-primary'> New Chat</button>
          </div>
        </div>
      </div>

      <div className="row mb-5 gap-4">
        <div className="client_details col mb-5" style={{ width: '50%' }}>
          <div className="structure text-black-50">LLC - S Corp</div>
          <div className="address mt-2">13420 TX-105, 77713</div>
          <div className="card info-rows mt-4">
            <div className="card-body">
              <div className="row">
                <div className="col-4 info-item">
                  <span className="label">EIN:</span><span className="value">27-1924358</span>
                </div>
                <div className="col-4 info-item">
                  <span className="label">No of Owners:</span><span className="value">3 Owners</span>
                </div>
                <div className="col-4 info-item">
                  <span className="label">Date of Information:</span><span className="value">02/16/2010</span>
                </div>
                <div className="col-4 info-item">
                  <span className="label">Business Activity:</span><span className="value">445110 - Supermarkets and Other Grocery Retailers (except Convenience Retailers)</span>
                </div>
                <div className="col-8 info-item">
                  <span className="label">Registered Agent:</span>
                  <span className="value">AZIZ MOMIN<br />802 COOL CUCUMBER WAY RICHMOND TX 77406</span>
                </div>
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="0" className="my-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>DBAs</Accordion.Header>
              <Accordion.Body>
                {/* DBAs content goes here */}
              </Accordion.Body>
            </Accordion.Item>


          </Accordion>

          <Accordion defaultActiveKey="0" className="my-4">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Banks</Accordion.Header>
              <Accordion.Body>
                <Card className="bg-info bg-opacity-10">
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Bank Name</span>
                      <span className="value">HANCOCK WHITNEY BANK</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Account Number</span>
                      <span className="value">0000201475</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Routing Number</span>
                      <span className="value">113000968</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Website</span>
                      <span className="value">
                        <a href="https://www.hancockwhitney.com/personal-online-banking" target="_blank" rel="noopener noreferrer">https://www.hancockwhitney.com/personal-online-banking</a>
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="label">Notes</span><br />
                      <span className="value">N/A ANNUALLY -CLIENT WILL SEND</span>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Addresses</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <div className="text-muted text-uppercase" style={{ fontSize: '12px' }}>Texas Workforce Commission</div>
                    <div>13420 TX-105, 77713</div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="text-muted text-uppercase" style={{ fontSize: '12px' }}>Texas Comptroller Of Public Accounts</div>
                    <div>13420 TX-105, 77713</div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Shareholders</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Name</span>
                      <span className="value">AKBAR PRASLA</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Percentage</span>
                      <span className="value">50.00%</span>
                    </div>
                    <div className="info-item">
                      <span className="label">SSN</span>
                      <span className="value">354-94-3284</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Address</span>
                      <span className="value">16823 Dalgety Court, Richmond, TX 77407, USA</span>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Name</span>
                      <span className="value">AZIZ MOMIN</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Percentage</span>
                      <span className="value">45.00%</span>
                    </div>
                    <div className="info-item">
                      <span className="label">SSN</span>
                      <span className="value">628-60-3573</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Address</span>
                      <span className="value">7924 Willowood Ln, Port Arthur, TX 77642, USA</span>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Name</span>
                      <span className="value">MUMTAZA A PRASALA</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Percentage</span>
                      <span className="value">5.00%</span>
                    </div>
                    <div className="info-item">
                      <span className="label">SSN</span>
                      <span className="value">636-98-0319</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Address</span>
                      <span className="value">16823 Dalgety Ct, Richmond, TX 77407, USA</span>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Tax Accounts</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Account Type</span>
                      <span className="value">Electronic Federal Tax Payment - EFTPS</span>
                    </div>
                    <div className="info-item">
                      <span className="label"></span>
                      <span className="value">27-1924358</span>
                    </div>
                    <div className="info-item">
                      <span className="label">PIN</span>
                      <span className="value">5986</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Password</span>
                      <span className="value">Azimonlc456@</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Deposit Frequency</span>
                      <span className="value">Monthly</span>
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <div className="info-item">
                      <span className="label">Account Type</span>
                      <span className="value">Texas Comptroller Of Public Accounts - Sales Tax</span>
                    </div>
                    <div className="info-item">
                      <span className="label"></span>
                      <span className="value">12719243581</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Deposit Frequency</span>
                      <span className="value">Monthly</span>
                    </div>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="client_tasks col" style={{ marginTop: '2rem' }}>

          <div className='mb-5'>

          <h5>Tasks</h5>
                    <Card className="mt-3 tasks ">



                      <card className="card-body">

                        <TaskDataTableComponent />

                      </card>


                    </Card>

          </div>
         
          <div>

          <h5 className='mt-4'>Chats</h5>
                    <Card className="mt-3 tasks">
                      <Card.Body>



                        <ChatsDataTableComponent />

                      </Card.Body>

                      <card className="card-body">


                      </card>




                    </Card>


          </div>
        



        </div>

      </div>




    </div>
    // </div>
  )
}

export default Clientdetailsinfo