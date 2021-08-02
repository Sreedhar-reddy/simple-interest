import React from "react";
import { Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableActionButton from "./TableAction.component";
import "./Table.style.css";

const TableComponent = ({ tableHeaders, tableBody }) => {
  return (
    <Table bordered hover className="transfer-table text-center">
      <thead>
        <tr>
          {Object.entries(tableHeaders).map(([key, value]) => (
            <th key={key}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((item) => (
          <tr key={item.id}>
            {Object.entries(item).map(([key, value], index) => {
              if (key === "action") {
                return (
                  <td key={`${item.id}_${index}_${key}`}>
                    <Row>
                      {Object.entries(value).map(([actKey, actValue]) => {
                        if (actValue.link !== "") {
                          return (
                            <Link
                              to={actValue.link}
                              key={`${item.id}_${index}_${key}_${actKey}`}
                            >
                              <TableActionButton
                                disabled={!actValue.active}
                                type={actKey}
                              />
                            </Link>
                          );
                        } else {
                          return (
                            <TableActionButton
                              key={`${item.id}_${index}_${key}_${actKey}`}
                              disabled={!actValue.active}
                              type={actKey}
                            />
                          );
                        }
                      })}
                    </Row>
                  </td>
                );
              } else {
                return <td key={`${item.id}_${index}_${key}`}>{value}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
