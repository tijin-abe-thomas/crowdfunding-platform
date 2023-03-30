import { TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Textarea from '@mui/joy/Textarea';
import React from 'react';

const FormField = ({
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange
}) => {
  return (
    <>
      
      {isTextArea ? (
        <TextareaAutosize
          required
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          // className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <TextField
          required
          id="outlined-required"
          value={value}
          onChange={handleChange}
          type={inputType}
          placeholder={placeholder}
          // className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </> 
  );
};

export default FormField;
