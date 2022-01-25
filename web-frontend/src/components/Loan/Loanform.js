import '../../Style.css';
import React, { useEffect, useState } from 'react';
import addphoto from "../../images/add-photo.png"
import pic from "../../images/pic.jpg"
import Button from "@mui/material/Button";

import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';

import { GlobalContext } from '../../context/Context';
import { useContext } from 'react';

import { ref, storage, uploadBytesResumable, getDownloadURL } from '../../firebase'








const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const validationSchema = yup.object({
    jobtitle: yup
        .string('Enter your name')
        .min(4, 'Name should be of minimum 4 characters length')
        .required('Name is required'),

    description: yup
        .string('Enter your description')
        .min(30, 'description should be of minimum 30 characters length')
        .required('description is required'),

    phone: yup
        .string('Enter your phone no.')
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(11, 'Phone should contain 11 digits')
        .max(11, 'Phone should contain 11 digits')
        .required('phone number is required'),

    amount: yup
        .string('Enter price')
        // .matches(phoneRegExp, 'year is not valid')
        .min(4, 'Amount should contain 4 digits')
        // .max(10000, 'year should contain 11 digits')
        .required('price is required'),

    address: yup
        .string('Enter address')
        .min(4, 'address should be of minimum 4 characters length')
        .required('address is required'),

    sdate: yup
        .date("Enter date")
        .required('starting date is required'),

    edate: yup
        .date("Enter date")
        .required('starting date is required'),

});





