import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Nav, NavItem, NavLink, UncontrolledTooltip, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import { MDBDataTable } from "mdbreact";
import "./datatables.scss";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class ViewItems extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Dashboard", link : "/dashboard" },
                { title : "View Items", link : "/view-items" },
            ],
            activeTab: '1',
            tableData:[ {
                checkbox:"manish",
                    id:123,
                    image:'image',
                     name:"chicken momo", 
                      nickname:"chicks",
                       category:"momo",
                       status :"active", 
                      price:120,
                       action:123,},
                    {
                checkbox:"manish",
                    id:123,
                    image:'image',
                     name:"chicken momo", 
                      nickname:"chicks",
                       category:"momo",
                       status :"active", 
                      price:120,
                       action:123,
                    },
                    
                    ]
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
    }
    
    render() {
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
                label: "Nickname",
                field: "nickname",
                sort: "asc",
                width: 93
              },
              {
                label: "Category",
                field: "category",
                sort: "asc",
                width: 109
              },
              {
                label: "Price",
                field: "price",
                sort: "asc",
                width: 48
              },
              {
                label: "Availability Status",
                field: "status",
                sort: "asc",
                width: 135
              },
              
              {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 120
              },
            ],
            rows: [
                ...this.state.tableData.map((td)=>(
                    
                         {
                        checkbox:td.checkbox,
                        image:td.image,
                        id:td.id,
                        name:td.name, 
                        category:td.category,
                        nickname:td.nickname,
                       price:td.price,
                       status :123, 
                       invoice : 123,
                       action:<>
                       <Link to="#" className="mr-3 text-primary" id="edit3"><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <UncontrolledTooltip placement="top" target="edit3">
                                Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete3"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                            <UncontrolledTooltip placement="top" target="delete3">
                                Delete
                            </UncontrolledTooltip >
                        </>,
                    }
                    
                ))
            ]
        }
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        
                    <Breadcrumbs title="ITEMS" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row className="mb-4">
                            <Col>
                           <Link to="add-item"><Button>Add Items</Button></Link> 
                            </Col>
                        </Row>

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

export default ViewItems;