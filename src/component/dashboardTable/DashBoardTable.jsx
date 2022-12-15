import React from "react";
import "./DashBoardTable.css";
import MaterialTable from "material-table";
import { useState } from "react";
const DashBoardTable = () => {
  const [columns, setColumns] = useState([
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ]);
  const [data, setData] = useState([
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
  ]);
  return (
    <>
      <div className="col-lg-12">
        <div className="aw_table_wrapper">
          <div className="table_userrs">
            <h3>Latest Users</h3>
          </div>
          <div className="table_body">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="dataTables_length">
                  <label>Show</label>
                  <select
                    className="form-select custom_class_select"
                    aria-label="Default select example"
                  >
                    <option defaultValue className="custom_style_option">
                      10
                    </option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  <label>entries</label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="datatable_filter">
                  <label> Search: </label>
                  <input className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <MaterialTable
                  columns={columns}
                  data={data}
                  title="Demo Title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardTable;
