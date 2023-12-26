import React from 'react'

const Showcard = (props) => {
  const classes=`w-[184px] md:w-[291px] h-[257px] rounded-[5px] flex flex-shrink-0 flex-col border items-center justify-evenly border-solid ${props.borderclr}  border-opacity-14  ${props.bgcolor}  mr-5 mt-3light:hover:text-white purple:hover:shadow-md m-2`;
  const classes1=`w-[147px] md:w-[228px] ${props.headingtxtclr} ${props.headingfont} text-2xl font-bold leading-normal tracking-tight capitalize`;
  const classes2=`w-[147px] md:w-[243px] h-[19.335px] ${props.subheadingtxtclr} text-opacity-60 ${props.subheadingfont} text-base font-medium leading-6`;
  return (
    <div className={`${classes} hover:border-red-500 hover:scale-105 light:hover:bg-[#0B2E78]    `}> 
        <h1 className={`${classes1}  `}>{props.heading}</h1>
        <h3 className={classes2}>Discove journals across the institution</h3>
    </div>
  )
}

export default Showcard