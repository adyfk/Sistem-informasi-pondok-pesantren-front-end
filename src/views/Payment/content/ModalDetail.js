import React, { useContext, useState, useEffect } from "react";
import {
  Row,
  Col,
  Modal,
  ModalBody,
  Button,
  FormInput,
  InputGroup,
  FormFeedback
} from "shards-react";

import { CtxPaymentManagement } from "../hooks/useAction";
import { toLocalString } from "../../../utils/string";

function ModalDetail() {
  const [state, setState] = useState({ value: "", status: false, error: "" });
  const { payment, detail, dialog, setDialog, onBayar } = useContext(
    CtxPaymentManagement
  );
  const { bill, paid, PaymentType, description } = payment[detail.index] || {};

  useEffect(() => {
    if (!dialog.detail) {
      setState({ value: "", status: false, error: "" });
    }
  }, [dialog.detail]);

  const onChange = e => {
    const tempValue = e.target?.value || "";
    const value = toLocalString(tempValue.replace(/[, ]/g, "")) || "";
    setState(prev => ({
      ...prev,
      value: value,
      error:
        !value ||
        value === "0" ||
        value.length <= 3 ||
        value?.match(/[^\d,]/g) ||
        bill - paid - parseInt(value) < 0
    }));
  };
  return (
    <Modal open={dialog.detail} toggle={() => setDialog({ detail: false })}>
      <ModalBody>
        <Row>
          <Col lg="8">
            Detail Pembayaran
            <br />
            <small>
              {PaymentType?.title} - {description}
            </small>
          </Col>
          <Col lg="4" className="text-right">
            (-) <small>Rp</small>
            {` ${toLocalString(Math.abs(paid - bill))}`}
          </Col>
          <Col className="mt-4" lg="1">
            <b>No</b>
          </Col>
          <Col className="mt-4" lg="4">
            <b>Description</b>
          </Col>
          <Col className="mt-4 text-right" lg="3">
            <b>Total</b>
          </Col>
          <Col className="mt-4 text-right" lg="4">
            <b>Tanggal</b>
          </Col>
          {detail.list.map((item, index) => (
            <React.Fragment key={index + "listItem"}>
              <Col className="mt-1 font-weight-normal" lg="1">
                <small> {index + 1}</small>
              </Col>
              <Col className="mt-1 font-weight-normal" lg="4">
                <small>{item.description || "-"}</small>
              </Col>
              <Col className="mt-1 font-weight-normal text-right" lg="3">
                <small>Rp {toLocalString(item.paid)}</small>
              </Col>
              <Col className="mt-1 font-weight-normal text-right" lg="4">
                <small>{new Date(item.createdAt).toDateString()}</small>
              </Col>
            </React.Fragment>
          ))}
          <Col className="mt-4">
            <Row>
              <Col lg="3"></Col>
              <Col className="text-right" lg="6">
                {state.status && (
                  <InputGroup>
                    {/* <label>Input Bayar</label> */}
                    <FormInput
                      placeholder="Jumlah bayar"
                      invalid={Boolean(state.error)}
                      onChange={onChange}
                      type="text"
                      value={state.value || ""}
                    />
                    {state.error && (
                      <FormFeedback style={{ fontSize: 10 }}>
                        Harus berisi angka & tidak melebihi tagihan
                      </FormFeedback>
                    )}
                  </InputGroup>
                )}
              </Col>
              <Col className="text-right" lg="3">
                {paid - bill < 0 && (
                  <Button
                    disabled={state.error}
                    theme="dark"
                    onClick={() => {
                      if (state.status) {
                        onBayar(state.value).then(() => {
                          setState({ status: false, value: "", error: "" });
                        });
                      } else {
                        setState({ status: true });
                      }
                    }}
                    pill
                  >
                    {!state.status ? "Tambah" : "Bayar"}
                  </Button>
                )}
              </Col>
            </Row>
            <span className="font-weight-normal">
              <small>@Copyright Santri Management</small>
            </span>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default ModalDetail;
