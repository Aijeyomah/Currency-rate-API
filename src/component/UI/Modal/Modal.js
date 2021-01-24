import React, { useEffect} from "react";
import BackDrop from "../BackDrop/BackDrop";
import "./Modal.css";
const Modal = (props) => {

    const { PatientData } = props;
    
    useEffect(() => {
        if (props.show) {
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        }
        else {
            document.body.style.overflow = 'unset'
        }
    }, [props.show])
  let modal;
    props.show
    ? (modal = (
        <>
          <div className="backdrop" onClick={props.closeModal}></div>
          <div className="modal">
            <h2 className="main-layout-heading">Customer Information</h2>
            <div className="Modal-Info">
              <div className="Modal-Info1">
                <div className="modal-layout-content">
                  <p className="modal-layout-title">Name</p>
                  <p className="modal-layout-text">{PatientData.FirstName} {PatientData.LastName}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Gender</p>
                  <p className="modal-layout-text">{PatientData.Gender}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Email</p>
                  <p className="modal-layout-text">{PatientData.Email}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Latitude</p>
                  <p className="modal-layout-text">{PatientData.Latitude}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Longitude</p>
                  <p className="modal-layout-text">{PatientData.Longitude}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Credit Card Number</p>
                  <p className="modal-layout-text">{PatientData.CreditCardNumber}</p>
                </div>
              </div>
              <div className="Modal-info2">
                <div className="modal-layout-content">
                  <p className="modal-layout-title">Credit Card Type </p>
                  <p className="modal-layout-text">{PatientData.CreditCardType}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Domain Name </p>
                  <p className="modal-layout-text">{PatientData.DomainName}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Phone Number </p>
                  <p className="modal-layout-text">{PatientData.PhoneNumber}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">URL </p>
                  <p className="modal-layout-text">{PatientData.URL}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Mac Address </p>
                  <p className="modal-layout-text">{PatientData.MacAddress}</p>
                </div>
                 <div className="modal-layout-content">
                  <p className="modal-layout-title">Recent Activity </p>
                  <p className="modal-layout-text">{PatientData.LastLogin}</p>
                </div>
              </div>
              
            </div>
          </div>
        </>
      ))
    : (modal = null);
  return modal;
};

export default Modal;
