import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import { BASE_API_URL, localLogin } from "../../../api"
import HeadContent from '../../../component/head'
import Header from "../../../component/header"
import Footer from '../../../component/footer'
import React from 'react'
import { toast } from 'react-toastify'
const Login = () => {
    const router = useRouter()
    const [account, setAccount] = useState({email: "", password: ""})

    useEffect(() => {
        setAccount({email: "", password: ""})
    }, [])

    const doSubmit = async () => {
        console.log('email: ', account.email, 'pwd: ', account.password)
        let response = await localLogin(account.email.toLowerCase(), account.password)
        if(response.status == 200) {
            let session = await response.json()
            localStorage.setItem("session", JSON.stringify(session))
            router.push('/')
        }
        else {
            toast.error("Mail Or Password Is Wrong")
        }
    }
    
    return(
        <React.Fragment>
            <HeadContent title={'Login'}/>
            <Header/>
            {/* Start Bradcaump area */}
            <div className="ht__bradcaump__area bg-image--6">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="bradcaump__inner text-center">
                        <h2 className="bradcaump-title">My Account</h2>
                        <nav className="bradcaump-content">
                        <a className="breadcrumb_item" href="index.html">
                            Home
                        </a>
                        <span className="brd-separetor">/</span>
                        <span className="breadcrumb_item active">My Account</span>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Bradcaump area */}
            {/* Start My Account Area */}
            <section className="my_account_area pt--80 pb--55 bg--white">
                <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-12">
                    <div className="my__account__wrapper">
                        <a className='btn col-12 mb-2' href={`${BASE_API_URL}/auth/google`} style={{backgroundColor:'#DD4B39', color:'white'}}>
                            <i className="fa fa-google mr-1"></i> Sign in with Google
                        </a>
                        <form action="#" onSubmit={e => e.preventDefault()}>
                            <div className="account__form">
                            <div className="input__box">
                                <label>
                                    Username or email address <span>*</span>
                                </label>
                                <input type="text" onBlur={e => setAccount({...account, email: e.target.value})}/>
                            </div>
                            <div className="input__box">
                                <label>
                                    Password <span>*</span>
                                </label>
                                <input type="password" onBlur={e => setAccount({...account, password: e.target.value})}/>
                            </div>
                            <div className="form__btn">
                                <button className='col-12' onClick={doSubmit}>Login</button>
                            </div>
                            <a className="forget_pass" href="#">
                                Lost your password?
                            </a>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End My Account Area */}
            <Footer/>
        </React.Fragment>
    )
}

export default Login