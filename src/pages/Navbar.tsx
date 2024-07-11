import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Props = {};

const Navbar = (props: Props) => {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs
      bg="light"
      data-bs-theme="light"
      className="bg-white shadow-sm mb-3"
      sticky="top"
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCart}
            style={{
              height: "3rem",
              width: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.004 512.004"
            >
              <g>
                <g>
                  <circle cx="153.6" cy="448.004" r="12.8" />
                </g>
              </g>
              <g>
                <g>
                  <circle cx="409.6" cy="448.004" r="12.8" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M499.2,435.204h-26.889c-5.931-29.21-31.744-51.2-62.711-51.2c-30.959,0-56.781,21.99-62.711,51.2H216.277
			c-5.726-28.015-29.824-49.229-59.179-50.85l-42.035-283.827c-0.401-2.722-1.673-5.222-3.61-7.177l-89.6-89.6
			C16.853-1.25,8.755-1.25,3.754,3.75c-5,5-5,13.099,0,18.099l86.613,86.596l41.421,279.62
			c-24.559,8.951-42.189,32.29-42.189,59.938c0,35.345,28.655,64,64,64c30.959,0,56.781-21.99,62.711-51.2h130.577
			c5.931,29.21,31.753,51.2,62.711,51.2s56.781-21.99,62.711-51.2H499.2c7.074,0,12.8-5.726,12.8-12.8
			C512,440.93,506.274,435.204,499.2,435.204z M153.6,486.404c-21.171,0-38.4-17.229-38.4-38.4c0-21.171,17.229-38.4,38.4-38.4
			c21.171,0,38.4,17.229,38.4,38.4C192,469.175,174.771,486.404,153.6,486.404z M409.6,486.404c-21.171,0-38.4-17.229-38.4-38.4
			c0-21.171,17.229-38.4,38.4-38.4s38.4,17.229,38.4,38.4C448,469.175,430.771,486.404,409.6,486.404z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M506.837,138.185c-4.838-6.409-12.407-10.18-20.437-10.18H171.52c-7.424,0-14.473,3.217-19.337,8.823
			s-7.057,13.047-5.999,20.395l25.6,179.2c1.792,12.612,12.595,21.982,25.335,21.982H435.2c11.426,0,21.478-7.578,24.619-18.569
			l51.2-179.2C513.22,152.913,511.675,144.602,506.837,138.185z M435.2,332.804H197.12l-25.6-179.2H486.4L435.2,332.804z"
                  />
                </g>
              </g>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-white"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
