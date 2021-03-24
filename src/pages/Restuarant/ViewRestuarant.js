import React, { Component } from "react";

// import { Row, Col, Card, CardBody, Container, Table } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {makeSelectDataFromAPI} from "../../store/Restuarant/selectors";
import {getRestuarantData} from '../../store/Restuarant/actions';
// import React, { Component } from 'react';
import { Container,Badge, Card, CardBody, Row, Col, Nav, NavItem, NavLink, UncontrolledTooltip, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import { MDBDataTable } from "mdbreact";
import "./datatables.scss";

//Import Breadcrumb
// import Breadcrumbs from '../../components/Common/Breadcrumb';

class ViewRestuarant extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Dashboard", link : "/dashboard" },
                { title : "View Items", link : "/view-items" },
            ],
            activeTab: '1',
            data:[] 
                    
        }
        this.toggleTab = this.toggleTab.bind(this);
    }
    

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount(){
        document.getElementsByClassName("pagination")[0].classList.add("pagination-rounded");
        this.props.onGetRestuarantData();
        
       
    }
    
    render() {
        // this.props.data && this.setState(this.props.data);
        console.log("log",this.props.data);
        // this.setState({data:this.props.data});
      
        const data = {
            columns: [
              {
                label: <div className="custom-control custom-checkbox"> <Input type="checkbox" className="custom-control-input" id="ordercheck"/><Label className="custom-control-label" htmlFor="ordercheck">&nbsp;</Label></div>,
                field: "checkbox",
                sort: "asc",
                width: 28
              },
              {
                label: "Image",
                field: "image",
                sort: "asc",
                width: 78
              },
              {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 78
              },
              {
                label: "Email",
                field: "email",
                sort: "asc",
                width: 93,
              },
              {
                label: "Streetname",
                field: "streetname",
                sort: "asc",
                width: 109
              },
              {
                label: "State",
                field: "state",
                sort: "asc",
                width: 109
              },
              {
                label: "Zip Code",
                field: "zip",
                sort: "asc",
                width: 109
              },

              {
                label: "Description",
                field: "description",
                sort: "asc",
                width: 135
              },
              {
                label: "Availability Status",
                field: "status",
                sort: "asc",
                width: 48
              },
              
              {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 120
              },
            ],
          
            rows:this.props.data && [
                  ...this.props.data.map((td)=>({
                        checkbox:<div className="custom-control custom-checkbox"> <Input type="checkbox" className="custom-control-input" id="ordercheck"/><Label className="custom-control-label" htmlFor="ordercheck">&nbsp;</Label></div>,
                        image:<img src={td.r_logo} alt={td.r_logo}/>,
                        name:td.r_name,
                        email:td.r_email,
                        streetname:td.r_streetname,
                        state:td.r_state,
                        zip:td.r_zipcode,
                        description:td.r_description,       
                        status:<>{td.r_available==="yes"?<Badge className="badge-soft-success mr-1">Active</Badge>:<Badge className="badge-soft-danger mr-1">Not Active</Badge>}</>,
                        action:<><Link to="#" className="mr-3 text-primary" id="edit3"><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <UncontrolledTooltip placement="top" target="edit3">
                                Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete3"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                            <UncontrolledTooltip placement="top" target="delete3">
                                Delete
                            </UncontrolledTooltip >
                </>
                }))
            ]
                
            
        }
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        
                    <Breadcrumbs title="Restuarants" breadcrumbItems={this.state.breadcrumbItems} />
                       

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody className="pt-0">
                                        <Nav tabs className="nav-tabs-custom mb-4">
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggleTab('1'); }} className={classnames({ active: this.state.activeTab === '1' }, "font-weight-bold p-3")}>All Items</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggleTab('2'); }} className={classnames({ active: this.state.activeTab === '2' }, "p-3 font-weight-bold")}>Active</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggleTab('3'); }} className={classnames({ active: this.state.activeTab === '3' }, " p-3 font-weight-bold")}>Unpaid</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <MDBDataTable responsive data={data} className="mt-4" />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps =createStructuredSelector({
     data:makeSelectDataFromAPI(),

})
const mapDispatchToProps =(dispatch)=>{ 
    return {
        onGetRestuarantData:()=>dispatch(getRestuarantData())
    }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ViewRestuarant);
