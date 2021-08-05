import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../Caluculator'



it("checkbutton reander" , ()=>{
    const {queryByTitle} = render(<Calculator/>);
    const btn = queryByTitle('button calc');
    expect(btn).toBeTruthy();
});

describe("clickButton" , ()=>{
     
    it("for addition " ,()=>{
  const {queryByTitle} = render(<Calculator/>);
    const btn =queryByTitle('calc');
      fireEvent.click(btn);
      const add = eval("2+2");
      expect(add).toBe(4)
    
    }),

    it("for divide" ,()=>{
   const {queryByTitle} = render(<Calculator/>);
    const btn =queryByTitle('calc');
      fireEvent.click(btn);
      const add = eval("4/2");
      expect(add).toBe(2)

    }),

    it("for subtract" ,()=>{
   const {queryByTitle} = render(<Calculator/>);
    const btn =queryByTitle('calc');
      fireEvent.click(btn);
      const add = eval("10-4");
      expect(add).toBe(6)

    })
})

