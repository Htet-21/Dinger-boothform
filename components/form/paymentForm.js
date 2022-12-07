import React, { useState, useEffect } from "react";
import Select from 'react-select';
import Languages from "../languages/languages";

const PaymentForm = ({ formik, language }) => {

  const [selectedPN, setSelectedPN] = useState('');
  
  const onSelctedPN=(option)=>{
    if(!formik.touched.description){
      formik.setFieldTouched('description');
    }
    setSelectedPN(option);
    if(option.length==0){
      formik.setFieldValue('description','');
    } else {
      formik.setFieldValue('description',option.label);
    }
  }

  useEffect(() => {
    if(formik.values.totalAmount > 0){
      formik.setFieldValue("items", JSON.stringify([{"name":"Dinger Deposit","amount": formik.values.totalAmount,"quantity":"1"}]));
    }
  }, [formik.values.totalAmount]);

  return (
    
    <form onSubmit={formik.handleSubmit} className="mt-4 pt-3">
      <div className="form-group pb-4 relative">
        <label htmlFor="customerName">
          {Languages[language].name}*
        </label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          {...formik.getFieldProps("customerName")}
          className="form-control"
          placeholder={Languages[language].fullname}
        />
        {formik.touched.customerName && formik.errors.customerName ? (
          <div className="form-group-error">{formik.errors.customerName}</div>
        ) : null}
      </div>
      <div className="form-group pb-4 relative">
        <label htmlFor="business_name">
          {Languages[language].business_name}*
        </label>
        <input
          id="business_name"
          name="business_name"
          type="text"
          {...formik.getFieldProps("business_name")}
          className="form-control"
          placeholder={Languages[language].enter_fbname}
        />
        {formik.touched.business_name && formik.errors.business_name ? (
          <div className="form-group-error">{formik.errors.fb_name}</div>
        ) : null}
      </div>
      <div className="form-group pb-4 relative">
        <label htmlFor="customerPhone">
          {Languages[language].phone_number}*
        </label>
        <input
          id="customerPhone"
          name="customerPhone"
          type="number"
          {...formik.getFieldProps("customerPhone")}
          className="form-control"
          placeholder={Languages[language].phone_number}
        />
        {formik.touched.customerPhone && formik.errors.customerPhone ? (
          <div className="form-group-error">{formik.errors.customerPhone}</div>
        ) : null}
      </div>
      <div className="form-group pb-4 relative">
        <label htmlFor="email">
          {Languages[language].email}*
        </label>
        <input
          id="email"
          name="email"
          type="text"
          {...formik.getFieldProps("email")}
          className="form-control"
          placeholder={Languages[language].enter_email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="form-group-error">{formik.errors.email}</div>
        ) : null}
      </div>
      
      <div className="form-group pb-4 relative">
        <label htmlFor="totalAmount">{Languages[language].amount}*</label>
        <input
          id="totalAmount"
          name="totalAmount"
          type="number"
          {...formik.getFieldProps("totalAmount")}
          className="form-control"
          placeholder={Languages[language].amount}
        />
      </div>

      <div className="d-inline-block w-100 mt-4">
        <button
          type="submit"
          className="theme-btn float-right w-100"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting
            ? Languages[language].loading_btn
            : Languages[language].confirm_payment}
        </button>
      </div>
    </form>
  );
};
export default PaymentForm;
