/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);


describe("Nav component", () => {
    // baseline test
    it("renders", () => {
      //need to add props (if used) into component for test to pass
      render(<ContactForm
      />);
    });
    // snapshot test
    it("matches snapshot", () => {
      const { asFragment } = render(<ContactForm
      />);
      // assert value comparison
      expect(asFragment()).toMatchSnapshot();
    });
    it('renders heading', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('contact-me')).toHaveTextContent('Contact me')
      });
      it('renders button title', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
      });
  });