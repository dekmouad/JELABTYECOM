import React from 'react'
import {css} from "styled-components";

// Define the mobile function

export default function mobile(props) {
    return css`
      @media only screen and (max-width: 500px) {
        ${props}
      }
    `;
}


