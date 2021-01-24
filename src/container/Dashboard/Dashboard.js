import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import usePagination from "../../hooks/usePagination";
import { Pagination } from "@material-ui/lab";
import Modal from "../../component/UI/Modal/Modal";

const initialState = {
  currentSort: "up",
};
const Dashboard = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [filteredUserDetails, setFilteredUserDetails] = useState([]);
  const [state, setState] = useState(initialState);
  const [sortedField, setSortedField] = useState(null);
  let [page, setPage] = useState(1);
  const [searchPatient, setSearchPatient] = useState("");
  const [patientData, setPatientData] = useState({});
  const [showModal, setModalShow] = useState(false);
  // const [dropDownValue, setDrop] = useState("all")

  const DATA_PER_PAGE = 20;

  const pageCount = Math.ceil(filteredUserDetails.length / DATA_PER_PAGE);
  const _USER_DATA = usePagination(filteredUserDetails, DATA_PER_PAGE);

  const { currentSort } = state;
  useEffect(() => {
    axios
      .get("https://api.enye.tech/v1/challenge/records")
      .then((user) => {
        console.log();
        const userData = user.data.records.profiles;

        setUserDetails([...userData]);
        setFilteredUserDetails([...userData]);
      })
      .catch((e) => { });
  }, []);

  useEffect(() => {
    const data = userDetails.filter((user) => {
      const { UserName, FirstName, LastName , Email} = user;
      const searchPatientLower = searchPatient.toLowerCase();
      return (
        UserName.toLowerCase().includes(searchPatientLower) ||
        FirstName.toLowerCase().includes(searchPatientLower) ||
        LastName.toLowerCase().includes(searchPatientLower) ||
        Email.toLowerCase().includes(searchPatientLower)
      );
    });
    setFilteredUserDetails(data);
  }, [searchPatient]);

  
  const handleChange = (e, p) => {
    setPage(p);
    _USER_DATA.jump(p);
  };

  const editSearchPatient = (e) => {
    setSearchPatient(e.target.value);
  };

  const displayFullUserDetailsHandler = (id, array) => {
    setPatientData(array[id])
    setModalShow(!showModal)
  };
  const closeModal = () => {
    setModalShow(!showModal)
  }
  const filterUserDetailsHandler = (e, field) => {
    const data = [...userDetails].filter((user) => {
      if (e.target.value === "all") {
        return true;
      }
      return user[field] === e.target.value;
    })
     setFilteredUserDetails(data);
    };


    return (
      <div className="user_details_wrapper">
        <div className="table-header">
          <span className="main-layout-title">All Clients</span>
          <div className="select-item">
          <select className="dropdown" onChange={(e) => filterUserDetailsHandler(e, "PaymentMethod")}>
            <option value="all">Payment methods</option>
            <option value="cc">cc</option>
            <option value="check">check</option>
            <option value="paypal">paypal</option>
            <option value="money order">money order</option>
            </select>
            </div>
          <select className="dropdown" value="Gender" onChange={(e) => filterUserDetailsHandler(e, "Gender")}>
              <option value="all">Genders</option>
            <option value="Prefer to skip">Prefer to skip</option>
            <option value="Female">female</option>
            <option value="Male">male</option>
          </select>
          <input
            type="text"
            className="search_input"
            onChange={editSearchPatient}
            value={searchPatient}
            placeholder="search"
          />
          <i className="fas fa-search"></i>
        </div>
        <table className="user_details_table">
          <thead>
            <tr className="table_head">
              <th className="table_data"> Gender</th>
              <th className="table_data">First Name</th>
              <th className="table_data">Last Name</th>
              <th className="table_data">Email</th>
              <th className="table_data">Phone Number</th>
              <th className="table_data"> Payment Method</th>
              <th className="table_data">Recent Activity</th>
            </tr>
          </thead>
          <tbody>
            {[..._USER_DATA.currentData()]
              .map((user, id, array) => (
                <tr
                  key={id}
                  className="user_details_tr"
                 onClick={()=>displayFullUserDetailsHandler(id, array)}
                >
                  <td><span className="gender">{user.Gender}</span></td>
                  <td>{user.PhoneNumber}</td>
                  <td>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.Email}</td>
                  <td>{user.PaymentMethod}</td>
                  <td>{user.LastLogin}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          count={pageCount}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
        <Modal PatientData={patientData} show={showModal} closeModal={closeModal}/>
    </div>
     );
};

export default Dashboard
