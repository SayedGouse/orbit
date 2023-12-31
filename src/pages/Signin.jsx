import React, { useState } from 'react'
import './sign.css'
import '../style.css';

const Signin = () => {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
      setIsSignUpActive(true);
    };
  
    const handleSignInClick = () => {
      setIsSignUpActive(false);
    };
        
    
  return (
  <>
  <body className='body'>

  
  <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
            <form className='form' action="#">
                <h1>Sign up</h1>
                <hr />

                <div className="group-input">
                    <input type="text" placeholder="Name" />
                </div>

                <div className="group-input">
                    <input type="email" placeholder="Email" />
                </div>

                <div className="group-input">
                    <input type="text" placeholder="Phone No." />
                </div>

                <div className="group-input">
                    <input type="password" placeholder="Password" />
                </div>

                <button className='signin'>Sign Up</button>

                <h5>Or Sign-up with</h5>
                <div className="social-login">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29"
                            viewBox="0 0 29 29" fill="none">
                            <g clip-path="url(#clip0_46_77)">
                                <path
                                    d="M10.1025 0.953816C7.20493 1.959 4.70608 3.86688 2.97299 6.39721C1.23989 8.92754 0.363896 11.947 0.473668 15.0119C0.583439 18.0769 1.67319 21.0259 3.58286 23.4258C5.49253 25.8257 8.12146 27.5499 11.0835 28.3452C13.4849 28.9649 16.0008 28.9921 18.4151 28.4245C20.6021 27.9333 22.6241 26.8825 24.283 25.375C26.0096 23.7581 27.2629 21.7012 27.908 19.4255C28.609 16.9506 28.7338 14.3481 28.2728 11.8175H14.7878V17.4113H22.5974C22.4413 18.3035 22.1068 19.155 21.614 19.9149C21.1212 20.6748 20.4801 21.3275 19.7291 21.8338C18.7756 22.4649 17.7005 22.8893 16.5731 23.0799C15.4424 23.2902 14.2827 23.2902 13.152 23.0799C12.0059 22.8432 10.9218 22.3702 9.96881 21.6911C8.43758 20.6072 7.28784 19.0673 6.68365 17.2912C6.06942 15.4819 6.06942 13.5204 6.68365 11.711C7.11372 10.4427 7.82469 9.288 8.76349 8.33296C9.83783 7.21996 11.198 6.42439 12.6947 6.03352C14.1914 5.64265 15.7669 5.6716 17.2483 6.11718C18.4055 6.47225 19.4638 7.09293 20.3386 7.92968C21.2191 7.05363 22.0982 6.17533 22.9758 5.29475C23.4289 4.82124 23.9228 4.37038 24.3691 3.88553C23.0336 2.64288 21.4661 1.67588 19.7563 1.03991C16.6427 -0.0906599 13.2358 -0.121043 10.1025 0.953816Z"
                                    fill="white" />
                                <path
                                    d="M10.1025 0.953819C13.2355 -0.121771 16.6424 -0.0921879 19.7563 1.03765C21.4664 1.67794 23.0332 2.64959 24.3668 3.89687C23.9137 4.38171 23.4357 4.83483 22.9735 5.30608C22.0944 6.18364 21.2161 7.05817 20.3386 7.92968C19.4638 7.09293 18.4055 6.47226 17.2483 6.11718C15.7674 5.67004 14.192 5.63942 12.6948 6.02869C11.1977 6.41796 9.83674 7.21207 8.76122 8.3239C7.82243 9.27894 7.11146 10.4337 6.68138 11.7019L1.98474 8.06562C3.66585 4.73189 6.57659 2.18184 10.1025 0.953819Z"
                                    fill="#E33629" />
                                <path
                                    d="M0.738573 11.668C0.990826 10.4168 1.40994 9.20521 1.98467 8.06561L6.68131 11.711C6.06707 13.5204 6.06707 15.4819 6.68131 17.2912C5.11652 18.4996 3.55097 19.7139 1.98467 20.9344C0.546336 18.0713 0.10767 14.8093 0.738573 11.668Z"
                                    fill="#F8BD00" />
                                <path
                                    d="M14.7878 11.8152H28.2728C28.7338 14.3458 28.609 16.9484 27.908 19.4232C27.2628 21.699 26.0096 23.7559 24.283 25.3727C22.7673 24.1901 21.2448 23.0165 19.7291 21.8338C20.4805 21.327 21.1219 20.6736 21.6148 19.9129C22.1076 19.1522 22.4418 18.2998 22.5974 17.4068H14.7878C14.7855 15.5445 14.7878 13.6799 14.7878 11.8152Z"
                                    fill="#587DBD" />
                                <path
                                    d="M1.98242 20.9344C3.54872 19.7261 5.11427 18.5117 6.67906 17.2913C7.28445 19.068 8.43584 20.6079 9.96875 21.6911C10.9247 22.3671 12.0112 22.8362 13.1588 23.0686C14.2894 23.2789 15.4492 23.2789 16.5798 23.0686C17.7073 22.878 18.7823 22.4536 19.7359 21.8225C21.2516 23.0052 22.7741 24.1788 24.2898 25.3614C22.6311 26.8697 20.6091 27.9213 18.4218 28.4132C16.0076 28.9808 13.4916 28.9536 11.0902 28.3339C9.19097 27.8268 7.41692 26.9328 5.8793 25.7081C4.25196 24.4158 2.92274 22.7875 1.98242 20.9344Z"
                                    fill="#319F43" />
                            </g>
                            <defs>
                                <clipPath id="clip0_46_77">
                                    <rect width="29" height="29" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></a>
                    <a href="#"><i className=""><svg className='svg' xmlns="http://www.w3.org/2000/svg" width="33" height="31"
                                viewBox="0 0 33 31" fill="none">
                                <g clip-path="url(#clip0_46_83)">
                                    <path
                                        d="M23.0628 0.0155136C22.9927 -0.0581114 20.4662 0.0445761 18.2675 2.28626C16.0689 4.52601 16.4072 7.09514 16.4567 7.16101C16.5062 7.22689 19.5917 7.32958 21.5613 4.72364C23.531 2.1177 23.133 0.0910761 23.0628 0.0155136ZM29.898 22.7482C29.799 22.5622 25.1027 20.3573 25.5399 16.1181C25.9772 11.8769 28.9946 10.7144 29.042 10.5885C29.0895 10.4625 27.8107 9.05783 26.4557 8.34676C25.4607 7.84544 24.3596 7.55822 23.232 7.50589C23.0092 7.50008 22.2358 7.32183 20.6456 7.73064C19.5978 7.99995 17.2363 8.87183 16.5866 8.9067C15.9348 8.94158 13.9961 7.89533 11.9109 7.61826C10.5765 7.37608 9.16159 7.87208 8.14891 8.25377C7.13828 8.63351 5.21603 9.71464 3.87128 12.588C2.52653 15.4593 3.22984 20.0086 3.73309 21.423C4.23634 22.8354 5.02216 25.1507 6.35866 26.8402C7.54666 28.7467 9.12241 30.07 9.78034 30.5195C10.4383 30.969 12.2945 31.2674 13.5815 30.6493C14.6169 30.0526 16.4855 29.7096 17.2239 29.7348C17.9602 29.76 19.4122 30.0332 20.8993 30.7791C22.077 31.1608 23.1907 31.002 24.3065 30.5757C25.4223 30.1475 27.0373 28.5239 28.9224 25.2321C29.6381 23.7015 29.964 22.8741 29.898 22.7482Z"
                                        fill="black" />
                                    <path
                                        d="M23.0628 0.0155136C22.9927 -0.0581114 20.4662 0.0445761 18.2675 2.28626C16.0689 4.52601 16.4072 7.09514 16.4567 7.16101C16.5062 7.22689 19.5917 7.32958 21.5613 4.72364C23.531 2.1177 23.133 0.0910761 23.0628 0.0155136ZM29.898 22.7482C29.799 22.5622 25.1027 20.3573 25.5399 16.1181C25.9772 11.8769 28.9946 10.7144 29.042 10.5885C29.0895 10.4625 27.8107 9.05783 26.4557 8.34676C25.4607 7.84544 24.3596 7.55822 23.232 7.50589C23.0092 7.50008 22.2358 7.32183 20.6456 7.73064C19.5978 7.99995 17.2363 8.87183 16.5866 8.9067C15.9348 8.94158 13.9961 7.89533 11.9109 7.61826C10.5765 7.37608 9.16159 7.87208 8.14891 8.25377C7.13828 8.63351 5.21603 9.71464 3.87128 12.588C2.52653 15.4593 3.22984 20.0086 3.73309 21.423C4.23634 22.8354 5.02216 25.1507 6.35866 26.8402C7.54666 28.7467 9.12241 30.07 9.78034 30.5195C10.4383 30.969 12.2945 31.2674 13.5815 30.6493C14.6169 30.0526 16.4855 29.7096 17.2239 29.7348C17.9602 29.76 19.4122 30.0332 20.8993 30.7791C22.077 31.1608 23.1907 31.002 24.3065 30.5757C25.4223 30.1475 27.0373 28.5239 28.9224 25.2321C29.6381 23.7015 29.964 22.8741 29.898 22.7482Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_83">
                                        <rect width="33" height="31" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></i></a>
                    <a href="#"><i className=""><svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="26"
                                viewBox="0 0 24 26" fill="none">
                                <g clip-path="url(#clip0_46_87)">
                                    <path d="M11.4062 12.3567H0V0H11.4062V12.3567Z" fill="#F1511B" />
                                    <path d="M24 12.3567H12.5939V0H24V12.3567Z" fill="#80CC28" />
                                    <path d="M11.4059 26.0002H0V13.6435H11.4059V26.0002Z" fill="#00ADEF" />
                                    <path d="M24 26.0002H12.5939V13.6435H24V26.0002Z" fill="#FBBC09" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_87">
                                        <rect width="24" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></i></a>
                </div>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form className='form' action="#">
                <h1>Sign in</h1>
                <hr />
                <div className="group-input">

                    <input type="email" placeholder="Email" />
                </div>

                <div className="group-input">

                    <input type="password" placeholder="Password" />
                </div>
                <button className='signin'>Sign In</button>
                <h5>Or Sign-in with</h5>
                <div className="social-login">
                    <a href="#"><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29"
                                viewBox="0 0 29 29" fill="none">
                                <g clip-path="url(#clip0_46_77)">
                                    <path
                                        d="M10.1025 0.953816C7.20493 1.959 4.70608 3.86688 2.97299 6.39721C1.23989 8.92754 0.363896 11.947 0.473668 15.0119C0.583439 18.0769 1.67319 21.0259 3.58286 23.4258C5.49253 25.8257 8.12146 27.5499 11.0835 28.3452C13.4849 28.9649 16.0008 28.9921 18.4151 28.4245C20.6021 27.9333 22.6241 26.8825 24.283 25.375C26.0096 23.7581 27.2629 21.7012 27.908 19.4255C28.609 16.9506 28.7338 14.3481 28.2728 11.8175H14.7878V17.4113H22.5974C22.4413 18.3035 22.1068 19.155 21.614 19.9149C21.1212 20.6748 20.4801 21.3275 19.7291 21.8338C18.7756 22.4649 17.7005 22.8893 16.5731 23.0799C15.4424 23.2902 14.2827 23.2902 13.152 23.0799C12.0059 22.8432 10.9218 22.3702 9.96881 21.6911C8.43758 20.6072 7.28784 19.0673 6.68365 17.2912C6.06942 15.4819 6.06942 13.5204 6.68365 11.711C7.11372 10.4427 7.82469 9.288 8.76349 8.33296C9.83783 7.21996 11.198 6.42439 12.6947 6.03352C14.1914 5.64265 15.7669 5.6716 17.2483 6.11718C18.4055 6.47225 19.4638 7.09293 20.3386 7.92968C21.2191 7.05363 22.0982 6.17533 22.9758 5.29475C23.4289 4.82124 23.9228 4.37038 24.3691 3.88553C23.0336 2.64288 21.4661 1.67588 19.7563 1.03991C16.6427 -0.0906599 13.2358 -0.121043 10.1025 0.953816Z"
                                        fill="white" />
                                    <path
                                        d="M10.1025 0.953819C13.2355 -0.121771 16.6424 -0.0921879 19.7563 1.03765C21.4664 1.67794 23.0332 2.64959 24.3668 3.89687C23.9137 4.38171 23.4357 4.83483 22.9735 5.30608C22.0944 6.18364 21.2161 7.05817 20.3386 7.92968C19.4638 7.09293 18.4055 6.47226 17.2483 6.11718C15.7674 5.67004 14.192 5.63942 12.6948 6.02869C11.1977 6.41796 9.83674 7.21207 8.76122 8.3239C7.82243 9.27894 7.11146 10.4337 6.68138 11.7019L1.98474 8.06562C3.66585 4.73189 6.57659 2.18184 10.1025 0.953819Z"
                                        fill="#E33629" />
                                    <path
                                        d="M0.738573 11.668C0.990826 10.4168 1.40994 9.20521 1.98467 8.06561L6.68131 11.711C6.06707 13.5204 6.06707 15.4819 6.68131 17.2912C5.11652 18.4996 3.55097 19.7139 1.98467 20.9344C0.546336 18.0713 0.10767 14.8093 0.738573 11.668Z"
                                        fill="#F8BD00" />
                                    <path
                                        d="M14.7878 11.8152H28.2728C28.7338 14.3458 28.609 16.9484 27.908 19.4232C27.2628 21.699 26.0096 23.7559 24.283 25.3727C22.7673 24.1901 21.2448 23.0165 19.7291 21.8338C20.4805 21.327 21.1219 20.6736 21.6148 19.9129C22.1076 19.1522 22.4418 18.2998 22.5974 17.4068H14.7878C14.7855 15.5445 14.7878 13.6799 14.7878 11.8152Z"
                                        fill="#587DBD" />
                                    <path
                                        d="M1.98242 20.9344C3.54872 19.7261 5.11427 18.5117 6.67906 17.2913C7.28445 19.068 8.43584 20.6079 9.96875 21.6911C10.9247 22.3671 12.0112 22.8362 13.1588 23.0686C14.2894 23.2789 15.4492 23.2789 16.5798 23.0686C17.7073 22.878 18.7823 22.4536 19.7359 21.8225C21.2516 23.0052 22.7741 24.1788 24.2898 25.3614C22.6311 26.8697 20.6091 27.9213 18.4218 28.4132C16.0076 28.9808 13.4916 28.9536 11.0902 28.3339C9.19097 27.8268 7.41692 26.9328 5.8793 25.7081C4.25196 24.4158 2.92274 22.7875 1.98242 20.9344Z"
                                        fill="#319F43" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_77">
                                        <rect width="29" height="29" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></i></a>
                    <a href="#"><i className=""><svg xmlns="http://www.w3.org/2000/svg" width="33" height="31"
                                viewBox="0 0 33 31" fill="none">
                                <g clip-path="url(#clip0_46_83)">
                                    <path
                                        d="M23.0628 0.0155136C22.9927 -0.0581114 20.4662 0.0445761 18.2675 2.28626C16.0689 4.52601 16.4072 7.09514 16.4567 7.16101C16.5062 7.22689 19.5917 7.32958 21.5613 4.72364C23.531 2.1177 23.133 0.0910761 23.0628 0.0155136ZM29.898 22.7482C29.799 22.5622 25.1027 20.3573 25.5399 16.1181C25.9772 11.8769 28.9946 10.7144 29.042 10.5885C29.0895 10.4625 27.8107 9.05783 26.4557 8.34676C25.4607 7.84544 24.3596 7.55822 23.232 7.50589C23.0092 7.50008 22.2358 7.32183 20.6456 7.73064C19.5978 7.99995 17.2363 8.87183 16.5866 8.9067C15.9348 8.94158 13.9961 7.89533 11.9109 7.61826C10.5765 7.37608 9.16159 7.87208 8.14891 8.25377C7.13828 8.63351 5.21603 9.71464 3.87128 12.588C2.52653 15.4593 3.22984 20.0086 3.73309 21.423C4.23634 22.8354 5.02216 25.1507 6.35866 26.8402C7.54666 28.7467 9.12241 30.07 9.78034 30.5195C10.4383 30.969 12.2945 31.2674 13.5815 30.6493C14.6169 30.0526 16.4855 29.7096 17.2239 29.7348C17.9602 29.76 19.4122 30.0332 20.8993 30.7791C22.077 31.1608 23.1907 31.002 24.3065 30.5757C25.4223 30.1475 27.0373 28.5239 28.9224 25.2321C29.6381 23.7015 29.964 22.8741 29.898 22.7482Z"
                                        fill="black" />
                                    <path
                                        d="M23.0628 0.0155136C22.9927 -0.0581114 20.4662 0.0445761 18.2675 2.28626C16.0689 4.52601 16.4072 7.09514 16.4567 7.16101C16.5062 7.22689 19.5917 7.32958 21.5613 4.72364C23.531 2.1177 23.133 0.0910761 23.0628 0.0155136ZM29.898 22.7482C29.799 22.5622 25.1027 20.3573 25.5399 16.1181C25.9772 11.8769 28.9946 10.7144 29.042 10.5885C29.0895 10.4625 27.8107 9.05783 26.4557 8.34676C25.4607 7.84544 24.3596 7.55822 23.232 7.50589C23.0092 7.50008 22.2358 7.32183 20.6456 7.73064C19.5978 7.99995 17.2363 8.87183 16.5866 8.9067C15.9348 8.94158 13.9961 7.89533 11.9109 7.61826C10.5765 7.37608 9.16159 7.87208 8.14891 8.25377C7.13828 8.63351 5.21603 9.71464 3.87128 12.588C2.52653 15.4593 3.22984 20.0086 3.73309 21.423C4.23634 22.8354 5.02216 25.1507 6.35866 26.8402C7.54666 28.7467 9.12241 30.07 9.78034 30.5195C10.4383 30.969 12.2945 31.2674 13.5815 30.6493C14.6169 30.0526 16.4855 29.7096 17.2239 29.7348C17.9602 29.76 19.4122 30.0332 20.8993 30.7791C22.077 31.1608 23.1907 31.002 24.3065 30.5757C25.4223 30.1475 27.0373 28.5239 28.9224 25.2321C29.6381 23.7015 29.964 22.8741 29.898 22.7482Z"
                                        fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_83">
                                        <rect width="33" height="31" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></i></a>
                    <a href="#"><i className=""><svg className='svg' xmlns="http://www.w3.org/2000/svg" width="24" height="26"
                                viewBox="0 0 24 26" fill="none">
                                <g clip-path="url(#clip0_46_87)">
                                    <path d="M11.4062 12.3567H0V0H11.4062V12.3567Z" fill="#F1511B" />
                                    <path d="M24 12.3567H12.5939V0H24V12.3567Z" fill="#80CC28" />
                                    <path d="M11.4059 26.0002H0V13.6435H11.4059V26.0002Z" fill="#00ADEF" />
                                    <path d="M24 26.0002H12.5939V13.6435H24V26.0002Z" fill="#FBBC09" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_46_87">
                                        <rect width="24" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></i></a>
                </div>

            </form>
        </div>

       

<div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h2 className='hhhh'>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </body>
  </>
  )
}

export default Signin





