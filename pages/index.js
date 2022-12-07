import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import HmacSHA256 from "crypto-js/hmac-sha256";
import Header from "../components/ui-layouts/header";
import PaymentForm from "../components/form/paymentForm";
import Languages from "../components/languages/languages";
import Footer from "../components/ui-layouts/footer";

const MainFormPage = ( ) => {


  var public_key='MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDkVyfgax7lR4wNwyXC45jbv6K832lhRv7rISwQHswpVd6q5zH8JyWwNT+Bh4dvuw0bEPKmWmetOSsJdEGal3QsrDofT6ekJXdRbp1t8tEFMJa4q+qu2PVwcoOtGj8yZNXPC9aQtan2z0Nu7bCIcvEryBviMtEAzLIVUgfvOc92wwIDAQAB';
  var client_id='36539b8a-be54-387f-b615-0e51f6f1f1a8';   
  var project_name = 'sey2032';
  var merchant_name = 'Thuta_sey';
  var merchant_key = 'ntgaqs1.vZ0IgrW-OQvdnfwYRccyGGzhvDQ';
  var secret_key = '70f1cb0fed501feca82c1bec9dbd7876';

  var url = 'https://form.dinger.asia'; 

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    //create order id with uuid and set the value
    let merchantOrderId = uuidv4();
    formik.setFieldValue("merchantOrderId", merchantOrderId);
  }, []);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      clientId: client_id,
      publicKey: public_key,
      merchantKey: merchant_key,
      projectName: project_name,
      merchantName: merchant_name,
      items: '',
      customerName:'',
      totalAmount: '60000',
      merchantOrderId:'',
      description:'',
      currency:'MMK',
      customerPhone:'',
      email:'',
      business_name:''
    },
    validationSchema: Yup.object({
      customerName: Yup.string()
      .max(20, Languages[language].max_20_length)
      .required(Languages[language].fullname),
      business_name: Yup.string()
      .max(20, Languages[language].max_20_length)
      .required(Languages[language].enter_fbname),
      customerPhone: Yup.string().matches(phoneRegExp, Languages[language].invalid_phone_number).required(Languages[language].phone_number_required),
      // totalAmount: Yup.number()
      //   .required(Languages[language].totalAmount_required).min(1000,Languages[language].totalAmount_min),
      email: Yup.string().email('Not a valid email').required('Please fill your email')
    }),
    onSubmit: (values) => {
        let new_val = {...values};
        new_val.customerName = new_val.customerName+' ('+new_val.business_name+') ';
        delete new_val.business_name;
        rsaFunction(JSON.stringify(new_val));
    },
  });

  useEffect(() => {
    if(formik){
        console.log(formik);
    }
  }, [formik]);

  const NodeRSA = require("node-rsa");
  const rsaFunction = (values) => {

     /* encrypt public key */
    const pubKey = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
         "-----END PUBLIC KEY-----"; 

    const publicKey = new NodeRSA();
    publicKey.importKey(pubKey, "pkcs8-public");
    publicKey.setOptions({ encryptionScheme: "pkcs1" });
    const encryptedPayload = publicKey.encrypt(values, "base64");

    const HashValue = HmacSHA256(values, secret_key).toString();

    setTimeout(() => {
        window.location = url+"?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue+"&lang="+language;
    }, 2000);
    
  }; //encrypteDataWithRsa

  return (
    <div className="bg-gray">
      <Head>
        <title>Dinger Payment Form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />

        {/* Open Graph */}
        <meta property="og:url" content="https://dinger.asia" key="ogurl" />
        <meta property="og:image" content='/images/logo_white.svg' key="ogimage" />
        <meta property="og:site_name" content="Dinger Payment Form" key="ogsitename" />
        <meta property="og:title" content="Dinger Payment Form" key="ogtitle" />
        
        <link rel="icon" href="/images/logo_white.svg" />
      </Head>
      <div className="container mobile_container" id={language}>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="border-box bg-theme mt-md-5 mt-3">
              <Header setLanguage={setLanguage} language={language} />
              <h2 className="h4 pt-3" id={language}>
                {Languages[language].talent_payment_form}
              </h2>
              <h3 className="h4 pt-3" id={language}>
                {Languages[language].success_year}
              </h3>
              <span id="test"></span>
              <PaymentForm 
                formik={formik} 
                language={language} 
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainFormPage;
