import React from 'react'
import { Nav } from 'react-bootstrap';
import { Form, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap';


const ClientActivedetail = () => {
  return (
    <div className='container-fluid'>

      <div className="page-title py-2">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-12">
            <div className="d-flex align-items-center">
              <h1 className="mb-0">ZAMINDAR LLC</h1>

              <div className='ms-3'>Active</div>
            </div>
          </div>
          <div className="col-md-9 col-sm-12 text-end">

            {/* <button className='btn btn-md btn-primary'> New Chat</button> */}
          </div>
        </div>
      </div>
      <hr lh-3 />


      <div className='d-flex '>
        <div className="sidebar w-25">

          <Nav className="flex-column gap-3 " style={{ width: '200px' }}>
            <Nav.Item className="border rounded-3 text-center">
              <Nav.Link className="active px-1" href="#">
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" href="#">
                DBAs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" href="#">
                Banks
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Shareholders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Contacts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Logins
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Tax Accounts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Addresses
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-3 text-center ">
              <Nav.Link className="px-5" >
                Assigned to
              </Nav.Link>
            </Nav.Item>
          </Nav>

        </div>
        <div className="right-content w-75">

          <div className="card p-3 mb-5" style={{ width: "700px " }}>

            <div className="">
              <h5 className="fw-bold mb-3">Business Details</h5>

              <form>
                <div className="row mb-3">
                  <label for="">Name</label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value="AG MEMBER GROUP LLC"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label for="">EIN</label>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="ein"
                        value="82-2532111"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label for="">Date of Formation</label>
                    <div>
                      <input
                        type="date"
                        className="form-control"
                        id="ein"
                        value="82-2532111"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="d-flex flex-column">
                      <label for="">Business Structure</label>

                      <div className="dropdown border">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Limited Liability company(LLC)
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#"
                            >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="d-flex flex-column">
                      <label for="">Business Activity</label>

                      <div className="dropdown border">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Limited Liability company(LLC)
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#"
                            >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>


          </div>

          <div className="card p-3 mb-5 " style={{ width: "700px " }}>


          <div className="">
              <h5 className="fw-bold mb-3">Business Details</h5>

              <form>
                <div className="row mb-3">
                  <label for="">Name</label>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value="AG MEMBER GROUP LLC"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <label for="">EIN</label>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        id="ein"
                        value="82-2532111"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label for="">Date of Formation</label>
                    <div>
                      <input
                        type="date"
                        className="form-control"
                        id="ein"
                        value="82-2532111"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <div className="d-flex flex-column">
                      <label for="">Business Structure</label>

                      <div className="dropdown border">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Limited Liability company(LLC)
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#"
                            >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="d-flex flex-column">
                      <label for="">Business Activity</label>

                      <div className="dropdown border">
                        <button
                          className="btn dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Limited Liability company(LLC)
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li>
                            <a className="dropdown-item" href="#">Another action</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#"
                            >Something else here</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>



          <div className="card p-3" style={{ width: "700px " }}>

            <Form>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" defaultValue="AG MEMBER GROUP LLC" required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} sm="6" controlId="formEIN">
                  <Form.Label>EIN</Form.Label>
                  <Form.Control type="text" defaultValue="82-2532111" required />
                </Form.Group>

                <Form.Group as={Col} sm="6" controlId="formDateOfFormation">
                  <Form.Label>Date of Formation</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Col sm="6">
                  <Form.Label>Business Structure</Form.Label>
                  <DropdownButton id="dropdown-business-structure" title="Limited Liability company(LLC)" className="bg-transparent dropdown-toggle">

                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </DropdownButton>
                </Col>

                <Col sm="6">
                  <Form.Label>Business Activity</Form.Label>
                  <DropdownButton id="dropdown-business-activity" title="Limited Liability company(LLC)" className="w-100">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>

              <Button type="submit" className="btn btn-primary">Save Changes</Button>
            </Form>

          </div>


        </div>
      </div>




    </div>
  )
}

export default ClientActivedetail