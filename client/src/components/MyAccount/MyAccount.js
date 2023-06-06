import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-bootstrap/Modal";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Tab from "react-bootstrap";
function MyAccount() {
  const [show, setShow] = useState(false);
  const [pwdshow, setPwdShow] = useState(false);
  const closeDialog = () => setShow(false);
  const openDialog = () => setShow(true);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const radios = [
    { name: 'Nữ', value: '1' },
    { name: 'Nam', value: '2' },
  ];
  const openPassword = () => setPwdShow(true);
  const closePassWord = () => setPwdShow(false);
  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <h3 className="p-2">Thông tin của tôi</h3>
        </div>
      </div>
      <Form className="file-upload">
        <div class="row mb-1 gx-5">
          <div className="col-xxl-4 mb-5">
            <div className="bg-secondary-soft px-4 py-5 rounded">
              <div className="row g-3">
                <h4 className="text-center mb-4 mt-0">Nguyễn Văn A</h4>
                <div className="text-center mb-3 mt-4">
                  <div className="square position-relative display-2 mb-3 pb-2">
                    <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                  </div>
                </div>
                <p className="text-center text-muted mt-7 mb-0"><span className="me-1">Chú ý:</span>Hình ảnh đã không được thay đổi từ lúc : 3 giờ trước</p>
                <Button onClick={openPassword} className="text-center btn btn-primary btn-md">Thay đổi mật khẩu</Button>
              </div>

            </div>
          </div>
          <div class="col-xxl-8 mb-5 mb-xxl-0">
            <div class="bg-secondary-soft px-4 py-5 rounded">
              <div class="row g-3">
                <h4 class="mb-4 mt-0">Thông tin liên hệ</h4>
                <div class="col-md-6">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Họ và Tên *</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="Nguyễn Văn A"></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Số điện thoại *</Form.Label>
                    <Form.Control className="form-control" type="text" placeholder="0123456789"></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="mail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control plaintext readOnly defaultValue="email@example.com"></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="DOB">
                    <Form.Label>Ngày sinh *</Form.Label>
                    <Form.Control className="form-control" type="date"></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Địa chỉ *</Form.Label>
                    <Form.Control className="form-control" type="text"></Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Giới tính *</Form.Label>
                    <br></br>
                    <ButtonGroup className="mb-3">
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={idx % 2 ? 'outline-primary' : 'outline-danger'}
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                          className="rounded-button m-1"
                        >
                          {radio.name}
                        </ToggleButton>

                      ))}
                    </ButtonGroup>
                  </Form.Group>
                </div>

              </div>
            </div>

            {/*<div class="col-xxl-4">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-4 mt-0">Upload your profile photo</h4>
								<div class="text-center">
						
									<div class="square position-relative display-2 mb-3">
										<i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
									</div>

									
									<label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
									<button type="button" class="btn btn-danger-soft">Remove</button>
									
									<p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
								</div>
							</div>
						</div>
					</div>*/}
          </div>

        </div>
        <div class="row mb-5 gx-5">

          <div class="bg-secondary-soft px-4 py-5 rounded">
            <div class="gap-3 d-md-flex justify-content-md-end text-center">
              <Button onClick={openDialog} className="btn btn-primary btn-lg">Lưu thông tin</Button>
              <Modal show={show} onHide={closeDialog}>
                <Modal.Header closeButton>
                  <Modal.Title>Lưu thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có xác nhận lưu / thay đổi thông tin không?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeDialog}>
                    Huỷ
                  </Button>
                  <Button variant="primary" onClick={closeDialog}>
                    Xác nhận
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal show={pwdshow} onHide={closePassWord}>
                <Modal.Header closeButton>
                  <Modal.Title>Thay đổi mật khẩu</Modal.Title>   
                </Modal.Header>
                <Modal.Body>
                  <div className="row col-xxl-12">
                      <Form>
                        <Form.Label>Mật khẩu cũ *</Form.Label>
                        <Form.Control type="password" id="oldpwd"></Form.Control>
                      </Form>
                      <Form>
                        <Form.Label>Mật khẩu mới *</Form.Label>
                        <Form.Control type="password" id="newpwd"></Form.Control>
                      </Form>
                      <Form>
                        <Form.Label>Xác nhận mật khẩu *</Form.Label>
                        <Form.Control type="password" id="confirmpwd"></Form.Control>
                      </Form> 
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={closePassWord}>
                    Xác nhận
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </Form>

    </Container>

  );
}
export default MyAccount;