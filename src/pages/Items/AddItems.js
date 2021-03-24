import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Nav, NavItem, NavLink,CardTitle,CardSubtitle, TabPane, TabContent, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//Dropzone
import Dropzone from "react-dropzone";
import {
    changeItemName,
    changeEmail,
    changeItemNickname,
    changeCategory ,
    changeRestuarant,
    changeRegularPrice ,
    changeNewPrice,
    changeDiscountRate ,
    changeImage1 ,
    changeImage2 ,
    
    changeDescription ,
    
    saveItemChanges
} from '../../store/Items/actions';
//select
import Select from 'react-select';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { compose } from 'redux';
import {
     makeSelectItemName,
    makeSelectItemNickname,
    makeSelectCategory,
    makeSelectRestaunt,
    makeSelectRegularPrice,
    makeSelectNewPrice,
    makeSelectDiscountRate,
    // contact1:makeSelectDescription(),
    makeSelectImage2,
    makeSelectImage1,
    makeSelectDescription,
    
 } from '../../store/Items/selectors';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "View Items ", link : "/view-items" },
                { title : "Add Items", link : "/add-items" },
            ],
            activeTab: 1,
            selectedFiles: [],
            selectedFilesCover: [],
            isOffer: false
        }
       
        this.toggleTab = this.toggleTab.bind(this);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    }
   
    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
          
        this.setState({ selectedFiles: files });
        this.props.onChangeImage1(files);
      };
    handleAcceptedFilesCover = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFilesCover: files });
        this.props.onChangeImage2(files);
      };
    
      /**
       * Formats the size
       */
      formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
      };

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=3 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
    }
    onEditorStateChange=(editorState)=>{
        console.log("value from editor",editorState);
    }

    render() {
        const options = [
            { value : "TO", label : "Touchscreen" },
            { value : "CF", label : "Call Function" },
            { value : "NO", label : "Notifications" },
            { value : "FI", label : "Fitness" },
            { value : "OU", label : "Outdoor" },
        ]
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    
                    <Breadcrumbs title="Add Items" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        
                                        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
                                            <Nav pills justified className="twitter-bs-wizard-nav">
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(1); }} className={classnames({ active: this.state.activeTab === 1 })}>
                                                        <span className="step-number">01</span>
                                                        <span className="step-title">Items Info</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(2); }} className={classnames({ active: this.state.activeTab === 2 })}>
                                                        <span className="step-number">02</span>
                                                        <span className="step-title">Items Images</span>
                                                    </NavLink>
                                                </NavItem>
                                                
                                                {/* <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(3); }} className={classnames({ active: this.state.activeTab === 3 })}>
                                                        <span className="step-number">03</span>
                                                        <span className="step-title">Social Media Information</span>
                                                    </NavLink>
                                                </NavItem> */}
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <h4 className="card-title">Items Information</h4>
                                                    <p className="card-title-desc">Fill all information below</p>

                                                    <Form>
                                                        <FormGroup>
                                                            <Label htmlFor="productname">Item Name</Label>
                                                            <Input id="productname" onChange={this.props.onChangeItemName} name="productname" value={this.props.itemName} type="text" className="form-control"/>
                                                        </FormGroup>
                                                       
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturername">Nick Name</Label>
                                                                    <Input onChange={this.props.onChangeItemNickname} name="productname" value={this.props.itemNickname} type="text" className="form-control"/>
                                                                </FormGroup>
                                                           
                                                        
                                                        <Row>
                                                            <Col md={6}>
                                                                
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturerbrand">Category</Label>
                                                                    <Input onChange={this.props.onChangeCategory} value={this.props.category} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label className="control-label">Restuarant</Label>
                                                                    <select className="form-control select2" onChange={this.props.onChangeRestuarant} >
                                                                        <option>Select Restuarant</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </FormGroup>
                                                            </Col>
                                                           
                                                        </Row>

                                                        <Row>
                                                            <Col md={8}>
                                                             <FormGroup>
                                                                    <Label htmlFor="Regular Price">Regular Price</Label>
                                                                    <Input  onChange={this.props.onChangeRegularPrice} value={this.props.price} type="number" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col style={{display:"flex",alignItems:'flex-end'}} md={4}>
                                                                   <FormGroup>
                                                                     <div className="form-check mb-3" style={{display:"flex",alignItems:'flex-end'}}>
                                                                    <Input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={()=>this.setState({isOffer:!this.state.isOffer})}/>
                                                                    <Label className="form-check-label" htmlFor="defaultCheck1">
                                                                        Is that an Offer?
                                                                    </Label>
                                                                    </div>
                                                                </FormGroup>
                                                                
                                                            </Col>
                                                        </Row>
                                                        {this.state.isOffer &&
                                                        <Row>
                                                             <Col md={6}>
                                                             <FormGroup>
                                                                    <Label htmlFor="Regular Price">New Price</Label>
                                                                    <Input  onChange={this.props.onChangeNewPrice} value={this.props.newPrice} type="number" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                             <Col md={6}>
                                                             <FormGroup>
                                                                    <Label htmlFor="Regular Price">Discount Rate %</Label>
                                                                    <Input  onChange={this.props.onChangeDiscountRate} value={this.props.discountRate} type="number" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>

                                                        </Row>
                                                            }
                                                        <Row>
                                                        
                                                        <Col>
                                                            <Card>
                                                            <CardBody>
                                                                <CardTitle>Description</CardTitle>
                                                                <CardSubtitle className="mb-3">
                                                                    Some details about the Item.
                                                                </CardSubtitle>

                                                               
                                                                <Editor
                                                                    toolbarClassName="toolbarClassName"
                                                                    wrapperClassName="wrapperClassName"
                                                                    editorClassName="editorClassName"
                                                                    // onChange={this.props.onChangeDescription}
                                                                    onEditorStateChange={this.props.onChangeDescription}
                                                                    //   value={this.props.description} 
                                                                />
                                                               

                                                            </CardBody>
                                                            </Card>
                                                        </Col>
                                                        </Row>

                                                    </Form>
                    
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                     <h4 className="card-title">Item Image</h4>
                                                        <p className="card-title-desc">Upload Item Images</p>
                                                    <Form>
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                            this.handleAcceptedFiles(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                className="dz-message needsclick mt-2"
                                                                {...getRootProps()}
                                                                >
                                                                <input {...getInputProps()} />
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFiles.map((f, i) => {
                                                            return (
                                                                <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                                >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                        >
                                                                        {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                    </Row>
                                                                </div>
                                                                </Card>
                                                            );
                                                            })}
                                                        </div>
                                                        <br/>
                                                        <br/>
                                                        <h4 className="card-title">Item Image</h4>
                                                        <p className="card-title-desc">Upload Item Images</p>
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                            this.handleAcceptedFilesCover(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                className="dz-message needsclick mt-2"
                                                                {...getRootProps()}
                                                                >
                                                                <input {...getInputProps()} />
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFilesCover.map((f, i) => {
                                                            return (
                                                                <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                                >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                        >
                                                                        {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                    </Row>
                                                                </div>
                                                                </Card>
                                                            );
                                                            })}
                                                        </div>
                                                          <div className="text-center mt-4">
                                                        <Button color="primary" type="submit" onClick={this.props.onSubmit} className="mr-2 waves-effect waves-light">Save Changes</Button>
                                                        <Button color="light" type="submit" className="waves-effect ml-1">Cancel</Button>
                                                    </div>
                                                        </Form>

                                                </TabPane>
                                               

                                                  
                                                
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                            <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                                                <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                                            </ul>
                                        </div>
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
    itemName: makeSelectItemName(),
    itemNickname:makeSelectItemNickname(),
    category:makeSelectCategory(),
    restuarant:makeSelectRestaunt(),
    price:makeSelectRegularPrice(),
    newPrice:makeSelectNewPrice(),
    discountRate:makeSelectDiscountRate(),
    // contact1:makeSelectDescription(),
    image2:makeSelectImage2(),
    image1:makeSelectImage1(),
    description:makeSelectDescription(),
  

})
const mapDispatchToProps =(dispatch)=>{ 
    return {
        onChangeItemName: evt=>dispatch(changeItemName(evt.target.value)),
        onChangeItemNickname: evt=>dispatch(changeItemNickname(evt.target.value)),
        onChangeCategory: evt=>dispatch(changeCategory(evt.target.value)),
        onChangeRestuarant: evt=>dispatch(changeRestuarant(evt.target.value)),
        onChangeRegularPrice: evt=>dispatch(changeRegularPrice(evt.target.value)),
        onChangeNewPrice: evt=>dispatch(changeNewPrice(evt.target.value)),
        onChangeDiscountRate: evt=>dispatch(changeDiscountRate(evt.target.value)),
        
        onChangeDescription: editorState=>dispatch(changeDescription(editorState)),
        
        onChangeImage1:(img)=>dispatch(changeImage1(img)),
        onChangeImage2:(cover)=>dispatch(changeImage2(cover)),
        onSubmit:()=>dispatch(saveItemChanges()),
    }
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddProduct);