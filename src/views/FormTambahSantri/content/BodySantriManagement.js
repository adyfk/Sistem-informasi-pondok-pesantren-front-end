import React, { useContext } from "react"; //  { useContext }
import { DevTool } from "react-hook-form-devtools";
import ReactSelect from "../../../components/common/ReactSelect";
import {
  Card,
  CardBody,
  Row,
  Col,
  InputGroup,
  FormInput,
  FormFeedback,
  FormSelect
} from "shards-react";
import { useFormContext, Controller } from "react-hook-form";
import { CtxAddSantriManagement } from "../hooks/useAction";

function BodySantriManagement() {
  const {
    address: { listDistrict, listProvince, listRegency }
  } = useContext(CtxAddSantriManagement);
  const { register, errors, control } = useFormContext();

  return (
    <Card className="shadow-none mt-2">
      <CardBody>
        <Row>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="name">
              <small>Nama Lengkap</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["name"])}
                type="text"
                id="name"
                name="name"
                innerRef={register}
                placeholder="ex. Jordan Amadeus Rahzein"
              />
              {errors["name"] && (
                <FormFeedback>{errors["name"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["email"])}
                type="email"
                id="email"
                name="email"
                innerRef={register}
                placeholder="ex. jordan@email.co.id"
              />
              {errors["email"] && (
                <FormFeedback>{errors["email"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="name">
              <small>No Hp</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["phoneNumber"])}
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                innerRef={register}
                placeholder="ex. 082136950725"
              />
              {errors["phoneNumber"] && (
                <FormFeedback>{errors["phoneNumber"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="name">
              <small>Tanggal Lahir</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["dateOfBirth"])}
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                innerRef={register}
              />
              {errors["dateOfBirth"] && (
                <FormFeedback>{errors["dateOfBirth"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="name">
              <small>Jenis Kelamin</small>
            </label>
            <InputGroup>
              <FormSelect
                invalid={Boolean(errors["gender"])}
                id="gender"
                name="gender"
                innerRef={register}
              >
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </FormSelect>
              {errors["gender"] && (
                <FormFeedback>{errors["dateOfBirth"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4"></Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="province">
              <small>Provinsi</small>
            </label>
            <InputGroup>
              <Controller
                control={control}
                fullWidth={true}
                as={ReactSelect}
                options={listProvince}
                invalid={Boolean(errors["province"])}
                placeholder="ex. Provinsi"
                id="province"
                name="province"
              />
              {errors["province"] && (
                <FormFeedback>{errors["province"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="regency">
              <small>Kabupaten/Kota</small>
            </label>
            <InputGroup>
              <Controller
                control={control}
                fullWidth={true}
                as={ReactSelect}
                options={listRegency}
                invalid={Boolean(errors["regency"])}
                placeholder="ex. Jawa Tengah"
                id="regency"
                name="regency"
              />
              {errors["regency"] && (
                <FormFeedback>{errors["regency"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="district">
              <small>Kecamatan</small>
            </label>
            <InputGroup>
              <Controller
                control={control}
                fullWidth={true}
                as={ReactSelect}
                options={listDistrict}
                invalid={Boolean(errors["district"])}
                placeholder="ex. Kecamatan"
                id="district"
                name="district"
              />
              {errors["district"] && (
                <FormFeedback>{errors["district"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="4" className="text-left form-group">
            <label htmlFor="postCode">
              <small>Kode POS</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["postCode"])}
                type="number"
                placeholder="24122"
                id="postCode"
                name="postCode"
                innerRef={register}
              />
              {errors["postCode"] && (
                <FormFeedback>{errors["postCode"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="8" className="text-left form-group">
            <label htmlFor="name">
              <small>Alamat Lengkap</small>
            </label>
            <InputGroup>
              <FormInput
                invalid={Boolean(errors["address"])}
                type="text"
                id="address"
                name="address"
                innerRef={register}
                placeholder="ex. Jl. Kemuning Rt/3 Rw/4 no 15 "
              ></FormInput>
              {errors["address"] && (
                <FormFeedback>{errors["address"].message}</FormFeedback>
              )}
            </InputGroup>
          </Col>
          <Col lg="12">
            <span className="font-weight-normal">
              <small>@Copyright Santri Management</small>
            </span>
          </Col>
        </Row>
      </CardBody>
      <DevTool control={control} />
    </Card>
  );
}

export default BodySantriManagement;
