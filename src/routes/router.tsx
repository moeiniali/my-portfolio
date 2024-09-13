import { createHashRouter } from "react-router-dom";
import { Home } from "../exAllCo";



export const router = createHashRouter([
 {
  path: '/',
  element: <Home />,

 },
 // {
 //     path: '/otp',
 //     element: <OtpPage />,
 //     children: [
 //         { index: true, element: <TmOtp /> }
 //     ]
 // },
 // {
 //     path: '/IpLocation',
 //     element: <IpAddressPage />,
 //     children: [
 //         { index: true, element: <TmIpLocation /> }
 //     ]
 // }
])