function Loanform() {
    //   let { state, dispatch } = useContext(GlobalContext);
    //   const email= state?.user?.email

    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    // const [image3, setImage3] = useState();
    const [imageurl1, setImageurl1] = useState();
    const [imageurl2, setImageurl2] = useState();
    // const [imageurl3, setImageurl3] = useState();






    const submit = async (values) => {

        // const storageRef1 = ref(storage, `images/vehicle_image/${image1.name}`);
        // const uploadTask1 = uploadBytesResumable(storageRef1, image1);

        // uploadTask1.on('state_changed',
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         console.log("error in uploading image", error)
        //     },
        //     () => {
        //         getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //             setImageurl1(() => downloadURL)
        //             console.log("imageurl", imageurl1)

        //         });
        //     }
        // );

        // const storageRef2 = ref(storage, `images/vehicle_image/${image2.name}`);
        // const uploadTask2 = uploadBytesResumable(storageRef2, image2);

        // uploadTask2.on('state_changed',
        //     (snapshot) => {
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         console.log("error in uploading image", error)
        //     },
        //     () => {
        //         getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //             setImageurl2(() => downloadURL)
        //             console.log("imageur2", imageurl2)

        //         });
        //     }
        // );


        // const { title, make, year, fueltype, kms, registeredarea, condition, city, state, description, price, name, phone } = values;
        // console.log("SUBMIT_values", values)

        // const res = await fetch('http://localhost:5000/api/v1/loan_apply', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email, title, make, year, kms, registeredarea, condition, city, state, description, price, name, phone, fueltype, imageurl1, imageurl2, imageurl3,
        //     })
        // })
        // const data = await res.json()
        // if (data.status === 422 || !data) {
        //     window.alert("invalid registration")
        // } else {
        //     window.alert("registration successfully")
        // }
        console.log("SUBMIT_values", values)
    }






    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            jobtitle: '',
            description: '',
            sdate: '',
            edate: '',
            amount: '',
            state: '',
            city: '',
            address: '',
            phone: '',
        },
        onSubmit: submit
    },
    );













    return (
        <>
            <div className="container-form">
                <div className="title">
                    <h2>APPLY FOR LOAN</h2>
                </div>
                <div className="form">


                    <form onSubmit={formik.handleSubmit}>


                        <div className="section">
                            <div className="header_title">
                                INCLUDE SOME DETAILS FOR LOAN
                            </div>


                            <div className="input_field">
                                <label className="form-table">Job Title</label>
                                <TextField
                                    name="jobtitle"
                                    id="jobtitle"
                                    className="form-input"


                                    value={formik.values.jobtitle}
                                    onChange={formik.handleChange}
                                    error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
                                    helperText={formik.touched.jobtitle && formik.errors.jobtitle}

                                />

                            </div>


                            <div className="input_field">
                                <label className="form-table">Why You Need Loan? </label>
                                <TextField
                                    name="description"
                                    id="description"
                                    className="textarea"
                                    multiline
                                    minRows={4}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}

                                />
                            </div>




                            <div className="input_field">
                                <label className="form-table">Starting Date</label>

                                <TextField
                                    type="date"
                                    name="sdate"
                                    id="sdate"
                                    className="form-input"

                                    value={formik.values.sdate}
                                    onChange={formik.handleChange}
                                    error={formik.touched.sdate && Boolean(formik.errors.sdate)}
                                    helperText={formik.touched.sdate && formik.errors.sdate}
                                />

                            </div>


                            <div className="input_field">
                                <label className="form-table">Starting Date</label>

                                <TextField
                                    type="date"
                                    name="edate"
                                    id="edate"
                                    className="form-input"

                                    value={formik.values.edate}
                                    onChange={formik.handleChange}
                                    error={formik.touched.edate && Boolean(formik.errors.edate)}
                                    helperText={formik.touched.edate && formik.errors.edate}
                                />

                            </div>


                        </div>


                        <div className="section">

                            <div className="header_title">
                                Loan Amount
                            </div>


                            <div className="input_field">
                                <label className="form-table">Amount</label>

                                <TextField
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    className="form-input"

                                    value={formik.values.amount}
                                    onChange={formik.handleChange}
                                    error={formik.touched.amount && Boolean(formik.errors.amount)}
                                    helperText={formik.touched.amount && formik.errors.amount}
                                />

                            </div>

                        </div>


                        <div className="section">
                            <div className="header_title">
                                <img src={addphoto} className="img_icon" alt="" /> UPLOAD NIC PHOTOS
                            </div>
                            <div className="input_field">
                                <div className="img_container-form">
                                    <div className="img_box">

                                        <div className="input_field">
                                            <label for="nic1" className="form-table">NIC (front)</label>
                                            <input type="file" onChange={(e) => setImage1(e.target.files[0])} />
                                        </div>

                                        <div className="input_field">
                                            <label for="nic2" className="form-table">NIC (Back)</label>
                                            <input type="file" onChange={(e) => setImage2(e.target.files[0])} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="section">

                            <div className="header_title">
                                CONFIRM YOUR LOCATION
                            </div>

                            <div className="input_field">
                                <label className="form-table">State</label>
                                <div className="custom_select">

                                    <select
                                        name="state"
                                        value={formik.values.state}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="" disabled selected hidden>Select State</option>
                                        <option value="kashmir">Azad Kashmir</option>
                                        <option value="balochistan">Balochistan</option>
                                        <option value="islamabad">Islamabad</option>
                                        <option value="kpk">Khyber Pakhtunkhuwa</option>
                                        <option value="northern_areas">Northern Areas</option>
                                        <option value="punjab">Punjab</option>
                                        <option value="sindh">Sindh</option>
                                    </select>
                                </div>
                            </div>


                            <div className="input_field">
                                <label className="form-table">City</label>
                                <div className="custom_select">
                                    <select
                                        name='city'
                                        id='city'
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="" disabled selected hidden>Select City</option>


                                        <option value="16">Bagh</option>
                                        <option value="3682">Barnala(Azad Kashmir)</option>
                                        <option value="23">Bhimber</option>
                                        <option value="50">Hajira</option>
                                        <option value="84">Kotli</option>
                                        <option value="3677">Mangla</option>
                                        <option value="103">Mirpur</option>
                                        <option value="109">Muzaffarabad</option>
                                        <option value="118">Pallandri</option>
                                        <option value="129">Rawalakot</option>




                                        <option value="21">Bela</option>
                                        <option value="48">Gwadar</option>
                                        <option value="68">Jiwani</option>
                                        <option value="69">Kalat</option>
                                        <option value="79">Khuzdar</option>
                                        <option value="89">Lasbela</option>
                                        <option value="92">Loralai</option>
                                        <option value="3689">Nasirabad</option>
                                        <option value="116">Ormara</option>
                                        <option value="120">Pasni</option>
                                        <option value="124">Quetta</option>
                                        <option value="160">Zhob</option>


                                        <option value="60">Islamabad</option>


                                        <option value="9">Abbottabad</option>
                                        <option value="11">Ali Masjid</option>
                                        <option value="19">Bannu</option>
                                        <option value="20">Batagram</option>
                                        <option value="24">Buner</option>
                                        <option value="27">Charsadda</option>
                                        <option value="32">Chitral</option>
                                        <option value="34">Darra Adam Khel</option>
                                        <option value="38">Dera Ismail Khan</option>
                                        <option value="52">Hangu</option>
                                        <option value="53">Haripur</option>
                                        <option value="62">Jamrud</option>
                                        <option value="64">Jandola</option>
                                        <option value="3684">Kaghan</option>
                                        <option value="72">Karak</option>
                                        <option value="80">Kohat</option>
                                        <option value="81">Kohistan</option>
                                        <option value="3686">Laki Marwat</option>
                                        <option value="86">Lakki Marwat</option>
                                        <option value="87">Landi Kotal</option>
                                        <option value="93">Lower Dir</option>
                                        <option value="95">Malakand</option>
                                        <option value="97">Mansehra</option>
                                        <option value="98">Mardan</option>
                                        <option value="101">Mingaora</option>
                                        <option value="102">Miram Shah</option>
                                        <option value="3683">Naran</option>
                                        <option value="114">Nowshera</option>
                                        <option value="119">Parachinar</option>
                                        <option value="121">Peshawar</option>
                                        <option value="138">Shangla</option>
                                        <option value="145">Swabi</option>
                                        <option value="146">Swat</option>
                                        <option value="149">Tank</option>
                                        <option value="153">Torkham</option>
                                        <option value="155">Upper Dir</option>
                                        <option value="158">Wana</option>



                                        <option value="13">Askoley</option>
                                        <option value="29">Chilas</option>
                                        <option value="40">Ghanche</option>
                                        <option value="41">Ghizer</option>
                                        <option value="43">Gilgit</option>
                                        <option value="77">Khaplu</option>
                                        <option value="142">Skardu</option>



                                        <option value="10">Ahmadpur East</option>
                                        <option value="3699">Ahmedpur East</option>
                                        <option value="12">Arifwala</option>
                                        <option value="14">Attock</option>
                                        <option value="17">Bahawalnagar</option>
                                        <option value="18">Bahawalpur</option>
                                        <option value="22">Bhakkar</option>
                                        <option value="3700">Bhalwal</option>
                                        <option value="25">Burewala</option>
                                        <option value="26">Chakwal</option>
                                        <option value="28">Chichawatni</option>
                                        <option value="30">Chiniot</option>
                                        <option value="31">Chishtian Mandi</option>
                                        <option value="35">Daska</option>
                                        <option value="36">Depalpur</option>
                                        <option value="37">Dera Ghazi Khan</option>
                                        <option value="3675">Dina</option>
                                        <option value="39">Faisalabad</option>
                                        <option value="44">Gojra</option>
                                        <option value="45">Gujar Khan</option>
                                        <option value="3676">Gujjar Khan</option>
                                        <option value="46">Gujranwala</option>
                                        <option value="47">Gujrat</option>
                                        <option value="49">Hafizabad</option>
                                        <option value="54">Haroonabad</option>
                                        <option value="55">Hasan Abdal</option>
                                        <option value="56">Hasilpur</option>
                                        <option value="57">Haveli lakha</option>
                                        <option value="58">Hazro</option>
                                        <option value="3681">Jalal Pur Jatta</option>
                                        <option value="65">Jaranwala</option>
                                        <option value="66">Jhang Sadar</option>
                                        <option value="67">Jhelum</option>
                                        <option value="3698">Kamalia</option>
                                        <option value="70">Kamoke</option>
                                        <option value="73">Kasur</option>
                                        <option value="75">Khanewal</option>
                                        <option value="76">Khanpur</option>
                                        <option value="3673">Kharian</option>
                                        <option value="78">Khushab</option>
                                        <option value="82">Kot Addu</option>
                                        <option value="83">Kotli</option>
                                        <option value="85">Lahore</option>
                                        <option value="3679">Lala Musa</option>
                                        <option value="90">Layyah</option>
                                        <option value="91">Lodhran</option>
                                        <option value="94">Mailsi</option>
                                        <option value="96">Mandi Bahauddin</option>
                                        <option value="3680">Mandi Bahudin</option>
                                        <option value="99">Mian Chunnu</option>
                                        <option value="100">Mianwali</option>
                                        <option value="106">Multan</option>
                                        <option value="107">Muridike</option>
                                        <option value="108">Murree</option>
                                        <option value="110">Muzaffargarh</option>
                                        <option value="111">Nankana Sahib</option>
                                        <option value="112">Narowal</option>
                                        <option value="115">Okara</option>
                                        <option value="117">Pakpattan</option>
                                        <option value="3695">Pasrur</option>
                                        <option value="3696">Pattoki</option>
                                        <option value="3697">Phol Nagar</option>
                                        <option value="122">Pindi Bhattian</option>
                                        <option value="123">Pirmahal</option>
                                        <option value="125">Rahimyar Khan</option>
                                        <option value="126">Raiwind</option>
                                        <option value="127">Rajanpur</option>
                                        <option value="130">Rawalpindi</option>
                                        <option value="131">Sadiqabad</option>
                                        <option value="132">Safdar Abad</option>
                                        <option value="133">Sahiwal</option>
                                        <option value="134">Samundri</option>
                                        <option value="3674">Sarai Alamgir</option>
                                        <option value="136">Sargodha</option>
                                        <option value="137">Shakargarh</option>
                                        <option value="139">Sheikhüpura</option>
                                        <option value="141">Sialkot</option>
                                        <option value="143">Sohawa</option>
                                        <option value="3678">Talagang</option>
                                        <option value="150">Taxila</option>
                                        <option value="152">Toba Tek singh</option>
                                        <option value="156">Vehari</option>
                                        <option value="157">Wah</option>
                                        <option value="159">Wazirabad</option>



                                        <option value="15">Badin</option>
                                        <option value="33">Dadu</option>
                                        <option value="42">Ghotki</option>
                                        <option value="51">Hala</option>
                                        <option value="59">Hyderabad</option>
                                        <option value="61">Jacobabad</option>
                                        <option value="63">Jamshoro</option>
                                        <option value="71">Karachi</option>
                                        <option value="74">Khairpur</option>
                                        <option value="3692">Kotri</option>
                                        <option value="88">Larkana</option>
                                        <option value="3691">Matiari</option>
                                        <option value="104">Mirpur Khas</option>
                                        <option value="3690">Mirpur Mathelo</option>
                                        <option value="105">Mithi</option>
                                        <option value="3688">Naushahro Feroze</option>
                                        <option value="113">Nawabshah</option>
                                        <option value="128">Ratodero</option>
                                        <option value="3687">Rohri</option>
                                        <option value="135">Sanghar</option>
                                        <option value="3694">Sehwan Sharif</option>
                                        <option value="140">Shikarpur</option>
                                        <option value="144">Sukkur</option>
                                        <option value="148">Tando Adam</option>
                                        <option value="3693">Tando Allahyar</option>
                                        <option value="151">Thatta</option>
                                        <option value="154">Umerkot</option>
                                    </select>
                                </div>
                            </div>


                            <div className="input_field">
                                <label for="address" className="form-table">Address</label>

                                <TextField
                                    name="address"
                                    id="address"
                                    className="form-input"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}

                                />
                            </div>

                        </div>


                        <div className="section">

                            <div className="header_title">
                                REVIEW YOUR DETAILS
                            </div>

                            {/* <div className="input_field">

                                <div className="profile">
                                    <img src={pic} alt="user profile" />
                                </div>

                                <div id="sellerinfo">
                                    <label className="form-table">Name</label>

                                    <TextField
                                        name="name"
                                        id="name"
                                        className="form-input"

                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    />

                                </div>

                            </div> */}


                            <div className="subheading">
                                Let's verify your account
                            </div>

                            <div className="input_field">
                                <label className="form-table">Phone Number</label>

                                <TextField
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    className="form-input"
                                    placeholder="+92xxxxxxxxxx"

                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                                    helperText={formik.touched.phone && formik.errors.phone}
                                />


                            </div>
                        </div>

                        <div className="section" id="last_section">
                            <div className="input_field">
                                {/* <input type="submit" className="btn-submit" value="Post Now" /> */}
                                <Button id="btn" variant="contained" color="success" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Loanform;
